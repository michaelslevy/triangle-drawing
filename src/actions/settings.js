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
