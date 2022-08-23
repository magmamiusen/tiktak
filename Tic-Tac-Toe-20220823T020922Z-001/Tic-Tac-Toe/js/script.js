var p1 = false;
var p2 = false;
var pg = false;
document.getElementById("p1").addEventListener("click", function (){
    p1 = true;
    p2 = false;
})
document.getElementById("p2").addEventListener("click", function (){
    p2 = true;
    p1 = false;
})
var st;
st = document.getElementById("start");
st.addEventListener("click", start);
var clk = false;
var clkEnd = false;
function start(){
    if (p1 == false && p2 == false){
        alert("Debes Elegir Un Jugador");
    } else if (p1 == true && pg == false && clk == false) {
        document.getElementById("p1").classList.add("select");
        alert("Elegiste Al Jugador X")
        pg = true;
        st.innerText = "En Curso";
        document.getElementById("title").innerText = "Adelante!";
        clk = true
    } else if (p2 == true && pg == false && clk == false) {
        document.getElementById("p2").classList.add("select");
        alert("Elegiste El Jugador O")
        pg = true;
        st.innerText = "En Curso";
        document.getElementById("title").innerText = "Adelante!";
        clk = true
    } else if(clkEnd == false){ 
        alert("El Juego Esta En Curso");
    }else{
        alert("El Juego Se Reiniciara");
    }
}
var cb;
var x;
var sp = new Array;
cb = document.querySelectorAll("article");
cb[0].addEventListener("click", function(){ 
    x = 0;
    add();
})
cb[1].addEventListener("click", function(){
    x = 1;
    add();
})
cb[2].addEventListener("click", function(){
    x = 2;
    add();
})
cb[3].addEventListener("click", function(){
    x = 3;
    add();
})
cb[4].addEventListener("click", function(){
    x = 4;
    add();
})
cb[5].addEventListener("click", function(){
    x = 5;
    add();
})
cb[6].addEventListener("click", function(){
    x = 6;
    add();
})
cb[7].addEventListener("click", function(){
    x = 7;
    add();
})
cb[8].addEventListener("click", function(){
    x = 8;
    add();
})
function add(){
    if ( pg == true){
        if (p1 == true){
            cb[x].innerText = "x";
            p1 = false;
            p2 = true;
            document.getElementById("p1").classList.remove("select");
            document.getElementById("p2").classList.add("select");
            sp[x] = "x";
            view();
        } else{
            cb[x].innerText = "o";
            p2 = false;
            p1 = true;
            sp[x] = "o";
            document.getElementById("p2").classList.remove("select");
            document.getElementById("p1").classList.add("select");
            view(); 
        }
    }  
}
function view(){
    if(sp[0]+sp[1]+sp[2]=="xxx"||sp[3]+sp[4]+sp[5]=="xxx"||sp[6]+sp[7]+sp[8]=="xxx"||sp[0]+sp[3]+sp[6]=="xxx"||sp[1]+sp[4]+sp[7]=="xxx"||sp[2]+sp[5]+sp[8]=="xxx"){
        alert("El Jugador X Ha Ganado");
        end();
    }else if(sp[0]+sp[1]+sp[2]=="ooo"||sp[3]+sp[4]+sp[5]=="ooo"||sp[6]+sp[7]+sp[8]=="ooo"||sp[0]+sp[3]+sp[6]=="ooo"||sp[1]+sp[4]+sp[7]=="ooo"||sp[2]+sp[5]+sp[8]=="ooo"){
        alert("El Jugador O Ha Ganado");
        end();
    }else if(sp[0]+sp[3]+sp[6]=="xxx"||sp[1]+sp[4]+sp[7]=="xxx"||sp[2]+sp[5]+sp[8]=="xxx"||sp[0]+sp[3]+sp[6]=="xxx"||sp[1]+sp[4]+sp[7]=="xxx"||sp[2]+sp[5]+sp[8]=="xxx"){
        alert("El Jugador X Ha Ganado");
        end();
    }else if(sp[0]+sp[3]+sp[6]=="ooo"||sp[1]+sp[4]+sp[7]=="ooo"||sp[2]+sp[5]+sp[8]=="ooo"||sp[0]+sp[3]+sp[6]=="ooo"||sp[1]+sp[4]+sp[7]=="ooo"||sp[2]+sp[5]+sp[8]=="ooo"){
        alert("El Jugador O Ha Ganado");
        end();
    }else if(sp[0]+sp[4]+sp[8]=="ooo"||sp[2]+sp[4]+sp[6]=="ooo"){
        alert("El Jugador O Ha Ganado");
        end();
    }else if(sp[0]+sp[4]+sp[8]=="xxx"||sp[2]+sp[4]+sp[6]=="xxx"){
        alert("El Jugador X Ha Ganado");
        end();
    }
}
function end(){
    clkEnd = true;
    pg = false;
    document.getElementById("title").innerText = "Termino!"
    st.innerText = "reiniciar";
    st.addEventListener("click", function(){
        location.reload()
    })
}