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

export const changeWidth=width=>({
  type:"width_change",
  width
})

export const changeHeight=height=>({
  type:"height_change",
  height
})

export const changeSelectedColor=selectedColor=>({
  type:"selectedColor_change",
  selectedColor
})
