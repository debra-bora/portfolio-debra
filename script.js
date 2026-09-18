const elements = document.querySelectorAll(
    ".carte-competence, .carte-projet, .etape, .contact-carte"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.15
});

elements.forEach((element) => {
    observer.observe(element);
});

// ------------------------------
// TEXTE ANIMÉ DE L'ACCUEIL
// ------------------------------

const textes = [
    "Cybersécurité",
    "Réseaux informatiques",
    "Linux",
    "Analyse de risques",
    "NIS2",
    "Développement Web"
];

const texteTerminal = document.getElementById("texte-terminal");

let indexTexte = 0;
let indexLettre = 0;
let suppression = false;


function animationTerminal() {

    const texteActuel = textes[indexTexte];


    if (!suppression) {

        texteTerminal.textContent =
            texteActuel.substring(0, indexLettre + 1);

        indexLettre++;


        if (indexLettre === texteActuel.length) {

            suppression = true;

            setTimeout(animationTerminal, 1500);

            return;
        }

    } else {

        texteTerminal.textContent =
            texteActuel.substring(0, indexLettre - 1);

        indexLettre--;


        if (indexLettre === 0) {

            suppression = false;

            indexTexte++;

            if (indexTexte === textes.length) {
                indexTexte = 0;
            }
        }
    }


    const vitesse = suppression ? 50 : 90;

    setTimeout(animationTerminal, vitesse);
}


animationTerminal();

// ------------------------------
// NAVIGATION ACTIVE
// ------------------------------

const sections = document.querySelectorAll("section[id]");
const liensNavigation = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let sectionActuelle = "";

    sections.forEach((section) => {

        const positionSection = section.offsetTop - 150;
        const hauteurSection = section.offsetHeight;

        if (
            window.scrollY >= positionSection &&
            window.scrollY < positionSection + hauteurSection
        ) {
            sectionActuelle = section.getAttribute("id");
        }

    });


    liensNavigation.forEach((lien) => {

        lien.classList.remove("active");

        if (lien.getAttribute("href") === "#" + sectionActuelle) {
            lien.classList.add("active");
        }

    });

});

// ------------------------------
// AFFICHER LE PARCOURS COMPLET
// ------------------------------

const boutonParcours = document.getElementById("bouton-parcours");
const ancienParcours = document.getElementById("ancien-parcours");

boutonParcours.addEventListener("click", () => {

    ancienParcours.classList.toggle("ouvert");

    if (ancienParcours.classList.contains("ouvert")) {

        boutonParcours.textContent =
            "− Masquer mon parcours précédent";

    } else {

        boutonParcours.textContent =
            "+ Afficher mon parcours complet";

    }

});