<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Detail;

class Bill extends Model
{
    use HasFactory;

    protected $guarder = [];
    protected $fillable = ['date','total', 'user_id'];

    public function Detail()
    {
        return $this->hasMany(Detail::class);
    }
}
