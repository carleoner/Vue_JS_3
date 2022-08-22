<template>
  <div class="home">
    home
    <p ref="para">
      my name is {{ name }} age is {{ age }}, reactive name: {{ newName }},
      {{ newAge }}
    </p>
    <button @click="handleClick">click me</button>
    <br />
    <button @click="newAge++">newAge++</button>
    <input type="text" v-model="newName" />

    <br />
    <br />
    <br />

    <h2>ref</h2>
    <p>{{ osoba.name }} - {{ osoba.age }}</p>
    <button @click="updateOsoba">updateOsoba</button>

    <h2>reactive</h2>
    <p>{{ osobaTwo.name }} - {{ osobaTwo.age }}</p>
    <button @click="updateOsobaTwo">updateOsobaTwo</button>

    <h2>computed</h2>
    <p>{{ compName }}</p>

    <input type="text" v-model="search" />
    <p>Search term {{ search }}</p>
    <div v-for="imie in matchingImies" :key="imie">{{ imie }}</div>

    <h2>watch and watchEffect</h2>
    <button @click="handleWatch">stop watching</button>

    <!--  -->
    <!--  -->
    <!--  -->
    <h2>props in setup: Posts</h2>

    <br />
    <div v-if="error">{{ error }}</div>

    <div v-if="!error">
      <div v-if="posts.length">
        <PostList v-if="showPosts" :posts="posts" />
        <button @click="showPosts = !showPosts">Toggle show posts</button>
        <button @click="posts.pop()">pop post</button>
      </div>

      <div v-else>Loading...</div>
    </div>
  </div>
</template>

<script>
//
//
//to wazne
import { ref, reactive } from "@vue/reactivity";
import { computed, watch, watchEffect } from "@vue/runtime-core";

//
//
import PostList from "../components/PostList.vue";

//
//
import getPosts from "../composables/getPosts.js";

export default {
  name: "HomeView",

  components: { PostList },

  // core of the composition API - setup
  // this function will run before any other lifecycle funcion
  // for example mounted or created
  setup() {
    //'this' keyword is not available in setup
    //below are non-reactive values by default
    let name = "mario";
    let age = 30;
    //that is why we can create reference to the variable
    const para = ref(null);
    //
    //const does not mean that we cannot change value
    //reaference does not change
    const newName = ref("Jakub");
    const newAge = ref(45);
    //
    //
    //
    const osoba = ref({ name: "mario", age: 78 });
    //
    const osobaTwo = reactive({ name: "luigi", age: 64 });
    const updateOsoba = () => {
      osoba.value.age = 54;
    };
    const updateOsobaTwo = () => {
      osobaTwo.age = 24;
    };
    const handleClick = () => {
      // console.log(para, para.value);
      // para.value.classList.add("test");
      //zmieni caly p na gorze
      // para.value.textContent = "hello ninjas";
      newName.value = "Piotr";
    };
    const compName = computed(() => {
      return "shaun";
    });
    const imies = ref(["mario", "yoshi", "luigi", "toad", "hoower"]);
    const search = ref("");
    const matchingImies = computed(() => {
      return imies.value.filter((name) => name.includes(search.value));
    });
    //runs every time
    const stopWatch = watch(search, () => {
      console.log("watch fun ran");
    });
    //runs initailly
    //but if we use any value inside this fun
    //it will appear every time that val changed
    const stopEffect = watchEffect(() => {
      console.log("watchEffect fun ran", search.value);
    });
    const handleWatch = () => {
      stopWatch();
      stopEffect();
    };
    //
    //
    //
    //
    //
    //
    //
    //using props in setup

    //
    //
    //
    const showPosts = ref(true);

    //commented because created ../composables/getPosts.js
    // const posts = ref([
    //   //commented becouse we want to fetch data from db.json file
    //   // {
    //   //   title: "Welcome",
    //   //   body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur harum laudantium facere similique necessitatibus corporis iure eveniet earum delectus repellendus, autem error aut dolore corrupti nostrum odio ullam aliquid beatae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur harum laudantium facere similique necessitatibus corporis iure eveniet earum delectus repellendus, autem error aut dolore corrupti nostrum odio ullam aliquid beatae?",
    //   //   id: 1,
    //   // },
    //   // {
    //   //   title: "top5 tips",
    //   //   body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur harum laudantium facere similique necessitatibus corporis iure eveniet earum delectus repellendus, autem error aut dolore corrupti nostrum odio ullam aliquid beatae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur harum laudantium facere similique necessitatibus corporis iure eveniet earum delectus repellendus, autem error aut dolore corrupti nostrum odio ullam aliquid beatae?",
    //   //   id: 2,
    //   // },
    // ]);

    // const error = ref(null);

    //
    //
    //
    // added data/db.json
    //commends:
    //npm install json-server
    //npx json-server --watch ./data/db.json

    //
    //
    //
    //Async fun
    //commented because created ../composables/getPosts.js
    // const load = async () => {
    //       try {
    //         let data = await fetch("http://localhost:3000/posts");
    //         console.log(data);

    //         if (!data.ok) {
    //           throw Error("error, no data available");
    //         }

    //         posts.value = await data.json();
    //       } catch (err) {
    //         error.value = err.message;
    //         console.log(error.value);
    //       }
    //     };

    //     load();

    const { posts, error, load } = getPosts();
    load();

    // return { name: name, age: age };
    // shorter version
    //return any values that you want to have inside the template
    return {
      name,
      age,
      handleClick,
      para,
      newName,
      newAge,
      osoba,
      updateOsoba,
      osobaTwo,
      updateOsobaTwo,
      compName,
      imies,
      search,
      matchingImies,
      handleWatch,
      posts,
      showPosts,
      error,
    };
  },
  components: { PostList },
};
</script>
