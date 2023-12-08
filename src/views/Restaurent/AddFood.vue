<template>
  <v-container>
    <h1>Add New Food</h1>
    <v-form @submit.prevent="addFood">
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="food.name" label="Food Name"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-file-input v-model="food.file" label="Food Image" @change="onFileChange"></v-file-input>
        </v-col>
        <v-col cols="12">
          <v-btn type="submit" color="primary">Add Food</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      food: {
        name: '',
        file: null,
      },
    };
  },
  methods: {
    async addFood() {
      try {
        let formData = new FormData();
        formData.append('name', this.food.name);
        formData.append('file', this.food.file);

        await axios.post('https://localhost:7053/Food/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        alert('Food added successfully!');
        // You can redirect or perform any necessary actions after adding food
      } catch (error) {
        console.error('Error adding food:', error);
      }
    },
    onFileChange(event) {
      this.food.file = event.target.files[0];
    },
  },
};
</script>

<style>
/* Your custom styles */
</style>
