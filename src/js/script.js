import ImageEditor from "./modules/ImageEditor";
import RenderPage from "./modules/RenderPage";
import { figureOptions } from "./constants/figure";
import { textStyles } from "./constants/text";

window.addEventListener('DOMContentLoaded', () => {
  const editor = ImageEditor('canvas');

  const fileInput = document.getElementById('file-input');
  const resetButton = document.getElementById('reset');
  const drawButton = document.getElementById('draw_btn');
  const addTextButton = document.getElementById('text_btn');
  const addFigureButton = document.getElementById('figure_btn');
  const selectElement = document.getElementById('choose_figure');
  const saveImgButton = document.getElementById('save_btn');
  const canvasColorInput = document.getElementById('canvas-color');
  const canvasBorderColorInput = document.getElementById('border-color');
  const canvasBorderWidthInput = document.getElementById('stroke-width');
  const canvasOpacityInput = document.getElementById('opacity-slider');
  const textStyleSelect = document.getElementById('text_style');

  RenderPage().populateSelectOptions(selectElement, figureOptions);
  RenderPage().populateSelectOptions(textStyleSelect, textStyles);

  fileInput.addEventListener('change', editor.handleFileUpload);
  resetButton.addEventListener('click', editor.reset);
  drawButton.addEventListener('click', editor.draw);
  addTextButton.addEventListener('click', editor.addText);
  addFigureButton.addEventListener('click', () => {
    editor.addFigure(selectElement.value);
  })
  saveImgButton.addEventListener('click', editor.saveCanvasData);
  canvasColorInput.addEventListener('input', (event) => {
    editor.setObjectProperty('fill', event.target.value);
  });
  canvasBorderColorInput.addEventListener('input', (event) => {
    editor.setObjectProperty('stroke', event.target.value);
  });
  canvasBorderWidthInput.addEventListener('input', (event) => {
    editor.setObjectProperty('strokeWidth', event.target.value);
  });
  canvasOpacityInput.addEventListener('input', (event) => {
    const opacityValue = event.target.value / 100;
    editor.setObjectProperty('opacity', opacityValue);
  });

  textStyleSelect.addEventListener('change', () => {
    editor.changeTextStyle(textStyleSelect.value)
  });
});