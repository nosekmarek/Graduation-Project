"use strict";

var human = {
	name: "Unknown",
	sex: "male",
	age: 0,
	status: "single",
	income: 0,
	incomeProfile: [],
	/////////////////////////////	FUNCTIONS	////////////////////////////////////////
	aging: function () {
		var femaleDeath = [0.61, 0.03, 0.03, 0.03, 0.03, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.05, 0.05, 0.05, 0.05, 0.05, 0.09, 0.09, 0.09, 0.09, 0.09, 0.10, 0.10, 0.10, 0.10, 0.10, 0.11, 0.11, 0.11, 0.11, 0.11, 0.14, 0.14, 0.14, 0.14, 0.14, 0.20, 0.20, 0.20, 0.20, 0.20, 0.32, 0.32, 0.32, 0.32, 0.32, 0.49, 0.49, 0.49, 0.49, 0.49, 0.69, 0.69, 0.69, 0.69, 0.69, 0.98, 0.98, 0.98, 0.98, 0.98, 1.32, 1.32, 1.32, 1.32, 1.32, 2.03, 2.03, 2.03, 2.03, 2.03, 3.25, 3.25, 3.25, 3.25, 3.25, 5.39, 5.39, 5.39, 5.39, 5.39, 12.24],
			maleDeath = [0.59, 0.03, 0.03, 0.03, 0.03, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.05, 0.05, 0.05, 0.05, 0.05, 0.08, 0.08, 0.08, 0.08, 0.08, 0.10, 0.10, 0.10, 0.10, 0.10, 0.11, 0.11, 0.11, 0.11, 0.11, 0.14, 0.14, 0.14, 0.14, 0.14, 0.20, 0.20, 0.20, 0.20, 0.20, 0.32, 0.32, 0.32, 0.32, 0.32, 0.49, 0.49, 0.49, 0.49, 0.49, 0.74, 0.74, 0.74, 0.74, 0.74, 1.05, 1.05, 1.05, 1.05, 1.05, 1.62, 1.62, 1.62, 1.62, 1.62, 2.51, 2.51, 2.51, 2.51, 2.51, 4.01, 4.01, 4.01, 4.01, 4.01, 6.66, 6.66, 6.66, 6.66, 6.66, 15.12],
			random = Math.random() * 100,
			probability;
		console.log("random: " + random);
		console.log("age of " + this.name + ": " + this.age);

		//checking for probability
		if (this.sex === "male") {
			probability = maleDeath[this.age];
		} else {
			probability = femaleDeath[this.age];
		};
		console.log("chance to die: " + probability);
		//checking whether he/she survived that year
		if (probability >= random) {
			//delete this person from the planet earth
			window.alert(this.name + "has just died");
		} else {
			this.age = this.age + 1; // manadged to survive another year
		};
	},
	////////////////////////////////////////////////////////////////////////////////////
	profession: function () {
		var femaleIncome = [[1, 2, 3],
							[4, 5, 6],
							[7, 8, 9]],
			maleIncome = [],
			random = Math.random(),
			income,
			incomeDistribution = [];

		//assigning the person a profession -> the income over the years
		if (this.sex === "male") {
			switch (random) {
			case random < incomeDistribution[1]:
				income = femaleIncome[1];
				break;
			case random > incomeDistribution[1] && random < incomeDistribution[2]:
				income = femaleIncome[2];
				break;
			case random > incomeDistribution[2] && random < incomeDistribution[3]:
				income = femaleIncome[3];
				break;
			case random > incomeDistribution[3] && random < incomeDistribution[4]:
				income = femaleIncome[4];
				break;
			case random > incomeDistribution[4] && random < incomeDistribution[5]:
				income = femaleIncome[5];
				break;
			case random > incomeDistribution[5] && random < incomeDistribution[6]:
				income = femaleIncome[6];
				break;
			case random > incomeDistribution[6] && random < incomeDistribution[7]:
				income = femaleIncome[7];
			};
		} else {
			switch (random) {
			case random < incomeDistribution[1]:
				income = maleIncome[1];
				break;
			case random > incomeDistribution[1] && random < incomeDistribution[2]:
				income = maleIncome[2];
				break;
			case random > incomeDistribution[2] && random < incomeDistribution[3]:
				income = maleIncome[3];
				break;
			case random > incomeDistribution[3] && random < incomeDistribution[4]:
				income = maleIncome[4];
				break;
			case random > incomeDistribution[4] && random < incomeDistribution[5]:
				income = maleIncome[5];
				break;
			case random > incomeDistribution[5] && random < incomeDistribution[6]:
				income = maleIncome[6];
				break;
			case random > incomeDistribution[6] && random < incomeDistribution[7]:
				income = maleIncome[7];
			};
		};
	},


	/////////////////////////////	INITIATION OF PROGRAM	/////////////////////////////

	birth: function () {
		var random = Math.random(),
			nameRandom = Math.random(),
			boyNames = ["Jackson", "Aiden", "Liam", "Lucas", "Noah", "Mason", "Ethan", "Caden", "Jacob", "Logan", "Jayden", "Elijah", "Jack", "Luke", "Michael", "Benjamin", "Alexander", "James", "Jayce", "Caleb", "Connor", "William", "Carter", "Ryan", "Oliver", "Matthew", "Daniel", "Gabriel", "Henry", "Owen", "Grayson", "Dylan", "Landon", "Isaac", "Nicholas", "Wyatt", "Nathan", "Andrew", "Cameron", "Dominic", "Joshua", "Eli", "Sebastian", "Hunter", "Brayden", "David", "Samuel", "Evan", "Gavin", "Christian", "Max", "Anthony", "Joseph", "Julian", "John", "Colton", "Levi", "Muhammad", "Isaiah", "Aaron", "Tyler", "Charlie", "Adam", "Parker", "Austin", "Thomas", "Zachary", "Nolan", "Alex", "Ian", "Jonathan", "Christopher", "Cooper", "Hudson", "Miles", "Adrian", "Leo", "Blake", "Lincoln", "Jordan", "Tristan", "Jason", "Josiah", "Xavier", "Camden", "Chase", "Declan", "Carson", "Colin", "Brody", "Asher", "Jeremiah", "Micah", "Easton", "Xander", "Ryder", "Nathaniel", "Elliot", "Sean", "Cole"],
			girlNames = ["Sophia", "Emma", "Olivia", "Ava", "Isabella", "Mia", "Zoe", "Lily", "Emily", "Madelyn", "Madison", "Chloe", "Charlotte", "Aubrey", "Avery", "Abigail", "Kaylee", "Layla", "Harper", "Ella", "Amelia", "Arianna", "Riley", "Aria", "Hailey", "Hannah", "Aaliyah", "Evelyn", "Addison", "Mackenzie", "Adalyn", "Ellie", "Brooklyn", "Nora", "Scarlett", "Grace", "Anna", "Isabelle", "Natalie", "Kaitlyn", "Lillian", "Sarah", "Audrey", "Elizabeth", "Leah", "Annabelle", "Kylie", "Mila", "Claire", "Victoria", "Maya", "Lila", "Elena", "Lucy", "Savannah", "Gabriella", "Callie", "Alaina", "Sophie", "Makayla", "Kennedy", "Sadie", "Skyler", "Allison", "Caroline", "Charlie", "Penelope", "Alyssa", "Peyton", "Samantha", "Liliana", "Bailey", "Maria", "Reagan", "Violet", "Eliana", "Adeline", "Eva", "Stella", "Keira", "Katherine", "Vivian", "Alice", "Alexandra", "Camilla", "Kayla", "Alexis", "Sydney", "Kaelyn", "Jasmine", "Julia", "Cora", "Lauren", "Piper", "Gianna", "Paisley", "Bella", "London", "Clara", "Cadence"];

		if (random < 49.019607843) {
			this.sex = "female";
		};
		if (this.sex === "male") {
			this.name = boyNames[Math.floor(nameRandom * 100)];
		} else {
			this.name = girlNames[Math.floor(nameRandom * 100)];
		};


		this.profession();
	},
};

human.birth();

//setInterval(human.aging, 1000);