function parallel() {
	// Build a parallel projection matrix, for a 16/9 viewport, with halfwidth w=40, near plane n=1, and far plane f=101.
	var out = [1/40,		0.0,		0.0,		0.0,
			   0.0,		16/360,		0.0,		0.0,
			   0.0,		0.0,		-2/100,		-102/100,
			   0.0,		0.0,		0.0,		1];



	return out;
}

