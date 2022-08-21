const app = Vue.createApp({
  //data, functions to react to event
  //template: "<h2>I am the vue template</h2>",
  data() {
    return {
      url: "https://wp.pl",
      showBooks: true,
      title: "The Final Empire",
      author: "Adam Sanders",
      year: 1984,
      x: 0,
      y: 0,
      booksArray: [
        {
          title: "name of rose",
          author: "partick junka",
          img: "./data/1.png",
          isFav: true,
        },
        {
          title: "way of warrior",
          author: "colos minor",
          img: "./data/2.png",
          isFav: false,
        },
        {
          title: "ninja clan",
          author: "matka polka",
          img: "./data/3.png",
          isFav: true,
        },
      ],
    };
  },

  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleisFav(item) {
      item.isFav = !item.isFav;
      //temp = this.booksArray.indexOf(item);
      //this.booksArray[temp].isFav = !this.booksArray[temp].isFav;
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

  computed: {
    filteredbooks() {
      return this.booksArray.filter((item) => item.isFav);
    },
  },
});

app.mount("#app");
