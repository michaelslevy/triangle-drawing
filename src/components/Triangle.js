import React from 'react';

function TrianglePolygon() {

  const coordBase={
    p1:[0,0],
    p2:[120, 0],
    p3:[60, 103.923]
  }

  let offset=0;//position
  let scale=1;//scale points

  //todo scale coordbase and adjust offset



  return   <polygon points="${coordBase.p1[0]} ${coordBase.p1[2]}, ${coordBase.p2[0]} ${coordBase.p2[2]}, ${coordBase.p3[0]} ${coordBase.p3[2]}, ${coordBase.p1[0]} ${coordBase.p1[2]},  " fill='red' />
}

export default TrianglePolygon;
