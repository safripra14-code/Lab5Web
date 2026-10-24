# Laporan Praktikum 5 — JavaScript Dasar & Manipulasi HTML

Praktikum mata kuliah **Pemrograman Web** (Pertemuan 6) — Program Studi Teknik Informatika, Universitas Pelita Bangsa.

| | |
| --- | --- |
| **Nama** | Syafri Prayogo |
| **NIM** | 312510500 |
| **Kelas** | TI.25.C.3 |
| **Program Studi** | Teknik Informatika |
| **Dosen Pengampu** | Agung Nugroho |
| **Tahun Akademik** | 2025/2026 |

---

## 1. Tujuan Praktikum

- Memahami sintaks dasar JavaScript dan cara menyisipkan JavaScript pada HTML.
- Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
- Menampilkan informasi melalui console, alert, prompt, dan elemen HTML.
- Memanipulasi konten serta gaya elemen HTML menggunakan JavaScript.
- Membuat interaksi sederhana pada form dan melakukan validasi input.
- Mendokumentasikan pekerjaan praktikum beserta hasil pengujiannya.

## 2. Dasar Teori

**JavaScript** adalah bahasa pemrograman untuk mengatur perilaku halaman web (nama standarnya ECMAScript). JavaScript dapat mengubah konten HTML, nilai atribut, gaya CSS, serta menampilkan atau menyembunyikan elemen.

Penyisipan kode lewat `<script>` atau berkas eksternal `.js`; output lewat `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`. Variabel memakai `const` (tetap) dan `let` (berubah); tipe `string`, `number`, `boolean`, `undefined`, `null`. Operator aritmetika (`+ - * / % **`) dan perbandingan (`=== !== > < >= <=`). Function memakai parameter & return; percabangan `if-else` dan `switch`; perulangan `for` dan `while`. DOM memilih & mengubah elemen (mis. `document.getElementById()`, event `onclick`/`addEventListener`).

## 3. Cara Menjalankan

1. Buka folder `lab5_javascript`.
2. Jalankan `index.html` di browser.
3. Tiap latihan punya tombol/form, hasilnya tampil langsung di halaman.
4. Buka **Inspect → Console** untuk melihat `console.log` (juga dicerminkan pada panel "Console (simulasi)" di halaman).

---

## 4. Langkah Kerja dan Hasil

### Latihan 1 — Menampilkan Output

Mengubah konten elemen yang sudah dimuat (`textContent`) dan menulis ke Console (`console.log`).

```javascript
document.getElementById("pesan").textContent = "Halo, JavaScript!";
document.getElementById("out1").textContent = "Hello World ditampilkan di halaman.";
console.log("Hello World");
```

