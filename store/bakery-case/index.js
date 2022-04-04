import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [
        {
            id: 1,
            title: 'Bake & Cutlery',
            data: [
                {
                    id: 1,
                    title: 'please include single use utensils with my order.',
                    description: '',
                    price: '',
                    imageURL: '',
                    stock: 100
                },
                {
                    id: 2,
                    title: 'no bag please.',
                    description: '',
                    price: '',
                    imageURL: '',
                    stock: 100,
                },
            ],
    
        },
        {
            id: 2,
            title: 'Bakery Case',
            data: [
                {
                    id: 3,
                    title: 'sour cream coffee cake w/ fruit jam',
                    description: '',
                    price: '3K',
                    imageURL: '',
                    stock: 2
                },
                {
                    id: 4,
                    title: 'Peach Scone',
                    description: '',
                    price: '',
                    imageURL: '',
                    stock: 0,
                },
                {
                    id: 5,
                    title: 'Chocolate Chip Muffin',
                    description: '',
                    price: '',
                    imageURL: '',
                    stock: 0,
                },
                {
                    id: 6,
                    title: 'Ham Cheddar Scone',
                    description: '',
                    price: '',
                    imageURL: '',
                    stock: 0,
                },
            ],
    
        },
        {
            id: 3,
            title: 'Bread w/ Butter & Jam',
            data: [
                {
                    id: 7,
                    title: 'toasted bread w/ butter & jam',
                    description: '',
                    price: '3K',
                    imageURL: '',
                    stock: 2
                },
                {
                    id: 8,
                    title: 'griddled bread w/ butter & Jam',
                    description: '',
                    price: '3K',
                    imageURL: '',
                    stock: 0,
                },
            ],
    
        },
        {
            id: 4,
            title: 'Sandwich',
            data: [
                {
                    id: 9,
                    title: 'spike`s greenhouse',
                    description: 'raw & pickled vegetables, onion, lettuce, Buttercup cheese, special sauce',
                    price: '20K',
                    imageURL: 'https://s3.amazonaws.com/toasttab/restaurants/restaurant-63241000000000000/menu/items/3/item-400000007814173783_1608593041_180.jpg',
                    stock: 2
                },
                {
                    id: 10,
                    title: '`cuban` grilled cheese',
                    description: 'smoked ham, cheddar, pickled jalapeños & cucumbers, mustard',
                    price: '50K',
                    imageURL: 'https://s3.amazonaws.com/toasttab/restaurants/restaurant-63241000000000000/menu/items/3/item-400000007814173783_1608593041_180.jpg',
                    stock: 2
                },
            ],
    
        },
    ],
};

const ProductsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(state, action) {
			state.products = action.payload
		},
	},
});

export const { setProducts } = ProductsSlice.actions;

export default ProductsSlice.reducer;
