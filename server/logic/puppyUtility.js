var puppyData = require('../models/puppies');
var tempArray = puppyData.tempPuppyArray;

function handleAllGet(){
  return tempArray;
}

function handleSingleGet (puppyID){
  var response;
  var pup = puppyFilter(puppyID);
  if (pup.length > 0){
    return response = pup[0];
  } else {
    return response = {message: "Puppy does not exist here"};
  }
}

//helper method
function puppyFilter(puppyID){
  return tempArray.filter(function(puppy){
    return puppy.puppyID === parseInt(puppyID);
  });
}

function handlePost(puppyID, puppyName, puppyAge){
  var pup = puppyFilter(puppyID);
  //does the puppy already exist
  //if yes,throw error
  if (pup.length > 0){
    return {message: "Puppy already exists!"};
  } else { //if no, return success
    var newPostPuppy = new puppyData.Puppy(
      parseInt(puppyID),
      puppyName,
      parseInt(puppyAge)
      );
    tempArray.push(newPostPuppy);
    return {
      message:'success',
      puppy:newPostPuppy
    };
  }
}

function handlePut(puppyID, submittedBodyObj){
  //test if any data is passed in
  if(Object.keys(submittedBodyObj).length === 0){
    return {message: 'Please enter something to change!'};
  }
    //add validation for chekcking if the puppyAge is an integer
  if(submittedBodyObj.puppyAge && isNaN(parseInt(submittedBodyObj.puppyAge))){
    //if exists, and not an integer, throw an error
    return {message: 'Please enter a number for the puppy\'s age'};
    // return false; not needed bc no res.json
  }
  var pup = puppyFilter(puppyID);
  if (pup.length > 0){
    //grab object from array
    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i].puppyID === parseInt(puppyID)){
        //looping through keys in object
        for (key in submittedBodyObj) {//these keys are strings irl
          if (key === 'puppyName'){
            tempArray[i].puppyName = submittedBodyObj.puppyName;
          } else if (key === 'puppyAge') {
            tempArray[i].puppyAge = submittedBodyObj.puppyAge;
          }
        }
      }
    }
    return tempArray;
    //update specific keys
    //push back into the array
  } else {
    return {message: "Puppy does not exist here"};
  }
}

function handleDelete(puppyID){
  var pup = puppyFilter(puppyID);
  if (pup.length > 0){
    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i].puppyID === parseInt(puppyID)){
        var tempPuppy = tempArray.splice(i, 1);
        return{
          message: 'That puppy is gone!',
          puppy: tempPuppy
        };
      }
    }
  } else {
    return {message: "Puppy does not exist here"};
  }
}


module.exports = {
  handleAllGet: handleAllGet,
  handleSingleGet: handleSingleGet,
  handlePost: handlePost,
  handlePut: handlePut,
  handleDelete: handleDelete
};
