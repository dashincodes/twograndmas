import React from "react";
import MenuComponent from "./MenuComponent";
import { useRef } from "react";

const menuItems = [
  {
    id: 1,
    name: "Fried Chicken",
    description: "Dark meat. Breaded with Two Grandma seasoning",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/Fried_Chicken?updatedAt=1688254055539",
  },
  {
    id: 2,
    name: "Chicken Wings",
    description: "Breaded with Two Grandma seasoning",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/Chicken_Wings?updatedAt=1688254224897",
  },
  {
    id: 3,
    name: "Chicken Fingers & Fries",
    description: "Breaded with white meat",
    //change this link
    imageLink:
      "https://twograndmas.square.site/uploads/1/4/6/3/146358066/s656549349365771147_p141_i1_w387.png?dpr=1",
  },

  {
    id: 4,
    name: "Smothered Chicken",
    description: "Baked & marinated with homemade brown gravy",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/Smothered_Chicken?updatedAt=1688254322866",
  },
  {
    id: 5,
    name: "Jerk Chicken",
    description: "Baked with jerk seasoning bell peppers and onions",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/Jerk_Chicken?updatedAt=1688254410143",
  },
  {
    id: 6,
    name: "Fried Pork Chops",
    description: "Breaded with Two Grandma seasoning",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/Fried_Pork_Chop?updatedAt=1688254468299",
  },
  {
    id: 7,
    name: "Smothered Pork Chops",
    description: "Baked and marinated with homemade brown gravy",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/Smothered_Pork_Chops?updatedAt=1688254553067",
  },
  {
    id: 8,
    name: "Grandma Griot",
    description: "Fried pork marinated with Two Grandma seasoning",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/Griot?updatedAt=1688254637168",
  },
  {
    id: 9,
    name: "Oxtails",
    description: "Slow cooked & marinated with Two Grandma seasoning",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/Oxtails?updatedAt=1688254703242",
  },
  {
    id: 10,
    name: "Fried Shrimp",
    description: "Pre-breaded shrimps with Tartar/hot sauce",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/Fried_Shrimp?updatedAt=1688254765331",
  },
  {
    id: 11,
    name: "Fried Catfish Nuggets & Shrimp",
    description: "Breaded with Two Grandma seasoning",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/catfish_and_shrimp.jpeg?updatedAt=1689715956070",
  },
  {
    id: 12,
    name: "Veggie Platter",
    description: "4 veggies with customer's choice",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/vp_squared_XUmpkEStfv?updatedAt=1689716095461",
  },

  {
    id: 13,
    name: "Baked Chicken",
    description: "Needs a short decription",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/baked_chicken.jpg?updatedAt=1688414818965",
  },
  {
    id: 14,
    name: "Catfish Nuggets",
    description: "Needs a short decription",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/catfish_nuggets.jpeg?updatedAt=1689715956011",
  },



];

const sideItems = [
  {
    id: 1,
    name: "Baked Mac N Cheese",
    description: "Description of the side item goes here",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/IMG_2756_2.jpg?updatedAt=1688255352684",
  },

  {
    id: 2,
    name: "Collard Greens",
    description: "Description of the side item goes here",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/IMG_2690.JPG?updatedAt=1688255282090",
  },
  {
    id: 3,
    name: "Potato Salad",
    description: "Description of the side item goes here",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/IMG_2758.JPG?updatedAt=1688255265740",
  },
  {
    id: 4,
    name: "Green Beans",
    description: "Description of the side item goes here",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/IMG_2689.JPG?updatedAt=1688255282104",
  },
  {
    id: 5,
    name: "Black Eyed Peas",
    description: "Description of the side item goes here",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/black_eyed_peas.jpg?updatedAt=1688414819113",
  },
  {
    id: 6,
    name: "Candied Yams",
    description: "Description of the side item goes here",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/candied_yams.jpg?updatedAt=1688414819194",
  },
  {
    id: 7,
    name: "Fried Plantains",
    description: "Description of the side item goes here",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/fried_plantains.jpeg?updatedAt=1689716188923",
  },
  {
    id: 8,
    name: "Fresh Fries",
    description: "Description of the side item goes here",
    imageLink:
      "https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/fresh_fries.jpeg?updatedAt=1689716188559",
  },
  {
    id: 9,
    name: "Cornbreads",
    description: "Description of the side item goes here",
    imageLink:
      "",
  },
];

function MenuSection() {
  return (
    <div className="py-20 bg-orange-100" id="menuSection">
      <div className=" flex flex-col items-center">
        <div className="text-8xl pt-6 uppercase font-extrabold text-white bg-red-600 py-6 px-12 mb-12 mt-12 mx-2 md:mx-0 " >
          Menu
        </div>
        <div className="md:grid md:grid-cols-2 gap-4 md:px-12 md:pt-12 ">
          {menuItems.map((item) => (
            <div key={item.id}>
              <MenuComponent
                itemName={item.name}
                itemDescription={item.description}
                image={item.imageLink}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pt-12">
        <div className="flex justify-center pb-12 mt-6 md:mb-6">
          <h2 className="text-8xl font-extrabold uppercase text-center bg-red-600 text-white py-6 px-12 mx-2 md:mx-0">
            sides
          </h2>
        </div>
        <div className="md:grid md:grid-cols-2 gap-4 md:px-12  ">
          {sideItems.map((item) => (
            <div key={item.id}>
              <MenuComponent
                itemName={item.name}
                itemDescription={item.description}
                image={item.imageLink}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <a href="https://twograndmas.square.site/" target="blank"> <h2 className="text-4xl uppercase bg-red-600 text-white w-fit  py-8 px-24 rounded-full font-bold">
          see the rest of our menu
        </h2></a>
       
        </div>
    </div>
  );
}

export default MenuSection;
