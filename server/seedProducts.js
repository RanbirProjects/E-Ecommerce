const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
    // Books
    {
        name: "The Great Gatsby",
        description: "A classic novel by F. Scott Fitzgerald about the American Dream",
        price: 12.99,
        category: "Books",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
        stock: 50
    },
    {
        name: "To Kill a Mockingbird",
        description: "Harper Lee's masterpiece about racial injustice in the American South",
        price: 14.99,
        category: "Books",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
        stock: 45
    },
    {
        name: "1984",
        description: "George Orwell's dystopian masterpiece",
        price: 11.99,
        category: "Books",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
        stock: 40
    },
    // Food Products
    {
        name: "Organic Honey",
        description: "Pure, natural honey from local beekeepers",
        price: 8.99,
        category: "Food",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500",
        stock: 100
    },
    {
        name: "Dark Chocolate",
        description: "70% dark chocolate made from organic cocoa beans",
        price: 4.99,
        category: "Food",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
        stock: 75
    },
    {
        name: "Organic Coffee Beans",
        description: "Premium arabica coffee beans, freshly roasted",
        price: 15.99,
        category: "Food",
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500",
        stock: 60
    },
    // Add Dairy Products
    {
        name: "Whole Milk",
        description: "Fresh, organic whole milk",
        price: 3.99,
        category: "Dairy",
        image: "https://sapinsdairy.com/wp-content/uploads/2021/12/milk-bottle.png",
        stock: 80
    }
];

const seedProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Clear existing products
        await Product.deleteMany({});
        console.log('Cleared existing products');

        // Insert new products
        await Product.insertMany(products);
        console.log('Successfully seeded products');

        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding products:', error);
        process.exit(1);
    }
};

seedProducts(); 