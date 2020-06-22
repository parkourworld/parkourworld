function makeMap(){
  
  var mapArray = [];
  
  mapArray.push(createSprite(random(85, 115),random(180, 220),30,10));
  mapArray.push(createSprite(random(185, 215),random(180, 220),30,10));
  mapArray.push(createSprite(random(285, 315),random(180, 220),30,10));
  mapArray.push(createSprite(random(385, 415),random(180, 220),30,10));
  mapArray.push(createSprite(random(485, 515),random(180, 220),30,10));
  
  return mapArray;
  
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   for(var i = 0; i < 5;i++){
//     if (i==0){
//       mapArray.push(createSprite(random(75, 75 + maxJumpDistance), random(275, maxJumpHeight), 30, 10));
//     }

//   }
// }


      // mapArray.push(createSprite(random(mapArray[i].position.x + 75, mapArray[i].position.x + 75 + maxJumpDistance), random(300, maxJumpHeight), 30, 10));