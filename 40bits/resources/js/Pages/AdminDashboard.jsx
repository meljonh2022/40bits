import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard({ auth }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });

        let slideIndex = 0;
        const slides = document.getElementsByClassName("slide");
        const showSlides = () => {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        };
        showSlides();
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Admin Dashboard" />

            <div className="flex pt-4 pl-4" style={{ height: '750px' }}>
                <aside 
                    className="bg-gray-300 dark:bg-gray-900 w-32 h-100 flex flex-col items-center py-6 rounded-full"
                >
                    <img 
                        src="/assets/logo.JPG" 
                        alt="Logo" 
                        className="w-30 h-30 mb-12 rounded-full border border-gray-300" 
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
                        <Link href="/addproduct" className="text-yellow-500">
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
                    <div className="flex justify-between items-center bg-white dark:bg-black">
                        <div className="flex-1 flex justify-end px-4 pr-32">
                            <input 
                                type="text" 
                                placeholder="Search..."  
                                className="w-64 border rounded-full py-2 focus:outline-none" 
                            />
                        </div>
                    </div>
                    <main className="p-4">
                        <div className="py-4">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 text-gray-900">
                                        <div className="relative w-full max-w-10xl mx-auto">
                                            <div className="slide" style={{ display: 'none' }}>
                                                <img src="/assets/header-home.png" alt="Slide 1" className="w-full rounded-xl  border border-gray-300" />
                                            </div>
                                            <div className="slide" style={{ display: 'none' }}>
                                                <img src="/assets/header-home-second.png" alt="Slide 2" className="w-full rounded-xl  border border-gray-300" />
                                            </div>
                                            <div className="slide" style={{ display: 'none' }}>
                                                <img src="/assets/header-home-third.png" alt="Slide 3" className="w-full rounded-xl border border-gray-300" />
                                            </div>
                                            <div className="slide" style={{ display: 'none' }}>
                                                <img src="/assets/header-home-fourth.png" alt="Slide 4" className="w-full rounded-xl  border border-gray-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-3xl ">
                                    <h1>Products</h1>
                                    <div className="grid grid-cols-3 gap-4 mt-6">
                                        {products.map(product => (
                                            <div key={product.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
                                                <img src={`/storage/${product.image}`} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                                                <h2 className="text-2xl font-semibold">{product.name}</h2>
                                                <p className="text-lg">{product.category}</p>
                                                <p className="text-xl font-bold">${product.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
