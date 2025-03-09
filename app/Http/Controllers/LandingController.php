<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use App\Mail\ContactFormMail;

class LandingController extends Controller
{
    /**
     * Affiche la page d'accueil
     */
    public function index()
    {
        return Inertia::render('Landing');
    }

    /**
     * Traite le formulaire de contact
     */
    public function contact(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:2000',
        ]);

        try {
            // Vous pouvez décommenter cette partie après avoir créé la classe Mail
            // Mail::to('contact@electrimeterpro.com')->send(new ContactFormMail($validated));

            // Enregistrez le contact dans la base de données si nécessaire
            // Contact::create($validated);

            return response()->json([
                'success' => true,
                'message' => __('contact.success_message')
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => __('contact.error_message')
            ], 500);
        }
    }

    /**
     * Affiche la politique de confidentialité
     */
    public function privacy()
    {
        return Inertia::render('Privacy');
    }

    /**
     * Affiche les conditions d'utilisation
     */
    public function terms()
    {
        return Inertia::render('Terms');
    }

    /**
     * Affiche la politique de cookies
     */
    public function cookies()
    {
        return Inertia::render('Cookies');
    }
}