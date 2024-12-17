import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async () => {
      try {
        const response = await axios.get('http://localhost:8000/product/all-products');
        console.log('API response:', response.data.data); // Debug API response
        return response.data.data; // Ensure this is the expected array
      } catch (error) {
        console.error('API Error:', error.message);
        throw error;
      }
    }
  );
  
