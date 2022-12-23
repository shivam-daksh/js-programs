// Assuming two arrays to container cofficients of both eqns
let eq1 =[];
let eq2 =[];
// Executing function on click
function calc(){
    let eqn = document.getElementsByClassName('ipt');
    //Importing class values to arrays
    for(let i = 0; i<3; i++){
        eq1[i] = Number(eqn[i].value);
    }
    for(let i = 3; i<6; i++){   
        eq2[i] = Number(eqn[i].value);
    }
    //Removing empty cells from eq2 array
    eq2.splice(0,3);
    //Mathematics
    let x,y, den, num1, num2;
    den = (eq1[0]*eq2[1])-(eq2[0]*eq1[1]);
    num1 = (eq2[1]*eq1[2])-(eq1[1]*eq2[2]);
    num2 = (eq1[0]*eq2[2])-(eq2[0]*eq1[2]);
    x = (num1/den);
    y = (num2/den);
    document.getElementById('xvalue').innerHTML = x;
    document.getElementById('yvalue').innerHTML = y;
    console.log('X = '+x);
    console.log('Y = ' +y);
    }
