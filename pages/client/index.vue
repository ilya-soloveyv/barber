<template>
  <div>
    <h1>Клиенты</h1>
    <pre>{{ clients }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('client/GET_LIST')
  },
  computed: {
    clients() {
      return this.$store.state.client.list
    },
  },
}
</script>
