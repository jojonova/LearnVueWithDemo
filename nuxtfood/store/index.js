import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  fooddata: [],
  cart: [],
});

export const getters = {
  totalPrice: (state) => {
    if (!state.cart.length) return 0;
    return state.cart
      .reduce((acc, cur) => acc + +cur.price * cur.count, 0)
      .toFixed(2);
    // 保留两位
  },
  totalCount: (state) => {
    if (!state.cart.length) {
      return 0;
    }
    return state.cart.reduce((acc, cur) => acc + +cur.count, 0);
  },
  //数组对象属性累加
};

export const mutations = {
  updateFoodData: (state, data) => {
    // console.log("hi");
    // console.log(Array.isArray(data));
    state.fooddata = data;
  },
  add2Cart: (state, formOutput) => {
    formOutput.id = uuidv4();
    console.log(formOutput);

    state.cart.push(formOutput);
  },
  removeOneOfFormCart(state, payload) {
    let index1 = state.cart.findIndex((er) => er.id == payload.id);
    state.cart[index1].count
      ? state.cart[index1].count--
      : state.cart.splice(index1, 1);
  },
  // ARRAY的splice方法，前两参数控制数组的删除的起始位置和个数，第三个参数控制添加
  addOneOfFormCart(state, payload) {
    let itemfound = state.cart.find((el) => el.id == payload.id);
    console.log(itemfound);
    itemfound ? itemfound.count++ : state.cart.push(payload);
  },
  //ARRAY的find和findIndex方法
  cancelOneFormCart(state, payload) {
    let index = state.cart.findIndex((er) => {
      er.id === payload.id;
    });
    state.cart.splice(index, 1);
  },
};

// export const actions = {
//   async getFoodData({ state, commit }) {
//     if (state.fooddata.length) return;
//     try {
//       await fetch(
//         "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "x-api-key": process.env.AWS_API_KEY,
//           },
//         }
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           commit("updateFoodData", data);
//         });
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   //在plugins里创建server来服务端加载数据call
// };
export const actions = {
  async getFoodData({ state, commit }) {
    if (state.fooddata.length) return;

    try {
      await axios({
        method: "GET",
        url: "http://localhost:11120/fooddata.json",
      }).then(({ data }) => {
        const getdata = data.fooddata;

        commit("updateFoodData", getdata);
      });
    } catch (err) {
      console.log(err);
    }
  },
};
