export const inputConfirmation = (input) => {
  if(!input.value) {
  	return {
  		error: true,
  		message: 'Necesitas completar todos los campos'
  	}
  }

  return input
}
