'use client';

import { useEffect, useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { productsApi, categoriesApi } from '@/lib/api-client';
import { useCartStore } from '@/store/cart-store';
import type { Product, Category } from '@/types';
import { ShoppingCart, Plus, Minus, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import Image from 'next/image';

export function MenuClient() {
  const t = useTranslations('menu');
  const { addItem, items, updateQuantity } = useCartStore();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      // Load products and categories in parallel
      const [fetchedProducts, fetchedCategories] = await Promise.all([
        productsApi.getAll(),
        categoriesApi.getAll().catch(() => []), // Fallback to empty array if endpoint doesn't exist
      ]);
      setProducts(fetchedProducts);

      // Use fetched categories if available, otherwise extract from products
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
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.message || 
                          'Failed to load products';
      toast.error(errorMessage);
      console.error('Failed to load products:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter((p) => p.categoryId === selectedCategory);
  }, [products, selectedCategory]);

  const handleAddToCart = (product: Product) => {
    if (!product.isAvailable) {
      toast.error(t('outOfStock'));
      return;
    }
    addItem(product, 1);
    toast.success(`${product.name} added to cart`);
  };

  const handleQuantityChange = (product: Product, delta: number) => {
    const cartItem = items.find((item) => item.productId === product.id);
    if (cartItem) {
      updateQuantity(product.id, cartItem.quantity + delta);
    } else if (delta > 0) {
      addItem(product, 1);
    }
  };

  const getCartQuantity = (productId: string) => {
    const item = items.find((item) => item.productId === productId);
    return item?.quantity || 0;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-chocolate-600" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-chocolate-800 mb-8">{t('title')}</h1>

      {/* Categories Filter */}
      {categories.length > 0 && (
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 rtl:space-x-reverse pb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === null
                  ? 'bg-chocolate-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {t('allCategories')}
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-chocolate-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const cartQuantity = getCartQuantity(product.id);
            const isInCart = cartQuantity > 0;

            return (
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
                      <span className="text-white font-bold">{t('outOfStock')}</span>
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
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xl font-bold text-chocolate-600">
                      ${parseFloat(product.price).toFixed(2)}
                    </span>
                    {isInCart ? (
                      <div className="flex items-center space-x-2 rtl:space-x-reverse bg-chocolate-50 rounded-lg px-2 py-1">
                        <button
                          onClick={() => handleQuantityChange(product, -1)}
                          className="p-1 rounded hover:bg-chocolate-200 transition-colors"
                          disabled={!product.isAvailable}
                        >
                          <Minus className="w-4 h-4 text-chocolate-700" />
                        </button>
                        <span className="text-chocolate-700 font-semibold w-8 text-center">
                          {cartQuantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(product, 1)}
                          className="p-1 rounded hover:bg-chocolate-200 transition-colors"
                          disabled={!product.isAvailable}
                        >
                          <Plus className="w-4 h-4 text-chocolate-700" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.isAvailable}
                        className="flex items-center space-x-1 rtl:space-x-reverse bg-chocolate-600 text-white px-4 py-2 rounded-lg hover:bg-chocolate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span className="text-sm">{t('addToCart')}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

