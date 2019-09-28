export const calculateTriangleAltittude=function(side){
  let bSquared=Math.pow((side/2),2);
  let cSquared=Math.pow(side,2);
  let a=Math.sqrt(cSquared-bSquared);
  return a;
}

//calculate triangle positions
//rows start with 1
//each row ads a Triangle
//first trinagle is center minus half distance
//start points of proceeding rows add a 50% X distance and 100% Y distance
export const defineDiamondCoordinates=function(width,sideLength=50){
  let rowHeight=calculateTriangleAltittude(sideLength);
  let xIncrement=sideLength/2;
  let diamondPhysicalWidth=width*sideLength;
  let startX=diamondPhysicalWidth/2;
  let startY=0;
  let coords=[];
  let key=-1;

  //produce top
  for(let rowCount=1;rowCount<width+1; rowCount++){
    startX=startX-xIncrement;
    for(let x=0; x<rowCount; x++ ){
      key++;

      coords.push(
        {
          x:(startX+(sideLength*x)),
          y:startY,
          direction:"up",
          key
        });
      //add adjacent down arrow except on the last triangle
      if(x!==rowCount-1){
        key++;
        coords.push(
          {
            x:(startX+(sideLength*x+xIncrement)),
            y:startY,
            direction:"down",
            key
          });
      }
    }
    startY+=rowHeight;
  }
  //produce bottom
  for(let rowCount=width;rowCount>0; rowCount--){

    for(let x=0; x<rowCount; x++ ){
      key++;
      coords.push(
        {
          x:(startX+(sideLength*x)),
          y:startY,
          direction:"down",
          key
        });
      //add adjacent down arrow except on the last triangle
      if(x!==rowCount-1){
        key++;
        coords.push(
          {
            x:(startX+(sideLength*x+xIncrement)),
            y:startY,
            direction:"up",
            key
          });
      }
    }
    startX=startX+xIncrement;
    startY+=rowHeight;
  }
  return coords;

}
