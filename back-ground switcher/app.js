//// button function ----------

let open = document.getElementById('open');

let btn = document.getElementById('btn');

 btn.addEventListener('click' , function(){
      open.classList.toggle('menuclick');
 })


//-----------------------------

function bodychange(color){
    document.body.style.backgroundColor = color;
    
    var coltag  = document.getElementsByClassName('coltag');

    if(color == '#000000'){
        for(let elm of coltag){
            elm.style.color = 'white'
        };
    }else{
        for(let elm of coltag){
            elm.style.color = 'black'
        };
    }
}

