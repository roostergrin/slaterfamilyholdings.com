const route = '//slater-holdings.roostertest2.com/wp-json'

const api = () => {
  try {
    return document.location.hostname === 'localhost' ? route : document.location.origin + '/wp-json'
  } catch (e) {
    console.log(e)
  }
}

export default api()
