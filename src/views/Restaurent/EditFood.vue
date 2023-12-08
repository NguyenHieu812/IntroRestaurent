<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Edit Food</h1>
        <v-form @submit.prevent="editFood">
          <v-row>
            <v-col cols="12">
              <input type="hidden" v-model="food.id" />
              <v-text-field v-model="food.name" label="Food Name"></v-text-field>
            </v-col>
            <v-col cols="12">
              <input type="file" @change="onFileChange" />
            </v-col>
            <v-col cols="12">
              <v-btn type="submit" color="primary">Save Changes</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      food: {
        id: null,
        name: '',
        file: null,
      },
    };
  },
  async created() {
    const foodId = this.$route.params.id;
    await this.fetchFoodDetails(foodId);
  },
  methods: {
    async fetchFoodDetails(id) {
      try {
        const response = await axios.get(`https://localhost:7053/Food/${id}`);
        this.food = response.data;
      } catch (error) {
        console.error('Error fetching food details:', error);
      }
    },
    async editFood() {
  try {
    const formData = new FormData();
    formData.append('id', this.food.id); // Thêm id của food vào formData
    formData.append('name', this.food.name);
    formData.append('file', this.food.file);

    await axios.put(`https://localhost:7053/Food/${this.food.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    alert('Food updated successfully!');
  } catch (error) {
    console.error('Error editing food:', error);
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
