

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
   erro()
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
   erro()
  }
}


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
    var aux=(hex+(key%255)).toString(16);
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
    var aux=(hex-(key%255)).toString(16);
	    ar.push(aux);
	 }
 res=hex_to_ascii(ar.join(''));

  }else{
   erro()
  }

}

document.getElementById("result2").innerHTML=res
 }

 function erro(){
 return alert("Falta dados a serem inseridos")
 }



    function sdes(){

  var msg = document.getElementById("msg").value;
  var key = document.getElementById("key").value;
  var cri = document.getElementById("cri").checked;
  var dec = document.getElementById("de").checked;
  var auxres =[]
  var auxres2 =[]
  

    var ck=[]
  ck=configkey(key,msg)

  var k01=ck[0];
  var k02=ck[1];

console.log(k01)
console.log(k02)

  if(cri){
console.log("----------criptografando----------")
for(var i=0;i<msg.length;i++){
  
var p1=AsciitoBinary(msg[i])
var p2=ip(p1)
var p3= fk(p2,k01)
var p4=sw(p3)
console.log("SW "+p4)
console.log("--------------------")
var p5= fk(p4,k02)
var p6=ipn1(p5)
auxres[i]=BinarytoAscii(p6);

console.log(p6)
console.log(auxres[i])

}console.log("res: "+auxres)


  }else{
      if(de){
console.log("----------descriptografando----------")

for(var j=0;j<msg.length;j++){

var p1=AsciitoBinary(msg[j])
var p2=ip(p1)
var p3= fk(p2,k02)
var p4=sw(p3)
console.log("SW "+p4)
console.log("--------------------")
var p5= fk(p4,k01)
var p6=i
res=auxres2.join('');
      }else{
          erro()
      }

  }

document.getElementById("result2").innerHTML=res;

}
function configkey(k,bts){
     var p010=p10(k)

var aux=ls1e(p010)+ls1d(p010)


var p08=p8(aux)
var k1=p08

var aux2=ls2e(aux)+ls2d(aux)
var p18=p8(aux2)
var k2=p18

var res=[]
res[0]=k1
res[1]=k2


return res
}

function ls1e(bts){
 var aux=[]
 aux[0]=bts[1]
 aux[1]=bts[2]
 aux[2]=bts[3]
 aux[3]=bts[4]
 aux[4]=bts[0]
 return aux.join('');
}
function ls1d(bts){
 var aux=[]
 aux[0]=bts[6]
 aux[1]=bts[7]
 aux[2]=bts[8]
 aux[3]=bts[9]
 aux[4]=bts[5]
 return aux.join('');
}

function ls2e(bts){
 var aux=[]
 aux[0]=bts[2]
 aux[1]=bts[3]
 aux[2]=bts[4]
 aux[3]=bts[0]
 aux[4]=bts[1]
 return aux.join('');

}
function ls2d(bts){
 var aux=[]
 aux[0]=bts[7]
 aux[1]=bts[8]
 aux[2]=bts[9]
 aux[3]=bts[5]
 aux[4]=bts[6]
 return aux.join('');

}


function sw(bts){
  var r=[]
  r[0]=bts[4]
  r[1]=bts[5]
  r[2]=bts[6]
  r[3]=bts[7]
  r[4]=bts[0]
  r[5]=bts[1]
  r[6]=bts[2]
  r[7]=bts[3]

  return r.join('');  
}


function fk(bts,k1){
   var a //recebe os primeiros 4 bits do ip
   var b //recebe os primeiros 4 bits do ip

   var aux =[]
   aux[0]=bts[0]
   aux[1]=bts[1]
   aux[2]=bts[2]
   aux[3]=bts[3]
   a=aux.join('');

    var aux2 =[]
   aux2[0]=bts[4]
   aux2[1]=bts[5]
   aux2[2]=bts[6]
   aux2[3]=bts[7]
   b=aux2.join('');

  var fk=a //guarda o digito para o ou
 console.log("bts "+bts)
  console.log("esquerda "+a)
  console.log("direita "+b)
  console.log("fk "+fk)


 var e0p=ep(b)


 var x=ou(k1,e0p)


   aux2[0]=x[0]
   aux2[1]=x[1]
   aux2[2]=x[2]
   aux2[3]=x[3]


   aux[0]=x[4]
   aux[1]=x[5]
   aux[2]=x[6]
   aux[3]=x[7]


  var e=aux2.join('')//esquerda
  var d=aux.join('')//direita
  var aux0=[]
  aux0[0]=s0(e)

  aux0[1]=s1(d)
  
  var p0=aux0.join('');

   console.log("s0s1: "+p0)

 var p1= p4(p0)


  var r=ou(p1,fk)
  var res=r+b
  console.log("reusultado bloco Fk: "+res)
   return res
}



function s0(bts){
  var l
  var aux=[]
  aux[0]=bts[0]
  aux[1]=bts[3]
  var linha 
  var c
  var aux2=[]
  aux2[0]=bts[1]
  aux2[1]=bts[2]
  var coluna 

  if(aux[0]==0&&aux[1]==0){
  linha=0
  }else{
    if(aux[0]==0&&aux[1]==1){
  linha=1
  }else{
    if(aux[0]==1&&aux[1]==0){
  linha=2
  }else{
    if(aux[0]==1&&aux[1]==1){
  linha=3
  }
  }}}




  if(aux2[0]==0&&aux2[1]==0){
  coluna=0
  }else{
    if(aux2[0]==0&&aux2[1]==1){
  coluna=1
  }else{
    if(aux2[0]==1&&aux2[1]==0){
  coluna=2
  }else{
    if(aux2[0]==1&&aux2[1]==1){
  coluna=3
  }
  }}}

  
  var mat = [ 
    [1, 0, 3, 2], 
    [3, 2, 1, 0], 
    [0, 2, 1, 3],
    [3, 1, 3, 2],
  ]; 
  /*
  console.log("linha "+linha)
  console.log("coluna "+coluna)
  console.log("mat[linha][coluna]: "+mat[linha][coluna])
  console.log(mat[linha][coluna].toString(2))

  */
  var ax=mat[linha][coluna].toString(2)

 ax=(0+ax).slice(-2) 
 
 // console.log("ax: "+ ax)
  return ax

}


function s1(bts){
  var l
  var aux=[]
  aux[0]=bts[0]
  aux[1]=bts[3]
  var linha 
  var c
  var aux2=[]
  aux2[0]=bts[1]
  aux2[1]=bts[2]
  var coluna 

  if(aux[0]==0&&aux[1]==0){
  linha=0
  }else{
    if(aux[0]==0&&aux[1]==1){
  linha=1
  }else{
    if(aux[0]==1&&aux[1]==0){
  linha=2
  }else{
    if(aux[0]==1&&aux[1]==1){
  linha=3
  }
  }}}




  if(aux2[0]==0&&aux2[1]==0){
  coluna=0
  }else{
    if(aux2[0]==0&&aux2[1]==1){
  coluna=1
  }else{
    if(aux2[0]==1&&aux2[1]==0){
  coluna=2
  }else{
    if(aux2[0]==1&&aux2[1]==1){
  coluna=3
  }
  }}}



  var mat = [ 
    [0, 1, 2, 3], 
    [2, 0, 1, 3], 
    [3, 0, 1, 0],
    [2, 1, 0, 3],
  ]; 

  /*
  console.log("linha "+linha)
  console.log("coluna "+coluna)
  console.log("mat[linha][coluna]: "+mat[linha][coluna])
  console.log(mat[linha][coluna].toString(2))

  */
  var ax=mat[linha][coluna].toString(2)

  ax=(0+ax).slice(-2) 
 
  //console.log("ax: "+ ax)
  return ax

}

function AsciitoBinary(str) {
		var result = "";
    
		for (var i = 0; i < str.length; i++) {
   
      var b=str[i].charCodeAt()
      if(b>0){
        i++
        }
			var bin = b.toString(2);
			result += Array(8 - bin.length + 1).join("0") + bin;
		} 
		return result;
}


function BinarytoAscii (str) {
		var result = "";
		var arr = str.match(/.{1,8}/g);
		for (var i = 0; i < arr.length; i++) {

			result += String.fromCharCode(parseInt(arr[i], 2).toString(10));
		}
		return result;
}

function p4(bts){
 var r=[]
 r[0]=bts[1]
 r[1]=bts[3]
 r[2]=bts[2]
 r[3]=bts[0]
 return r.join('');
}

function p10(k){

  var r=[]

  r[0]=k[2]
  r[1]=k[4]
  r[2]=k[1]
  r[3]=k[6]
  r[4]=k[3]
  r[5]=k[9]
  r[6]=k[0]
  r[7]=k[8]
  r[8]=k[7]
  r[9]=k[5]

  return r.join('');
}


function p8(k){

  var r=[]

  r[0]=k[5]
  r[1]=k[2]
  r[2]=k[6]
  r[3]=k[3]
  r[4]=k[7]
  r[5]=k[4]
  r[6]=k[9]
  r[7]=k[8]

  return r.join('');
}


function ip(k){
  var r=[]
  r[0]=k[1]
  r[1]=k[5]
  r[2]=k[2]
  r[3]=k[0]
  r[4]=k[3]
  r[5]=k[7]
  r[6]=k[4]
  r[7]=k[6]

  return r.join('');
}

function ipn1(k){
  var r=[]
  r[0]=k[3]
  r[1]=k[0]
  r[2]=k[2]
  r[3]=k[4]
  r[4]=k[6]
  r[5]=k[1]
  r[6]=k[7]
  r[7]=k[5]

  return r.join('');
}

function ou(a,b){
    var aux=[]
    
  for(var i=0;i<a.length;i++){
  
  aux[i]=(a[i] ^ b[i])

  }
  //console.log("aux "+aux)
  return aux.join('');
}


function ep(bts){
  var aux=[]
  aux[0]=bts[3]
  aux[1]=bts[0]
  aux[2]=bts[1]
  aux[3]=bts[2]
  aux[4]=bts[1]
  aux[5]=bts[2]
  aux[6]=bts[3]
  aux[7]=bts[0]
  return aux.join('');
}


function hex_to_ascii(str1){
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
}

function ascii_to_hexa(str){
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
}
