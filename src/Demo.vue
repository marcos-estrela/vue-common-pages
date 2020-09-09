<template>
  <div id="app">
    <div class="demo-bar">
      <button @click="data = demoData.loginPage">Login Page</button>
      <button @click="data = demoData.forgotPasswordPage">Forgot Password Page</button>
      <button @click="data = demoData.registerPage">Register Page</button>
      <button @click="data = demoData.changePasswordPage">Change Password Page</button>
    </div>
    <common-page
      :color="data.color"
      :texts="data.texts"
      :inputs="data.inputs"
      :links="data.links"
      :validations="data.validations"
      :errorMessages="data.errorMessages"
      @submit="handleForm"
    />
  </div>
</template>


<script>
import demoData from "./data.js";
import CommonPage from "./components/CommonPage";

export default {
  name: "Demo",
  components: {
    CommonPage,
  },
  data() {
    return {
      demoData: demoData,
      data: demoData.loginPage,
    };
  },
  methods: {
    handleForm(formData) {
      console.log(formData);
    },
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.demo-bar {
  position: absolute;
  background-color: white;
  width: 100%;
  height: 25px;
  display: inline-flex;
  justify-content: space-evenly;
}
</style>
