let emt = [];
let elt = document.getElementsByClassName('ipt');
let rslt = document.getElementById('result');
function showResult(){
for(let i=0; i<elt.length; i++){
    emt[i] = Number(elt[i].value);
}
let det, a11, a12, a13;
a11 = (emt[4]*emt[8])-(emt[7]*emt[5]);
a12 = (emt[3]*emt[8])-(emt[6]*emt[5]);
a13 = (emt[3]*emt[7])-(emt[6]*emt[4]);
det = emt[0]*a11 - emt[1]*a12 + emt[2]*a13;
rslt.innerHTML = det;
}