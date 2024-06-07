import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard({ auth }) {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [buttonColor, setButtonColor] = useState('green'); 

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

    const handleSearch = () => {

        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return filteredProducts;
    };

    const handleButtonClick = () => {
     
        setButtonColor('blue');
        
   
        setTimeout(() => {
            setButtonColor('green');
        }, 500);
   
    };


    return (
        <AuthenticatedLayout user={auth.user}>
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
                        <Link href="/dashboard" className="text-yellow-500">
                            <svg 
                                className="w-10 h-10" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10h4v4H8v-4zM8 6h4v2H8V6z" />
                            </svg>
                        </Link>
                        <Link href="/addcart" className="text-yellow-500">
                            <svg 
                                className="w-10 h-10" 
                                fill="currentColor" 
                                viewBox="0 0 576 512"
                            >
              
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                            </svg>
                        </Link>

                        <Link href="/profile" className="text-yellow-500">
                            <svg 
                                className="w-10 h-10" 
                                fill="currentColor" 
                                viewBox="0 0 512 512"
                            >
                                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
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
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="w-64 border rounded-full py-2 px-4 focus:outline-none" 
                            />
                            <button 
                                onClick={handleButtonClick} 
                                className={`ml-2 px-4 py-2 bg-${buttonColor}-500 text-white rounded-lg`}
                            >
                                Search
                            </button>
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
                                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                                    <div className="grid grid-cols-3 gap-4 mt-6">
                                        {handleSearch().map(product => (
                                            <div key={product.id} className="p-4 text-center bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
                                                <img src={`/storage/${product.image}`} alt={product.name} className="w-full h-55 object-cover rounded-lg mb-4" />
                                                <h2 className="text-2xl font-semibold">{product.name}</h2>
                                                <p className="text-lg">{product.category}</p>
                                                <p className="text-xl font-bold">${product.price}</p>
                                                <button onClick={() => handleBuy(product.id)} className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg">Buy</button>
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
