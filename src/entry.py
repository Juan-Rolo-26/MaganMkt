from js import Response

async def on_fetch(request, env):
    html_content = """
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MagnaMKT - App Cloudflare</title>
        <style>
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
            body {
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background-color: #0f172a;
                color: #f8fafc;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                padding: 1rem;
            }
            .card {
                background-color: #1e293b;
                border: 1px solid #334155;
                border-radius: 16px;
                padding: 2.5rem;
                max-width: 440px;
                width: 100%;
                text-align: center;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
            }
            .badge {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                background-color: rgba(16, 185, 129, 0.1);
                color: #34d399;
                font-size: 0.8rem;
                font-weight: 600;
                padding: 0.35rem 0.85rem;
                border-radius: 9999px;
                margin-bottom: 1.5rem;
                border: 1px solid rgba(16, 185, 129, 0.3);
            }
            .dot {
                width: 8px;
                height: 8px;
                background-color: #34d399;
                border-radius: 50%;
            }
            h1 {
                font-size: 2rem;
                font-weight: 700;
                color: #ffffff;
                margin-bottom: 0.75rem;
                letter-spacing: -0.025em;
            }
            p {
                color: #94a3b8;
                font-size: 0.95rem;
                line-height: 1.6;
                margin-bottom: 2rem;
            }
            .btn {
                background: linear-gradient(135deg, #6366f1, #4f46e5);
                color: white;
                border: none;
                padding: 0.85rem 1.75rem;
                font-size: 0.95rem;
                font-weight: 600;
                border-radius: 10px;
                cursor: pointer;
                transition: transform 0.1s ease, box-shadow 0.2s ease;
                box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
            }
            .btn:hover {
                box-shadow: 0 6px 20px rgba(79, 70, 229, 0.45);
            }
            .btn:active {
                transform: scale(0.97);
            }
            .counter-box {
                margin-top: 1.25rem;
                font-size: 0.9rem;
                color: #cbd5e1;
                background-color: #0f172a;
                padding: 0.5rem 1rem;
                border-radius: 8px;
                display: inline-block;
                border: 1px solid #1e293b;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <div class="badge">
                <span class="dot"></span>
                <span>ONLINE</span>
            </div>
            <h1>🚀 MagnaMKT App</h1>
            <p>Aplicación serverless ejecutándose al 100% en la red global de Cloudflare Workers.</p>
            
            <button class="btn" onclick="incrementar()">Interactuar</button>
            <br>
            <div class="counter-box">
                Clics realizados: <strong id="count" style="color: #6366f1;">0</strong>
            </div>
        </div>

        <script>
            let clics = 0;
            function incrementar() {
                clics++;
                document.getElementById('count').innerText = clics;
            }
        </script>
    </body>
    </html>
    """
    
    return Response.new(html_content, headers=[["Content-Type", "text/html; charset=utf-8"]])
