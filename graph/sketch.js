  var state_colors = [];
	for (var n = 0; n < 51; n++){
		var one_state = [];
		for (var m = 0; m < 3; m++){
			one_state.push(Math.floor(Math.random() * (255 - 100) + 100));
					}
		state_colors.push(one_state);
		
	}
	console.log(state_colors);

  var cause_colors = [];
	for (var n = 0; n < 16; n++){
		var one_cause = [];
		for (var m = 0; m < 3; m++){
			one_cause.push(Math.floor(Math.random() * (255 - 100) + 100));
					}
		cause_colors.push(one_cause);
		
	}
	console.log(cause_colors);
	

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("data/state_cause.csv", "csv", "header");
  console.log(table);
  

}

function setup() {
	
	
	
//THIS IS JUST GENERAL EXAMPLES ABOUT LOOPING THROUGH ROWS AND COLUMNS
  //count the columns
   console.log(table.getRowCount() + " total rows in table");
   console.log(table.getColumnCount() + " total columns in table");



   unique = function(itm, i, table) {
    return i == table.indexOf(itm);
		};

	var causes = table.getColumn(1).filter(function(item, i, ar){ return ar.indexOf(item) === i; });
	console.log(causes.length);

	causes.forEach(function(item) {
		var o = document.createElement("option");
		o.textContent = item;
		document.getElementById("causes").appendChild(o);
	});


	var states = table.getColumn(2).filter(function(item, i, ar){ return ar.indexOf(item) === i; });
	console.log(states.length);

	states.forEach(function(item) {
		var o = document.createElement("option");
		o.textContent = item;
		document.getElementById("states").appendChild(o);
	});





}
	//var select = document.getElementById("selector");
	//select.innerHTML = "";

	//var i = 0
	//for(i = 0; i < unique.length; i++) {

	//	console.log(i);
		//var opt = char(unique[i]);
		//select.innerHTML += "<option value=\"" + opt + "\>" + opt + "</option>";
	//}

		//console.log(table.getColumn(1));
  // console.log(table.getColumn("name"));

  //cycle through the table
