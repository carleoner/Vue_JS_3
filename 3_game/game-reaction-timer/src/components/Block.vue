<template>
  <div class="block" v-if="showBlock" @click="stopTimer">click me</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },

  //hooks
  mounted() {
    console.log("component mounted");
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  updated() {
    console.log("component updated");
  },
  unmounted() {
    console.log("component unmounted");
  },

  methods: {
    startTimer() {
      console.log("startTimer");
      this.timer = setInterval(() => {
        this.reactionTime += 5;
      }, 5);
    },
    stopTimer() {
      console.log("stopTimer");
      clearInterval(this.timer);
      console.log(this.reactionTime, "ms");
      this.$emit("endTime", this.reactionTime);
    },
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: whitesmoke;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
