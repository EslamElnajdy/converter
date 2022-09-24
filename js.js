let bin = document.querySelector(".bb");
let oct = document.querySelector(".oo");
let dec = document.querySelector(".dd");
let hex = document.querySelector(".hh");
let inp = document.querySelector(".in");
let syt = document.querySelector(".sss");
let convv = document.querySelector(".conv");
let inpt = document.querySelector("input");
let noo1 = document.querySelector(".no1");
let noo2 = document.querySelector(".no2");
let noo3 = document.querySelector(".no3");
let noo4 = document.querySelector(".no4");
let n1 = document.querySelector(".n1");
let n2 = document.querySelector(".n2");
let n3 = document.querySelector(".n3");
let n4 = document.querySelector(".n4");
let midd = document.querySelector(".nn");

bin.addEventListener("click",()=>{
 syt.classList.toggle("cen");
 syt.classList.toggle("syt");
 inp.classList.toggle("all");
 oct.classList.toggle("all");
 dec.classList.toggle("all");
 hex.classList.toggle("all");
 convv.classList.toggle("all");
 noo2.classList.toggle("all");
 noo3.classList.toggle("all");
 noo4.classList.toggle("all");
 midd.classList.toggle("all");
 inpt.value = "";
 n1.textContent = "";
 n2.textContent = "";
 n3.textContent = "";
 n4.textContent = "";

});

oct.addEventListener("click",()=>{
    syt.classList.toggle("cen");
    syt.classList.toggle("syt");
    inp.classList.toggle("all");
    bin.classList.toggle("all");
    dec.classList.toggle("all");
    hex.classList.toggle("all");
    convv.classList.toggle("all");
    noo1.classList.toggle("all");
    noo2.classList.toggle("all");
    noo4.classList.toggle("all");
    midd.classList.toggle("all");
    inpt.value = "";
    n1.textContent = "";
    n2.textContent = "";
    n3.textContent = "";
    n4.textContent = "";
});

dec.addEventListener("click",()=>{
    syt.classList.toggle("cen");
    syt.classList.toggle("syt");
    inp.classList.toggle("all");
    oct.classList.toggle("all");
    bin.classList.toggle("all");
    hex.classList.toggle("all");
    convv.classList.toggle("all");
    noo1.classList.toggle("all");
    noo3.classList.toggle("all");
    noo4.classList.toggle("all");
    midd.classList.toggle("all");
    inpt.value = "";
    n1.textContent = "";
    n2.textContent = "";
    n3.textContent = "";
    n4.textContent = "";
});

hex.addEventListener("click",()=>{
    syt.classList.toggle("cen");
    syt.classList.toggle("syt");
    inp.classList.toggle("all");
    oct.classList.toggle("all");
    dec.classList.toggle("all");
    bin.classList.toggle("all");
    convv.classList.toggle("all");
    noo1.classList.toggle("all");
    noo2.classList.toggle("all");
    noo3.classList.toggle("all");
    midd.classList.toggle("all");
    inpt.value = "";
    n1.textContent = "";
    n2.textContent = "";
    n3.textContent = "";
    n4.textContent = "";
});

function one(x1,x2,x3)  {
    var number = inpt.value;
    if (number != ""){
    var newnumber = number.split("").reverse();
    var n = 0;
    var m = 0;
    newnumber.forEach((ele)=>{
        var k = ele*Math.pow(x1,n);
        m = m + k;
        n++;
    },100);
    
    n2.textContent =m;


     
    if(m !== 0){
        var b1 = [];
         var k1 = m;
       for (let f = 0; k1 !== 0;f++){
           b1[f] = k1%x2;
           k1 = parseInt(k1/x2);
       } ;
       if(x2===2){
        n1.textContent = b1.reverse().join("");   
       };
       if(x2===8){
       n3.textContent = b1.reverse().join("");}
    }
    else{
        if(x2===2){
            n1.textContent =m;   
        };
        if(x2===8){
        n3.textContent =m;};
     };
     if (m !== 0){
       var h1 = [];
       for (let f = 0; m !== 0;f++){
           h1[f] = m%x3;
           m = parseInt(m/x3);
         
       } ;if(x3===2){
        n1.textContent =h1.reverse().join(""); 
       };if(x3===16){
       n4.textContent =h1.reverse().join("");}}
     else {
        if(x3===2){
        n1.textContent =m;};
        if(x3===16){
            n4.textContent =m;};

 };
}};
function twe(x1,x2,x3) {
    var m = inpt.value;
    if (m != ""){
        if(m !== 0){

            var b1 = [];
             var k1 = m;
           for (let f = 0; k1 !== 0;f++){
               b1[f] = k1%x1;
               k1 = parseInt(k1/x1);
            } ;
            n1.textContent = b1.reverse().join("");}
        else{
             n1.textContent = m;
            };
        if(m !== 0){
            var b2 = [];
            var k2 = m;
            for (let f2 = 0; k2 !== 0;f2++){
            b2[f2] = k2%x2;
            k2 = parseInt(k2/x2);
        };
            n3.textContent = b2.reverse().join("");}
        else{
            n3.textContent = m;
        };

        if (m !== 0){
           var h1 = [];
           for (let f = 0; m !== 0;f++){
               h1[f] = m%x3;
               m = parseInt(m/x3);
             
           } ;
           n4.textContent = h1.reverse().join("");}
        else {
             n4.textContent = m;
        }   
    };   

};
convv.addEventListener("click",()=>{
    var binn = bin.className.includes("all");
    var octt = oct.className.includes("all");
    var decc = dec.className.includes("all");
    var hexx = hex.className.includes("all");
   
    if(binn === false){
       one(2,8,16);
      
    };
    if(octt === false){
        one(8,2,16);
       
     };
    if(decc === false){
        twe(2,8,16);
        
     };
    if(hexx === false){
        one(16,8,2);
       
     };
    
});




















// ####################################################
 
// oct.addEventListener("click",()=>{
//     syt.classList.toggle("cen")
//     syt.classList.toggle("syt")
//     inp.classList.toggle("all");
//     bin.classList.toggle("all");
//     dec.classList.toggle("all");
//     hex.classList.toggle("all");
//     convv.classList.toggle("all");
//    });

//    convv.addEventListener("click",()=>{
//     var number = inpt.value;
//     if (number != ""){
//     var newnumber = number.split("").reverse();
//     var n = 0;
//     var m = 0;
//     newnumber.forEach((ele)=>{
//         var k = ele*Math.pow(8,n);
//         m = m + k;
//         n++;
//     },100);
//     console.log(m);


     
//      if(m !== 0){
//         var b1 = [];
//          var k1 = m;
//        for (let f = 0; k1 !== 0;f++){
//            b1[f] = k1%8;
//            k1 = parseInt(k1/2);
//        } ;
//        console.log(b1.reverse().join(""));}
//      else{
//          console.log(m);
//      };
//      if (m !== 0){
//        var h1 = [];
//        for (let f = 0; m !== 0;f++){
//            h1[f] = m%16;
//            m = parseInt(m/16);
         
//        } ;
//        console.log(h1.reverse().join(""));}
//      else {
//          console.log(m);
//      };
// }
// });