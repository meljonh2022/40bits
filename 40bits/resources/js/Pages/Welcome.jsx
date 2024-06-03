import { Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <div className="flex pt-7  pl-4" style={{ height: '750px' }}>


            <aside 
                className="bg-gray-300 dark:bg-gray-900 w-32 h-100 flex flex-col items-center py-6 rounded-full"
                // Adjust the background color using bg- classes
                // Adjust the width and height using w- and h- classes
                // Adjust the padding using py- classes
            >
                <img 
                    src="/assets/logo.JPG" 
                    alt="Logo" 
                    className="w-30  h-30 mb-12" 
                    // Adjust the logo size using w- and h- classes
                    // Adjust the margin using mb- class
                />
                <nav 
                    className="flex flex-col gap-10 mt-12"
                    // Adjust the spacing between links using gap- class
                    // Adjust the top margin using mt- class
                >
                    <Link href="/" className="text-yellow-500">
                        <svg 
                            className="w-10 h-10" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                            // Adjust the icon size using w- and h- classes
                            // Adjust the icon color using text- class
                        >
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10h4v4H8v-4zM8 6h4v2H8V6z" />
                        </svg>
                    </Link>
                    <Link href="/profile" className="text-yellow-500">
                        <svg 
                            className="w-10 h-10" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                            // Adjust the icon size using w- and h- classes
                            // Adjust the icon color using text- class
                        >
                            <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-2.21 0-6 1.12-6 3v1h12v-1c0-1.88-3.79-3-6-3z" />
                        </svg>
                    </Link>
                    <Link href="/logout" className="text-yellow-500">
                        <svg 
                            className="w-10 h-10" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                            // Adjust the icon size using w- and h- classes
                            // Adjust the icon color using text- class
                        >
                            <path d="M10 11V8H5V6h5V3l5 4-5 4z" />
                        </svg>
                    </Link>
                </nav>
            </aside>
            <div className="flex-1 flex flex-col">
                <header className="flex justify-end items-center p-6 bg-white dark:bg-black">
                    <input 
                        type="text" 
                        placeholder="Type something..."  
                        className="border rounded-full py-2 px-4 focus:outline-none" 
                    />
                    {!auth.user && (
                        <Link href="/home" className="ml-4 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
                        Sign Up
                    </Link>
                    
                    )}
                </header>
                <main className="p-10">
                    {/* Main content goes here */}
                </main>
            </div>
        </div>
    );
}
