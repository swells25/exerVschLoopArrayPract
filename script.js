
//#1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = 0
for(var i = 0; i < officeItems.length; i++){
     
    if(officeItems[i] === "computer") {
        count += 1 
     }
}

//#2
console.log(count)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log("old enough")
      } else {
          console.log("not old enough")
      }
  }

  for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.  Hurray!!")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough..... Boo hoo hoo")
    }
}

for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to enter.  She will have fun!!!")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to enter.  He will have fun!!!")
        }
    } else {
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough for this movie.  She will have to wait outside...")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough for this movie.  He will have to wait outside...")
        }
    }
}
//optional bonus
var pushes = 0
var sample1 = [2, 5, 435, 4, 3]
var sample2 = [1, 1, 1, 1, 3]
var sample3 = [9, 3, 4, 2]

for(i = 0; i < sample1.length; i++) {
    pushes = pushes + sample1[i]
}
if(pushes % 2 === 0) {
    console.log("The light is OFF")
} else {
    console.log("The light is ON")
}

pushes = 0;

for(i = 0; i < sample2.length; i++) {
    pushes = pushes + sample2[i]
}
if(pushes % 2 === 0) {
    console.log("The light is OFF")
} else {
    console.log("The light is ON")
}
pushes = 0;

for(i = 0; i < sample3.length; i++) {
    pushes = pushes + sample3[i]
}
if(pushes % 2 === 0) {
    console.log("The light is OFF")
} else {
    console.log("The light is ON")
}