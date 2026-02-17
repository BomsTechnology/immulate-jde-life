// ── Identifiants autorisés ──────────────────────
  const USERS = {
    "admin": "1234",
    "alice": "motdepasse",
    "bob":   "azerty123"
  };
  // ───────────────────────────────────────────────

  function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const error    = document.getElementById('error');

    if (USERS[username] && USERS[username] === password) {
      // Stocker la session et rediriger
      sessionStorage.setItem('auth', 'true');
      sessionStorage.setItem('user', username);
      window.location.href = 'download.html';
    } else {
      error.classList.remove('show');
      void error.offsetWidth; // reset animation
      error.classList.add('show');
    }
  }

  // Connexion via touche Entrée
  document.addEventListener('keydown', e => { if (e.key === 'Enter') login(); });
