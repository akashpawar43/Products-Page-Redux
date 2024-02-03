import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDataAsync = createAsyncThunk('products/getDataAsync',
    async () => {
        const response = await fetch('https://dummyjson.com/products');
        if (response.ok) {
            const products = await response.json();
            return products;
        }
    }
)

export const getSingleProduct = createAsyncThunk('products/getSingleProduct',
    async (payload) => {
        const res = await fetch(`https://dummyjson.com/products/${payload.id}`);
        if (res.ok) {
            const products = await res.json();
            return { products };
        }
    }
)

const productSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getDataAsync.fulfilled, (state, action) => {
            return action.payload.products;
        })
            .addCase(getSingleProduct.fulfilled, (state, action) => {
                return action.payload.products;
            })
    }
})

export default productSlice.reducer;