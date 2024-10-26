function TampilkanData() {
    // Ambil data dari localStorage
    let name = localStorage.getItem('name') || 'Nama Anda';
    let role = localStorage.getItem('role') || 'Front End Designer';
    let availability = localStorage.getItem('availability') || 'Full Time';
    let age = localStorage.getItem('age') || '19';
    let location = localStorage.getItem('location') || 'Jakarta';
    let yoe = localStorage.getItem('yoe') || '2';
    let email = localStorage.getItem('email') || 'email@gmail.com';

    document.getElementById('name').textContent = name;
    document.getElementById('role').textContent = role;
    document.getElementById('availability').textContent = availability;
    document.getElementById('age').textContent = age;
    document.getElementById('location').textContent = location;
    document.getElementById('yoe').textContent = yoe;
    document.getElementById('email').textContent = email;
}

// Event Pada Tombol Edit
document.getElementById('editBtn').addEventListener('click', function () {
    document.getElementById('formSection').style.display = 'block';


    document.getElementById('nameInput').value = localStorage.getItem('name') || '';
    document.getElementById('roleInput').value = localStorage.getItem('role') || '';
    document.getElementById('availabilityInput').value = localStorage.getItem('availability') || '';
    document.getElementById('ageInput').value = localStorage.getItem('age') || '';
    document.getElementById('locationInput').value = localStorage.getItem('location') || '';
    document.getElementById('yoeInput').value = localStorage.getItem('yoe') || '';
    document.getElementById('emailInput').value = localStorage.getItem('email') || '';
});

// Saat form disubmit
document.getElementById('editForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simpan data ke localStorage
    localStorage.setItem('name', document.getElementById('nameInput').value);
    localStorage.setItem('role', document.getElementById('roleInput').value);
    localStorage.setItem('availability', document.getElementById('availabilityInput').value);
    localStorage.setItem('age', document.getElementById('ageInput').value);
    localStorage.setItem('location', document.getElementById('locationInput').value);
    localStorage.setItem('yoe', document.getElementById('yoeInput').value);
    localStorage.setItem('email', document.getElementById('emailInput').value);


    document.getElementById('formSection').style.display = 'none';
    TampilkanData();
});

// Tampilkan data
document.addEventListener('DOMContentLoaded', TampilkanData);
