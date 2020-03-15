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
    document.getElementById("title").innerHTML = "Dirichlet Density Theorem for n="+arg["n"];
    console.log("Animate", n, typeof n);


}
