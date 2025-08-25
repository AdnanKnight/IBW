import React, { useState } from 'react';

const AuthPage = () => {
    const [activeTab, setActiveTab] = useState('login');
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', loginForm);
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        if (!signupForm.name || !signupForm.email || !signupForm.password) {
            alert("Please fill all required fields");
            return;
        }
        if (signupForm.password !== signupForm.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const res = await axios.post("http://localhost:5555/api/auth/signup", {
                name: signupForm.name,
                email: signupForm.email,
                password: signupForm.passwor
            })
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || "Failed to sign up");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10 relative overflow-hidden">
                {/* Floating circles for subtle effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-green-300 rounded-full opacity-30 animate-pulse"></div>

                {/* Tabs */}
                <div className="flex justify-center mb-8 border-b border-gray-200">
                    {['login', 'signup'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 font-semibold transition-colors ${activeTab === tab
                                ? 'border-b-4 border-blue-600 text-blue-600'
                                : 'text-gray-500 hover:text-blue-500'
                                }`}
                        >
                            {tab === 'login' ? 'Login' : 'Sign Up'}
                        </button>
                    ))}
                </div>

                {/* Form */}
                <div className="space-y-6">
                    {activeTab === 'login' ? (
                        <form onSubmit={handleLoginSubmit} className="space-y-5">
                            <Input label="Email" type="email" value={loginForm.email} onChange={e => setLoginForm({ ...loginForm, email: e.target.value })} placeholder="you@example.com" />
                            <Input label="Password" type="password" value={loginForm.password} onChange={e => setLoginForm({ ...loginForm, password: e.target.value })} placeholder="********" />
                            <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5">
                                Login
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleSignupSubmit} className="space-y-5">
                            <Input label="Full Name" type="text" value={signupForm.name} onChange={e => setSignupForm({ ...signupForm, name: e.target.value })} placeholder="John Doe" />
                            <Input label="Email" type="email" value={signupForm.email} onChange={e => setSignupForm({ ...signupForm, email: e.target.value })} placeholder="you@example.com" />
                            <Input label="Password" type="password" value={signupForm.password} onChange={e => setSignupForm({ ...signupForm, password: e.target.value })} placeholder="********" />
                            <Input label="Confirm Password" type="password" value={signupForm.confirmPassword} onChange={e => setSignupForm({ ...signupForm, confirmPassword: e.target.value })} placeholder="********" />
                            <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5">
                                Sign Up
                            </button>
                        </form>
                    )}
                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-500">
                    {activeTab === 'login' ? "Don't have an account? " : 'Already have an account? '}
                    <button
                        onClick={() => setActiveTab(activeTab === 'login' ? 'signup' : 'login')}
                        className="text-blue-600 font-medium hover:underline ml-1"
                    >
                        {activeTab === 'login' ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
};

// Reusable input component
const Input = ({ label, type, value, onChange, placeholder }) => (
    <div className="flex flex-col space-y-1">
        <label className="text-sm font-medium text-gray-600">{label}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            required
        />
    </div>
);

export default AuthPage;
