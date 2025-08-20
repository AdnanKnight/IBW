import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-[80dvh] flex flex-col justify-center items-center bg-gray-100 px-6 py-12 text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <div className="space-y-4">
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go Back to Home
        </Link>

        <p className="text-sm text-gray-500 mt-6">
          Try renavigating to the page. If the issue persists,<br /> please notify our team so we can look into it.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
