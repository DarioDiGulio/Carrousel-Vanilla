const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
let producto = urlParams.get('producto');
