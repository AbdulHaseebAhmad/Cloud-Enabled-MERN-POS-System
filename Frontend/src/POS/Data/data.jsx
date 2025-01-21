const products = [
    {
      id: 1,
      name: "Product Name 1",
      sku: "123456",
      qty: 2,
      price: 20.0,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/019/023/604/small_2x/front-view-tasty-meat-burger-with-cheese-and-salad-free-photo.jpg",
    },
    {
      id: 2,
      name: "Product Name 2",
      sku: "654321",
      qty: 1,
      price: 15.0,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/023/558/535/small_2x/close-up-of-a-juicy-burger-with-fries-it-look-very-delicious-big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-and-red-onion-photo.jpg",
    },
    {
      id: 3,
      name: "Product Name 3",
      sku: "6543213",
      qty: 1,
      price: 15.0,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 4,
      name: "Product Name 4",
      sku: "654324",
      qty: 1,
      price: 15.0,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/023/558/535/small_2x/close-up-of-a-juicy-burger-with-fries-it-look-very-delicious-big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-and-red-onion-photo.jpg",
    },
    {
      id: 5,
      name: "Product Name 5",
      sku: "654324",
      qty: 1,
      price: 15.0,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/023/558/535/small_2x/close-up-of-a-juicy-burger-with-fries-it-look-very-delicious-big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-and-red-onion-photo.jpg",
    },
    {
      id: 6,
      name: "Product Name 6",
      sku: "654324",
      qty: 1,
      price: 15.0,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/023/558/535/small_2x/close-up-of-a-juicy-burger-with-fries-it-look-very-delicious-big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-and-red-onion-photo.jpg",
    },
  ];

export {products};