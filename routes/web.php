<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::inertia("/auth/login","login");
Route::inertia("/manage","manage/index")->name("manage.index");
Route::inertia("/manage/edit-page","manage/edit-page")->name("manage.edit-page");
