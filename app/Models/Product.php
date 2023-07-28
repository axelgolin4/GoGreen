<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Detail;

class Product extends Model
{
    use HasFactory;

    protected $guarder = [];
    protected $fillable = ['name', 'price', 'unit', 'description', 'category_id', 'user_id'];

    public function Category()
    {
        return $this->belongsTo(Category::class);
    }

    public function Detail()
    {
        return $this->hasMany(Detail::class);
    }
}