![Gambar L1 — Teks pada halaman berubah dan "Hello World" tampil di Console](screenshot`2/Gambar.png)

### Latihan 2 — Alert dan Prompt (Sapaan)

Meminta nama lalu menyapa, dengan validasi bila kosong. Versi `prompt()`/`alert()` sesuai modul tersedia (dikomentari) di `script.js`.

```javascript
const namaPengguna = document.getElementById("namaInput").value;
if (namaPengguna && namaPengguna.trim() !== "") {
  out.textContent = "Selamat datang, " + namaPengguna + ".";
} else {
  out.textContent = "Nama belum diisi.";
}
```

![Gambar L2 — Masukan nama "Safri" menghasilkan sapaan](screenshot2/Gambar1.png)
![Gambar L2 — Masukan nama "Safri" menghasilkan sapaan](screenshot2/Gambar2.png)

### Latihan 3 — Function dan Operasi Aritmetika

Function `operasiDasar(a, b)` menampilkan penjumlahan, pengurangan, perkalian, pembagian (dengan penjagaan bagi nol), dan modulus.

```javascript
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}
operasiDasar(9, 4);
```

![Gambar L3 — a=9, b=4: 13, 5, 36, 2.25, dan sisa bagi 1](screenshot2/Gambar3.png)

### Latihan 4 — Seleksi Kondisi if–else

Nilai minimal 60 dinyatakan lulus. Masukan dikonversi `Number()` dan divalidasi pada rentang 0–100.

```javascript
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (
  inputNilai === null ||
  inputNilai.trim() === "" ||
  Number.isNaN(nilaiMahasiswa) ||
  nilaiMahasiswa < 0 ||
  nilaiMahasiswa > 100
) {
  alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  alert("Lulus");
} else {
  alert("Belum lulus");
}
```

![Gambar L4 — Nilai 76 → "Lulus"](screenshot2/Gambar4.png)
![Gambar L4 — Nilai 76 → "Lulus"](screenshot2/Gambar5.png)

### Latihan 5 — Seleksi Kondisi switch

Masukkan angka 1–5, tampilkan nama bilangan dengan `switch` (nilai input berupa string).

```javascript
switch (inputPilihan) {
  case "1": teks = "Bilangan satu"; break;
  case "2": teks = "Bilangan dua"; break;
  case "3": teks = "Bilangan tiga"; break;
  case "4": teks = "Bilangan empat"; break;
  case "5": teks = "Bilangan lima"; break;
  default:  teks = "Pilihan tidak tersedia";
}
```

![Gambar L5 — Angka 3 → "Bilangan tiga"](screenshot2/Gambar6.png)
![Gambar L5 — Angka 3 → "Bilangan tiga"](screenshot2/Gambar7.png)

### Latihan 6 — Form Bilangan Genap / Ganjil

Memeriksa bilangan bulat genap atau ganjil, dengan validasi `Number.isInteger`.

```html
<label for="bilangan">Masukkan bilangan bulat:</label>
<input type="number" id="bilangan" step="1">
<button type="button" onclick="cekBilangan()">Periksa</button>
<p id="hasilBilangan"></p>
```

```javascript
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
```

![Gambar L6 — Angka 8 → "Bilangan genap"](screenshot2/Gambar7.png)

### Latihan 7 — Mengubah Warna Latar

Satu function dengan parameter (`ubahWarnaLatar(warna)`) dipanggil tiga tombol agar kode tidak berulang.

```html
<button type="button" onclick="ubahWarnaLatar('lightgreen')">Latar Hijau</button>
<button type="button" onclick="ubahWarnaLatar('white')">Latar Putih</button>
<button type="button" onclick="ubahWarnaLatar('lightyellow')">Latar Kuning</button>
```

```javascript
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}
```

![Gambar L7 — Tombol "Latar Hijau" mengubah warna latar halaman](screenshot2/Gambar8.png)

### Latihan 8 — DOM dan Checkbox Menu Makanan

Total harga berubah otomatis memakai `addEventListener("change", ...)` dan `toLocaleString("id-ID")`.

```html
<h3>Daftar Menu Makanan</h3>
<label><input type="checkbox" class="menu" value="5000"> Ayam Goreng — Rp5.000</label><br>
<label><input type="checkbox" class="menu" value="500"> Tempe — Rp500</label><br>
<label><input type="checkbox" class="menu" value="2500"> Telur Dadar — Rp2.500</label><br>
<p>Total: Rp<span id="total">0</span></p>
```

```javascript
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
```

![Gambar L8 — Ayam Goreng + Es Teh dicentang → Total Rp8.000](screenshot2/Gambar9.png)

---

## 5. Mini Project — Kalkulator Nilai Mahasiswa

Nilai akhir = **Tugas 30% + UTS 30% + UAS 40%**. Setiap nilai divalidasi 0–100; hasil tampil di halaman. Proses perhitungan dipisah dari tampilan via `hitungNilaiAkhir()` dan `tentukanPredikat()`.

```javascript
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
```

![Gambar MP — Tugas 85, UTS 78, UAS 88 → 84.10, Predikat B, Lulus](screenshot2/Gambar10.png)

---

## 6. Eksperimen Mandiri

**1. Ubah Latihan 3 agar menerima dua nilai dari prompt dan mengonversinya menjadi number.**

```javascript
let a = parseInt(prompt("Masukkan Angka 1"));
let b = parseInt(prompt("Masukkan Angka 2"));
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}
operasiDasar(a, b);
```

![Gambar Eksperimen 1](screenshot2/Gambar11.png)

![Gambar Eksperimen 1](screenshot2/Gambar12.png)

![Gambar Eksperimen 1](screenshot2/Gambar13.png)

**2. Buat perulangan untuk menampilkan tabel perkalian angka 7 dari 1 sampai 10.**

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}
```

![Gambar Eksperimen 2](screenshot2/Gambar14.png)

**3. Buat function `cekGenap(angka)` yang mengembalikan `true` jika angka genap.**

```javascript
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
```

