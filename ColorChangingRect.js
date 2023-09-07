const rectangle=document.querySelector("#rectangle");

const rectLocation=rectangle.getBoundingClientRect();

rectangle.addEventListener("mousemove",function(details){
    
    let posX=details.clientX;
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
        
