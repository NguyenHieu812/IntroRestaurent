<template>
  <div>
    <h1>Food List</h1>
    <router-link to="/add">
      <v-btn color="primary">Add</v-btn>
    </router-link>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="searchTerm" label="Search" @input="searchFood"></v-text-field>
      </v-col>
      <v-col v-for="food in filteredFoods" :key="food.id" cols="12" sm="6" md="4" lg="3">
        <v-card>
          <v-img :src="`https://localhost:7053${food.imageUrl}`" height="200"></v-img>
          <v-card-title>{{ food.name }}</v-card-title>
          <v-card-actions>
            <router-link :to="`/edit/${food.id}`">
              <v-btn color="blue">Edit</v-btn>
            </router-link>
            <v-btn color="red" @click="deleteFood(food.id)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      foods: [],
      searchTerm: '', // Thêm searchTerm để lưu từ khóa tìm kiếm
    };
  },
  computed: {
    filteredFoods() {
      // Hàm lọc danh sách sản phẩm dựa trên từ khóa tìm kiếm
      return this.foods.filter(food =>
        food.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  created() {
    this.fetchFoodList();
  },
  methods: {
    async fetchFoodList() {
      try {
        const response = await axios.get('https://localhost:7053/Food');
        this.foods = response.data;
      } catch (error) {
        console.error('Error fetching food list:', error);
      }
    },
    async deleteFood(foodId) {
      try {
        await axios.delete(`https://localhost:7053/Food/${foodId}`);
        this.foods = this.foods.filter(food => food.id !== foodId);
        console.log('Food deleted with ID:', foodId);
      } catch (error) {
        console.error('Error deleting food:', error);
      }
    },
    searchFood() {
      // Gọi hàm lọc danh sách sản phẩm khi người dùng nhập từ khóa tìm kiếm
      // Nó sẽ lọc danh sách sản phẩm và cập nhật filteredFoods
        this.filteredFoods = this.foods.filter(food =>
        food.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    },
  },
};
</script>

<style>
/* Your custom styles */
</style>
