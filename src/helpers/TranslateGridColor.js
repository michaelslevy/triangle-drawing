//Map colorMap positions to the grid triangles
////Loop through grid
////Create a translation list that maps colorTemplate position to grid indexes

//!!Gets executed when diamond dimensions change and when toolbar component loads
export class TranslateGridColor {
    constructor(dimensions, gridwidth=15) {
        this.width = dimensions.width;
        this.gridWidth=15+1;
        this.incrementer=0;
        this.rowLengths=[];
        this.rowUnits=[];

        //get number of triangles in diamond rows
        this.getRowLengths();
        console.log(this.rowLengths);
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


}
