// ===================================
// 1. JAM DAN TANGGAL
// ===================================

function tampilkanWaktu() {
    const sekarang = new Date();

    // Menampilkan jam
    const jam = document.getElementById("jam");

    if (jam) {
        jam.textContent = sekarang.toLocaleTimeString("id-ID");
    }

    // Menampilkan tanggal
    const tanggal = document.getElementById("tanggal");

    if (tanggal) {
        tanggal.textContent = sekarang.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }
}

tampilkanWaktu();
setInterval(tampilkanWaktu, 1000);


function ngumpet() {
    document.getElementById("posesatu").src = "image/uts/kucing1.png";
}
function muncul() {
    document.getElementById("posesatu").src = "image/uts/kucing2.png";
}