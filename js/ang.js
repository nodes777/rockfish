angular.module('root', ['ngAnimate'])
    .controller("index", ["$scope", "$timeout", function($scope, $timeout) {

        /*variables*/
        var animalPool = [];
        var currentAnimal = {};
        var wrongTries = 0;
        $scope.guess = '';
        $scope.description = '';
        $scope.error = false;
        $scope.heading = "What's that Rockfish???";

        /*init*/
        createPool();
        getAnimal();
        setAnimal();

        /*funcs*/

        function getAnimal() {
            console.log(animalPool.map(function(animal) {
                return animal.name;
            }));
            if (animalPool.length > 0) {
                var randNum = Math.floor(Math.random() * animalPool.length);
                currentAnimal = new Animal(animalPool[randNum]);
                animalPool.splice(randNum, 1);
            } else {
                console.log("I'm out of rockfish!");
                $scope.heading = "I'm out of rockfish!";

            }
        }

        function setAnimal() {
            var randNum = Math.floor(Math.random() * currentAnimal.img.length);
            $scope.name = currentAnimal.name;
            $scope.img = currentAnimal.img[randNum];
            $scope.description = currentAnimal.description;
        }

        $scope.changeAnimal = function() {
            $scope.slide = false;
            getAnimal();
            setAnimal();
            $scope.guess = '';
            document.getElementById("btn").blur();
            document.getElementById("textField").focus();
        };

        function Animal(data) {
            this.name = data.name;
            this.img = data.img;
            this.alts = data.alts;
            this.description = data.description;
        }

        function createPool() {
            /*From the animal service*/
            animals.forEach(function(animalData) {
                animalPool.push(new Animal(animalData));
            });
        }

        $scope.compare = function(guess) {
            var answer;
            guess = guess.replace(/\s/g, '').toLowerCase();
            var answers = [];
            answers.push($scope.name.replace(/\s/g, '').toLowerCase());

            currentAnimal.alts.forEach(function(alt) {
                answers.push(alt.toLowerCase().replace(/\s/g, ''));
            });
            console.log(answers);
            console.log("Guess: " + guess + "\n");
            console.log("Answer: " + answers + "\n");

            for (var x = 0; x <= answers.length; x++) {
                if (guess === answers[x]) {
                    guessIsCorrect();
                }
                if (x === answers.length) {
                    guessIsWrong();
                }
            }

        };

        function guessIsCorrect() {
            console.log("Correct!");
            /*slide = true just slides the description out*/
            /*changeAnimal is an ng-click on the button that changes the animal*/
            $scope.slide = true;
            document.getElementById("btn").focus();
        }

        function guessIsWrong() {
            $scope.guess = '';
            shakeImage();
            wrongTries++;
            if (wrongTries > 2) {
                $scope.slide = true;
                document.getElementById("btn").focus();
                wrongTries = 0;
            }
        }

        function shakeImage() {
            $scope.error = true;
            $timeout(function() {
                $scope.error = false;
            }, 500);
        }

    }]);