const initialState = {
  loading: true,
  palette: ["ffffff","ffffff","ffffff","ffffff","ffffff"],
  selectedColor: "",
  shape: "rhombus",
  width:3,
  height:3,
  page:"ColorSelector",
  shapeCoords:[],
  sideLength:50
}

const settings = (state = initialState, action) => {
  switch (action.type) {

    case "palette_change":
      return {
        ...state,
        loading: true,
        error:false,
        palette:action.palette
      }

    case "page_change":
      return {
        ...state,
        page: action.page
      }

    case "shape_change":
      return {
        ...state,
        shape: action.shape
    }

    case "width_change":
      return {
        ...state,
        width: action.width
      }

    case "height_change":
      return {
        ...state,
        height: action.height
    }

    case "shapeCoords_change":
    console.log(action);
      return {
        ...state,
        shapeCoords: action.shapeCoords
    }

    case "selectedColor_change":
      return {
        ...state,
        selectedColor: action.selectedColor
      }

    default:
      return state
  }
}

export default settings;
