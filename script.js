function tampilkanUcapan() {
  const ucapan = document.getElementById("ucapan");
  const musik = document.getElementById("musik");

  // Tampilkan ucapan
  ucapan.classList.remove("hidden");
  setTimeout(() => ucapan.classList.add("show"), 50);

  // Pastikan musik diputar
  if (musik.paused) {
    musik.muted = false;
    musik.play().catch(() => {
      console.log("Autoplay gagal, musik akan diputar saat klik berikutnya.");
    });
  }

  // Efek confetti
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
}

// Event tombol
document.getElementById("btnUcapan").addEventListener("click", tampilkanUcapan);

// Autoplay dengan fade-in
window.addEventListener("load", () => {
  const musik = document.getElementById("musik");
  musik.volume = 0;
  musik.muted = false;

  musik.play().then(() => {
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        musik.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200);
  }).catch(() => {
    console.log("Autoplay diblokir, musik akan diputar saat tombol diklik.");
  });
});