import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ErrorProduct = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-[80dvh] flex flex-col justify-center items-center bg-white px-6 py-12 text-center">
            <h1 className="text-5xl font-bold text-red-600 mb-4">Product Not Found</h1>
            <p className="text-gray-700 text-lg mb-6">
                The product you're trying to view doesn't exist or may have been removed.
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

export default ErrorProduct;
