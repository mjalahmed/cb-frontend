'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { adminCategoriesApi } from '@/lib/api-client';
import { useAuthStore } from '@/store/auth-store';
import { useRouter } from '@/i18n/routing';
import type { Category } from '@/types';
import {
  Loader2,
  Plus,
  Edit2,
  Trash2,
  X,
  Save,
  FolderTree,
} from 'lucide-react';
import toast from 'react-hot-toast';

export function AdminCategoriesClient() {
  const t = useTranslations('admin');
  const tCommon = useTranslations('common');
  const { user, isAuthenticated } = useAuthStore();
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [pagination, setPagination] = useState<{
    page: number;
    limit: number;
    totalCount: number;
    totalPages: number;
  } | null>(null);

  useEffect(() => {
    if (!isAuthenticated() || user?.role !== 'ADMIN') {
      router.push('/menu');
      return;
    }
    loadCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, user, router, page]);

  const loadCategories = async () => {
    try {
      setLoading(true);
      const fetchedData = await adminCategoriesApi.getAll(page, limit);
      setCategories(fetchedData.categories);
      if (fetchedData.pagination) {
        setPagination(fetchedData.pagination);
      }
    } catch (error: any) {
      toast.error('Failed to load categories');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error('Please enter a category name');
      return;
    }

    try {
      await adminCategoriesApi.create({
        name: formData.name,
        description: formData.description || undefined,
      });
      toast.success('Category created successfully');
      setShowAddModal(false);
      resetForm();
      // If we're on the last page, go to it to see the new category
      if (pagination && page < pagination.totalPages) {
        setPage(pagination.totalPages);
      } else {
        loadCategories();
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.response?.data?.errors?.[0]?.msg ||
        'Failed to create category';
      toast.error(errorMessage);
    }
  };

  const handleUpdateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCategory || !formData.name.trim()) {
      toast.error('Please enter a category name');
      return;
    }

    try {
      await adminCategoriesApi.update(editingCategory.id, {
        name: formData.name,
        description: formData.description || undefined,
      });
      toast.success('Category updated successfully');
      setEditingCategory(null);
      resetForm();
      loadCategories();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        'Failed to update category';
      toast.error(errorMessage);
    }
  };

  const handleDeleteCategory = async (categoryId: string) => {
    if (!confirm('Are you sure you want to delete this category? Products in this category will need to be reassigned.')) {
      return;
    }

    setDeletingId(categoryId);
    try {
      await adminCategoriesApi.delete(categoryId);
      toast.success('Category deleted successfully');
      // If we're on a page that no longer has items, go to previous page
      if (pagination && categories.length === 1 && page > 1) {
        setPage(page - 1);
      } else {
        loadCategories();
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        'Failed to delete category';
      toast.error(errorMessage);
    } finally {
      setDeletingId(null);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
    });
  };

  const openEditModal = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description || '',
    });
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
        <h1 className="text-3xl font-bold text-chocolate-800">{t('categories')}</h1>
        <button
          onClick={() => {
            resetForm();
            setShowAddModal(true);
          }}
          className="flex items-center space-x-2 rtl:space-x-reverse bg-chocolate-600 text-white px-4 py-2 rounded-lg hover:bg-chocolate-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>{t('addCategory')}</span>
        </button>
      </div>

      {/* Categories Grid */}
      {categories.length === 0 ? (
        <div className="text-center py-12">
          <FolderTree className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('noCategories')}</h2>
          <p className="text-gray-600 mb-6">{t('noCategoriesDescription')}</p>
          <button
            onClick={() => {
              resetForm();
              setShowAddModal(true);
            }}
            className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-chocolate-600 text-white px-6 py-3 rounded-lg hover:bg-chocolate-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>{t('addCategory')}</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {category.description}
                    </p>
                  )}
                </div>
                <FolderTree className="w-8 h-8 text-chocolate-600 flex-shrink-0 ml-2" />
              </div>

              <div className="flex space-x-2 rtl:space-x-reverse pt-4 border-t border-gray-200">
                <button
                  onClick={() => openEditModal(category)}
                  className="flex-1 flex items-center justify-center space-x-1 rtl:space-x-reverse bg-chocolate-600 text-white px-3 py-2 rounded-lg hover:bg-chocolate-700 transition-colors text-sm"
                >
                  <Edit2 className="w-4 h-4" />
                  <span>{t('edit')}</span>
                </button>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  disabled={deletingId === category.id}
                  className="flex items-center justify-center px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-50 text-sm"
                >
                  {deletingId === category.id ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="mt-8 flex justify-center items-center space-x-2 rtl:space-x-reverse">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-gray-700">
            Page {pagination.page} of {pagination.totalPages} ({pagination.totalCount} total)
          </span>
          <button
            onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
            disabled={page >= pagination.totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}

      {/* Add/Edit Modal */}
      {(showAddModal || editingCategory) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
              <h2 className="text-xl font-bold text-gray-900">
                {editingCategory ? t('editCategory') : t('addCategory')}
              </h2>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingCategory(null);
                  resetForm();
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form
              onSubmit={editingCategory ? handleUpdateCategory : handleAddCategory}
              className="p-6 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('categoryName')} <span className="text-red-500">*</span>
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

              <div className="flex space-x-3 rtl:space-x-reverse pt-4">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse bg-chocolate-600 text-white py-2 px-4 rounded-lg hover:bg-chocolate-700 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingCategory ? t('update') : t('create')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingCategory(null);
                    resetForm();
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {tCommon('cancel')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

