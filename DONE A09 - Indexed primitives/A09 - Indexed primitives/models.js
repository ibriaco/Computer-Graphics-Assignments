function buildGeometry() {
	var i;
	
	// Draws a Cone --- Already done, just for inspiration
	///// Creates vertices
	var vert1 = [[0.0, 1.0, 0.0]];
	for(i = 0; i < 36; i++) {
		vert1[i+1] = [Math.sin(i*10.0/180.0*Math.PI), -1.0, Math.cos(i*10.0/180.0*Math.PI)];
	}
	vert1[37] = [0.0, -1.0, 0.0]
	////// Creates indices
	var ind1 = [];
	//////// Upper part
	j = 0;
	for(i = 0; i < 36; i++) {
		ind1[j++] = 0;
		ind1[j++] = i + 1;
		ind1[j++] = (i + 1) % 36 + 1;
	}
	//////// Lower part
	for(i = 0; i < 36; i++) {
		ind1[j++] = 37;
		ind1[j++] = (i + 1) % 36 + 1;
		ind1[j++] = i + 1;
	}
	
	var color1 = [1.0, 0.0, 0.0];
	addMesh(vert1, ind1, color1);






	// Draws a Cylinder -- To do for the assignment.
	var vert2 = [[0.0,1.0,0.0]];
	// Creates vertices
	for(i = 0; i < 36; i++) {
		vert2[i+1] = [Math.sin(i*10.0/180.0*Math.PI), 1.0, Math.cos(i*10.0/180.0*Math.PI)];
	}
	vert2[37] = [0.0, -1.0, 0.0]

	for(i = 37; i < 73; i++) {
		vert2[i+1] = [Math.sin((i - 37)*10.0/180.0*Math.PI), -1.0, Math.cos((i - 37)*10.0/180.0*Math.PI)];
	}

	var ind2 = [];
	j = 0;

	// Create two circles that will be the bottom part and the high portions of the cylinder
	for(i = 0; i < 36; i++) {
		// High portion 
		ind2[j++] = 0;
		ind2[j++] = (i) % 36 + 1;
		ind2[j++] = (i + 1) % 36 + 1;

		////// Bottom portion 
		ind2[j++] = (i + 1) % 36 + 1 + 37;
		ind2[j++] = (i) % 36 + 1 + 37;
		ind2[j++] = 37;
	}

	// Create the lateral part of the cylinder
	// Lateral part is made of 36 "rectangles" put next to each other 
	for(i = 0; i < 36; i++) {
		////// Triangles from top to bottom
		ind2[j++] = (i + 1) % 36 + 37 + 1;
		ind2[j++] = (i + 1) % 36 + 1;
		ind2[j++] = (i) % 36 + 1;

		////// Triangles from bottom to top		
		ind2[j++] = (i) % 36 + 38;
		ind2[j++] = (i + 1) % 36 + 38;
		ind2[j++] = (i + 1) ;
	}
	var color2 = [0.0, 0.0, 1.0];

	addMesh(vert2, ind2, color2);






	// Draws a Sphere --- Already done, just for inspiration
	var vert3 = [[0.0, 1.0,0.0]];
	///// Creates vertices
	k = 1;
	for(j = 1; j < 18; j++) {
		for(i = 0; i < 36; i++) {
			x = Math.sin(i*10.0/180.0*Math.PI) * Math.sin(j*10.0/180.0*Math.PI);
			y = Math.cos(j*10.0/180.0*Math.PI);
			z = Math.cos(i*10.0/180.0*Math.PI) * Math.sin(j*10.0/180.0*Math.PI);
			vert3[k++] = [x, y, z];
		}
	}
	vert3[k++] = [0.0,-1.0,0.0];
	
	////// Creates indices
	var ind3 = [];
	k = 0;
	///////// Lateral part
	for(i = 0; i < 36; i++) {
		for(j = 1; j < 17; j++) {
			ind3[k++] = i + (j-1) * 36 + 1;
			ind3[k++] = i + j * 36 + 1;
			ind3[k++] = (i + 1) % 36 + (j-1) * 36 + 1;

			ind3[k++] = (i + 1) % 36 + (j-1) * 36 + 1;
			ind3[k++] = i + j * 36 + 1;
			ind3[k++] = (i + 1) % 36 + j * 36 + 1;
		}
	}	
	//////// Upper Cap
	for(i = 0; i < 36; i++) {
		ind3[k++] = 0;
		ind3[k++] = i + 1;
		ind3[k++] = (i + 1) % 36 + 1;
	}
	//////// Lower Cap
	for(i = 0; i < 36; i++) {
		ind3[k++] = 577;
		ind3[k++] = (i + 1) % 36 + 540;
		ind3[k++] = i + 540;
	}
	
	var color3 = [0.0, 1.0, 0.0];
	addMesh(vert3, ind3, color3);
	
	
	
	
	
	// Draws a Torus -- To do for the assignment
	var vert4 = [];
	w = 0;
	
	//d is the major radius, the rotation radius
	d = 1;

	//r is the radius of every circle
	r = 0.5;

	//theta is the major rotation angle, and phi is the circle construction angle
	var theta;
	var phi;

	for(i = 0; i < 36; i++) {
		theta = i * 10.0 / 180.0 * Math.PI;		//calculate theta using the number of segments 

		for(j = 0; j < 36; j++) {
			phi = j * 10.0 / 180.0 * Math.PI;

			//calculate every x, y, z coordinate by using the parametric equation of a torus
			x = d * Math.cos(theta) + r * Math.cos(phi) * Math.cos(theta);
			y = d * Math.sin(theta) + r * Math.cos(phi) * Math.sin(theta)
			z = r * Math.sin(phi);;

			//put them into the vertices array
			vert4[w] = [x, y, z];
			w++;
		}
	}

	var ind4 = [];
	k = 0;
	//First lateral part
	//must start from 0, taking vertices like 0, 1, 36
	for(i = 0; i < 1296; i++) {
		
		ind4[k++] = (i + 36) % 1296;
		ind4[k++] = (i + 1) % 1296;
		ind4[k++] = i;		
	}

	//Second lateral part
	//must start from -1, taking vertices like 0, 36, 37
	for(i = -1; i < 1295; i++) {		
		ind4[k++] = (i + 36) % 1296;
		ind4[k++] = (i + 36 + 1) % 1296;
		ind4[k++] = (i + 1);
	}	

	var color4 = [1.0, 1.0, 0.0];
	addMesh(vert4, ind4, color4);
}

