// Definisikan fungsi untuk pindah halaman berdasarkan ID tombol
function ClickButton(id, blog) {
    const tombol = document.getElementById(id); // Dapatkan elemen tombol berdasarkan ID
    
    if (tombol) { // Periksa apakah elemen tombol ditemukan
      tombol.addEventListener('click', () => {
        window.location.href = blog; // Menggunakan parameter tujuanHalaman yang telah diberikan
      });
    } else {
      console.error(`tombol ${id} tidak ditemukan.`);
    }
  }
  
  // Contoh penggunaan fungsi pindahHalamanById
  ClickButton('button', 'blog.html'); // Pindah ke halaman blog.html saat tombol dengan ID 'tombol' diklik
