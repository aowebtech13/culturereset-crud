<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::resource('/user', UserController::class)->except('update'); //we will create seperate route for update , generatee


