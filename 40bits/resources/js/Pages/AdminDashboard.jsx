import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function AdminDashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={(
                <div className="flex justify-between items-center  bg-white dark:bg-black">
                    <div className="shrink-0">
                        <img 
                            src="/assets/logo.JPG" 
                            alt="Logo" 
                            className="h-24 w-auto" // Adjust the logo size as needed
                        />
                    </div>
                    <div className="flex-1 flex justify-center px-4">
                        <input 
                            type="text" 
                            placeholder="Search..."  
                            className="w-1/2 border rounded-full py-2  focus:outline-none" 
                        />
                    </div>
                </div>
            )}
        >
            <Head title="Admin Dashboard" />

            <div className="flex pt-7 pl-4" style={{ height: '750px' }}>
                <aside 
                    className="bg-gray-300 dark:bg-gray-900 w-32 h-100 flex flex-col items-center py-6 rounded-full"
                >
                    <img 
                        src="/assets/logo.JPG" 
                        alt="Logo" 
                        className="w-30 h-30 mb-12" 
                    />
                    <nav 
                        className="flex flex-col gap-10 mt-12"
                    >
                        <Link href="/" className="text-yellow-500">
                            <svg 
                                className="w-10 h-10" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10h4v4H8v-4zM8 6h4v2H8V6z" />
                            </svg>
                        </Link>
                        <Link href="/profile" className="text-yellow-500">
                            <svg 
                                className="w-10 h-10" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-2.21 0-6 1.12-6 3v1h12v-1c0-1.88-3.79-3-6-3z" />
                            </svg>
                        </Link>
                        <Link href="/logout" className="text-yellow-500">
                            <svg 
                                className="w-10 h-10" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 11V8H5V6h5V3l5 4-5 4z" />
                            </svg>
                        </Link>
                    </nav>
                </aside>

                <div className="flex-1 flex flex-col">
                    <main className="p-10">
                        <div className="py-12">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 text-gray-900">You're logged in!</div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
