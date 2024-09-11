export default {
  indeksszer: function (szerokosc) {
    var szerokoscm= szerokosc_input.text;
		
		if (szerokoscm > 0 && szerokoscm <=1000) {var szerm = 1000;}	
		else if (szerokoscm > 1000 && szerokoscm <=1250) {var szerm = 1250 ;}
		else if (szerokoscm > 1250 && szerokoscm <=1500) {var szerm = 1500 ;}
		else if (szerokoscm > 1500 && szerokoscm <=1750) {var szerm = 1750 ;}
		else if (szerokoscm > 1750 && szerokoscm <=2000) {var szerm = 2000 ;}
		else if (szerokoscm > 2000 && szerokoscm <=2250) {var szerm = 2250 ;}
		else if (szerokoscm > 2250 && szerokoscm <=2500) {var szerm = 2500 ;}
		else if (szerokoscm > 2500 && szerokoscm <=2750) {var szerm = 2750 ;}
		return szerm;
  },
	
	 indekswys: function (wys) {
    var szerokoscm2 = wysokosc_input.text;
		 var szerm55
		if (szerokoscm2 > 0 && szerokoscm2 <=1000) {var szerm55 = 1000;}	
		else if (szerokoscm2 > 1000 && szerokoscm2 <=1250) {var szerm55 = 1250 ;}
		else if (szerokoscm2 > 1250 && szerokoscm2 <=1500) {var szerm55 = 1500 ;}
		else if (szerokoscm2 > 1500 && szerokoscm2 <=1750) {var szerm55 = 1750 ;}
		else if (szerokoscm2 > 1750 && szerokoscm2 <=2000) {var szerm55 = 2000 ;}
		else if (szerokoscm2 > 2000 && szerokoscm2 <=2250) {var szerm55 = 2250 ;}
		else if (szerokoscm2 > 2250 && szerokoscm2 <=2500) {var szerm55 = 2500 ;}
		else if (szerokoscm2 > 2500 && szerokoscm2 <=2750) {var szerm55 = 2750 ;}
		return szerm55;
  },
	
	
	
};
