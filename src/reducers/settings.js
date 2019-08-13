const initialState = {
  loading: true,
  palette: ["ffffff","ffffff","ffffff","ffffff","ffffff"],
  template: "diamond"
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

    case "template_change":
      return {
        ...state,
        loading: false,
        template: action.template,
        error:false
      }

    default:
      return state
  }
}

export default settings;
