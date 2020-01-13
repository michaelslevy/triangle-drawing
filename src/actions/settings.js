import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {defineDiamondCoordinates,getSideLength} from "../helpers/calculations"
import {defineRhombusCoordinates} from "../helpers/defineRhombusCoordinates"
import {CalculateTriangleGridColorPattern} from "../helpers/calculateTriangleColorPattern"
import {TranslateGridColor} from "../helpers/TranslateGridColor";
import {TranslateGridColorRhombus} from "../helpers/TranslateGridColorRhombus";

// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, applyMiddleware(thunk));

export const changePalette = palette => ({
  type: 'palette_change',
  palette
});

export const changeTemplate=template=>({
  type:"template_change",
  template
})

export const changePage=page=>({
  type:"page_change",
  page
})

export const changeShape=shape=>({
  type:"shape_change",
  shape
})

const changeWidth=width=>({
  type:"width_change",
  width
})

const changeHeight=height=>({
  type:"height_change",
  height
})

const changeShapeCoords=shapeCoords=>({
  type:"shapeCoords_change",
  shapeCoords
})

export const changeSelectedColor=selectedColor=>({
  type:"selectedColor_change",
  selectedColor
})

const changeSideLength=sideLength=>({
  type:"sideLength_change",
  sideLength
})

export const changeColorChart=colorChart=>({
  type:"colorChart_change",
  colorChart
})

export const changeGridCoords=gridCoords=>({
  type:"gridCoords_change",
  gridCoords
})

export const updateTranslationMap=translationMap=>({
  type:"translationMap_update",
  translationMap
})

export const updateOnlineStatus=online=>({
  type:"online_update",
  online
})


export const updateDimensions=function(dimensions){
    return function(dispatch){
      dispatch(changeWidth(dimensions.width));
      dispatch(changeHeight(dimensions.height));
      dispatch(changeShape(dimensions.shape));

      let sideLength=getSideLength(dimensions);
      dispatch(changeSideLength(sideLength));

      let translationMap=(dimensions.shape==="rhombus")? new TranslateGridColorRhombus(dimensions):new TranslateGridColor(dimensions);
      dispatch(updateTranslationMap(translationMap));
      dispatch(changeShapeCoords((dimensions.shape==="rhombus")? defineRhombusCoordinates(dimensions.width, dimensions.height, sideLength) : defineDiamondCoordinates(dimensions.width, sideLength)));
    }
}
