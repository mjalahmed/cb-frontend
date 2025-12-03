'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { productsApi, adminProductsApi, adminCategoriesApi, adminUploadApi } from '@/lib/api-client';
import { useAuthStore } from '@/store/auth-store';
import { useRouter } from '@/i18n/routing';
import type { Product, Category } from '@/types';
import {
  Loader2,
  Plus,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  X,
  Save,
} from 'lucide-react';
import toast from 'react-hot-toast';
import Image from 'next/image';

export function AdminProductsClient() {
  const t = useTranslations('admin');
  const { user, isAuthenticated } = useAuthStore();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    categoryId: '',
    isAvailable: true,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    if (!isAuthenticated() || user?.role !== 'ADMIN') {
      router.push('/menu');
      return;
    }
    loadProducts();
  }, [isAuthenticated, user, router]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const [fetchedProducts, fetchedCategories] = await Promise.all([
        productsApi.getAll(),
        adminCategoriesApi.getAll().catch(() => []), // Fallback to empty array if endpoint doesn't exist
      ]);
      setProducts(fetchedProducts);

      // Use fetched categories, or extract from products as fallback
      if (fetchedCategories.length > 0) {
        setCategories(fetchedCategories);
      } else {
        // Extract unique categories from products as fallback
        const uniqueCategories = Array.from(
          new Map(
            fetchedProducts
              .filter((p) => p.category)
              .map((p) => [p.category!.id, p.category!])
          ).values()
        );
        setCategories(uniqueCategories);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        'Failed to load products';
      toast.error(errorMessage);
      console.error('Failed to load products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.categoryId) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      await adminProductsApi.create({
        name: formData.name,
        description: formData.description || undefined,
        price: parseFloat(formData.price),
        imageUrl: formData.imageUrl || undefined,
        categoryId: formData.categoryId,
        isAvailable: formData.isAvailable,
      });
      toast.success('Product created successfully');
      setShowAddModal(false);
      resetForm();
      loadProducts();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.response?.data?.errors?.[0]?.msg ||
        'Failed to create product';
      toast.error(errorMessage);
    }
  };

  const handleUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    try {
      let imageUrl = formData.imageUrl;

      // Upload image if new file is selected
      if (imageFile) {
        setUploadingImage(true);
        try {
          imageUrl = await adminUploadApi.uploadImage(imageFile);
          toast.success('Image uploaded successfully');
        } catch (uploadError: any) {
          const errorMessage =
            uploadError.response?.data?.error ||
            uploadError.response?.data?.message ||
            'Failed to upload image';
          toast.error(errorMessage);
          setUploadingImage(false);
          return;
        } finally {
          setUploadingImage(false);
        }
      }

      await adminProductsApi.update(editingProduct.id, {
        name: formData.name,
        description: formData.description || undefined,
        price: formData.price ? parseFloat(formData.price) : undefined,
        imageUrl: imageUrl || undefined,
        categoryId: formData.categoryId || undefined,
        isAvailable: formData.isAvailable,
      });
      toast.success('Product updated successfully');
      setEditingProduct(null);
      resetForm();
      loadProducts();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        'Failed to update product';
      toast.error(errorMessage);
    }
  };

  const handleToggleAvailability = async (product: Product) => {
    try {
      await adminProductsApi.update(product.id, {
        isAvailable: !product.isAvailable,
      });
      toast.success(
        `Product ${!product.isAvailable ? 'enabled' : 'disabled'} successfully`
      );
      loadProducts();
    } catch (error: any) {
      toast.error('Failed to update product availability');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      imageUrl: '',
      categoryId: '',
      isAvailable: true,
    });
    setImageFile(null);
    setImagePreview(null);
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description || '',
      price: product.price,
      imageUrl: product.imageUrl || '',
      categoryId: product.categoryId,
      isAvailable: product.isAvailable,
    });
    setImageFile(null);
    setImagePreview(product.imageUrl || null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file');
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size must be less than 5MB');
        return;
      }
      setImageFile(file);
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-chocolate-600" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-chocolate-800">{t('products')}</h1>
        <button
          onClick={() => {
            resetForm();
            setShowAddModal(true);
          }}
          className="flex items-center space-x-2 rtl:space-x-reverse bg-chocolate-600 text-white px-4 py-2 rounded-lg hover:bg-chocolate-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>{t('addProduct')}</span>
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${
              !product.isAvailable ? 'opacity-60' : ''
            }`}
          >
            {/* Product Image */}
            <div className="relative h-48 w-full bg-gray-200">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  🍫
                </div>
              )}
              {!product.isAvailable && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-bold">{t('unavailable')}</span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {product.name}
              </h3>
              {product.description && (
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {product.description}
                </p>
              )}
              <p className="text-sm text-gray-500 mb-2">
                {product.category?.name || 'No category'}
              </p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold text-chocolate-600">
                  ${parseFloat(product.price).toFixed(2)}
                </span>
                <button
                  onClick={() => handleToggleAvailability(product)}
                  className={`p-2 rounded-lg transition-colors ${
                    product.isAvailable
                      ? 'text-green-600 hover:bg-green-50'
                      : 'text-gray-400 hover:bg-gray-100'
                  }`}
                  title={product.isAvailable ? 'Disable' : 'Enable'}
                >
                  {product.isAvailable ? (
                    <Eye className="w-5 h-5" />
                  ) : (
                    <EyeOff className="w-5 h-5" />
                  )}
                </button>
              </div>
              <button
                onClick={() => openEditModal(product)}
                className="w-full flex items-center justify-center space-x-2 rtl:space-x-reverse bg-chocolate-600 text-white px-4 py-2 rounded-lg hover:bg-chocolate-700 transition-colors"
              >
                <Edit2 className="w-4 h-4" />
                <span>{t('edit')}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {(showAddModal || editingProduct) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
              <h2 className="text-xl font-bold text-gray-900">
                {editingProduct ? t('editProduct') : t('addProduct')}
              </h2>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingProduct(null);
                  resetForm();
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form
              onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
              className="p-6 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('productName')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('description')}
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('price')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('image')}
                </label>
                <div className="space-y-3">
                  {/* Image Upload */}
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate-500 focus:border-transparent text-sm"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {t('imageUploadHint')} (Max 5MB)
                    </p>
                  </div>
                  
                  {/* OR Image URL */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">{t('or')}</span>
                    </div>
                  </div>
                  
                  <input
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, imageUrl: e.target.value })
                    }
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate-500 focus:border-transparent"
                  />
                  
                  {/* Image Preview */}
                  {(imagePreview || formData.imageUrl) && (
                    <div className="mt-2">
                      <img
                        src={imagePreview || formData.imageUrl}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg border border-gray-300"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('category')} <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.categoryId}
                  onChange={(e) =>
                    setFormData({ ...formData, categoryId: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate-500 focus:border-transparent"
                  required
                >
                  <option value="">{t('selectCategory')}</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {categories.length === 0 && (
                  <p className="text-xs text-gray-500 mt-1">
                    {t('noCategories')} - {t('createCategoryFirst')}
                  </p>
                )}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isAvailable"
                  checked={formData.isAvailable}
                  onChange={(e) =>
                    setFormData({ ...formData, isAvailable: e.target.checked })
                  }
                  className="w-4 h-4 text-chocolate-600 border-gray-300 rounded focus:ring-chocolate-500"
                />
                <label htmlFor="isAvailable" className="ml-2 text-sm text-gray-700">
                  {t('available')}
                </label>
              </div>

              <div className="flex space-x-3 rtl:space-x-reverse pt-4">
                <button
                  type="submit"
                  disabled={uploadingImage}
                  className="flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse bg-chocolate-600 text-white py-2 px-4 rounded-lg hover:bg-chocolate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploadingImage ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t('uploading')}</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      <span>{editingProduct ? t('update') : t('create')}</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingProduct(null);
                    resetForm();
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {t('cancel', { ns: 'common' })}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

