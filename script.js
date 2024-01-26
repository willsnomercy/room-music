function changePage(pageNumber) {
            // Menyembunyikan semua halaman
            var pages = document.querySelectorAll('[id^=page]');
            for (var i = 0; i < pages.length; i++) {
                pages[i].style.display = 'none';
            }

            // Menampilkan halaman yang dipilih
            var selectedPage = document.getElementById('page' + pageNumber);
            selectedPage.style.display = 'block';
        }