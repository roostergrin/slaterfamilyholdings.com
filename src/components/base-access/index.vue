<template lang="pug">
  .base-access(v-if="$route.path !== '/accessibility'")
    .base-access__container
      p(v-html='`${companyName} Accessibility Statement`')
      p(v-html='`${companyName} is committed to facilitating the accessibility and usability of its website, ${domain}, for everyone. ${companyName} aims to comply with all applicable standards, including the World Wide Web Consortiums Web Content Accessibility Guidelines 2.0 up to Level AA (WCAG 2.0 AA). ${companyName} is proud of the efforts that we have completed and that are in-progress to ensure that our website is accessible to everyone.`')
      p(v-html='`We highly recommend using the userway accessibility widget linked in the footer, but should you experience any difficulty in accessing any part of this website, please feel free to ${phone ? "call us at " + phone : ""} ${phone && email ? "or" : ""} ${email ? "email us at " + email : ""} and we will work with you to provide the information or service you seek through an alternate communication method that is accessible for you consistent with applicable law (for example, through telephone support).`')
</template>

<script>
export default {
  data () {
    return {
      companyName: 'Slater Family Holdings', // Fill this in
      domain: "<a href='https://slaterfamilyholdings.com'>slaterfamilyholdings.com</a>", // Fill this in
      email: "<a href='mailto:contact@slaterfamilyholdings.com'>contact@slaterfamilyholdings.com</a>", // Fill this in
      phone: "<a href='tel:+16175571799'>617-557-1799</a>, <a href='tel:+15616702027'>561-670-2027</a>", // Fill this in
      formattedEmail: ''
    }
  }
}
</script>

<style lang="sass" src="./index.sass"></style>
