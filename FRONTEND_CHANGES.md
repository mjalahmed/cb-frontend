### Upload Image (Admin)
```javascript
const uploadImage = async (file, token) => {
  const formData = new FormData();
  formData.append('image', file);
  
  const res = await fetch('http://localhost:3000/api/v1/admin/upload/image', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  });
  return res.json();
};
```

### Create Product with Image (Admin)
```javascript
const createProduct = async (productData, imageFile, token) => {
  // 1. Upload image first
  const uploadRes = await uploadImage(imageFile, token);
  const imageUrl = uploadRes.url;
  
  // 2. Create product with image URL
  const res = await fetch('http://localhost:3000/api/v1/admin/products', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...productData,
      imageUrl
    })
  });
  return res.json();
};
```

---

## 13. Environment Variables Needed (Backend)

The backend needs these Supabase environment variables:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
# OR
SUPABASE_ANON_KEY=your_anon_key
```

**Note:** Frontend doesn't need these - image uploads are handled by backend.

---

## 14. Supabase Setup Required

1. Create Supabase project
2. Create storage bucket named `product-images`
3. Set bucket to public (or configure RLS policies)
4. Add environment variables to backend `.env`

---

**Base URL:** `http://localhost:3000/api/v1`  
**All endpoints require:** `Content-Type: application/json` header (except image upload which uses `multipart/form-data`)