![Gambar Eksperimen 3](screenshot2/Gambar15.png)

**4. Ubah Latihan 8 dengan menambah minimal dua pilihan menu dan harga.**

```javascript
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
  document.getElementById("total2").textContent = total2.toLocaleString("id-ID");
}
```

![Gambar Eksperimen 4](screenshot2/Gambar16.png)

**5. Gunakan tombol untuk menyembunyikan atau menampilkan elemen HTML.**

```javascript
function toggleMenu() {
  const menu = document.getElementById("daftarMenu");
  const tombol = document.querySelector("button");
  if (menu.style.display === "none") {
    menu.style.display = "block";
    tombol.textContent = "Sembunyikan Menu";
  } else {
    menu.style.display = "none";
    tombol.textContent = "Tampilkan Menu";
  }
}
```

![Gambar Eksperimen 5](screenshot2/Gambar17.png)
![Gambar Eksperimen 5](screenshot2/Gambar18.png)

---

## 7. Jawaban Pertanyaan dan Tugas

**1. Perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`.**
`console.log()` menulis ke Console (debugging). `alert()` menampilkan pop-up pesan. `prompt()` meminta input (mengembalikan string/null). `textContent`/`innerHTML` mengubah isi elemen di halaman — `textContent` hanya teks (lebih aman), `innerHTML` dapat berisi tag HTML.

**2. Perbedaan `let` dan `const`.**
`const` untuk nilai yang tidak ditetapkan ulang (mis. `const pi = 3.14;`), `let` untuk nilai yang berubah (mis. `let skor = 0; skor = skor + 10;`).

**3. Perbedaan operator `==` dan `===`.**
`==` membandingkan nilai dengan konversi tipe (`"5" == 5` → true). `===` membandingkan nilai dan tipe (`"5" === 5` → false). Disarankan memakai `===`.

**4. Fungsi `if-else` dan `switch`, kapan dipakai.**
`if-else` untuk menguji kondisi logis/rentang. `switch` untuk memilih satu tindakan dari sejumlah nilai diskret pada satu variabel (lebih rapi daripada banyak `else if`); `break` mencegah eksekusi lanjut ke case berikutnya.

**5. Fungsi parameter dan return dalam function.**
Parameter adalah variabel masukan yang diterima function; `return` mengembalikan hasil agar dapat dipakai di tempat lain. Contoh: `hitungNilaiAkhir(85,78,88)` menerima tiga parameter dan me-return satu nilai akhir.

**6. Bagaimana JavaScript memilih elemen dengan `document.getElementById()`.**
Method mencari satu elemen yang memiliki atribut `id` sesuai argumen dan mengembalikan objek elemen agar dapat dibaca/diubah (`.textContent`, `.value`, `.style`). Karena `id` unik, hasilnya tepat satu elemen (atau `null` bila tidak ada).

**7. Script validasi form: nama tidak kosong dan nilai 0–100.**
Diterapkan pada Mini Project — kolom wajib diisi dan nilai dicek dengan `Number.isNaN` serta batas `< 0` / `> 100` sebelum perhitungan dijalankan.

---

## 8. Struktur Output Repository

```
Lab5Web/
├── lab5_javascript/
│   ├── index.html        # halaman latihan: 8 latihan + mini project
│   ├── script.js         # seluruh logika JavaScript
│   └── style.css         # tampilan halaman
├── screenshots/          # hasil screenshot tiap latihan
└── README.md             # laporan / dokumentasi praktikum
```

---

## 9. Kesimpulan

Melalui Praktikum 5 ini telah dipahami sintaks dasar JavaScript dan cara menyisipkannya ke HTML melalui berkas eksternal `script.js`. Telah diterapkan variabel (`let`/`const`), operator, function (parameter & return), percabangan (`if-else`, `switch`), dan perulangan. JavaScript juga dipakai untuk output lewat `console.log` serta manipulasi DOM (`textContent`, `innerHTML`, `style`, event `onclick`/`addEventListener`), termasuk interaksi form dan validasi input.

Hasil akhir berupa satu halaman interaktif berisi 8 latihan dan Mini Project Kalkulator Nilai Mahasiswa yang menghitung nilai akhir, predikat, dan status kelulusan dengan validasi 0–100, serta diuji pada tiga skenario nilai berbeda. Seluruh latihan berjalan sesuai harapan saat diuji pada browser.
