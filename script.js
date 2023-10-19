function decimalToBinary(num) {
  //Write you code here
	let out = "";
	while(num>=2){
		remainder = num%2;
		out = remainder + out ;
		num = parseInt(num/2) ;
	}
	if(num ===1){
		out = 1 + out ;
	}
  return out ;
}

window.decimalToBinary = decimalToBinary;
