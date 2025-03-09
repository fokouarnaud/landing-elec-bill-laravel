<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'ElectriMeter Pro') }}</title>
        
        <!-- Favicon -->
        <link rel="icon" type="image/png" href="/images/favicon.png">
        
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        
        <!-- Open Graph Meta Tags -->
        <meta property="og:title" content="{{ config('app.name', 'ElectriMeter Pro') }}">
        <meta property="og:description" content="Application professionnelle pour la gestion des compteurs électriques">
        <meta property="og:image" content="{{ url('/images/og-image.jpg') }}">
        <meta property="og:url" content="{{ url('/') }}">
        <meta name="twitter:card" content="summary_large_image">
        
        <!-- Scripts and Styles -->
        @viteReactRefresh
        @vite(['resources/js/app.tsx', 'resources/css/app.css'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
        
        <!-- Preload des images principales -->
        <link rel="preload" as="image" href="/images/app-mockup.png">
        <link rel="preload" as="image" href="/images/app-screenshot.png">
        
        <!-- Script pour détecter le mode sombre préféré -->
        <script>
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        </script>
    </body>
</html>