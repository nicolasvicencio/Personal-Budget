export const reviewBudget = (budget, remaining ) => {
  let clase;

  if( budget / 4 > remaining ){
    clase = 'alert alert-danger'
  }else if( budget / 2 > remaining ){
    clase = 'alert alert-'
  }else{
    clase = 'alert alert-success'
  }
return clase
}