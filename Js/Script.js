// Interaksi sederhana: ubmit form kontak 
document.addEventListener('DOMContentLoaded', ()=>{
const contact = document.getElementById('contactForm');
if (contact){
contact.addEventListener('submit', e => {
e.preventDefault();
const data = new FormData(contact);
alert('Terima kasih, ' + data.get('nama') + '! Pesanmu sudah tercatat (simulasi).');
contact.reset();
});
}
});