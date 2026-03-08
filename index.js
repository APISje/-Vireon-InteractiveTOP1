export default async function handler(req, res) {
  const userAgent = req.headers['user-agent'] || "";
  const GITHUB_RAW = "https://raw.githubusercontent.com/AFISAJADEH/owi/refs/heads/main/apalah%20aja.lua";

  if (userAgent.includes("Roblox")) {
    try {
      const response = await fetch(GITHUB_RAW);
      const data = await response.text();
      res.setHeader('Content-Type', 'text/plain');
      return res.status(200).send(data);
    } catch {
      return res.status(500).send("-- Error: Connection Failed");
    }
  }

  res.setHeader('Content-Type', 'text/html');
  return res.status(200).send(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vireon Interactive | Ultra Security</title>
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap" rel="stylesheet">
        <style>
            :root { 
                --primary: #f0c33c; 
                --error: #ff4d4d; 
                --bg: #030305; 
                --glass: rgba(10, 10, 15, 0.9); 
                --border: rgba(255, 255, 255, 0.1); 
                --success: #00ff88;
            }
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { background-color: var(--bg); color: #fff; font-family: 'Plus Jakarta Sans', sans-serif; height: 100vh; display: flex; justify-content: center; align-items: center; overflow: hidden; }
            
            #overlay { position: fixed; inset: 0; background: var(--bg); z-index: 1000; display: flex; flex-direction: column; justify-content: center; align-items: center; transition: 1s; }
            .warning-anim { color: var(--error); font-size: 80px; animation: pulse 1s infinite alternate; filter: drop-shadow(0 0 20px var(--error)); }
            @keyframes pulse { from { transform: scale(1); opacity: 1; } to { transform: scale(1.1); opacity: 0.7; } }
            
            .init-btn { margin-top: 30px; background: none; border: 2px solid var(--primary); color: var(--primary); padding: 18px 50px; border-radius: 50px; font-weight: 800; cursor: pointer; letter-spacing: 5px; transition: 0.5s; }
            .init-btn:hover { background: var(--primary); color: #000; box-shadow: 0 0 30px var(--primary); }

            .grid-bg { position: absolute; inset: 0; background-image: radial-gradient(var(--border) 1px, transparent 1px); background-size: 30px 30px; z-index: 1; }

            .container { position: relative; z-index: 10; width: 440px; background: var(--glass); backdrop-filter: blur(30px); border: 1px solid var(--border); border-radius: 40px; padding: 30px; text-align: center; transition: 1s cubic-bezier(0.19, 1, 0.22, 1); box-shadow: 0 40px 100px rgba(0,0,0,0.9); }
            .hidden { display: none !important; }
            .fade-out { transform: scale(0.5) rotate(-10deg); opacity: 0; }
            .fade-in { animation: slideUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
            @keyframes slideUp { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

            .logo-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
            .logo-box { display: flex; align-items: center; gap: 10px; }
            .logo-img { width: 40px; height: 40px; border-radius: 8px; border: 1px solid var(--primary); }
            .verify-badge { color: var(--primary); font-size: 20px; }

            .banner-box { width: 100%; height: 120px; border-radius: 25px; margin-bottom: 20px; overflow: hidden; position: relative; border: 1px solid var(--border); }
            .banner-img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }

            /* Security Badges Grid - 8 ANTI Features */
            .anti-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 25px; }
            .anti-item { background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 15px; padding: 12px; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
            .anti-item:hover { background: rgba(0, 255, 136, 0.05); border-color: var(--success); }
            .anti-item i { font-size: 20px; color: var(--success); }
            .anti-item span { font-size: 11px; font-weight: 800; color: #ccc; text-transform: uppercase; letter-spacing: 0.5px; }

            .btn-action { width: 100%; padding: 16px; border: none; border-radius: 20px; font-weight: 800; cursor: pointer; transition: 0.4s; display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 10px; text-decoration: none; font-size: 14px; }
            .btn-main { background: #fff; color: #000; }
            .btn-main:hover { transform: scale(1.02); box-shadow: 0 10px 30px rgba(255,255,255,0.2); }

            /* Download Card Styles */
            .badge-title { display: flex; align-items: center; justify-content: center; gap: 10px; color: var(--primary); margin-bottom: 15px; background: rgba(240, 195, 60, 0.1); padding: 10px; border-radius: 50px; border: 1px dashed var(--primary); }
            .meme-container { position: relative; width: 100%; border-radius: 25px; overflow: hidden; border: 2px solid var(--primary); box-shadow: 0 0 20px rgba(240, 195, 60, 0.3); }
        </style>
    </head>
    <body>
        <div id="overlay">
            <i class="ph-fill ph-shield-warning warning-anim"></i>
            <h1 style="letter-spacing:10px; font-weight:900; color:var(--error);">Browser Access Detected</h1>
            <button class="init-btn" onclick="bootstrap()">Browser Detected</button>
        </div>
        
        <div class="grid-bg"></div>

        <div class="container fade-out" id="mainCard">
            <div class="logo-header">
                <div class="logo-box">
                    <img src="/pip.png" class="logo-img">
                    <div style="text-align:left;"><h2 style="font-size:16px;">Vireon</h2><span style="font-size:9px;color:var(--primary);letter-spacing:2px;">INTERACTIVE</span></div>
                </div>
                <i class="ph-fill ph-seal-check verify-badge"></i>
            </div>
            
            <div class="banner-box"><img src="/banner.png" class="banner-img"></div>
            
            <div class="anti-grid">
                <div class="anti-item"><i class="ph-fill ph-detective"></i><span>Anti-Theft</span></div>
                <div class="anti-item"><i class="ph-fill ph-bug-beetle"></i><span>Anti-Bug</span></div>
                <div class="anti-item"><i class="ph-fill ph-lock-key"></i><span>Anti-Decrypt</span></div>
                <div class="anti-item"><i class="ph-fill ph-eye-closed"></i><span>Anti-Skid</span></div>
                <div class="anti-item"><i class="ph-fill ph-lightning"></i><span>Anti-Lag</span></div>
                <div class="anti-item"><i class="ph-fill ph-globe-hemisphere-west"></i><span>Anti-DDoS</span></div>
                <div class="anti-item"><i class="ph-fill ph-database"></i><span>Anti-Dump</span></div>
                <div class="anti-item"><i class="ph-fill ph-shield-checkered"></i><span>Anti-Bypass</span></div>
            </div>
            
            <button class="btn-action btn-main" onclick="copyFunc()"><i class="ph-fill ph-copy"></i> GET SCRIPT LUA</button>
            <button class="btn-action" style="background:rgba(255,255,255,0.05);color:#fff;border:1px solid var(--border);" onclick="goToDownload()"><i class="ph-fill ph-file-arrow-down"></i> DOWNLOAD FILE</button>
        </div>

        <div class="container hidden" id="downloadCard">
            <div class="badge-title">
                <i class="ph-fill ph-shield-star" style="font-size:24px;"></i>
                <h2 style="font-size:14px; letter-spacing:2px; font-weight:800;">APIS</h2>
                <i class="ph-fill ph-image" style="font-size:24px;"></i>
            </div>
            
            <div class="meme-container">
                <img src="/MEME.png" style="width:100%; display:block;">
            </div>

            <p style="margin:20px 0; font-size:12px; color:#888;">System: Secured by Vireon Neural Engine</p>
            <button class="btn-action btn-main" onclick="location.reload()"><i class="ph-fill ph-house"></i> RETURN TO SECURITY</button>
        </div>

        <audio id="bgMusic" loop><source src="apip.mp3" type="audio/mpeg"></audio>
        <audio id="dlMusic" loop><source src="lagu2.mp3" type="audio/mpeg"></audio>

        <script>
            function bootstrap() {
                document.getElementById('bgMusic').play();
                document.getElementById('overlay').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('overlay').style.display = 'none';
                    document.getElementById('mainCard').classList.remove('fade-out');
                    document.getElementById('mainCard').classList.add('fade-in');
                }, 800);
            }

            function goToDownload() {
                document.getElementById('bgMusic').pause();
                document.getElementById('dlMusic').play();
                const main = document.getElementById('mainCard');
                const dl = document.getElementById('downloadCard');
                main.classList.add('fade-out');
                setTimeout(() => {
                    main.classList.add('hidden');
                    dl.classList.remove('hidden');
                    dl.classList.add('fade-in');
                }, 500);
            }

            function copyFunc() {
                navigator.clipboard.writeText("MAU NYURI SCRIPT PINTER DIKIT DEK");
                alert("Encrypted Script Copied!");
            }
        </script>
    </body>
    </html>
  `);
}
