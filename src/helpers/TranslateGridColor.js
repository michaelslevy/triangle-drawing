//Map colorMap positions to the grid triangles
////Loop through grid
////Create a translation list that maps colorTemplate position to grid indexes

import {calculateTriangleAltittude} from "./calculations.js"

//!!Gets executed when diamond dimensions change and when toolbar component loads
export class TranslateGridColor {
    constructor(dimensions, gridWidth=15) {
        this.width = (dimensions.width)?dimensions.width:3;
        this.gridWidth=gridWidth;
        this.incrementer=0;
        this.rowLengths=[];
        this.mapIndexes=[];
        this.pairedAdjacentIndexRows=[];
        this.gridMap=[];
        this.translationMap=[];

        //get number of triangles in diamond rows
        this.getRowLengths();
        this.getMapIndexes();
        this.matchAdjacentIndexRows();
        this.appendFirstRow();
        //map of grid colors corresponding to index in shape
        this.buildGridMap();
        //map coresponding grid index to shape map position
        this.buildTranslationMap();
        return this.translationMap;
    }
    getRowLengths=function(){
      let rowCount=1;//width of row
      let triNum=1;//total number of triangles in the row including alternates
      for (let x=0; x<(this.width*2);x++){
        this.rowLengths.push(triNum);
        this.getIncrement(x);
        rowCount=rowCount+this.incrementer
        triNum=rowCount*2-1;
      }
    }

    getIncrement=function(x){
      this.incrementer=1;
      if(x>=this.width){
        this.incrementer=-1;
      } else if(x==this.width-1){
        this.incrementer=0;
      }
    }

    getMapIndexes=function(){
      //pair two rows of diamond: current & current+3
      //offset first set
      let mapIndex=0;
      for(let i=0; i<this.rowLengths.length; i++ ){

        let row=[];
        for(let ii=0; ii<this.rowLengths[i];ii++){
          row.push(mapIndex);
          mapIndex++;
        }
        this.mapIndexes.push(row);
      }
    }

    matchAdjacentIndexRows=function(){
        //top or bottom of the diamond
        for(let i=0; i<this.mapIndexes.length; i++ ){
          let jump=(i<this.width)?i+this.width:i-this.width;
          this.pairedAdjacentIndexRows.push({repeatRow:[...this.mapIndexes[i],...this.mapIndexes[jump]]});
        }
    }

    appendFirstRow=function(){
      let offset=0;
      for(let i=0; i<this.pairedAdjacentIndexRows.length; i++ ){
        let row=[];
        let firstRow=[...this.pairedAdjacentIndexRows[i].repeatRow];
        this.pairedAdjacentIndexRows[i].firstRow=[...firstRow.splice(offset)];
        if(i<this.width-1){offset++;}
        else if (i>=this.width){ offset=offset-1;}
      }
    }

    //translates rows of diamond into grid rows
    buildGridMap=function(){
      //loop through this.pairedAdjacentIndexRows to map each traingle in grid to color map
      for (let i=0; i<this.pairedAdjacentIndexRows.length; i++){
          let row=[...this.pairedAdjacentIndexRows[i].firstRow];
          let totalTri=this.gridWidth*2+2;
          while(row.length<=totalTri){
            row.push(...this.pairedAdjacentIndexRows[i].repeatRow);
          }
          row=row.slice(row,totalTri);
          this.gridMap.push(row);
      }

    }

    calculateTileNum=function(){
      let gridWidth=document.getElementById("grid").clientWidth;
      let sideLength=Number((gridWidth/this.gridWidth).toFixed(1));
      let gridLength=this.gridWidth+1;//add an extra for overflow
      let height=window.innerHeight;
      let rowHeight=Number(calculateTriangleAltittude(sideLength).toFixed(2));
      let numRows=Number((Math.floor(height/rowHeight)+1).toFixed(2));
      return numRows*(gridLength)*2;
    }

    //identify which grid triangles will match any given triangle in the diamond
    buildTranslationMap=function(){
      //get total count of all grid polygons
      let tileNum=this.calculateTileNum();
      //position indicates grid position
      let position=0;
      //loop through grid color map
      while(position<tileNum){
        for (let i=0; i<this.gridMap.length; i++){
          //reverse add position to translation map
          //looping through grid row and adding position to translation map
          let gridMapRow=this.gridMap[i];
          for (let rowPosition=0;rowPosition<gridMapRow.length;rowPosition++){
            let diamondPosition=gridMapRow[rowPosition];
            this.translationMap[diamondPosition]=(this.translationMap[diamondPosition])?[...this.translationMap[diamondPosition],position]:[position]
            position++;
          }
        } //end for loop
        this.translationMap.slice(0, tileNum);
      } //end while loop

    }

}
