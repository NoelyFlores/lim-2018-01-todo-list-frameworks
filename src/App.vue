<template>
  <div id="app">
    <img src="https://scontent.flim6-1.fna.fbcdn.net/v/t1.15752-9/42996884_445842525820400_3260032812211765248_n.jpg?_nc_cat=109&_nc_eui2=AeHsOrvtDwJKfFn6Tt_ZSFiruXbn8mNrvlCJFcp7XdIoSn4i-7UohWJg1UWEK0KYzdzlCf3Q4YHCkoq4oA-02WiMfH5UpnPVYGP_a5r6GRqEmQ&oh=9fe4507e50ac6e4f99936b2ad9d55581&oe=5C5F586A">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
