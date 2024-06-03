import { Link } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 flex items-center justify-center min-h-screen">
            <div className="flex items-center">
                <img src="/assets/logo.JPG" alt="40-Bit Logo" className="w-96 h-96" />
            </div>
            <div className="ml-8 md:ml-16 md:p-10 bg-gray-300 dark:bg-gray-800 rounded-lg text-center shadow-md border border-gray-900 dark:border-gray-900">
                <h2 className="text-4xl md:text-6xl font-semibold text-black dark:text-white">Welcome to 40-Bit</h2>
                <p className="mt-4 md:mt-8 text-lg md:text-xl text-black/70 dark:text-white/70">Sign Up to explore more.</p>
                <div className="pl-10 pr-10 mt-6 md:mt-4 flex justify-center md:justify-between space-x-12 md:space-x-10">
                    <Link
                        href={route('login')}
                        className="px-12 py-4 bg-gray-400 text-white font-semibold rounded-full text-2xl hover:bg-gray-500 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    >
                        Login
                    </Link>
                    <Link
                        href={route('register')}
                        className="px-12 py-4 bg-yellow-500 text-white font-semibold rounded-full text-2xl hover:bg-yellow-600 transition"
                    >
                        Register
                    </Link>
                </div>
                <p className="mt-8 md:mt-12 text-lg text-black/70 dark:text-white/70">Already have an account? <Link href={route('login')} className="text-blue-500 dark:text-blue-400 hover:underline">Sign In</Link></p>
            </div>
        </div>
    );
}
