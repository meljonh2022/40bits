<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Add 'name' column
            $table->string('category'); // Add 'category' column
            $table->decimal('price', 10, 2); // Add 'price' column with decimal type, 10 digits total, 2 decimal places
            $table->string('image')->nullable(); // Add 'image' column to store image path
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
