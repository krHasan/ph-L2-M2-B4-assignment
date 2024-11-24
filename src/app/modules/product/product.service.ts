import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (productData: TProduct) => {
    const result = await Product.create(productData);
    return result;
};

const getAllProductsFromDB = async (searchTerm: string) => {
    if (searchTerm) {
        const searchPattern = new RegExp(searchTerm, "i");
        return await Product.find({
            $or: [
                { name: searchPattern },
                { brand: searchPattern },
                { category: searchPattern },
            ],
        }).exec();
    } else {
        return await Product.find();
    }
};

const getProductByIdFromDB = async (id: string) => {
    const result = await Product.findById(id).exec();
    return result;
};

export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getProductByIdFromDB,
};
