var Alex = {
	firstName: "Alex",
	lastName: "Minge",
	height: 1.75,
	age: 26,
	birthPlace: "Minneapolis",
	highSchool: "Southwest Senior High",
	college: "University of Connecticut",
	favoriteBook: "Dune",
	favoriteMovie: "The Matrix",
	favoriteFood: "Pizza"
	ageOne: function() {
		this["age"]++;
	}
	newFavoriteBook: function(b) {
        this["favoriteBook"] = b;
	}
	newFavoriteMovie: function(m) {
		this["favoriteMovie"] = m;
	}
	newFavoriteFood: function(f) {
		this["favoriteFood"] = f;
	}
};