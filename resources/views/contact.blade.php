<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Nouveau message de contact</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            border: 1px solid #ddd;
        }
        h1 {
            color: #3b82f6;
            margin-top: 0;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
        }
        .info {
            background-color: #fff;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 4px;
            border-left: 4px solid #3b82f6;
        }
        .label {
            font-weight: bold;
            margin-bottom: 5px;
            color: #555;
        }
        .message {
            white-space: pre-wrap;
            background-color: #fff;
            padding: 15px;
            border-radius: 4px;
            border: 1px solid #eee;
        }
        .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #777;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Nouveau message depuis le formulaire de contact</h1>
        
        <div class="info">
            <div class="label">Nom:</div>
            <div>{{ $data['name'] }}</div>
        </div>
        
        <div class="info">
            <div class="label">Email:</div>
            <div>{{ $data['email'] }}</div>
        </div>
        
        <div class="label">Message:</div>
        <div class="message">{{ $data['message'] }}</div>
        
        <div class="footer">
            Ce message a été envoyé depuis le formulaire de contact sur ElectriMeter Pro.
            <br>
            {{ date('d/m/Y H:i') }}
        </div>
    </div>
</body>
</html>