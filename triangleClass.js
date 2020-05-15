class Tri extends BaseClass {
    constructor(x, y){
    
    super(x,y,10,10);
      this.body = Bodies.polygon(x, y, 3, 10);
    }
  

   display(){
     //console.log(this.body.speed);
      super.display();
     
    }
  
    
  };