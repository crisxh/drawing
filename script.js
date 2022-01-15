let colors=["pink","red","orange","yellow","green","blue","indigo","violet","white","black"];
let pallet=document.getElementById("pallet");
let draw=document.getElementById("draw");
let drawColor="black";
        

function createPallet(){
            
            for(let i=0;i<colors.length;i++){
               cDiv= document.createElement("div");
                pallet.append(cDiv);
                cDiv.className="color";
                cDiv.id=colors[i];
                cDiv.style.backgroundColor=colors[i];
                cDiv.draggable="true";
             


            }
           
        }

console.log(drawColor);
        
        function drawSpace(size){
           
            for(let i=0;i<size;i++){
                gDiv=document.createElement("div");
                gDiv.className="gDiv";
                gDiv.id="gDiv"+[i];
                draw.append(gDiv);
                

            }

            draw.style.height=(Math.sqrt(size)*10)+"px";
            draw.style.width=(Math.sqrt(size)*10)+"px";
            draw.style.gridTemplateColumns="repeat("+Math.sqrt(size)+",1fr)";
        }

        createPallet();
        drawSpace(1000,10);


    

        function pencil (){
            colorPx=document.querySelectorAll(".gDiv");

            colorPx.forEach(function(pxl){
                pxl.addEventListener("mousedown",function(){
                    this.style.backgroundColor=drawColor;
                });
                
    
            })
            
        }
        pencil();

        function mDown(){
            this.style.backgroundColor="black";
        }

        function dragStart(ev){

        }

        function dragEnter(ev){

        }
        function dragOver(ev){
            ev.preventDefault();
            this.style.backgroundColor="black";
            console.log("over");
            
        }
        function dragLeave(ev){
            
        }
        function dragDrop(ev){
            ev.preventDefault();
            
        }

        function setDrawColor(){
            let color=document.querySelectorAll(".color");
            color.forEach(function(c){
                c.addEventListener("click",function(){
                    
                })
                c.addEventListener("mousedown",function(){
                    drawColor=c.id;
                    console.log("hello");
                    console.log(c);
                    console.log(drawColor);
                    c.className+=" colorPressed";
                })
                c.addEventListener("mouseup",function(){
                    c.className="color";
                })

                c.addEventListener("mouseleave",function(){
                    c.className="color";
                })
            })
        }
        
        setDrawColor();