# Public Directory

This directory contains static assets that are served by Next.js.

## Structure

- `/images/` - Store images, logos, and other graphics here
- Files in this directory are accessible from the root URL
- Example: `public/images/logo.png` → accessible at `/images/logo.png`

## Usage

To use an image in your components:

```tsx
import Image from 'next/image';

<Image src="/images/logo.png" alt="Logo" width={200} height={50} />
```

Or with a regular img tag:

```tsx
<img src="/images/logo.png" alt="Logo" />
```
