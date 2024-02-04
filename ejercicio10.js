//Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let totalSum = 0;
  
  for(const num of param) {
    totalSum = totalSum + num;
  }
  let media = totalSum / param.length;
  console.log(media)
}
average(numbers);