<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Compra;

class CompraController extends Controller
{
    
    public function index()
    {
        return Compra::all();
    }

    
    public function create()
    {
       
    }

    
    public function store(Request $request)
    {
        Compra::create($request -> all());
    }

    
    public function show($id)
    {
        return Compra::findOrFail($id);
    }


    
    public function update(Request $request, $id)
    {
        $cupom = Compra::findOrFail($id);
        $cupom->update($request->all());
    }

    
    public function destroy($id)
    {
        $cupom = Compra::findOrFail($id);
        $cupom->delete();
    }
}
