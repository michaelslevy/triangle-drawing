export class CalculateTriangleGridColorPattern {
    constructor(colorMap, width, gridWidth=15, defaultColor="555") {
        this.width = width;
        this.colorMap=colorMap;
        this.gridWidth=gridWidth+1;
        this.defaultColor=defaultColor;
        if(this.validate()===false){ return false;}

        this.rowIndexes = [];
        this.incrementer = 0;
        this.rowLengths=[];
        this.diamondRows=[];
        this.gridRows=[];

        this.getRowLengths();
        this.fillColorMap();
        this.getIndexes();
        this.mapDiamondRows();
        this.mapGridRows();
    }

    fillColorMap=function(){
      let length=this.findTotal(this.rowLengths);
      console.log(length);
      for(let x=0; x<length; x++){
        this.colorMap[x]=(this.colorMap[x])?this.colorMap[x]:this.defaultColor;
      }
      console.log(this.rowLengths,length,this.colorMap);
    }

    getIncrement=function(x){
      this.incrementer=1;
      if(x>=this.width){
        this.incrementer=-1;
      } else if(x==this.width-1){
        this.incrementer=0;
      }
    }

    validate=function(){
      if(!this.width){
        console.error("width neded to map grid color");
        return false;
      }
      if(!this.colorMap){
        console.error("colorMap neded to map grid color");
        return false;
      }
      if(!this.gridWidth){
        console.error("gridWidth neded to map grid color");
        return false;
      }
      return true;
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

    findTotal=function(list){
      let total=0;
      for(let x=0;x<list.length;x++){
        total+=list[x]*2-1;
      }
      return total;
    }

    //include alternate triangles in count
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

    //makes a set of colors the lenth of the grid and the height of the diamond
    mapGridRows=function(){
      //loop through rows of grid
        //Loop through diamond color map
        //first row offsets
      let offset=0;
      for(let i=0; i<this.diamondRows.length; i++ ){
        let row=[];
        let firstRow=[...this.diamondRows[i]];
        let spliced=[...firstRow.splice(offset)];
        row.push(...spliced);

        if(i<this.width-1){offset++;}
        else if (i>=this.width){ offset=offset-1;}



        let repeatRow=[...this.diamondRows[i]];

          if(repeatRow.length>0){
            while(row.length<this.gridWidth*2){
              row.push(...repeatRow);
            }
          } else {
            row.push("undefined");
          }

        row=row.splice(0,(this.gridWidth*2));
        this.gridRows.push(...row);
    }
    }
  }
