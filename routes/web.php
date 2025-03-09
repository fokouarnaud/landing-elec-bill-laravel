<?php

use App\Http\Controllers\LandingController;
use App\Http\Controllers\LocaleController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route principale pour la landing page
Route::get('/', [LandingController::class, 'index'])->name('landing');

// Route pour changer de langue
Route::get('/locale/{locale}', [LocaleController::class, 'changeLocale'])->name('locale.change');

// Route pour traiter le formulaire de contact
Route::post('/contact', [LandingController::class, 'contact'])->name('contact.submit');

// Routes pour les pages légales
Route::get('/privacy', [LandingController::class, 'privacy'])->name('privacy');
Route::get('/terms', [LandingController::class, 'terms'])->name('terms');
Route::get('/cookies', [LandingController::class, 'cookies'])->name('cookies');