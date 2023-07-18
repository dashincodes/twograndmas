/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        92: "38rem",
      },
      textUnderlineOffset: {
        10: "12px",
      },
      width: {
        100: "35rem",
      },
      backgroundImage: {
        'truck': "url('https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/grandmas_food_truck.jpg?updatedAt=1688059873381')",
        
      }
    },
  },
  plugins: [],
};
