export const figureOptions = {
  rect: 'rectangle',
  circle: 'circle',
  rhombus: 'rhombus',
  triangle: 'triangle'
};

export const FIGURE_OPTIONS = {
  rect: {
    type: 'Rect',
    fill: '#ffa726',
    width: 100,
    height: 100,
    stroke: '#3A2404FF',
    strokeWidth: 5,
  },
  circle: {
    type: 'Circle',
    fill: '#26a69a',
    radius: 50,
    stroke: '#023a34',
    strokeWidth: 5,
  },
  triangle: {
    type: 'Triangle',
    fill: '#78909c',
    width: 100,
    height: 100,
    stroke: '#012638',
    strokeWidth: 5,
  },
  rhombus: {
    type: 'Polygon',
    points: [
      { x: 0, y: -50 },
      { x: 50, y: 0 },
      { x: 0, y: 50 },
      { x: -50, y: 0 }
    ],
    fill: '#e91e63',
    stroke: '#410217',
    strokeWidth: 5,
    originX: 'center',
    originY: 'center',

  }
};