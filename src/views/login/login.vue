<template>
  <div>
    <div>test</div>
    <div>
      <div>
        <label for="name">用户名</label>
        <input v-model="user.name" type="text" name="name">
      </div>
      <div>
        <label for="password">密码</label>
        <input v-model="user.password" type="password" name="password">
      </div>
      <button @click="userLogin">登录</button>
      <div>{{ token }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      user: {
        userName: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters(['token'])
  },
  methods: {
    userLogin() {
      // this.$store.dispatch('getUserInfo', this.user).then(() => {
      //   this.$route.push({ name: '/about' })
      // })
      this.$router.push({ name: 'about' })
      // const user = this.user.name && this.user.name.length > 0
      // if (user) {
      //   alert('1')
      // } else {
      //   alert('2')
      // }
    }
  }
}
</script>
