<?php

use Illuminate\Http\Request;

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

Route::prefix('grupos')->group(function () {

	Route::get('/', [
		'uses' => 'GruposController@index'
	]);

	Route::post('/', [
		'uses' => 'GruposController@store'
	]);

	Route::get('/{id}', [
		'uses' => 'GruposController@show'
	]);

	Route::put('/{id}', [
		'uses' => 'GruposController@update'
	]);

	Route::delete('/{id}', [
		'uses' => 'GruposController@destroy'
	]);
});

Route::prefix('produtos')->group(function () {

	Route::get('/', [
		'uses' => 'ProdutosController@index'
	]);

	Route::post('/', [
		'uses' => 'ProdutosController@store'
	]);

	Route::get('/{id}', [
		'uses' => 'ProdutosController@show'
	]);

	Route::put('/{id}', [
		'uses' => 'ProdutosController@update'
	]);

	Route::delete('/{id}', [
		'uses' => 'ProdutosController@destroy'
	]);
});