<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Card;

class Deck extends Model
{
    protected $fillable = ['name'];

    /*For testing purposes, clean up later*/
    public function cardsViaCli($cardIDs)
    {
        if(mb_strlen($cardIDs) <= 0) {
            echo 'no card IDs supplied';
        }
       var_dump(explode(" ", $cardIDs));
    }
     public function cards()
     {
         return $this->hasMany(Card::class);
     }
}
