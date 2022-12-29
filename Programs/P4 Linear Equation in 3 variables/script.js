
function calc(){
let a1, a2, a3, b1, b2, b3, c1, c2, c3;
a1 = Number(document.getElementById('a1').value);
a2 = Number(document.getElementById('a2').value);
a3 = Number(document.getElementById('a3').value);
b1 = Number(document.getElementById('b1').value);
b2 = Number(document.getElementById('b2').value);
b3 = Number(document.getElementById('b3').value);
c1 = Number(document.getElementById('c1').value);
c2 = Number(document.getElementById('c2').value);
c3 = Number(document.getElementById('c3').value);
d1 = Number(document.getElementById('d1').value);
d2 = Number(document.getElementById('d2').value);
d3 = Number(document.getElementById('d3').value);

let detA, detX, detY, detZ;
detA = a1*((b2*c3)-(b3*c2))-b1*((a2*c3)-(a3*c2))+c1*((a2*b3)-(a3*b2));
detX = b1*((c2*d3)-(c3*d2))-c1*((b2*d3)-(b3*d2))+d1*((b2*c3)-(b3*c2));
detY = a1*((c2*d3)-(c3*d2))-c1*((a2*d3)-(a3*d2))+d1*((a2*c3)-(a3*c2));
detZ = a1*((b2*d3)-(b3*d2))-b1*((a2*d3)-(a3*d2))+d1*((a2*b3)-(a3*b2));

    x = (detX/detA);
    y = (detY/detA);
    z = (detZ/detA);
    document.getElementById('xvalue').innerHTML = x;
    document.getElementById('yvalue').innerHTML = y;
    document.getElementById('zvalue').innerHTML = z;
    console.log('X = '+x);
    console.log('Y = ' +y);
    console.log('Z = ' +z);
}