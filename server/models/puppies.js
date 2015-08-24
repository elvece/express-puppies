//models folder:
//data structure
//wahtever we need to create a new instance of resource

function Puppy(puppyID, puppyName, puppyAge){
  this.puppyID = puppyID;
  this.puppyName = puppyName;
  this.puppyAge = puppyAge;
}

//data
var tempPuppyArray = [];
var bartPuppy = new Puppy(1, 'Bart', 20);
var johnPuppy = new Puppy(2, 'John', 10);
var danPuppy = new Puppy(3, 'Dan', 4);
tempPuppyArray.push(bartPuppy, johnPuppy, danPuppy);

module.exports = {
  Puppy: Puppy,
  tempPuppyArray: tempPuppyArray
};
