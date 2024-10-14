
function parallaxScrollHandler(eventTargetObj, DOM) {

  var depth, i, layer, layers, layersCount, movement, topDistance, translateY;
  topDistance = eventTargetObj.scrollY;
  layers = DOM.querySelectorAll("[data-layer-type='parallax']");

  for (i = 0, layersCount = layers.length; i < layersCount; i++) {
    layer = layers[i];
    depth = layer.getAttribute("data-layer-depth");
    movement = -(topDistance * depth * 0.4);
    translateY = `translateY(${movement}px)`;

    layer.style["-webkit-transform"] = translateY;
    layer.style["-moz-transform"] = translateY;
    layer.style["-ms-transform"] = translateY;
    layer.style["-o-transform"] = translateY;
    layer.style.transform = translateY;
  }
}

export { parallaxScrollHandler };
