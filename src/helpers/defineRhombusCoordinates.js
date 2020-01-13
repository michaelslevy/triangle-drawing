import {calculateTriangleAltitude} from "./calculations"

export const defineRhombusCoordinates=function(width, height,sideLength=50){

  let coords=[];
  let key=-1;

  //get altitude;
  let altitude=calculateTriangleAltitude(sideLength);

   //height=altitude x triNum.height
  let rhombusHeight=altitude*height;

  //width=sideLength x triNum.width + (triNum.height/2*sideLength)
  let rhombusWidth=sideLength*width+(height/2*sideLength);

  //top left x distance from bottom corner = trinum.height x .5 x sideLength
  let pos={
    x:height*.5*sideLength-(sideLength/2),
    y:0
  }

  for (let h=0; h<height; h++){
    pos.x=height*.5*sideLength - (sideLength/2) - (sideLength/2 * h);

    for(let i=0; i<width; i++){
      key++;
      coords.push(
        {
          x:pos.x,
          y:pos.y,
          direction:"up",
          key
        });

      //add adjacent down arrow except on the last triangle
        key++;
        coords.push(
          {
            x:pos.x+(sideLength/2),
            y:pos.y,
            direction:"down",
            key
          });
          pos.x+=sideLength;
      }

      pos.y+=altitude;

    }

  return coords;

}
