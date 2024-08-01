<template>
  <section>
    <form @submit.prevent="adduser">
      <div class="container py-2">
        <h2 class="text-center">Add User</h2>
        <div>
          <div class="row">
            <div class="col-3">
              <label class="form-label"> First Name</label>
              <input
                type="text"
                class="form-control"
                v-model.trim="formData.fname"
              />
              <span
                v-for="error in v$.fname.$errors"
                :key="error.$uid"
                class="small text-danger"
              >
                {{ error.$message }}
              </span>
            </div>

            <div class="col-3">
              <label class="form-label"> Last name</label>
              <input
                type="text"
                class="form-control"
                v-model.trim="formData.lname"
              />
              <span
                v-for="error in v$.lname.$errors"
                :key="error.$uid"
                class="small text-danger"
              >
                {{ error.$message }}
              </span>
            </div>
            <div class="col-3">
              <label class="form-label">Phone</label>
              <input
                type="text"
                class="form-control"
                v-model.number="formData.phone"
              />
              <span
                v-for="error in v$.phone.$errors"
                :key="error.$uid"
                class="small text-danger"
              >
                {{ error.$message }}
              </span>
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
            <span
              v-for="error in v$.email.$errors"
              :key="error.$uid"
              class="small text-danger"
            >
              {{ error.$message }}
            </span>
          </div>

          <div>
            <label class="form-label"> Address</label>
            <textarea
              type="text"
              class="form-control"
              v-model.trim="formData.address"
            >
            </textarea>
            <span
              v-for="error in v$.address.$errors"
              :key="error.$uid"
              class="small text-danger"
            >
              {{ error.$message }}
            </span>
          </div>
          <div>
            <label class="form-label col-sm-1" style="margin-top: 15px">
              Gender</label
            >
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Male"
                v-model.number="formData.gender"
              />
              <label class="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="female"
                v-model.number="formData.gender"
              />
              <label class="form-check-label" for="inlineRadio2">female</label>
            </div>
            <span
              v-for="error in v$.gender.$errors"
              :key="error.$uid"
              class="small text-danger"
            >
              {{ error.$message }}
            </span>
          </div>
        </div>

        <div>
          <button class="button-6">Add</button>
        </div>
      </div>
    </form>
  </section>
</template>
<script setup>
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import useVuelidate from "@vuelidate/core";
import { helpers, minLength, required, email } from "@vuelidate/validators";
const userStore = useUserStore();
const router = useRouter();
const formData = reactive({
  fname: "",
  lname: "",
  email: "",
  address: "",
  phone: "",
  gender: "",
});
const rules = computed(() => {
  return {
    fname: { required, containUser: helpers.withMessage("*", containUser) },
    lname: { required },
    email: { required, email },
    address: { required },
    phone: { required, minLength: minLength(10) },
    gender: { required },
  };
});

const containUser = (value) => {
  return value.includes("");
};
const v$ = useVuelidate(rules, formData);

const adduser = async () => {
  const result = await v$.value.$validate();
  if (result) {
    alert("Success");
    userStore.createUser(formData);
    router.push({ name: "user-list-view" });
  } else {
    alert("Something went wrong");
  }
};
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
  margin-top: 20px;
}
</style>
