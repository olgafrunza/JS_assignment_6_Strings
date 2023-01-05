// Assignment 1

function abreviation(str) {
  let newStr = str.split(" ");
  if (newStr.length > 1) {
    newStr = newStr[0].concat(" ", newStr[1][0], ".");
    return newStr;
  } else {
    return str;
  }
}
abreviation("John Doe");
abreviation("John");
abreviation("John Doe Marcus");

///////////////////////////////////////////

function abreviate(str) {
  let position = str.search(" ");
  if (position === -1) {
    return str;
  }
  let name = str.slice(0, position);
  let abbr = str[position + 1];
  return name + " " + abbr + ".";
}
abreviation("John Doe");
abreviation("John");
abreviation("John Doe Marcus");

// Assignment 2

function hideEmail(str) {
  let parts = str.split("@");
  let newStr = "";
  let half = Math.floor(parts[0].length / 2);
  let star = "*";
  star = star.repeat(parts[0].length - half);
  newStr += parts[0].slice(0, half) + star + "@" + parts[1];
  return newStr;
}
console.log(hideEmail("nurettin@clarusway.com"));
console.log(hideEmail("barry@clarusway.com"));

/////////////////////////////////////////////////////////////////////
function hideEmail(email) {
  let position = email.search("@");
  let name = email.slice(0, position);
  let mail = email.slice(position);
  let half = Math.floor(name.length / 2);
  let newName = name.slice(0, half);
  let stars = "*";
  stars = stars.repeat(name.length - half);
  return newName + stars + mail;
}
console.log(hideEmail("nurettin@clarusway.com"));
console.log(hideEmail("barry@clarusway.com"));

//Asiggnment 3

function capital(str) {
  let words = str.split(" ");
  let newStr = "";
  for (let i = 0; i < words.length; i++) {
    newStr += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase() + " ";
  }
  return newStr.trim();
}
capital("CLARUSWAY is a bOoTcAmP");
