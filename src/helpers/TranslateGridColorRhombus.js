//Map colorMap positions to the grid triangles
////Loop through grid
////Create a translation list that maps colorTemplate position to grid indexes

import {calculateTriangleAltitude, getGridRowsNum} from "./calculations.js"

//!!Gets executed when diamond dimensions change and when toolbar component loads
export class TranslateGridColorRhombus {
    constructor(dimensions, gridWidth=15) {

        this.dimensions=dimensions;
        this.master=[];
        this.assigned=[];
        this.buildMaster();
        this.buildTranslationMap();
        console.log(this.assigned);
        return this.assigned;
    }

    //make a master array for each rhombus positions
    buildMaster=function(){
      let assigned=[];
      let pos=0;
      for(let h=0; h<this.dimensions.height; h++){
        let row=[];
        for(let w=0; w<this.dimensions.width*2; w++){
          row.push(pos);
          if(typeof pos!=="undefined"){assigned[pos]=[];}
          pos++;
        }
        this.master.push(row);
      }
      this.assigned=assigned;
    }


    //identify which grid triangles will match any given triangle in the diamond
    buildTranslationMap=function(){

      //loop through each row of grid and map to rhombus
      let numberOfGridRows=getGridRowsNum()+3;
      let gridWidth=31;
      let currentMapRow=0;
      let baseColumn=-1;
      let column=0;

      let gridTriId=0;
      //loop through rows
      for(let i=0; i<numberOfGridRows; i++){
        let workingMasterRow=this.master[currentMapRow];
        baseColumn=(column<workingMasterRow.length)?baseColumn+1:0;
        column=baseColumn;
        for(let ii=-1;ii<gridWidth;ii++){

          let rhombusId=(workingMasterRow)?workingMasterRow[column]:0;
          if(typeof this.assigned[rhombusId]!=="undefined"){
            this.assigned[rhombusId].push(gridTriId);

            column=(column<workingMasterRow.length-1)? column+1:0;
            gridTriId++;
          }

        }
        currentMapRow=(currentMapRow<(this.master.length)-1)?currentMapRow+1:0;
      }

    }

}
