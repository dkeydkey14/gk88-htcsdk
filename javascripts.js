
function openGift() {
    openModal();
}

function openModal() {
    const modal = document.getElementById("myModal");

    modal.style.display = "block";
    setTimeout(() => {
        closeModal();
        window.open("https://gk881.sbs/?f=1521212", "_blank");
    }, 3000);
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}




