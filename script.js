// Fungsi untuk load file partial HTML
function loadPartial(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error("Gagal memuat partial:", error));
}

// Load navbar & footer
loadPartial('navbar', 'components/navbar.html');
loadPartial('footer', 'components/footer.html');
