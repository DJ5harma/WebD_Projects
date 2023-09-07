const rectangle=document.querySelector("#rectangle");

const rectLocation=rectangle.getBoundingClientRect();// Returns the info about anyy element's dimensions/positions

rectangle.addEventListener("mousemove",function(details){//Here, the argument (can write any name instead of "details") in this function will return the information about "mousemove" event 
    
    let posX=details.clientX;//.clientX is the x-position of the mouse pointer
    let rect_x=rectLocation.x;
    let width=rectLocation.width;

    if(posX < rect_x + width/2){
        
        let intensity = (posX - rect_x)*(255/(width/2));

        let rgb="rgb("+intensity+","+intensity+",255)";

        rectangle.style.backgroundColor=rgb; 
    }
    else{
        
        let intensity = width/2-(posX - rect_x - width/2)*(255/(width/2));
        
        let rgb="rgb(255,"+intensity+","+intensity+")";
        
        rectangle.style.backgroundColor=rgb; 
    }
})
        
