"use strict"

const form = document.querySelector('.form');
form.addEventListener('submit', function(e) { e.preventDefault(); 
sendMessage(form);
})

async function sendMessage(form) {
    const formData = new FormData(form);
    if (formData) {
        const url ='sendmessage.php';
        const respone = await fetch(url, {
            method: "POST",
            body: formData
        });
        if (respone.ok) {
            form.reset();
        }
    }
}
