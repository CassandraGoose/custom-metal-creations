<template lang="html">
  <div class="margin-top container">

    <h4>Hello! This page can only be seen by you when you are logged in.
      If you make a new piece of metal art and want it to show up on the
      website, fill out the form below. When you press 'submit',
      the image will be stored online and the information will be
      sent to my database. The site should have the new artwork.
      Let me know if it ever breaks. </h4>

    <br />

    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input class="input" type="text" v-model="title" placeholder="Title...">
      </div>
    </div>

    <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea
          class="textarea"
          v-model="description"
          placeholder="Description here...">
          </textarea>
      </div>
      <p class="help">Optional</p>
    </div>


    <div class="file">
      <label class="file-label">
        <input class="file-input" type="file" @change.native="uploadImage" name="resume">
        <span class="file-cta">
          <span class="file-label">
            Upload an Image...
          </span>
        </span>
      </label>
    </div>

    <br />

    <a @click="submitItem" class="button">Submit</a>

  </div>
</template>

<script>
const URL = 'http://localhost:3000/new-item';
/* eslint-disable */
export default {
  name: 'newItem',
  data() {
    return {
      title: '',
      description: '',
      files: [],
      image: '',
    }
  },
  methods: {
    uploadImage() {
      const file = this.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result;
        this.files = [];
      };
      reader.readAsDataURL(file);
    },
    submitItem() {
      const payload = {
        title: this.title ,
        description: this.description,
        image: this.files[0],
      }
      fetch(URL, {
             method: 'POST',
             body: JSON.stringify(payload),
             headers: { 'content-type': 'application/json' }
         }).then((res) => res.json())
         .then((data) => data)
         .catch((err)=> console.log(err))

    }
  },
}
</script>
