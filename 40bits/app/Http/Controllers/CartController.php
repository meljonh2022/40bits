<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AddCart;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);

        $cart = new AddCart();
        $cart->user_id = Auth::id();
        $cart->product_id = $request->product_id;
        $cart->save();

        return response()->json(['message' => 'Product added to cart successfully']);
    }
}
