import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    CubeIcon,
    MegaphoneIcon,
    UserGroupIcon,
    ChartBarIcon,
    ClockIcon,
    ArchiveBoxIcon,
    TruckIcon,
    CheckCircleIcon,
    TrashIcon,
} from '@heroicons/react/24/outline';

const Admin = () => {
    const [sales, setSales] = useState([]);

    const handleDelete = (id) => {
        alert(`Deleted sale with id: ${id}`);
    };

    const dashboardLinks = [
        { name: 'Products', path: 'products', icon: CubeIcon, color: 'from-blue-400 to-blue-600' },
        { name: 'Ads', path: 'ads', icon: MegaphoneIcon, color: 'from-green-400 to-green-600' },
        { name: 'Users', path: 'users', icon: UserGroupIcon, color: 'from-purple-400 to-purple-600' },
        { name: 'Sales', path: 'sales', icon: ChartBarIcon, color: 'from-yellow-400 to-yellow-500' },
    ];

    const orderStages = [
        { title: 'Orders on Queue', emoji: <ClockIcon className="w-6 h-6 inline" />, bg: 'bg-blue-50' },
        { title: 'Orders Packed', emoji: <ArchiveBoxIcon className="w-6 h-6 inline" />, bg: 'bg-green-50' },
        { title: 'Orders on Way', emoji: <TruckIcon className="w-6 h-6 inline" />, bg: 'bg-yellow-50' },
        { title: 'Orders Delivered', emoji: <CheckCircleIcon className="w-6 h-6 inline" />, bg: 'bg-purple-50' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8 space-y-8">
            <h1 className="text-3xl font-bold text-center text-gray-800">Admin Dashboard</h1>

            {/* Quick Links */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {dashboardLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={`flex flex-col justify-center items-center h-40 rounded-xl text-white font-semibold shadow-lg transform transition hover:scale-105 bg-gradient-to-br ${link.color}`}
                        >
                            <Icon className="w-10 h-10 mb-2" />
                            {link.name}
                        </NavLink>
                    );
                })}
            </section>

            {/* Orders Sections */}
            {orderStages.map((stage) => (
                <section
                    key={stage.title}
                    className={`bg-white shadow-md rounded-md p-6 space-y-4`}
                >
                    <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                        {stage.emoji} {stage.title}
                    </h2>

                    {sales.length > 0 ? (
                        <ul className="space-y-3">
                            {sales.map((sale) => (
                                <li
                                    key={sale._id}
                                    className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm hover:bg-gray-100 transition"
                                >
                                    <div>
                                        <strong className="text-gray-800">{sale.title}</strong>
                                        <p className="text-sm text-gray-500">{sale.link}</p>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(sale._id)}
                                        className="flex items-center gap-1 text-red-500 hover:text-red-700 font-medium transition"
                                    >
                                        <TrashIcon className="w-5 h-5" />
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No sales found</p>
                    )}
                </section>
            ))}
        </div>
    );
};

export default Admin;
