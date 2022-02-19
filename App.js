function Random(){

  var user = document.getElementById("userinput").value;

  var random = Math.floor(Math.random() * 10 + 1);

  var output = document.getElementById("image");

  var img = "";

  if(user > 10 || user < 1){
      document.getElementById("result").innerHTML = "Please pick a number between 1 - 10 :)";
      img = '<img class="resize" src="image1.png">';
      output.innerHTML = img;

  } else if(random > user){
      document.getElementById("result").innerHTML = "Too low! The random number was" + " " + random;
      img = '<img class="resize" src="image2.png">';
      output.innerHTML = img;

  } else if(random < user){
      document.getElementById("result").innerHTML = "Too high! The random number was" + " " + random;
      img = '<img class="resize" src="image3.png">';
      output.innerHTML = img;

  } else if(random == user){
      document.getElementById("result").innerHTML = "You Got It! CONGRATS!";
      img = '<img class="resize" src="image4.png">';
      output.innerHTML = img;

  }
}
