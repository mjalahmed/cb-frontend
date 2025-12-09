// Root-level not-found page - Server Component to avoid hooks during SSR
export const dynamic = 'force-dynamic';

export default function RootNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Page not found</p>
        <a
          href="/en/menu"
          className="inline-block bg-chocolate-600 text-white px-6 py-2 rounded-lg hover:bg-chocolate-700 transition-colors"
        >
          Go to Menu
        </a>
      </div>
    </div>
  );
}

