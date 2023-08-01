import { fabric } from "fabric";
import { FIGURE_OPTIONS } from "../constants/figure";
import { TEXT_STYLES } from "../constants/text";

const JSON_FILE_TYPE = 'application/json';

const ImageEditor = (canvasId) => {
  const canvas = new fabric.Canvas(canvasId);
  console.log('canvas', canvas);

  const loadImage = (file) => {
    fabric.Image.fromURL(file, (image) => {
      canvas.clear();
      canvas.add(image);
      canvas.renderAll();
    });
  }

  const applyFilter = (filter) => {
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.isType('image')) {
      activeObject.filters.push(filter);
      activeObject.applyFilters();
      canvas.renderAll();
    }
  }

  const handleUploadJSONFile = (file) => {
    canvas.loadFromJSON(JSON.parse(file), () => {
      canvas.renderAll();
    });
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageDataURL = e.target.result;
      file.type === JSON_FILE_TYPE ? handleUploadJSONFile(e.target.result) : loadImage(imageDataURL);
    };

    file.type === JSON_FILE_TYPE ? reader.readAsText(file) : reader.readAsDataURL(file);
  }

  const reset = () => {
    canvas.clear();
  }
  const draw = () => {
    canvas.isDrawingMode = !canvas.isDrawingMode;
    canvas.freeDrawingBrush.width = 10;
  }

  const addText = () => {
    const text = new fabric.IText('Sample Text', {
      left: 50,
      top: 50,
      fontFamily: 'sans-serif',
      fill: '#333',
      fontSize: 20
    });
    canvas.add(text);
  }

  const addFigure = (figureType) => {
    const defaultOptions = {
      left: canvas.width / 2,
      top: canvas.height / 2,
      originX: 'center',
      originY: 'center',
      strokeWidth: 0
    };

    const options = { ...defaultOptions, ...FIGURE_OPTIONS[figureType] };

    if (figureType === 'rhombus') {
      canvas.add(new fabric.Polygon(options.points, options));
    } else {
      canvas.add(new fabric[options.type](options));
    }
  }

  const saveIms = () => {
    const canvasDataURL = canvas.toDataURL({ format: 'png' });
    const downloadLink = document.createElement('a');
    downloadLink.href = canvasDataURL;
    downloadLink.download = 'my_canvas_image.png';
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  const saveJSON = () => {
    const canvasJSON = JSON.stringify(canvas.toJSON());
    const blob = new Blob([canvasJSON], { type: JSON_FILE_TYPE });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'my_canvas_data.json';
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  const saveCanvasData = () => {
    saveIms()
    saveJSON()
  };

  const setObjectProperty = (property, value) => {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.set(property, value);
      canvas.renderAll();
    }
  };

  const setActiveTextStyle = (activeObject, fontWeight, fontStyle, textDecoration) => {
    if (activeObject instanceof fabric.IText) {
      activeObject.set('fontWeight', fontWeight);
      activeObject.set('fontStyle', fontStyle);
      activeObject.set('textDecoration', textDecoration);
    }
  }

  const changeTextStyle = (textStyleSelect) => {
    const activeObject = canvas.getActiveObject();
    const [fontWeight, fontStyle, textDecoration] = TEXT_STYLES[textStyleSelect];
    if (activeObject instanceof fabric.IText) {
      setActiveTextStyle(activeObject, fontWeight, fontStyle, textDecoration);
      canvas.renderAll();
    }
  }

  return {
    loadImage,
    applyFilter,
    reset,
    handleFileUpload,
    draw,
    addText,
    addFigure,
    saveCanvasData,
    setObjectProperty,
    changeTextStyle,
  }
}

export default ImageEditor