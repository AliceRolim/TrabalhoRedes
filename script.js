

function des(){
   var msg = document.getElementById("msg").value;
  var key = document.getElementById("key").value;
  var cri = document.getElementById("cri").checked;
  var dec = document.getElementById("de").checked;
  var res ="";

  var crp = "";
if(cri){
var encrypted = CryptoJS.DES.encrypt(msg, key);
crp="cri"
res=encrypted
}else{
  if(dec){
 var decrypted = CryptoJS.DES.decrypt(msg, key)
res=hex_to_ascii(decrypted);
 crp="dec"
  }else{
    alert("error!")
  }
}

document.getElementById("result2").innerHTML=res

}






function aes(){
  var msg = document.getElementById("msg").value;
  var key = document.getElementById("key").value;
  var cri = document.getElementById("cri").checked;
  var dec = document.getElementById("de").checked;
  var res ="";

  var crp = "";
if(cri){
var encrypted = CryptoJS.AES.encrypt(msg, key);
crp="cri"
res=encrypted
}else{
  if(dec){
 var decrypted = CryptoJS.AES.decrypt(msg, key);
res=hex_to_ascii(decrypted);

 crp="dec"
  }else{
    alert("error!")
  }
}


document.getElementById("result3").innerHTML=encrypted
document.getElementById("result").innerHTML=decrypted
document.getElementById("result2").innerHTML=res
 }





 function cesar(){
  var msg = document.getElementById("msg").value;
  var key = document.getElementById("key").value;
  var cri = document.getElementById("cri").checked;
  var dec = document.getElementById("de").checked;
  var res ="";
  var hex=""

  var ar = [];

 
  if(cri){
    var tam= msg.toString()
	for (var i = 0; i <  tam.length; i ++) 
     {
		 hex = Number(tam.charCodeAt(i))
    key= parseInt(key);
    var aux=(hex+(key%26)).toString(16);
	    ar.push(aux);
	 }
 res=hex_to_ascii(ar.join(''));


}else{
  if(dec){
   var tam= msg.toString()
	for (var i = 0; i <  tam.length; i ++) 
     {
		 hex = Number(tam.charCodeAt(i))
    key= parseInt(key);
    var aux=(hex-(key%26)).toString(16);
	    ar.push(aux);
	 }
 res=hex_to_ascii(ar.join(''));

  }else{
    alert("error!")
  }

}

document.getElementById("result2").innerHTML=res
 }



  function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }

 function ascii_to_hexa(str)
  {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   }