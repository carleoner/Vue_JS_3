<template>
  <div class="post-list"></div>

  <div v-for="post in posts" :key="post.id">
    <!-- <h3>{{ post.title }}</h3> -->
    <SinglePost :post="post" />
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";

export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    console.log(props.posts);

    onMounted(() => {
      console.log("components mounted");
    });
    onUnmounted(() => {
      console.log("components unmounted");
    });
    onUpdated(() => {
      console.log("components updated");
    });
  },
  mounted() {
    console.log("mounted using options api");
  },
};
</script>

<style></style>
