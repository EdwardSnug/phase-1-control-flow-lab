function scuberGreetingForFeet(distance) {
  // Write your code here!
  if (distance <= 400) {
    let returnMsg = `This one is on me!`;
    return returnMsg;
  } else if (distance < 2000) {
    let returnMsg = `That will be twenty bucks.`;
    return returnMsg;
  } else if (distance <= 2500) {
    let returnMsg = `I will gladly take your thirty bucks.`;
    return returnMsg;
  } else if (distance > 2500) {
    let returnMsg = `No can do.`;
    return returnMsg;
  }
}

function ternaryCheckCity(myCity) {
  // Write your code here!
  let str;
  str = myCity == 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return str;
}

function switchOnCharmFromTip(tipFee) {
  // Write your code here!
  let msg;
  switch (tipFee) {
    case "generous":
      msg = "Thank you so much.";
      return msg;
      break;
    case "not as generous":
      msg = "Thank you.";
      return msg;
      break;
    default:
      msg = "Bye.";
      return msg;
  }
}