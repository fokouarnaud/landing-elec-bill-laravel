<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class LocaleController extends Controller
{
    /**
     * Permet de changer la langue de l'application
     *
     * @param string $locale Code de la langue (fr, en, etc.)
     * @return \Illuminate\Http\RedirectResponse
     */
    public function changeLocale($locale)
    {
        // Vérifier si la langue demandée est supportée
        $supportedLocales = ['en', 'fr'];
        
        if (!in_array($locale, $supportedLocales)) {
            $locale = config('app.fallback_locale', 'en');
        }
        
        // Enregistrer la locale dans la session
        Session::put('locale', $locale);
        
        // Définir la locale pour l'application
        App::setLocale($locale);
        
        // Rediriger vers la page précédente
        return redirect()->back();
    }
}