export const FIGURE_OPTIONS = {
  rect: {
    type: 'Rect',
    fill: '#ffa726',
    width: 100,
    height: 100
  },
  circle: {
    type: 'Circle',
    fill: '#26a69a',
    radius: 50
  },
  triangle: {
    type: 'Triangle',
    fill: '#78909c',
    width: 100,
    height: 100
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
    strokeWidth: 0,
    originX: 'center',
    originY: 'center'
  }
};