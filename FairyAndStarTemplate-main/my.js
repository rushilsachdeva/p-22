function isTouching(star,fairy){
    if (fairy.x-star.x<=fairy.width/2+star.width/2&& 
      star.x-fairy.x<=fairy.width/2+star.width/2&&
      fairy.y-star.y<=fairy.height/2+star.height/2&& 
      star.y-fairy.y<=fairy.height/2+star.height/2){
      
        return true;
    }
    else {
      return false;
    }
  }