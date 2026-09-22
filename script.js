function demo(nama) {
  alert(nama + " — fitur demo berhasil diklik!");
}

function showPage(page) {
  const content = document.getElementById("pageContent");

  if (page === "home") {
    content.innerHTML = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (page === "investing") {
    content.innerHTML = `
      <div class="extra-card">
        <h2>📊 INVESTING</h2>
        <p>Halaman investasi versi demo.</p>
        <div class="demo-box">
          <b>DEMO PLAN</b>
          <span>Informasi paket hanya untuk tampilan.</span>
        </div>
      </div>
    `;
    content.scrollIntoView({ behavior: "smooth" });
  }

  if (page === "team") {
    content.innerHTML = `
      <div class="extra-card">
        <h2>👥 MY TEAM</h2>
        <p>Daftar tim versi demo.</p>
        <div class="demo-box">
          <b>MY TEAM</b>
          <span>0 Members</span>
        </div>
      </div>
    `;
    content.scrollIntoView({ behavior: "smooth" });
  }

  if (page === "menu") {
    content.innerHTML = `
      <div class="extra-card">
        <h2>☰ MENU</h2>
        <p>Menu aplikasi demo.</p>
        <div class="demo-box">
          ⚙️ Settings
        </div>
        <div class="demo-box">
          🔔 Notifications
        </div>
        <div class="demo-box">
          ℹ️ About
        </div>
      </div>
    `;
    content.scrollIntoView({ behavior: "smooth" });
  }
}
