import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react'; 

function DeleteProducts() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState({ name: '', category: '', price: '', image: null });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('/products');
    const data = await response.json();
    setProducts(data);
  };

  const handleDelete = (id) => {
    Inertia.delete(`/products/${id}`, {
      onSuccess: () => {
        setProducts(products.filter(product => product.id !== id));
        alert('Successfully Deleted');
      }
    });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setForm({
      name: product.name,
      category: product.category,
      price: product.price,
      image: null,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('category', form.category);
    formData.append('price', form.price);
    if (form.image) {
      formData.append('image', form.image);
    }

    Inertia.post(`/products/${editingProduct.id}`, formData, {
      onSuccess: () => {
        fetchProducts();
        setEditingProduct(null);
        alert('Successfully Updated');
      }
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    
    <div className="text-center text-xl">
       <Link 
        href={route('admin.dashboard')} 
        activeClassName="hidden" 
        className="absolute top-2 pl-2 pt-2 left-3 px-4 py-2 bg-yellow-500 hover:bg-blue-500 rounded-lg"
      >
        <span className="absolute inset-0"></span> {/* This is for the rectangle */}
        <span className="relative z-10">Dashboard</span>
      </Link>

      
      <h1 className="text-3xl pt-3 font-bold mb-4">List products</h1>
      {editingProduct ? (
        <form onSubmit={handleUpdate} className="mb-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Strategy">Strategy</option>
            <option value="Simulation">Simulation</option>
          </select>
          <input
            type="number"
            step="0.01"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
          <button type="submit">Update Product</button>
        </form>
      ) : (
        <div className="grid grid-cols-6 padx-2 gap-6 mt-6">
          {products.map(product => (
            <div key={product.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md flex flex-col">
            <img src={`/storage/${product.image}`} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-lg">{product.category}</p>
            <p className="text-xl font-bold">${product.price}</p>
            <div className="flex mt-2">
              <button
                onClick={() => handleDelete(product.id)}
                className="px-4   py-2 bg-red-500 text-white rounded-lg mr-10"
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(product)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Edit
              </button>
            </div>
          </div>

          ))}
        </div>
      )}
    </div>
  );
}

export default DeleteProducts;
