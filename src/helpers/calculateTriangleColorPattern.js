export class CalculateTriangleGridColorPattern {
    constructor(colorMap, width) {
        this.width = width;
        this.colorMap=colorMap;

        this.rowIndexes = [];
        this.incrementer = 0;
        this.rowLengths=[];
        this.diamondRows=[];

        this.getRowLengths();
        this.getIndexes();
        this.mapDiamondRows();
    }

    getIncrement=function(x){
      this.incrementer=1;
      if(x>=this.width){
        this.incrementer=-1;
      } else if(x==this.width-1){
        this.incrementer=0;
      }
    }

    getRowLengths=function(){
      let rowCount=1;
      for (let x=0; x<(this.width*2);x++){
        this.rowLengths.push(rowCount);
        this.getIncrement(x);
        rowCount=rowCount+this.incrementer
      }
    }

    getIndexes=function(){
      let index=0;
      for(let i=0; i<this.rowLengths.length; i++ ){
        this.rowIndexes.push(index);
        let triNum=this.rowLengths[i]*2-1;
        index=triNum+index;
      }
    }

    sumArray=function(list){
      const add = (a, b) =>a + b;
      const sum = list.reduce(add);
      return sum;
    }

    findNumTri=(num)=>num*2-1;

    //get tri numbers and add up lengths
    findMapIndex=function(end){
      let index=0;
      for (let pos=0; pos<end; pos++){
          let triNum=this.findNumTri(this.rowLengths[pos]);
          index=index+triNum;
      }
      return index;
    }

    mapDiamondRows=function(){
      //pair two rows of diamond: current & current+3
      //offset first set
      for(let i=0; i<this.rowLengths.length; i++ ){
        //top or bottom of the diamond
          let map=[...this.colorMap];
          let start=this.findMapIndex(i);
          let stop=this.findNumTri(this.rowLengths[i]);
          let section1=map.splice(start,stop);

          let map2=[...this.colorMap];
          let jump=(i<this.width)?i+this.width:i-this.width;
          let start2=this.findMapIndex(jump);
          let stop2=this.findNumTri(this.rowLengths[jump]);
          let section2=map2.splice(start2,stop2);

          this.diamondRows.push([...section1,...section2]);
      }
    }
}
