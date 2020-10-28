<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cupom extends Model
{
    protected $fillable = [
        'codigo', 'valido', 'quantidade', 'desconto', 'inicio', 'fim',
    ];
}