//   for (var r = 0; r < table.getRowCount(); r++)
//     for (var c = 0; c < table.getColumnCount(); c++) {
//       // console.log(table.getString(r, c));
//     }
function draw() {
   
   createCanvas(windowWidth, windowHeight);
   stroke(255);
   text("Share of causes of death in the U.S.",20,20);
   //stroke(255);
   background(40);




  if(document.filter_form.filter[0].checked){
   // code for all causes
   var state = document.getElementById("states");
   state = state.options[state.selectedIndex].text;
   var newRows = table.findRows(state, "STATE");


   var inputX = maxX(newRows);
   //console.log(inputX);

   makeAxis(inputX);

   var causeList = [];
   for (var i = 0; i < newRows.length; i ++){
	   var pew = newRows[i];
	   //console.log(pew);

	for (var i = 0; i < newRows.length; i++) {
	     //console.log(newRows[i].getString("CAUSE_NAME"));
     	//IT GETS THINGS READY TO DRAW
      var countryName = newRows[i].getString("CAUSE_NAME");
       //console.log(countryName);
        textAlign(RIGHT,CENTER);
        var startYpoint = 0;
        //stroke(random(0, 255), random(0, 255), random(0, 255));
        var thisStroke = cause_colors[i];
        stroke(thisStroke[0], thisStroke[1], thisStroke[2]);
        fill(0);
        noFill();
        beginShape();
         //THEN IT LOOPS THROUGH COLUMNS TO GET THE POINTS FOR THAT COUNTRY
        for (var c = 1999; c < 2014; c++) {
          var theYear = c;
          var Yvalue = Number(newRows[i].getString(String(theYear)))
          //console.log(Yvalue);
          if(!isNaN(Yvalue) && Yvalue > 0) {
            var Xpoint = map(theYear,1999, 2013, 150, width-50);
            var Ypoint = map(Yvalue,0, inputX, height-50,50);
            ellipse(Xpoint,Ypoint,8,8);
            if(startYpoint === 0) {
              startYpoint = Yvalue;
              strokeWeight(1);
              text(countryName,Xpoint-10,Ypoint);
              strokeWeight(2);
              curveVertex(Xpoint,Ypoint);
              curveVertex(Xpoint,Ypoint);
            } else if (c == table.getColumnCount() - 1) {
	          strokeWeight(2);
              curveVertex(Xpoint,Ypoint);
              curveVertex(Xpoint,Ypoint);
              } else {
	          strokeWeight(2);
              curveVertex(Xpoint,Ypoint);

            }
          }

        }
        endShape();

     }
   }

   //var finalColumn = newRows.getColumn("CAUSE_NAME");
   //console.log(newRows);
   //console.log(newRows);
   //console.log(state);

   } else if (document.filter_form.filter[1].checked){
   // code for all states
   var cause = document.getElementById("causes");
   cause = cause.options[cause.selectedIndex].text;
   var newRows = table.findRows(cause, "CAUSE_NAME");

    var inputX = maxX(newRows);
   //console.log(inputX);

    makeAxis(inputX);


    for (var i = 0; i < newRows.length; i++) {
	     //console.log(newRows[i].getString("CAUSE_NAME"));
     	//IT GETS THINGS READY TO DRAW
      var countryName = newRows[i].getString("STATE");
       //console.log(countryName);
        textAlign(RIGHT,CENTER);
        var startYpoint = 0;
        var thisStroke = state_colors[i];
        stroke(thisStroke[0], thisStroke[1], thisStroke[2]);
        fill(0);
        noFill();
         beginShape();
         //THEN IT LOOPS THROUGH COLUMNS TO GET THE POINTS FOR THAT COUNTRY
        for (var c = 1999; c < 2014; c++) {
          var theYear = c;
          var Yvalue = Number(newRows[i].getString(String(theYear)))
          //console.log(Yvalue);
          if(!isNaN(Yvalue) && Yvalue > 0) {
            var Xpoint = map(theYear,1999, 2013, 150, width-50);
            var Ypoint = map(Yvalue,0, inputX, height-50,50);
            ellipse(Xpoint,Ypoint,8,8);
            if(startYpoint === 0) {
              startYpoint = Yvalue;
              strokeWeight(1);
              text(countryName,Xpoint-10,Ypoint);
              strokeWeight(2);
              curveVertex(Xpoint,Ypoint);
              curveVertex(Xpoint,Ypoint);
            } else if (c == table.getColumnCount() - 1) {
	          strokeWeight(2);
              curveVertex(Xpoint,Ypoint);
              curveVertex(Xpoint,Ypoint);
              } else {
	          strokeWeight(2);
              curveVertex(Xpoint,Ypoint);

            }
          }

        }
        endShape();

     }
   //console.log(cause);
   }



  // var pew = new p5.Table(newRows);
   //onsole.log(pew);

//the drawing of axes is now in a separate functions. You don't need to touch that.


//Here is an array for countries (by rownumber)


//HERE IS THE CODE FOR DRAWING THE COUNTRIES
//IT STARTS BY GOING LOOPS THROUGH ROWS

}





// function draw() {
// don't need draw to run
// }

function makeAxis(inMax) {
	stroke(255);
    //draw xaxis
    line(150,height-50,width-50,height-50);
    //draw yaxis
    line(150,50,150,height-50);
    //xaxis vaules
    for(var i = 0; i < inMax * 1.2; i = i + 5) {
      //rounding is here because of floating point issue
      var rounded = Math.round(i);
      //console.log(rounded);
      yvalue = map(i,inMax,height-50,50);
      textAlign(RIGHT,CENTER)
      text(rounded,140,yvalue);
      line(145,yvalue,155,yvalue);

    }
    //yaxis values
     for (var c = 1999; c < 2014; c++) {
       //number() is here, though might not need
       var myYear = c;
   //    console.log(myYear);
       var xvalue = map(myYear,1999,2013,150,width-50)
      // console.log(table.columns[c]);
       textAlign(CENTER,BOTTOM);
       text(myYear,xvalue,height-30);
       line(xvalue,height-55,xvalue,height-45);

     }
}

function maxX(someArray) {
	var top_x = 0;
	for(var check_row = 0; check_row < someArray.length; check_row ++){
		for (var year = 1999; year < 2014; year++) {
          var check_value = Number(someArray[check_row].getString(String(year)));
		  if(check_value > top_x){
		  	top_x = check_value;
		  }
		  }
	}

	return top_x;
}
