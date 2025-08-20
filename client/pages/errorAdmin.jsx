import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ErrorAdmin = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-[80dvh] flex flex-col justify-center items-center bg-gray-50 px-6 py-12 text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Admin Access Error</h1>
            <p className="text-gray-700 text-lg mb-6">
                You either don’t have permission to view this page or something went wrong.
            </p>

            <div className="space-y-4">
                <span className='flex gap-5'>
                    <Link
                        to="/admin/login"
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Re-authenticate as Admin
                    </Link>

                    <Link
                        to="/admin"
                        className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                        Go Back to Home
                    </Link>
                </span>

                <p className="text-sm text-gray-500 mt-6">
                    If you believe this is a mistake, please contact the system administrator <br /> or check your role permissions.
                </p>
            </div>
        </div>
    );
};

export default ErrorAdmin;
