# Location Manager API

`location-manager-api` adalah aplikasi backend yang dikembangkan menggunakan Express.js untuk pengelolaan lokasi. Aplikasi ini menggunakan MongoDB sebagai database.

## Fitur
- CRUD Lokasi (Create, Read, Update, Delete).
- Validasi data lokasi.
- Error handling.

## Prasyarat
Sebelum menjalankan aplikasi, pastikan Anda memiliki:
- **Node.js** versi terbaru (minimal v14).
- **MongoDB** terinstal dan berjalan (bisa lokal atau menggunakan layanan seperti MongoDB Atlas).

## Instalasi
1. Clone repository ini:
   ```bash
   git clone https://github.com/vchandra22/location-manager-api.git
   cd location-manager-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Buat file `.env` pada root proyek, lalu isi dengan konfigurasi berikut:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/location-manager
   ```
   Ganti `MONGO_URI` sesuai konfigurasi database Anda.

## Menjalankan Aplikasi

### Mode Pengembangan
1. Jalankan server dengan **nodemon**:
   ```bash
   npm run dev
   ```
   Server akan berjalan di `http://localhost:3000` secara default.

### Mode Produksi
1. Build aplikasi:
   ```bash
   npm run build
   ```

2. Jalankan server:
   ```bash
   npm start
   ```

## API Endpoints

### Lokasi
| Metode | Endpoint             | Deskripsi                      |
|--------|----------------------|--------------------------------|
| GET    | `/api/locations`     | Mendapatkan semua lokasi       |
| POST   | `/api/locations`     | Menambahkan lokasi baru        |
| GET    | `/api/locations/:id` | Mendapatkan lokasi berdasarkan ID |
| PUT    | `/api/locations/:id` | Memperbarui lokasi berdasarkan ID |
| DELETE | `/api/locations/:id` | Menghapus lokasi berdasarkan ID |

### Contoh Request Body
#### POST `/api/locations`
```json
{
  "name": "Taman Kota",
  "address": "Jalan Sudirman No. 1",
  "coordinates": {
    "latitude": -6.200000,
    "longitude": 106.816666
  }
}
```

Terima kasih