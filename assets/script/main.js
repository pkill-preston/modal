const open = document.getElementById('openModal');
const close = document.getElementById('closeModal');
const modal = document.getElementById('modalContainer');
const button = document.querySelector('#closeButton');

open.addEventListener("click", () =>
{
    modal.classList.add("active");
});

close.addEventListener("click", () =>
{
    modal.classList.remove("active");
});

button.addEventListener("click", () =>
{
    modal.classList.add("out");
    setTimeout(() => {
        
    modal.classList.remove("active");
    modal.classList.remove("out");
    }, 0500);
});