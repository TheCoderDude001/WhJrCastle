class Rect extends BaseClass {
    constructor(x, y){
    
    super(x,y,10,10);
      this.body = Bodies.rectangle(x, y, 10,10);
    }
  

   display(){
     //console.log(this.body.speed);
      super.display();
     
    }
  
    
  };