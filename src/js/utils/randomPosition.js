export function randomPosition(container, element) {
  const maxX = container.clientWidth - element.clientWidth;
  const maxY = container.clientHeight - element.clientHeight;

  return {
    x: Math.random() * maxX,
    y: Math.random() * maxY,
  };
}
