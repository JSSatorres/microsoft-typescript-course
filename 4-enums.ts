// JavaScript
const ERROR_TYPES = {
  NOT_FOUND: 'notFound',
  UNAUTHORIZED: 'unauthorized',
  FORBIDDEN: 'forbidden'
}

function showMessage (errorType) {
  if (errorType === ERROR_TYPES.NOT_FOUND) {
    console.log('🩷')
  } else if (errorType === ERROR_TYPES.UNAUTHORIZED) {
    console.log('🩵')
  } else if (errorType === ERROR_TYPES.FORBIDDEN) {
    console.log('🤍')
  }
}
