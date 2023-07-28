import ImageEditor from "./modules/ImageEditor";

window.addEventListener('DOMContentLoaded', () => {
  const editor = ImageEditor('canvas');

  const fileInput = document.getElementById('file-input');
  const resetButton = document.getElementById('reset');
  const drawButton = document.getElementById('draw_btn');
  const addTextButton = document.getElementById('text_btn');
  const addFigureButton = document.getElementById('figure_btn');
  const selectElement = document.getElementById('choose_figure');
  const saveImgButton = document.getElementById('save_btn');

  fileInput.addEventListener('change', editor.handleFileUpload);
  resetButton.addEventListener('click', editor.reset);
  drawButton.addEventListener('click', editor.draw);
  addTextButton.addEventListener('click', editor.addText);
  addFigureButton.addEventListener('click', () => {
    editor.addFigure(selectElement.value);
  })
  saveImgButton.addEventListener('click', editor.saveCanvasData);
});