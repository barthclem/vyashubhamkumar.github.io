var running_feet = 0;
var wall_area = 0;
var f_width = 0;
var f_lenght = 0;
var door_space = 0;

//Cac2 req...
var line_height_vert = 0;
var line_width_horiz = 0;
var tile_height = 0;
var tile_width = 0;

var step = 0;

function reset_function()
{
	running_feet = 0;
	wall_area = 0;
	f_width = 0;
	f_lenght = 0;
	door_space = 0;

	//Cac2 req...
	line_height_vert = 0;
	line_width_horiz = 0;
	tile_height = 0;
	tile_width = 0;

	step = 0;
	document.getElementById("first_button").className = "btn btn-primary form-control margin-Top";

	document.getElementById("form_1").reset();
	document.getElementById("form_2").reset();

	alert("Reset Complete");
	return 0;
}

function calc() {

	if(step == 0)
	{
	 	f_width = document.getElementById("floor-width").value;
	 	f_lenght =document.getElementById("floor-length").value;
	 	w_height = document.getElementById("wall-height").value;
	 	door_space = document.getElementById("door-space").value;

		f_width = parseFloat(f_width);
		f_lenght = parseFloat(f_lenght);
		w_height = parseFloat(w_height);
		door_space = parseFloat(door_space);


		var add =f_width+f_lenght;

		add = add * 2;

		var sub = add - door_space;

		running_feet = sub;

		wall_area = sub * w_height ; 

		document.getElementById("Rfeet").innerHTML= "Running-Feet : "  + running_feet ;
		document.getElementById("T-area").innerHTML= "Total-Area : "+ wall_area +" S.ft.";
		alert("Done");
		document.getElementById("first_button").className = document.getElementById("first_button").className +" disabled";
		step = step + 1;
	}
	
}

function calc2() {

	var num_of_boxes = 0;
	var total_tiles = 0;
	var tiles_per_box = 0;

	if(step == 1)
	{
		w_height = w_height * 12;
		running_feet = running_feet *12;
	}

	tile_height = document.getElementById("tile-height").value;
	tile_width = document.getElementById("tile-width").value;
	tiles_per_box = document.getElementById("n_tiles").value;

	tile_height = parseFloat(tile_height);
	tile_width = parseFloat(tile_width);
	tiles_per_box = parseFloat(tiles_per_box);


	line_height_vert = w_height/tile_height;
	line_width_horiz = running_feet/tile_width;


	//alert(line_height_vert +" ^ Verticle lines");
	//alert(line_width_horiz +" > Horizontal lines");


	total_tiles = parseInt(line_width_horiz) * parseInt(line_height_vert);

	num_of_boxes = total_tiles/tiles_per_box;

	//alert(num_of_boxes);

	if(step == 1)
	{
		//document.getElementById("V-lines").innerHTML= document.getElementById("V-lines").innerHTML  +" "+line_height_vert+" Lines";
		//document.getElementById("H-lines").innerHTML= document.getElementById("H-lines").innerHTML  +" "+line_width_horiz+" Lines";
		//document.getElementById("Boxes").innerHTML= document.getElementById("Boxes").innerHTML  +" "+parseInt(num_of_boxes)+" Boxes";
		document.getElementById("V-lines").innerHTML= "^ Vertical Tiles : "+parseFloat((line_height_vert * 100) / 100).toFixed(2)+" Tiles";
		document.getElementById("H-lines").innerHTML= "&gt Horizontal Tiles : "+parseFloat((line_width_horiz * 100) / 100).toFixed(2)+" Tiles";	
		document.getElementById("Boxes").innerHTML= "Number of Boxes : "+parseFloat((num_of_boxes * 100) / 100).toFixed(2)+" Boxes";	
		alert("Done");
		step = step + 1;
	}
	else
	{
		document.getElementById("V-lines").innerHTML= "^ Vertical Tiles : "+line_height_vert+" Tiles";
		document.getElementById("H-lines").innerHTML= "&gt Horizontal Tiles : "+line_width_horiz+" Tiles";	
		document.getElementById("Boxes").innerHTML= "Number of Boxes : "+parseFloat((num_of_boxes * 100) / 100).toFixed(2)+" Boxes";	
		alert("Done");	

	}

	document.getElementById("eg").style.width = tile_width+"0px";
	document.getElementById("eg").style.height = tile_height+"0px";


}