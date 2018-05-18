<template lang="html">
  <div class="margin-top container">
    <div class="field">
      <label class="label">Username</label>
      <div class="control">
        <input class="input" type="text" placeholder="Username...">
      </div>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="text" placeholder="Password...">
      </div>
    </div>

  <a @click="submitAdmin" class="button">Submit</a>
</div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      user: 'things',
    }
  },
  methods: {
    submitAdmin() {
      const admin = ''
    },
  },
}
</script>

<style lang="css">
</style>
