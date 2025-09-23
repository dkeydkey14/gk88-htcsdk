
// Xử lý âm thanh nền
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundMusic');
    
    // Tự động phát nhạc khi trang load
    audio.play().catch(function(error) {
        console.log('Auto-play was prevented:', error);
    });
    
    // Phát nhạc khi user click vào bất kỳ đâu trên trang
    document.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        }
    });
});

function openGift() {
    openModal();
}

function openModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function redirectToLink() {
    closeModal();
    window.open("https://gk881.sbs/?f=1521212", "_blank");
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}




