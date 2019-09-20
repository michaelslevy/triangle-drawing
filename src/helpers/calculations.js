export const calculateTriangleAltittude=function(side){
  let bSquared=Math.pow((side/2),2);
  let cSquared=Math.pow(side,2);
  let a=Math.sqrt(cSquared-bSquared);
  return a;
}
