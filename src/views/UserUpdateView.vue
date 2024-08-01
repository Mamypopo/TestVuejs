<template>
  <section>
    <div class="container py-2">
      <h2 class="text-center">Edit User</h2>

      <div>
        <div class="row">
          <div class="col-3">
            <label class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="formData.fname"
            />
          </div>

          <div class="col-3">
            <label class="form-label"> Last name</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="formData.lname"
            />
          </div>
          <div class="col-3">
            <label class="form-label">Phone</label>
            <input
              type="text"
              class="form-control"
              v-model.number="formData.phone"
            />
          </div>
        </div>

        <div>
          <label class="form-label"> Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
            v-model.trim="formData.email"
          />
        </div>

        <div>
          <label class="form-label"> Address</label>
          <textarea
            type="text"
            class="form-control"
            v-model.trim="formData.address"
          >
          </textarea>
        </div>
      </div>

      <div>
        <button class="button-6" @click="updateUser()">Add</button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();

const formData = reactive({
  fname: "",
  lname: "",
  email: "",
  address: "",
  phone: "",
  gender: "",
});

const userIndex = ref(-1);

const updateUser = () => {
  userStore.updateUser(formData, userIndex.value);
  router.push({ name: "user-list-view" });
};

onMounted(() => {
  if (route.params.id) {
    userIndex.value = parseInt(route.params.id);
    const currentUser = userStore.users[userIndex.value];
    formData.fname = currentUser.fname;
    formData.lname = currentUser.lname;
    formData.email = currentUser.email;
    formData.address = currentUser.address;
    formData.phone = currentUser.phone;
    formData.gender = currentUser.gender;
  }
});
</script>
<style scoped>
.button-6 {
  appearance: none;
  background-color: #7dffbe;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292e;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
  margin-top: 15px;
}
</style>
