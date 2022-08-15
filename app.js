const app = Vue.createApp({
  //data, functions to react to event
  //template: "<h2>I am the vue template</h2>",
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Adam Sanders",
      year: 1984,
      x: 0,
      y: 0,
    };
  },

  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(event, arg) {
      console.log(event, event.type);
      if (arg) {
        console.log(arg);
      }
    },
    handleMousemove(eventObj) {
      this.x = eventObj.offsetX;
      this.y = eventObj.offsetY;
    },
  },
});

app.mount("#app");
