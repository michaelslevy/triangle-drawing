export const calculateTriangleAltitude=function(side){
  let bSquared=Math.pow((side/2),2);
  let cSquared=Math.pow(side,2);
  let a=Math.sqrt(cSquared-bSquared);
  return a;
}

export const getSideLength=function(dimensions){

  let maxWidth=0;
  let maxHeight=0;

  let panelHeight=Number(document.getElementById('designControl').offsetHeight);
  let panelWidth=Number(document.getElementById('designControl').clientWidth)*.9;

  if(dimensions.shape==="rhombus"){
    let triNumAcross=dimensions.width+(dimensions.height/2);
    maxWidth=(panelWidth)/triNumAcross;
    maxHeight=panelHeight/dimensions.height;
  } else {
    maxWidth=(panelWidth*.9)/dimensions.width;
    maxHeight=(panelHeight)/(dimensions.width*2);
  }

  return (maxWidth<=maxHeight)?maxWidth:maxHeight;
}

//calculate triangle positions
//rows start with 1
//each row ads a Triangle
//first trinagle is center minus half distance
//start points of proceeding rows add a 50% X distance and 100% Y distance
export const defineDiamondCoordinates=function(width,sideLength=50){
  let rowHeight=calculateTriangleAltitude(sideLength);
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

export const calculateNumberOfGridRows=function(sideLength){
  let height=window.innerHeight;
  let rowHeight=Number(calculateTriangleAltitude(sideLength).toFixed(2));
  let numRows=Number((Math.floor(height/rowHeight)+1).toFixed(2));
  return numRows;
}

export const getGridRowsNum=function(gridLength=15){
  let gridWidth=document.getElementById("grid").clientWidth;
  let sideLength=Number((gridWidth/gridLength).toFixed(1));
  gridLength++;//add an extra for overflow
  let rowHeight=Number(calculateTriangleAltitude(sideLength).toFixed(2));
  let numRows=calculateNumberOfGridRows(sideLength);

  return numRows;
}

export const calculateGrid=function(gridLength=15, color='555555'){
  let gridWidth=document.getElementById("grid").clientWidth;
  let sideLength=Number((gridWidth/gridLength).toFixed(1));
  gridLength++;//add an extra for overflow
  let rowHeight=Number(calculateTriangleAltitude(sideLength).toFixed(2));
  let numRows=calculateNumberOfGridRows(sideLength);
  let xIncrement=sideLength/2;

  let key=0;
  let startX=0-xIncrement;
  let startY=0;
  let coords=[];

  for(let rowCount=0;rowCount<numRows; rowCount++){
    //alternate row start positions
    startX=0-xIncrement;

    for(let x=0; x<gridLength; x++ ){
      let directions=(rowCount%2===0)?["up","down"]:["down","up"];
      coords.push(
        {
          x:(startX+(sideLength*x)),
          y:startY,
          direction:directions[0],
          side:sideLength,
          color:color,
          key
        });
      //add adjacent down arrow
        key++;
        coords.push(
        {
          x:(startX+(sideLength*x+xIncrement)),
          y:startY,
          direction:directions[1],
          side:sideLength,
          color:color,
          key
        });
        key++;
    }

    startY+=rowHeight;

  }
  return coords;
}
