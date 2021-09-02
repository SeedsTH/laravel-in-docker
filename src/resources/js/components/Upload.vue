<template>
  <div>
    <div >
      <p>Upload an image to Firebase:</p>
      <input type="file" @change="previewImage" accept="image/*" >
    </div>
    <div v-if="imageData!=null">
        <img class="preview" :src="picture">
        <br>
        <button @click="onUpload">Upload</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Upload',
  data(){
	return{
      imageData: null,
      picture: null,
	}
  },
  methods:{
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

    onUpload(){
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      
      
    }

  }
}
</script>

<style>

</style>