function chequearVocales() {
  let texto = document.getElementById("inputText").value;
  let conteoVocales = 0;
  texto = texto.toLowerCase();
  for (let i = 0; i < texto.length; i++) {
    let char = texto.charAt(i);
    if (esVocal(char)) {
      conteoVocales++;
    }
  }
  const resultado = document.getElementById("Resultado");
  resultado.textContent = "El total de vocales es: " + conteoVocales;
}
function esVocal(char) {
  const vocales = ["a", "e", "i", "o", "u"];
  return vocales.includes(char);
}
