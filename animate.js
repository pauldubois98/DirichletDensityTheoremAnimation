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
            document.getElementById("animation").style.display="block"
        }
        animate(n);
    }
}


function choose(){
    console.log('Choose n');
    document.getElementById("animation").style.display = "none";
    document.getElementById("case_title").innerHTML = "Choose Case";
}


function animate(n){
    document.getElementById("case_selection").style.display = "none";
    document.getElementById("case_title").innerHTML = "Case Modulo "+n;
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
        text += '<td id="primes_abs_'+String(i)+'">'+String(0)+"</td>";
        primes_abs.push(0);
    }
    text += "</tr>";
    // % primes
    text += "<tr><td>primes (%)</td>";
    for(var i=0; i<n; i++){
        text += '<td id="primes_rel_'+String(i)+'">'+String(0)+"</td>";
        primes_rel.push(0);
    }
    // bars
    text += "<tr><td></td>";
    for(var i=0; i<n; i++){
        text += '<td class="top"><div class="full"><div class="bar" id="bar_'+String(i)+'">'+"</div></div></td>";
        primes_rel.push(0);
    }
    text += "</tr></tbody>";
    // add changes
    table.innerHTML = text;

    setTimeout(next, 1000);

}


function update(){
    for(var i=0; i<n; i++){
        primes_rel[i] = primes_abs[i]/indice;
        document.getElementById("primes_abs_"+String(i)).textContent = String(primes_abs[i]);
        document.getElementById("primes_rel_"+String(i)).textContent = String(Math.round(primes_rel[i]*1000)/10);
        document.getElementById("bar_"+String(i)).style.height = String(primes_rel[i]*300)+"px"; 
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

    
    primes_abs[prime%n]+=1
    update();


    if(indice<10){
        setTimeout(next, 1000);
    }else if(indice<20){
        setTimeout(next, 500);
    }else if(indice<50){
        setTimeout(next, 200);
    }else if(indice<100){
        setTimeout(next, 100);
    }else if(indice<1000){
        setTimeout(next, 50);
    }else if(indice<10000){
        setTimeout(next, 10);
    }else if(indice<100000){
        setTimeout(next, 1);
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