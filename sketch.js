var speed,weight,car,car2,car3,car4,wall,wall3,wall2,wall4,weight2,weight3,weight4,deformation,deformation2,deformation3,deformation4;


function setup() {
  createCanvas(1600,500);
 
car=createSprite(50,100,40,40)
car2=createSprite(50,200,40,40)
car3=createSprite(50,300,40,40)
car4=createSprite(50,400,40,40)


speed=random(55,90)
weight=random(400,1500)

speed2=random(55,90)
    weight2=random(400,1500)

    weight3=random(400,1500)
    speed3=random(55,90)

    speed4=random(55,90)
            
    weight4=random(400,1500)

wall=createSprite(250,150,4000,30)
wall2=createSprite(250,250,4000,30)
wall=createSprite(250,350,4000,30)
wall4=createSprite(1600,250,30,4000)
car.velocityX=speed;
car2.velocityX=speed2;
car3.velocityX=speed3;
car4.velocityX=speed4;
}
function draw() {
  background(255,255,255);  
  if(wall4.isTouching(car)){
   

    deformation=(0.5*weight*speed*speed)/22500

   
    car.velocityX=0
if(deformation>100){

  car.shapeColor="green"
  
  }
  if(deformation>180 && deformation<100){

    car.shapeColor="yellow"
  
  }
    if(deformation<180){

      car.shapeColor="red"
  
  
  }
 
}
  
  if(wall4.isTouching(car2)){
    
    
   (deformation2=0.5*weight2*speed2*speed2)/22500
   
   
   
   
   
    car2.velocityX=0
    if(deformation2>100){
     
      car2.shapeColor="green"
    }
      if(deformation2>180 && deformation2<100){

        car2.shapeColor="yellow"
      }
        if(deformation2<180 ){

          car2.shapeColor="red"

        }
}
  
      if(wall4.isTouching(car3)){
       
        (deformation3=0.5*weight3*speed3*speed3)/22500
        car3.velocityX=0
        
        if(deformation3>180 && deformation3<100){

          car3.shapeColor="yellow"

        }
          if(deformation3>100){

            car3.shapeColor="green"
          }
            if(deformation3<180 ){

              car3.shapeColor="red"
              
              }



          
            }
          

          if(wall4.isTouching(car4)){
            
           
            (deformation4=0.5*weight4*speed4*speed4)/22500
            car4.velocityX=0
            if(deformation4>100){

              car4.shapeColor="green"
              
              }

              if(deformation4>180 && deformation4<100){

                car4.shapeColor="yellow"
              }
                
                if(deformation4<180){

                  car4.shapeColor="red"
                } 




              }
            

                drawSprites();

  
}











