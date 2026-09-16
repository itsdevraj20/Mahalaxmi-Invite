/* ==================================================
   ELEMENTS
================================================== */

const diyaButton =
    document.getElementById("diyaButton");

const diyaText =
    document.getElementById("diyaText");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");

const goldParticles =
    document.getElementById("goldParticles");


/* ==================================================
   DIYA
================================================== */

diyaButton.addEventListener("click", () => {

    document.body.classList.add("diya-activated");

    diyaText.textContent =
        "शुभमंगलम् ✨";

});


/* ==================================================
   MUSIC
================================================== */

let musicPlaying = false;

musicButton.addEventListener("click", async () => {

    if (!musicPlaying) {

        try {

            await backgroundMusic.play();

            musicPlaying = true;

            musicButton.textContent = "♫";

        } catch (error) {

            console.log(
                "Music could not start:",
                error
            );

        }

    } else {

        backgroundMusic.pause();

        musicPlaying = false;

        musicButton.textContent = "♪";
    }

});


/* ==================================================
   GOLD PARTICLES
================================================== */

function createGoldParticle() {

    const particle =
        document.createElement("span");

    particle.classList.add("gold-particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    particle.style.opacity =
        0.2 + Math.random() * 0.4;

    goldParticles.appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, 10000);

}


setInterval(
    createGoldParticle,
    950
);


/* ==================================================
   SECTION REVEAL
================================================== */

const sections =
    document.querySelectorAll("section");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


sections.forEach((section) => {

    observer.observe(section);

});


/* ==================================================
   OPENING
================================================== */

setTimeout(() => {

    const opening =
        document.querySelector(".opening");

    if (opening) {

        opening.classList.add("visible");

    }

}, 250);


/* ==================================================
   DEBUG
================================================== */

console.log(
    "॥ श्री महालक्ष्म्यै नमः ॥"
);

console.log(
    "कासार परिवार"
);