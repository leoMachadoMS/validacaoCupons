<?php

//use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('cupoms', 'api\CupomController');
Route::apiResource('compras', 'api\CompraController');


/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
