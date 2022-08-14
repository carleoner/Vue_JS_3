const app = Vue.createApp({
  //data, functions to react to event
  //template: "<h2>I am the vue template</h2>",
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Adam Sanders",
      year: 1984,
    };
  },

  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
