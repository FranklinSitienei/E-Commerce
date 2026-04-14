import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // if you to be arrays you find all products
        res.json({products});
    } catch (error) {
        console.log("error in get all products controller", error.message);
        res.status(500).json({message: "server error", error: error.message});
    }
};

export const getFeaturedProducts = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}