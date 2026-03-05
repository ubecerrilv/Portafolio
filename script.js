fetch("https://api.github.com/users/ubecerrilv/repos")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("projects-container");

        data.forEach(repo => {
            const div = document.createElement("div");
            div.classList.add("project");
            div.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "Sin descripción"}</p>
                <a href="${repo.html_url}" target="_blank">Ver proyecto</a>
            `;
            container.appendChild(div);
        });

        initCarousel();
    });

function initCarousel(){
    let currentIndex = 0;
    const track = document.querySelector(".carousel-track");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    function updateCarousel() {
    const cardWidth = document.querySelector(".project").offsetWidth + 32;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
    const totalCards = document.querySelectorAll(".project").length;
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
    const totalCards = document.querySelectorAll(".project").length;
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCarousel();
    });
}
