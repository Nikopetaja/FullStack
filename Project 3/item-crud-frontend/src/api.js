import axios from 'axios';

const API_URL = "https://fullstack-rest-api.onrender.com/api";

export const getAllItems = () => axios.get(`${API_URL}/getall`);
export const getItemById = (id) => axios.get(`${API_URL}/${id}`);
export const addItem = (itemData) => axios.post(`${API_URL}/add`, itemData);
export const updateItem = (id, updatedData) => axios.put(`${API_URL}/update/${id}`, updatedData);
export const deleteItem = (id) => axios.delete(`${API_URL}/delete/${id}`);
