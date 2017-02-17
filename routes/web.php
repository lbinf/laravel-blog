<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

//Route::get('/home', 'HomeController@index');

Route::get('/', function () {
    return redirect('/blog');
});

Route::get('blog', 'BlogController@index');
Route::get('blog/{slug}', 'BlogController@showPost');


// Admin area
Route::get('admin', function () {
    return redirect('/admin/post');
});


// Route::group(['namespace' => 'Admin', 'middleware' => 'auth'], function () {
// 	//Route::controller('post', 'PostController');
//     //Route::resource('post', 'PostController');
//     //Route::resource('admin/tag', 'TagController');
//     Route::get('/upload', 'UploadController@index');
// });

Route::group(['namespace' => 'Admin', 'middleware' => 'auth'], function () {

    Route::resource('admin/post', 'PostController', ['except' => 'show']);
    Route::resource('admin/tag', 'TagController',['except' => 'show']);

    Route::get('admin/upload', 'UploadController@index');
    Route::post('admin/upload/file', 'UploadController@uploadFile');
	Route::delete('admin/upload/file', 'UploadController@deleteFile');
	Route::post('admin/upload/folder', 'UploadController@createFolder');
	Route::delete('admin/upload/folder', 'UploadController@deleteFolder');

	//Auth::routes();
});


// Logging in and out
//Route::get('/auth/login', 'Auth\AuthController@getLogin');
//Route::post('/auth/login', 'Auth\AuthController@postLogin');
//Route::get('/auth/logout', 'Auth\AuthController@getLogout');

Auth::routes();
