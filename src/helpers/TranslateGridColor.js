//Map colorMap positions to the grid triangles
////Loop through grid
////Create a translation list that maps colorTemplate position to grid indexes

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
        console.log(this.translationMap);
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

    buildGridMap=function(){
      //loop through this.pairedAdjacentIndexRows to map each traingle in grid to color map
      for (let i=0; i<this.pairedAdjacentIndexRows.length; i++){
          let row=[...this.pairedAdjacentIndexRows[i].firstRow];
          let totalTri=this.gridWidth*2+1;
          while(row.length<=totalTri){
            row.push(...this.pairedAdjacentIndexRows[i].repeatRow);
          }
          row=row.slice(row,totalTri);
          this.gridMap.push(row);
      }


    }

    buildTranslationMap=function(){
      let position=0;
      for (let i=0; i<this.gridMap.length; i++){
        for (let ii=0;ii<this.gridMap[i].length;ii++){
          this.translationMap[ii]=(this.translationMap[ii])?[...this.translationMap[ii],position]:[position]
          position++;
        }
      }
    }

}
