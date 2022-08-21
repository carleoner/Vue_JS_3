<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">click me</button>

  <teleport to=".modals" v-if="showModal">
    <!-- <Modal
      :header="header"
      text="some text"
      theme="black"
      @myCloseEvent="toggleModal"
    /> -->
    <Modal theme="sale" @myCloseEvent="toggleModal">
      <h1>Ninja Givaway</h1>
      <p>Garb your coffee and start</p>

      <!-- template tag -- giving my name: myLinks-->
      <template v-slot:myLinks>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
    </Modal>
  </teleport>

  <teleport to="#modalTwo" v-if="showModalTwo">
    <Modal @myCloseEvent="toggleModalTwo">
      <h1>Header of Modal Two</h1>
      <p>Modal Two message</p>

      <!-- template tag -- giving my name: myLinks-->
      <template v-slot:myLinks>
        <a href="#">lets hit it</a>
        <a href="#">slap it</a>
      </template>
    </Modal>
  </teleport>

  <br />
  <!-- click event modifier -- np. click.shift -- react when clicked with held shift key -->
  <button @click.ctrl="toggleModal">open modal (ctrl+left click)</button>

  <br />

  <button @click.ctrl="toggleModalTwo">open modal two (ctrl+left click)</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "my vue app",
      header: "Join now",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      // dodaje klase do elementu a poziomu vuejs
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
/* if template of Modal one is teleported to class named 
"Modals" we need to change it here so it have styles 
before #app {} after #app, .modals {}

if we want to add id we add #id_name
*/
#app,
.modals,
#modalTwo {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
