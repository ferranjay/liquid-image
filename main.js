container = document.getElementById("main");

const text = new Blotter.Text("Deep blue", {
    family: "serif",
    size: 120,
    fill: "#fff",
    paddingLeft : 40,
    paddingRight : 40
});

let material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.1;
material.uniforms.uVolatility.value = 0.1;
material.uniforms.uSeed.value = 0.1;

let blotter = new Blotter(material, {
    texts: text
});

let scope = blotter.forText(text);

scope.appendTo(container);
