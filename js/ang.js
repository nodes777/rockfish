angular.module("root", [])
    .controller("index", ["$scope", function($scope){

    	/*variables*/
        let animalPool = [];
        let currentAnimal = {};
        $scope.guess;

        /*init*/
        createPool();
        getAnimal();
        setAnimal();

        /*funcs*/

        function getAnimal() {
            console.log(animalPool.map(function(animal) {return animal.name;}));
            if (animalPool.length > 0) {
	            let randNum = Math.floor(Math.random() * animalPool.length);
	            currentAnimal = new Animal(animalPool[randNum]);
	            animalPool.splice(randNum, 1)
        	} else {
        		console.log("I'm out of rockfish!")
        	}
        };

        function setAnimal() {
        	$scope.name = currentAnimal.name;
            $scope.img = currentAnimal.img;
        }

        function Animal(data) {
            this.name = data.name;
            this.img = data.img;
            this.alts = data.alts;
        };
        function createPool () {
            /*From the animal service*/
            animals.forEach(function(animalData) {
                animalPool.push(new Animal(animalData));
            });
        }

        $scope.compare = function(guess) {
            guess = guess.replace(/\s/g, '').toLowerCase();
            answer = $scope.name.replace(/\s/g, '').toLowerCase();
            let alts = currentAnimal.alts.toLowerCase();
            console.log("Guess: "+ guess+"\n");
            console.log("Answer: "+ answer+"\n");

            if(guess === answer){
            	guessIsCorrect();
            } else {
            	guessIsWrong();
            }
        }

        function guessIsCorrect() {
        	console.log("Correct!");
        	getAnimal();
        	setAnimal();
        	$scope.guess= '';
        	console.log(currentAnimal);
        	console.log($scope.img);
        }

        function guessIsWrong() {
        	console.log("Wrong answer man");
        	$scope.guess= '';
        }

    }])