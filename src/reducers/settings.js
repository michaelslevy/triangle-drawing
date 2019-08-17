const initialState = {
  loading: true,
  palette: ["ffffff","ffffff","ffffff","ffffff","ffffff"],
  template: "diamond",
  page:"ColorSelector"
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

    case "page_change":
      return {
        ...state,
        page: action.page
      }

    default:
      return state
  }
}

export default settings;
