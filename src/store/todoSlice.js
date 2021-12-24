import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function (info, { rejectWithValue }) {
    try {
      let setting;
      if (!info) {
        setting = "";
      } else {
        setting = info.categories + info.group + info.stock;
      }
      const response = await fetch(
        "https://back.brok.it-meteor.ru/api/v1/catalog/export/items?" + setting
      );

      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "todos/fetchCategories",
  async function () {
    const response = await fetch(
      "https://back.brok.it-meteor.ru/api/v1/catalog/export/categories"
    );

    const data = await response.json();

    return data;
  }
);
export const fetchGroups = createAsyncThunk(
  "todos/fetchGroups",
  async function (id) {
    const response = await fetch(
      `https://back.brok.it-meteor.ru/api/v1/catalog/export/groups?filter[parentIds][]=${id}`
    );

    const data = await response.json();

    return data;
  }
);

export const fetchStocks = createAsyncThunk(
  "todos/fetchStocks",
  async function () {
    const response = await fetch(
      "https://back.brok.it-meteor.ru/api/v1/catalog/export/stocks"
    );

    const data = await response.json();

    return data;
  }
);
const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    fetchFilter: {
      idCategories: "",
      categories: "",
      group: "",
      stock: "",
    },
    todos: [],
    categories: [],
    groups: [],
    stocks: [],
    status: null,
    error: null,
  },
  reducers: {
    addCategoriesSetting(state, action) {
      state.fetchFilter.categories = action.payload;
    },
    addGroupSetting(state, action) {
      state.fetchFilter.group = action.payload;
    },
    addStockSetting(state, action) {
      state.fetchFilter.stock = action.payload;
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: setError,
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
    [fetchGroups.fulfilled]: (state, action) => {
      state.groups = action.payload;
    },
    [fetchStocks.fulfilled]: (state, action) => {
      state.stocks = action.payload;
    },
  },
});

export const { addCategoriesSetting, addGroupSetting, addStockSetting } =
  todoSlice.actions;

export default todoSlice.reducer;
