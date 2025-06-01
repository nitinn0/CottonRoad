const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const products = [
  {
    name: "Women's White Cotton Lycra Regular Fit Pant",
    description: "Comfortable white cotton lycra pants for women, perfect for daily wear.",
    price: 1299,
    category: "Women",
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec",
    inStock: true
  },
  {
    name: "Women's Navy Cotton Lycra Slim Fit Dress",
    description: "Slim fit navy dress made from premium cotton lycra, perfect for casual outings.",
    price: 1599,
    category: "Women",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
    inStock: true
  },
  {
    name: "Men's Khaki Cotton Elastane Regular Fit Pant",
    description: "Comfortable pants with cotton elastane blend, ideal for casual wear.",
    price: 1899,
    category: "Men",
    image: "https://cottonworld.net/cdn/shop/products/M-PANTS-11743-20628-KHAKI_5.jpg?v=1737716452&width=960",
    inStock: true
  },
  {
    name: "Men's Blue Cotton Regular Fit Tshirt",
    description: "Classic blue cotton t-shirt with regular fit, perfect for everyday wear.",
    price: 1299,
    category: "Men",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    inStock: true
  },
  {
    name: "Men's Khaki Cotton Lycra Regular Fit Pant",
    description: "Comfortable khaki pants with cotton lycra blend, great for office wear.",
    price: 1499,
    category: "Men",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
    inStock: true
  },
  {
    name: "Women's Wine Cotton Loose Fit Knit Dress",
    description: "Elegant wine-colored loose fit knit dress, perfect for casual occasions.",
    price: 1799,
    category: "Women",
    image: "https://images.meesho.com/images/products/123916413/qki3h_1200.jpg",
    inStock: true
  },
  {
    name: "Women's Navy Viscose Elastane Knit Skirt",
    description: "Stylish navy skirt with viscose elastane blend, great for office wear.",
    price: 1299,
    category: "Women",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa",
    inStock: true
  },
  {
    name: "Men's Lime Cotton Regular Fit Tshirt",
    description: "Vibrant lime cotton t-shirt with regular fit, perfect for casual outings.",
    price: 1199,
    category: "Men",
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9",
    inStock: true
  },
  {
    name: "Women's Beige Cotton Lycra Regular Fit Pant",
    description: "Elegant beige cotton lycra pants, perfect for office wear.",
    price: 1499,
    category: "Women",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqqWUKSlR8L0iGt854GXpU9vAjV-70zvng4prSwO_3U_5i_AkndIUWZLagXV3MVLjZh7xKFfO3TPpT9lxF7N7-CmbGNHpgtEKYIXKNWNPU4iAy5JRFyruMnxE&usqp=CAc",
    inStock: true
  },
  {
    name: "Women's Teal Cotton Regular Fit Pants",
    description: "Stylish teal cotton pants with regular fit, great for casual wear.",
    price: 1599,
    category: "Women",
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec",
    inStock: true
  },
  {
    name: "Men's Black Cotton Polo Tshirt",
    description: "Classic black cotton polo t-shirt, perfect for semi-formal occasions.",
    price: 1299,
    category: "Men",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
    inStock: true
  },
  {
    name: "Women's Pink Cotton Casual Top",
    description: "Comfortable pink cotton casual top, ideal for daily wear.",
    price: 1199,
    category: "Women",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRY_JtnZIUIbRDTxyRLhK3sjIJvmq8ZSt5O0V5RYbgFKzr3bOblrbS5efiNjDnMqN7NmpvDQvdgDikqG5bP6LRHyLkrY-jCdIIbhOvDnHTy89mvjdXPkeeT9uSK85ogtfzxJk_bSqe7&usqp=CAc",
    inStock: true
  },
  {
    name: "Men's Grey Cotton Sweatshirt",
    description: "Warm grey cotton sweatshirt, perfect for casual winter wear.",
    price: 1899,
    category: "Men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22",
    inStock: true
  },
  {
    name: "Women's Black Cotton Leggings",
    description: "Comfortable black cotton leggings, great for daily wear.",
    price: 1299,
    category: "Women",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa",
    inStock: true
  },
  {
    name: "Men's White Cotton Formal Shirt",
    description: "Classic white cotton formal shirt, perfect for office wear.",
    price: 1999,
    category: "Men",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
    inStock: true
  },
  {
    name: "Women's Green Cotton Summer Dress",
    description: "Light and comfortable green cotton summer dress.",
    price: 1699,
    category: "Women",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRRHMtzae027UbwfyW9zT5zhTVV4I7b-pf_sCmhibEqlturkOFvNVfCSG0v9XNJO5TDbdZbc5D7UYryft9uEvyrhX8h091vWsQjMaFw3eo-Ih8tBYbC9modlw&usqp=CAc",
    inStock: true
  },
  {
    name: "Men's Brown Cotton Chinos",
    description: "Stylish brown cotton chinos, perfect for casual office wear.",
    price: 1899,
    category: "Men",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
    inStock: true
  },
  {
    name: "Women's Yellow Cotton Blouse",
    description: "Elegant yellow cotton blouse, great for office wear.",
    price: 1499,
    category: "Women",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa",
    inStock: true
  },
  {
    name: "Men's Navy Cotton Sweater",
    description: "Warm navy cotton sweater, perfect for winter wear.",
    price: 2199,
    category: "Men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22",
    inStock: true
  },
  {
    name: "Women's Purple Cotton Cardigan",
    description: "Stylish purple cotton cardigan, great for layering.",
    price: 1799,
    category: "Women",
    image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217",
    inStock: true
  },
  {
    name: "Men's Red Cotton Casual Shirt",
    description: "Vibrant red cotton casual shirt, perfect for casual outings.",
    price: 1599,
    category: "Men",
    image: "https://crocodile.in/cdn/shop/products/1_1034e81e-b3b9-4b23-8dcc-76a18ed03bac.jpg?v=1714805175&width=5000",
    inStock: true
  },
  {
    name: "Women's Orange Cotton Maxi Dress",
    description: "Elegant orange cotton maxi dress, perfect for summer.",
    price: 1899,
    category: "Women",
    image: "https://assets.ajio.com/medias/sys_master/root/20240920/LeRt/66ed4209f9b8ef490b54cdea/-473Wx593H-700172454-orange-MODEL.jpg",
    inStock: true
  },
  {
    name: "Men's Green Cotton Hoodie",
    description: "Comfortable green cotton hoodie, great for casual wear.",
    price: 1999,
    category: "Men",
    image: "https://www.lazychunks.com/cdn/shop/products/1_a7178a18-2fee-475b-a981-cc08433979e6.jpg?v=1604816292",
    inStock: true
  },
  {
    name: "Women's Brown Cotton Jacket",
    description: "Stylish brown cotton jacket, perfect for layering.",
    price: 2499,
    category: "Women",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa",
    inStock: true
  },
  {
    name: "Men's Purple Cotton Tshirt",
    description: "Vibrant purple cotton t-shirt, great for casual wear.",
    price: 1299,
    category: "Men",
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9",
    inStock: true
  },
  {
    name: "Women's Grey Cotton Jumpsuit",
    description: "Comfortable grey cotton jumpsuit, perfect for casual wear.",
    price: 1899,
    category: "Women",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03",
    inStock: true
  },
  {
    name: "Men's Black Cotton Denim Jacket",
    description: "Classic black cotton denim jacket, great for layering.",
    price: 2799,
    category: "Men",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
    inStock: true
  },
  {
    name: "Women's Blue Cotton Shirt Dress",
    description: "Elegant blue cotton shirt dress, perfect for office wear.",
    price: 1699,
    category: "Women",
    image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217",
    inStock: true
  },
  {
    name: "Men's Beige Cotton Cargo Pants",
    description: "Comfortable beige cotton cargo pants, great for casual wear.",
    price: 1899,
    category: "Men",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
    inStock: true
  },
  {
    name: "Luxury Bridal Lehenga - Red Gold Embroidered",
    description: "Exquisite red and gold embroidered bridal lehenga with intricate work.",
    price: 40000,
    category: "Luxury",
    image: "https://khushboobaheti.com/cdn/shop/products/RoyalPlum-EmbroideredDesignerBridalLehengabyLabelKhushbooBaheti1.webp?v=1680113723&width=1445",
    inStock: true
  },
  {
    name: "Luxury Partywear Saree - Silver Sequin",
    description: "Stunning silver sequin saree for special occasions.",
    price: 39000,
    category: "Luxury",
    image: "https://sunasa.in/cdn/shop/products/IMG_20220203_023834_1445x.jpg?v=1677835030",
    inStock: true
  },
  {
    name: "Luxury Designer Gown - Royal Blue",
    description: "Royal blue designer gown with intricate work and premium fabric.",
    price: 38500,
    category: "Luxury",
    image: "https://dressrent.in/cdn/shop/products/WhatsAppImage2023-02-27at4.54.38PM.jpg?v=1677505713",
    inStock: true
  },
  {
    name: "Luxury Lehenga - Emerald Green Zari Work",
    description: "Emerald green lehenga with rich zari embroidery and premium fabric.",
    price: 40000,
    category: "Luxury",
    image: "https://img2.ogaanindia.com/pub/media/catalog/product/cache/3f6619daccdb194398d06464ab49fa6e/s/c/sc25461.jpg",
    inStock: true
  }
];

const addProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Add new products
    const result = await Product.insertMany(products);
    console.log(`Successfully added ${result.length} products`);

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

addProducts(); 