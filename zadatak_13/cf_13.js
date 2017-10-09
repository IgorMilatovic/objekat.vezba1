

// OBJEKTI

var telefon = {
	vrsta: "mobilni",
	brend: "Nokia",
	punjac: "punjac off",
	baterija: 1000,
	display: 5.5,
	zvono: 0,
	mikrofon: "mikrofon off",
	zvucnik: "zvucnik off",

	punjenje() {
		if (telefon.baterija <= 1500) {
			punjac = "punjac on";
		}
		else {
			punjac = "punjac off";
		}
		console.log(punjac);
	},

	odgovor() {
		if (telefon.zvono === 1) {
			mikrofon = "mikrofon on";
			zvucnik = "zvucnik on";
		}
		else {	
			mikrofon = "mikrofon off";
			zvucnik = "zvucnik off";
	    }
		console.log(mikrofon, zvucnik);
	}
};

telefon.punjenje();

// telefon.odgovor();














