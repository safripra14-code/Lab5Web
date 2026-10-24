//Latihan 1
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World")

//latihan 2
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
alert("Halo, " + namaPengguna + "!");
document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
alert("Nama belum diisi.");
}

//Latihan 3
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}
operasiDasar(9, 4);

//latihan 4
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (inputNilai === null || inputNilai.trim() === "" ||
Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
alert("Lulus");
} else {
alert("Belum lulus");
}

//Latihan 5 
const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
case "1": alert("Bilangan satu"); break;
case "2": alert("Bilangan dua"); break;
case "3": alert("Bilangan tiga"); break;
case "4": alert("Bilangan empat"); break;
case "5": alert("Bilangan lima"); break;
default: alert("Pilihan tidak tersedia");
}

//Latihan 6 
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");
    if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
    } else {
    hasil.textContent = "Bilangan ganjil";
    }
    }

//Latihan 7 
function ubahWarnaLatar(warna) {
document.body.style.backgroundColor = warna;
}

//Latihan 8

const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
item.addEventListener("change", hitungTotal);
});
function hitungTotal() {
let total = 0;
daftarMenu.forEach((item) => {
if (item.checked) total += Number(item.value);
});
document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

//Mini Project 
function hitungNilaiAkhir(tugas, uts, uas) {
return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}
function tentukanPredikat(nilai) {
if (nilai >= 85) return "A";
if (nilai >= 75) return "B";
if (nilai >= 60) return "C";
if (nilai >= 50) return "D";
return "E";
}
const tugas = 85;
const uts = 78;
const uas = 88;
const akhir = hitungNilaiAkhir(tugas, uts, uas);
console.log("Nilai akhir:", akhir.toFixed(2));
console.log("Predikat:", tentukanPredikat(akhir));
console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");

//Ekspresi Mandiri
//1.
let a = parseInt(prompt("Masukkan Angka 1"))
let b = parseInt(prompt("Masukkan Angka 2"))
function operasiDasar(a, b) {
console.log("Penjumlahan:", a + b);
console.log("Pengurangan:", a - b);
console.log("Perkalian:", a * b);
console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
console.log("Modulus:", a % b);
}
operasiDasar(a, b);

//2.

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

//3.
        function cekGenap(angka) {
            return angka % 2 === 0;
        }

        function cekInput() {
            const input = document.getElementById("angka").value;
            const hasil = document.getElementById("hasil");

            if (input.trim() === "") {
                hasil.textContent = "Kolom angka tidak boleh kosong!";
                return;
            }

            const angka = Number(input);

            if (cekGenap(angka)) {
                hasil.textContent = angka + " adalah bilangan genap(True).";
            } else {
                hasil.textContent = angka + " adalah bilangan ganjil(False).";
            }
        }
//4.
const daftarMenu2 = document.querySelectorAll(".menu2");

daftarMenu2.forEach((item2) => {
    item2.addEventListener("change", hitungTotal2);
});

function hitungTotal2() {
    let total2 = 0;

    daftarMenu2.forEach((item2) => {
        if (item2.checked) {
            total2 += Number(item2.value);
        }
    });

    document.getElementById("total2").textContent =
        total2.toLocaleString("id-ID");
}
//5.
        function ubahTampilan() {
            const deskripsi = document.getElementById("deskripsi");
            const tombol = document.getElementById("tombol");

            if (deskripsi.style.display === "none") {
                deskripsi.style.display = "block";
                tombol.textContent = "Sembunyikan Deskripsi";
            } else {
                deskripsi.style.display = "none";
                tombol.textContent = "Lihat Deskripsi";
            }
        }
