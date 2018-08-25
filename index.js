function scuberGreetingForFeet(distance) {
  let result;
  
  if (distance >= 0 && distance <= 400 ) {
    result = 'This one is on me!';
  }
  else if (distance > 2000 && distance <= 2500) {
    result = 'I will gladly take your thirty bucks.'
  }
  
  return result
}