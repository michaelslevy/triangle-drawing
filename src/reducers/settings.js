const initialState = {
  loading: true,
  online:true,
  palette: ["ffffff","ffffff","ffffff","ffffff","ffffff"],
  colorChart:[],
  selectedColor: "",
  shape: "rhombus",
  width:3,
  height:3,
  page:"ColorSelector",
  shapeCoords:[],
  sideLength:50,
  gridCoords:[],
  translationMap:[]
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

    case "sideLength_change":
        return {
          ...state,
          sideLength: action.sideLength
    }

    case "colorChart_change":
      return {
          ...state,
          colorChart: action.colorChart
    }

    case "gridCoords_change":
      return {
          ...state,
          gridCoords: action.gridCoords
    }

    case "translationMap_update":
      return {
        ...state,
        translationMap:action.translationMap
    }

    case "online_update":
      return {
        ...state,
        online:action.online
    }

    default:
      return state
  }
}

export default settings;
