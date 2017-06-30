var friendList = require("../data/friends");


module.exports = function(app){

	app.get("/api/:friend?/", function(req, res){
		// console.log(friendList)
		// console.log('=======================')
		// var chosen = req.params.friends;
		// var age = req.params.age;
		// console.log(chosen);
		// console.log(chosen + " is " + age + 'years old')
		res.json(friendList);
		//res.json is the same as res.end
	});

	app.post("/api/friends", function(req, res){
		var newFriend = req.body;
		friendList.push(newFriend);
		// console.log(newFriend);
		var bestFriend = compareFriends(newFriend);
		console.log("best friend: " + bestFriend);

	});

	 function compareFriends(newFriend){
	 	console.log('new friend ' + newFriend.scores);
	 	// var scoreDifference = 0;
	 	var friendListNum = -1;
	 	var friendIndex = [];
	 	// scoreDifference += newFriend.scores[0] - friendList[0].scores[0];
	 	
	 	// console.log(parseInt(newFriend.scores[0]));
        for(var i = 0; i < friendList.length - 1; i++){
        	var scoreDifference = 0;
        	friendListNum++;
        	for(var j = 0; j < 9; j++){
        		// scoreDifference += Math.abs(newFriend.scores[0] - friendList[0].scores[0]);
        		scoreDifference += Math.abs(friendList[friendListNum].scores[j] - newFriend.scores[j]);
        		// 
        		console.log("sdiff " + scoreDifference);
        	}
        	console.log("name " + friendList[friendListNum].name);
        	console.log(scoreDifference);
        	friendIndex.push(scoreDifference);

        }
        // console.log("new friend " + newFriend.scores[0]);
        // console.log("other " + friendList[0].scores[0]);
        console.log(friendIndex);
        //loop through friendIndex to find the lowest score
        var index = 0;
		var value = friendIndex[0];
		for (var i = 1; i < friendIndex.length; i++) {
		  if (friendIndex[i] < value) {
		    value = friendIndex[i];
		    index = i;
		  }
		}
		// console.log("new best friend " + friendList[index].name);
		var newFriend = friendList[index].name
  //       Array.min = function( array ){
  //   		return Math.min.apply( Math, array );
		// };
		// var lowScore = Array.min(friendIndex);
  //     	console.log("low score " + lowScore);
        return newFriend;
     }

};