<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!-- <h1>Modal title</h1> -->
      <!-- <h1>{{ header }}</h1>
      <p>modal content</p> -->

      <!-- wypisanie rzeczy z <Modal></Modal> -->
      <!-- default template -->
      <slot
        >default content in case there is none content in Modal <br />
        if we dont pass in default slots
      </slot>

      <!-- user created template -->
      <div class="actions">
        <slot name="myLinks"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text", "theme"],
  methods: {
    closeModal() {
      this.$emit("myCloseEvent");
    },
  },
};
</script>

<!-- musi byc <style scoped> zeby style h1 nie zamienilo tez stylu h1 w App.vue -->
<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modal h1 {
  color: aqua;
  border: none;
  padding: 0;
}

.modal p {
  font-style: normal;
}

.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}

.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}

.modal.sale {
  background: crimson;
  color: white;
}

.modal.sale h1 {
  color: white;
}

.modal.sale .actions {
  color: white;
}

.modal.sale .actions a {
  color: white;
}
</style>
