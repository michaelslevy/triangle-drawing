import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {defineDiamondCoordinates} from "../helpers/calculations"

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

export const updateDimensions=function(dimensions){
    return function(dispatch){
      dispatch(changeWidth(dimensions.width));
      dispatch(changeHeight(dimensions.height));
      dispatch(changeShapeCoords(defineDiamondCoordinates(dimensions.width)));
    }
}
