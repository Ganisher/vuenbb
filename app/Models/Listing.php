<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    use HasFactory;

    protected $casts = [
        'amenity_wifi' => 'boolean',
        'amenity_pets_allowed' => 'boolean',
        'amenity_tv' => 'boolean',
        'amenity_kitchen' => 'boolean',
        'amenity_breakfast' => 'boolean',
        'amenity_laptop' => 'boolean'
    ];

    public function toArray()
    {
        $array = parent::toArray();

        for ($i=1; $i<=4; $i++) {
            $array["image_$i"] = asset("images/$this->id/Image_$i.jpg");
        }

        return $array;
    }
}
