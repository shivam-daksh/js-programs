
let rslt = document.getElementById('result');
let sbmit = document.getElementById('submit');
let clr = document.getElementById('clr');
let weight = document.getElementById('weight').value;
weight = Number(weight);
let height = document.getElementById('height').value;
height = Number(height);
let err = document.getElementsByClassName('error');



window.onkeyup = function(){
    let weight = document.getElementById('weight').value;
    weight = Number(weight);
    let height = document.getElementById('height').value;
    height = Number(height);
    let wterr = document.getElementById('wterr');
    let hterr = document.getElementById('hterr');
    let errinfo = document.getElementsByClassName('errinfo');
    if(weight<=0 || weight>500){
        err[0].style.color ='red';
        wterr.style.display="block";
        errinfo[0].style.display = "block";
    }
    else if(weight>0 || weight<=500){
        err[0].style.color ='white';
        errinfo[0].style.display = "none";
        
    }
    if(height<=0 || height>300){
        err[1].style.color ='red';
        errinfo[1].style.display = "block";
    }
    else if(height>0 || height<=3){
        err[1].style.color ='white';
        errinfo[1].style.display = "none";
        
    }
    // rslt.innerText = weight;
}



sbmit.onclick = function(){
    let weight = document.getElementById('weight').value;
    weight = Number(weight);
    let height = document.getElementById('height').value;
    height = Number(height);
    if(weight===0 || height===0) {
        alert('Please enter valid height (in m) and weight (in kg).');;
    }
    rslt.innerHTML = weight/(height)**2;
    clr.style.display = "inline-block";
};

    clr.onclick = function(){
    let weight = document.getElementById('weight');
    weight.value = '';
    let height = document.getElementById('height');
    height.value = '';
    clr.style.display = "none";
    rslt.innerHTML ="";
}
