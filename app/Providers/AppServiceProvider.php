<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Définir la locale de l'application en fonction de la session
        $this->setLocale();
    }

    /**
     * Définir la locale de l'application
     */
    protected function setLocale(): void
    {
        // Vérifier si une locale est définie en session
        if (Session::has('locale')) {
            $locale = Session::get('locale');
            App::setLocale($locale);
        } else {
            // Détecter la langue du navigateur
            $locale = substr(request()->server('HTTP_ACCEPT_LANGUAGE') ?? 'en', 0, 2);
            
            // Vérifier si la langue détectée est supportée
            $supportedLocales = ['en', 'fr'];
            if (!in_array($locale, $supportedLocales)) {
                $locale = 'en';
            }
            
            App::setLocale($locale);
            Session::put('locale', $locale);
        }
    }
}