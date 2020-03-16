function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var arg = getUrlVars();
var n = arg["n"];
console.log();
var indice = 0;
var prime = 1;
var primes_abs = [];
var primes_rel = [];

if(typeof n === 'undefined'){
    choose();
} else{
    n = parseInt(n);
    if(n<2){
        alert("The value for n enterd isn't possible to animate.");
    } else{
        if(n>25){
            alert("The value for n enterd isn't recomended.");
        }
        animate(n);
    }
    
}


function choose(){
    console.log('Choose n');
    document.getElementById("animation").style.display = "none";
}


function animate(n){
    document.getElementById("case_selection").style.display = "none";
    document.getElementById("case_title").innerHTML += n;
    console.log("Animate", n, typeof n);

    // get element
    let table = document.getElementById("maintable");
    var text = "";
    // head
    text += "<thead><tr><th>classes</th>";
    for(var i=0; i<n; i++){
        text += "<th>"+String(i)+"</th>";
    }
    text += "<th>mod "+String(n)+"</th></tr></thead>";
    // # primes
    text += "<tbody><tr><td>primes (#)</td>";
    for(var i=0; i<n; i++){
        text += '<td id="primes_abs_'+String(i+1)+'">'+String(0)+"</td>";
        primes_abs.push(0);
    }
    text += "</tr>";
    // % primes
    text += "<tr><td>primes (%)</td>";
    for(var i=0; i<n; i++){
        text += '<td id="primes_rel_'+String(i+1)+'">'+String(0)+"</td>";
        primes_rel.push(0);
    }
    text += "</tr></tbody>";
    // add changes
    table.innerHTML = text;

    setTimeout(next, 1000);

}


function update(){
    for(var i=0; i<n; i++){
        let x = primes_abs[i]/indice
        primes_rel[i] = Math.round(x*1000)/10;
        document.getElementById("primes_abs_"+String(i+1)).textContent = String(primes_abs[i]);
        document.getElementById("primes_rel_"+String(i+1)).textContent = String(primes_rel[i]);
    }
}

function next(){
    indice++;
    prime++;
    while(!is_prime(prime)){
        prime++;
    }
    document.getElementById("prime_indice").textContent = String(indice);
    document.getElementById("prime").textContent = String(prime);

    // console.log(indice,n);
    // console.log(indice%n);
    
    primes_abs[prime%n]+=1
    update();


    if(indice<1000){
        setTimeout(next, 1000);
    }
}




function is_prime(n){
    for(var i=2; i<=Math.sqrt(n); i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}