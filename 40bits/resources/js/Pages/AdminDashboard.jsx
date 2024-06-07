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
                                viewBox="0 0 576 512"
                            >
                                {/* Your new SVG code */}
                                <path d="M248 0H208c-26.5 0-48 21.5-48 48V160c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H328V80c0 8.8-7.2 16-16 16H264c-8.8 0-16-7.2-16-16V0zM64 256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H184v80c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V256H64zM352 512H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H472v80c0 8.8-7.2 16-16 16H408c-8.8 0-16-7.2-16-16V256H352c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2V464c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z"/>
                            </svg>
                        </Link>

                        <Link href="/editproducts" className="text-yellow-500">
                            <svg 
                                className="w-10 h-10" 
                                fill="currentColor" 
                                viewBox="0 0 512 512"
                            >
                                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                            </svg>
                        </Link>

                        <Link href="/userlist" className="text-yellow-500">
                            <svg 
                                className="w-10 h-10" 
                                fill="currentColor" 
                                viewBox="0 0 512 512"
                            >
                                <path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h56 64 16c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64H576V256H384V224H320v48c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H243.1 177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32z"/>
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
