<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
use App\Models\Bill;

class Detail extends Model
{
    use HasFactory;

    protected $guarder = [];
    protected $fillable = ['cuantity', 'subtotal', 'products_id'];

    public function Product()
    {
        return $this->belongsTo(Product::class);
    }

    public function Bill()
    {
        return $this->belongsTo(Bill::class);
    }
}
