const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let selected = 0 //index du slider

document.getElementsByClassName("arrow_right")[0].addEventListener("click", ()=>turn("right")); //event au click a droite
document.getElementsByClassName("arrow_left")[0].addEventListener("click", ()=>turn("left")); //event au click a gauche
const banner = document.getElementsByClassName("banner-img")[0]; //element banniere


function turn(dirrection) {
	if (dirrection == "right") {
		selected++;
		if (selected > slides.length - 1) {
			selected = 0
		}
	} else {
		selected--;
		if (selected < 0) {
			selected = slides.length - 1
		}
	}
	banner.src = "./assets/images/slideshow/" + slides[selected].image; // changer la source de l'image
	document.getElementsByClassName("dot_selected")[0].classList.remove("dot_selected"); // retirer le point selectionner
	document.getElementsByClassName("dot")[selected].classList.add("dot_selected"); // ajouter le point selectionner
	document.querySelector("#banner p").innerHTML = slides[selected].tagLine; // changer la tag line
	console.log(selected)
}

const dots = document.getElementsByClassName("dots")[0]; //element dots

//creation des points en fct du nombre d'image
slides.forEach(element => {
	let dot = document.createElement("div"); // creation d'une div
	dot.classList.add("dot"); // ajout de la classe dot
	dots.appendChild(dot); // ajout de l'element au parent
});

document.getElementsByClassName("dot")[0].classList.add("dot_selected"); //set le premier point en selected


