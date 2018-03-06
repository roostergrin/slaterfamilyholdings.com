<!-- Make sure this tag is added to index.html to use global google object
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCq0RmeZ0M-TjGp_Tz3944kqYOQ-gTx0gE" ></script>
 -->

<template lang='pug' src='./google-map.pug'></template>

<script>
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + '-map',
      markerCoordinates: [{
        latitude: 37.7775531,
        longitude: -122.4135062
      }]
    }
  },
  mounted () {
    const element = document.getElementById(this.mapName)
     /* global google: true */
     /* eslint-disable no-new */
    const options = {
      zoom: 15,
      center: new google.maps.LatLng(37.7775531, -122.4135062),
      styles: [
        // add styles here to customize map
      ]
    }
    const map = new google.maps.Map(element, options)
    // loop through markerCoordinates to add multiple locations
    this.markerCoordinates.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude)
      new google.maps.Marker({
        position,
        map
      })
    })
  }
}
</script>
