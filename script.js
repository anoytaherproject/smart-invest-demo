function demo(nama) {
  alert(nama + " — fitur demo berhasil diklik!");
}

let putaran = 0;

function spinLucky() {
  putaran += 720;

  const wheel = document.querySelector(".wheel");

  if (wheel) {
    wheel.style.transform = "rotate(" + putaran + "deg)";
  }

  setTimeout(function () {
    alert("Lucky Spin selesai — ini hanya demo UI.");
  }, 1000);
}

function showPage(page) {
  const content = document.getElementById("pageContent");

  if (!content) {
    return;
  }

  if (page === "home") {
    content.innerHTML = "";
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  if (page === "investing") {
    content.innerHTML = `
      <div class="extra-card investing-page">
        <h2>📊 INVESTING</h2>
        <p class="sub">Pilih tampilan paket demo</p>

        <div class="plan">
          <div>
            <b>STARTER</b>
            <small>Contoh paket investasi</small>
          </div>
          <strong>DEMO</strong>
        </div>

        <div class="plan">
          <div>
            <b>STANDARD</b>
            <small>Contoh paket investasi</small>
          </div>
          <strong>DEMO</strong>
        </div>

        <div class="plan">
          <div>
            <b>PREMIUM</b>
            <small>Contoh paket investasi</small>
          </div>
          <strong>DEMO</strong>
        </div>

        <button class="demo-button" onclick="demo('Paket Demo')">
          LIHAT DETAIL
        </button>
      </div>
    `;

    content.scrollIntoView({
      behavior: "smooth"
    });
  }

  if (page === "team") {
  content.innerHTML = `
    <div class="extra-card team-page">

      <h2>👥 MY TEAM</h2>
      <p class="sub">Dashboard tim versi demo</p>

      <div class="team-summary">
        <div>
          <b>0</b>
          <small>Members</small>
        </div>

        <div>
          <b>$0</b>
          <small>Team Wins</small>
        </div>

        <div>
          <b>$0</b>
          <small>Bonus</small>
        </div>
      </div>

      <div class="demo-box">
        <b>👤 MEMBER LIST</b>
        <span>Belum ada anggota pada demo.</span>
      </div>

      <button class="demo-button" onclick="demo('Referral')">
        BAGIKAN REFERRAL
      </button>

    </div>
  `;

  content.scrollIntoView({
    behavior: "smooth"
  });
}

    `;

    content.scrollIntoView({
      behavior: "smooth"
    });
  }

  if (page === "menu") {
    content.innerHTML = `
      <div class="extra-card">
        <h2>☰ MENU</h2>

        <div class="demo-box">⚙️ Settings</div>
        <div class="demo-box">🔔 Notifications</div>
        <div class="demo-box">ℹ️ About</div>
      </div>
    `;

    content.scrollIntoView({
      behavior: "smooth"
    });
  }
}
