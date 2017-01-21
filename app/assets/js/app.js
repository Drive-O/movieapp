const http = new XMLHttpRequest();

const btn = document.querySelector(".search__row2__btn");
const content = document.querySelector(".results__content__column2__content");
const title = document.querySelector(".title")
const moviefield = document.querySelector(".moviefield");
const yearfield = document.querySelector(".yearfield");

const key = "579680975c0a476a8906708b0cc45739";

const app = {
	method: "GET",
	movie: "",
	year: "",
	title: "",
	content: "",
	homepage: "",
	init: function(){
		console.log("App initialized!");
	},
	open: function(url){
		http.open(this.method, url);

		http.onreadystatechange = function(){
			if(http.readyState === XMLHttpRequest.DONE && http.status == "200"){
				console.log("Success!");
				app.fetch();
			}else{
				console.log("Error: " + http.state);
			}
		}
	},
	fetch: function(){
		this.result = JSON.parse(http.response).results;
		this.result.forEach(function(film){
			console.log(film.original_title);
			title.append(film.original_title);
		})

	},
	write: function(){

	}
}

//Search URL= https://api.themoviedb.org/3/search/movie?api_key=579680975c0a476a8906708b0cc45739&language=en-US&query=forrest%20gump&page=1&include_adult=false

btn.addEventListener("click", function(){
	let movie = moviefield.value;
	let year = yearfield.value;
	movie = movie.split(" "); //zerlege string 
	movie = movie.join("%20"); //cast to string + %20
	
	let url = "https://api.themoviedb.org/3/search/movie?api_key=" + key + "&language=en-US&query=" + movie + "&page=1&include_adult=false";
	app.init();
	app.open(url);
	http.send();
});




