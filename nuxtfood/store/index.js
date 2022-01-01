import axios from "axios";
export const state = () => ({
  fooddata: [],
});

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }

export const mutations = {
  updateFoodData: (state, data) => {
    console.log("hi");
    console.log(Array.isArray(data));
    state.fooddata = data;
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
