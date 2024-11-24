import { Request, Response } from "express";
import productValidationSchema from "./product.validation";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const validatedProductData = productValidationSchema.parse(product);
        const result = await ProductServices.createProductIntoDB(
            validatedProductData
        );
        res.status(200).json({
            message: "Bike created successfully",
            success: true,
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Something went wrong",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
};

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query?.searchTerm;
        const result = await ProductServices.getAllProductsFromDB(
            searchTerm as string
        );
        res.status(200).json({
            message: "Bikes retrieved successfully",
            success: true,
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Something went wrong",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
};

const getProductById = async (req: Request, res: Response) => {
    try {
        const productId = req.params?.productId;
        const result = await ProductServices.getProductByIdFromDB(productId);
        res.status(200).json({
            message: "Bike retrieved successfully",
            success: true,
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Something went wrong",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
};

export const ProductControllers = {
    createProduct,
    getAllProducts,
    getProductById,
};
