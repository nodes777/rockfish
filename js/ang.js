angular.module("root", [])
    .controller("index", ["$scope", function($scope){

    	/*variables*/
        var animalPool = [];
        $scope.guess;

        /*init*/
        createPool();
        getAnimal();
        setAnimal();

        /*funcs*/

        function getAnimal() {
            /*Get First Animal*/
            var randNum = Math.floor(Math.random() * animalPool.length);
            animal = animals[randNum];
            animalPool.splice(randNum, 1)
        };

        function setAnimal() {
            $scope.img = animal.img;
        }

        function Animal(data) {
            this.name = data.name
            this.img = data.img;
        };
        function createPool () {
            /*From the animal service*/
            animals.forEach(function(animalData) {
                animalPool.push(new Animal(animalData));
            });
        }

        $scope.guess;

    }])