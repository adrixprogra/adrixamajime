console.log("Fanpage de jime cargada <3");

const music = document.getElementById("bg-music");

window.addEventListener("load", () => {
    music.play().catch(() => {
        document.addEventListener("click", () => {
            music.play();
        }, { once: true });
    });
});
