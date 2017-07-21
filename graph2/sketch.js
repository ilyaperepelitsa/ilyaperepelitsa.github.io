function setup() {
 	img = loadImage("ava.jpg"); 
 	
	}




function draw() {
   createCanvas(windowWidth, windowHeight);
  //stroke(255);
  
   background(255);
   
   
   image(img, 0 + width/18, height/6,  img.width/2, img.height/2);
   textStyle(NORMAL);
   
   noFill();
   stroke(255);
   strokeWeight(24.0); 
   ellipse(img.width/4+ width/18, height/6 +  img.width/4, img.width * 0.6,  img.height * 0.6);

   fill(69);
   noStroke();
   textSize(30);
   text("pewgme", img.width/4 + width/10, height/6 + img.height/6);
  
   
   
   image(img, 0 + width/1.8, height/6,  img.width/2, img.height/2);
   textStyle(NORMAL);
   
   noFill();
   stroke(255);
   strokeWeight(24.0); 
   ellipse(img.width/4+ width/1.8, height/6 +  img.width/4, img.width * 0.6,  img.height * 0.6);
  
   fill(69);
   noStroke();
   textSize(30);
   text("pewgme", img.width/4 + width/1.65, height/6 + img.height/6);
  

   
   
   
   textSize(24);
   noStroke();
   fill(69);
   textStyle(BOLD);
   text("72", img.width/4 + width/10, height/5 + img.height/5.5);
   textStyle(NORMAL);
   noStroke();
   fill(69);
   text("     posts", img.width/4 + width/10, height/5 + img.height/5.5);
   
   textStyle(BOLD);
   text("97", img.width/4 + width/5, height/5 + img.height/5.5);
   textStyle(NORMAL);
   noStroke();
   fill(69);
   text("     followers", img.width/4 + width/5, height/5 + img.height/5.5);
   
   
   textStyle(BOLD);
   text("67", img.width/4 + width/3, height/5 + img.height/5.5);
   textStyle(NORMAL);
   noStroke();
   fill(69);
   text("     following", img.width/4 + width/3, height/5 + img.height/5.5);
   
   
   
   
   textSize(24);
   noStroke();
   fill(69);
   textStyle(BOLD);
   text("72", img.width/4 + width/1.66, height/5 + img.height/5.5);
   textStyle(NORMAL);
   noStroke();

   
   textStyle(BOLD);
   fill(23, 127, 0);
   text("296", img.width/4 + width/1.5, height/5 + img.height/5.5);
   textStyle(NORMAL);
   noStroke();

   
   
   textStyle(BOLD);
   fill(42, 99, 30);
   text("1,397", img.width/4 + width/1.36, height/5 + img.height/5.5);
   textStyle(NORMAL);
   noStroke();

   //ellipse(img.width/4, height/2 +  img.width/2, 3 * img.width/4, 3 * img.height/4);
   
   
   fill(69);
   noStroke();
   textSize(80);
   text("Bot games",50,80);
   
   fill(69);
   noStroke();
   textSize(50);
   text("Getting banned on Instagram... for science!",50,140);
}