const api = Api()

function Api () {
  if (process.env.NODE_ENV === 'production') {
    return (document.location.protocol === 'http' ? 'https' : 'http') + '://api.roostertest3.com/wp-json'
  }
  return '//api.roostertest3.com.com/wp-json'
}

// TODO: BE SURE TO CHANGE THE RETURN AFTER LAUNCH

export default api
