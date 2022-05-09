let btnEnv = document.getElementById("boton");

btnEnv?.addEventListener("click", () => {
  let precioUnitario: number = Number(precio.value);
  let cantUnidades: number = Number(cantidad.value);
  let mesCompra: string = mes.value;
  let totalCompra: number = precioUnitario * cantUnidades;

  if (mesCompra == "octubre") {
    totalCompra = totalCompra - totalCompra * 0.15;
    document.getElementById("salida")?.innerHTML = "Por ser aniversario de la Empresa, el valor de compra tiene un 15% de descuento!!!. El precio final es de " + totalCompra;
  } else {
    document.getElementById("salida")?.innerHTML =  "El precio final de la compra es de " + totalCompra;
  }
});
