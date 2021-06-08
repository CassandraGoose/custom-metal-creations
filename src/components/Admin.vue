<template lang="html">
  <div class="margin-top container">
    <div class="field">
      <label class="label">Username</label>
      <div class="control">
        <input class="input" v-model="admin" type="text" placeholder="Username...">
      </div>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" v-model="password" type="password" placeholder="Password...">
      </div>
    </div>

  <a @click="submitAdmin" class="button">Submit</a>
</div>
</template>

<script>
const URL = 'https://custom-metal-creations.herokuapp.com/users/login';
/* eslint-disable */
export default {
  name: 'Admin',
  data() {
    return {
      admin: '',
      password: '',
    }
  },
  methods: {
    submitAdmin() {
      const payload = {
        username: this.admin,
        password: this.password,
      }
      console.log(payload);
      fetch(URL, {
             method: 'POST',
             body: JSON.stringify(payload),
             headers: { 'content-type': 'application/json' }
         }).then((res) => res.json())
         .then((data) =>  {
           localStorage.token = data.token
           this.$router.push('/newItem')
         })
         .catch((err)=> console.log(err))
    },
  },
}
</script>
