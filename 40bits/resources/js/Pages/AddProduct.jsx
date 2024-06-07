import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function AddProduct({ auth }) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Action');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('image', image);

        Inertia.post('/products', formData);
    };

    return (
        <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 flex items-center justify-center min-h-screen">
            <div className="flex items-center">
                <div className="p-10 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <h2 className="text-4xl md:text-6xl font-semibold text-black dark:text-white">Add Product</h2>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Product Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category:</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="RPG">RPG</option>
                                <option value="Strategy">Strategy</option>
                                <option value="Simulation">Simulation</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price:</label>
                            <input
                                type="number"
                                step="0.01"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Product Image:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}