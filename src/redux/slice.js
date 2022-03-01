import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
 Chapati:[
    {
      id: 1,
      itemId: "chapati01",
      image:
        "https://recipemarker.com/wp-content/uploads/2020/02/Roti-and-Naan-1024x683.jpg",
      name: "Tandoori Chapati",
      ratings: 5,
      price: "10",
    },
    {
      id: 2,
      itemId: "chapati01",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.Ug-Wn4E7Ed5dcdqAX2J0rQHaEK&pid=Api&P=0&w=341&h=192",
      name: "Rumali Chapati",
      ratings: 5,
      price: "20",
    },
    {
      id: 3,
      itemId: "chapati01",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hqqia8r6pqpjm7zdysrn",
      name: "Plain Chapati",
      ratings: 5,
      price: "18",
    },
    {
      id: 4,
      itemId: "chapati01",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mhsb6lubr1jl7imsvkyi",
      name: "Butter Chapati",
      ratings: 5,
      price: "20",
    },
  ],
  
  Pickle:[
    {
      id: 7,
      itemId: "pickle01",
      image:
        "https://tse1.explicit.bing.net/th?id=OIP.Cg9D1B7aY4wQijPUvIT3FQHaHa&pid=Api&P=0&w=162&h=162",
      name: "Mango Pickle",
      ratings: 5,
      price: "10",
    },
    {
      id: 8,
      itemId: "pickle01",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.mLqS9XEecnNYFVJbgNnDsQHaGr&pid=Api&P=0&w=215&h=194",
      name: "Lemon Pickle",
      ratings: 5,
      price: "15",
    },
    {
      id: 9,
      itemId: "pickle01",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.qhxjNNSW_gQdp9v2X85V8AHaFi&pid=Api&P=0&w=225&h=168",
      name: "Green Chilli Pickle",
      ratings: 5,
      price: "15",
    },
    {
      id: 10,
      itemId: "pickle01",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.HcGkz03bf7YgC-4jsBdzMgAAAA&pid=Api&P=0&w=162&h=162",
      name: "Red Chilli Pickle",
      ratings: 4,
      price: "15",
    },
    {
      id: 11,
      itemId: "pickle01",
      image:
        "https://image.shutterstock.com/image-photo/mixed-vegetable-pickle-600w-277542293.jpg",
      name: "Mixed Pickle",
      ratings: 4,
      price: "18",
    },
    {
      id: 12,
      itemId: "pickle01",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.o-2HevIhP6NDo-ZfwqaFlQHaEK&pid=Api&P=0&w=301&h=169",
      name: "Ginger Pickle",
      ratings: 4,
      price: "20",
    },
  ],

  Curd:[
      {
        id: 13,
        itemId: "curd01",
        image:
          "https://image.shutterstock.com/image-photo/fresh-curd-traditional-pot-on-600w-1890391171.jpg",
        name: "Plain Curd",
        ratings: 4,
        price: "45",
      },
      {
        id: 14,
        itemId: "curd01",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.XxnfxJiJJ-bZQsevELUoHQHaEV&pid=Api&P=0&w=279&h=163",
        name: "Masala Butter Milk",
        ratings: 4,
        price: "15",
      },
      {
        id: 15,
        itemId: "curd01",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.NsTQHgLTA_w-FlRXT2SIIAHaE8&pid=Api&P=0&w=249&h=166",
        name: "Mint Butter Milk",
        ratings: 4,
        price: "20",
      },
      {
        id: 16,
        itemId: "curd01",
        image:
          "https://media.istockphoto.com/photos/authentic-indian-cold-drink-made-up-of-curd-milk-malai-called-lassi-picture-id806310804?k=20&m=806310804&s=612x612&w=0&h=VQqEOXuddVOr3m95a6LZjhE_WVbYVNo04Qh6rM1qiVY=",
        name: "Malai Lassi",
        ratings: 4,
        price: "40",
      },
      {
        id: 17,
        itemId: "curd01",
        image:
          "https://media.istockphoto.com/photos/mango-lassi-yogurt-or-smoothie-with-turmeric-healthy-probiotic-indian-picture-id1077607490?k=20&m=1077607490&s=612x612&w=0&h=Mu3nXfbhHwhEybaFtLqZR3gxBuKKSNtJUrBiHqHZuWw=",
        name: "Mango Lassi",
        ratings: 4,
        price: "50",
      },
  ],

  Sweet:[
      {
        id: 20,
        itemId: "sweet01",
        image:
          "https://tse2.mm.bing.net/th?id=OIP.3yfWZE3IFtJkuCqbd147uAHaE7&pid=Api&P=0&w=263&h=175",
        name: "Kalakan Barfi",
        ratings: 3,
        price: "50",
      },
      {
        id: 21,
        itemId: "sweet01",
        image:
          "https://media.gettyimages.com/photos/closeup-of-kaju-katlibarfi-indian-sweetdessert-in-a-brass-container-picture-id1203936857?k=20&m=1203936857&s=612x612&w=0&h=jkf9dm9E598yfLAvbXb-Qc6yth78h1yDC5sibFYDpRU=",
        name: "Kaju Katali",
        ratings: 5,
        price: "80",
      },
      {
        id: 22,
        itemId: "sweet01",
        image:
          "https://media.gettyimages.com/photos/closeup-of-jalebisweet-food-picture-id1027647068?k=20&m=1027647068&s=612x612&w=0&h=LKP0FMM3MuKoHZICSA28ZqSwJizFI4K9QqZVY3OYZx4=",
        name: "Jalebi",
        ratings: 3,
        price: "30",
      },
      {
        id: 23,
        itemId: "sweet01",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.EtPkxm1wvze26mKFAY6vNQAAAA&pid=Api&P=0&w=340&h=166",
        name: "Rasmalai",
        ratings: 5,
        price: "60",
      },
      {
        id: 24,
        itemId: "sweet01",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qvdlli80pjoulgyxzmqs",
        name: "Rasgulla",
        ratings: 3,
        price: "50",
      },
  ],

  Dal:[
    {
      id: 25,
      itemId: "daal01",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.tRxZTsltTVeRbXBsu1vhVQHaFk&pid=Api&P=0&w=204&h=153",
      name: "Daal Tdaka",
      ratings: 4,
      price: "120",
    },
    {
      id: 26,
      itemId: "daal01",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xdji5cxzvaxzdbuid8xr",
      name: "Daal Fry",
      ratings: 4,
      price: "140",
    },
    {
      id: 27,
      itemId: "daal01",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/dsj83qscqmifp6u4ibqw",
      name: "Daal Makhani",
      ratings: 4,
      price: "190",
    },
  ],

  Paneer:[
    {
      id: 31,
      itemId: "paneerDish01",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ahhnvpltuhxy08gueerk",
      name: "Paneer Tikka Masala",
      ratings: 4,
      price: "170",
    },
    {
      id: 32,
      itemId: "paneerDish01",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/diez4voxkwy2es4igmim",
      name: "Paneer Kadhai",
      ratings: 4,
      price: "190",
    },
    {
      id: 33,
      itemId: "paneerDish01",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gcltsw9m92sjhewwzbwi",
      name: "Paneer Tikka",
      ratings: 4,
      price: "230",
    },
    {
      id: 34,
      itemId: "paneerDish01",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.jxwTINORQSjb6D2PzbU4MwHaD4&pid=Api&P=0&w=344&h=180",
      name: "Paneer Chilli",
      ratings: 5,
      price: "200",
    },
    {
      id: 35,
      itemId: "paneerDish01",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/uogdg3dtdtztq51pk70q",
      name: "Paneer 65",
      ratings: 4,
      price: "309",
    },
    {
      id: 36,
      itemId: "paneerDish01",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.o8Pb1S06Jx8RFTbD6WKp7wHaEK&pid=Api&P=0&w=340&h=191",
      name: "Paneer Angara",
      ratings: 4,
      price: "230",
    },
  ],

  Rice:[
    {
      id: 42,
      itemId: "rice01",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.wRtdwGbag3l_Jvn8PxwaRQHaEo&pid=Api&P=0&w=246&h=154",
      name: "Plain Rice",
      ratings: 5,
      price: "60",
    },
    {
      id: 43,
      itemId: "rice01",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.HgYO4-YfW5YLDDXazR2kEwHaE7&pid=Api&P=0&w=247&h=165",
      name: "Jeera Rice",
      ratings: 5,
      price: "70",
    },
    {
      id: 44,
      itemId: "rice01",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.v68K9cn0eFhH_RxxBqATWAHaE8&pid=Api&P=0&w=277&h=184",
      name: "Steam Rice",
      ratings: 5,
      price: "60",
    },
    {
      id: 45,
      itemId: "rice01",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.orU8WvwNIuv07RfWXPREPQHaFE&pid=Api&P=0&w=224&h=153",
      name: "Curd Rice",
      ratings: 5,
      price: "150",
    },
    {
      id: 46,
      itemId: "rice01",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.1RG72Mk3KEDwXWcmEL7JTQHaEK&pid=Api&P=0&w=287&h=161",
      name: "Palak Rice",
      ratings: 5,
      price: "140",
    },
],
  thali:[
    
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  
    addTothali: (state, action) => {
   
      state.thali.push(action.payload);
    },
    RemoveItem:(state,action)=>{
       state.thali.splice(action.payload,1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTothali ,RemoveItem } = counterSlice.actions;

export default counterSlice.reducer