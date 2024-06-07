<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    // Existing store method
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|in:Action,Adventure,RPG,Strategy,Simulation',
            'price' => 'required|numeric',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Validate image upload
        ]);

        // Handle image upload
        $imagePath = $request->file('image')->store('product_images', 'public');

        // Create new product
        Product::create([
            'name' => $validatedData['name'],
            'category' => $validatedData['category'],
            'price' => $validatedData['price'],
            'image' => $imagePath, // Save image path
        ]);

        return redirect()->back()->with('success', 'Product added successfully!');
    }
}
