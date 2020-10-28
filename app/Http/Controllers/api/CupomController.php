<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cupom;

use function GuzzleHttp\Promise\all;

class CupomController extends Controller
{
    
    public function index()
    {
        return Cupom::all();
    }

    
    public function create()
    {
       
    }

    
    public function store(Request $request)
    {
        Cupom::create($request -> all());
    }

    
    public function show($id)
    {
        return Cupom::findOrFail($id);
    }


    
    public function update(Request $request, $id)
    {
        $cupom = Cupom::findOrFail($id);
        $cupom->update($request->all());
    }

    
    public function destroy($id)
    {
        $cupom = Cupom::findOrFail($id);
        $cupom->delete();
    }
}
