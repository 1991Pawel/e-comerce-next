import ProductItem from '../model/productItem.js';

export const getProducts = async (req, res) => {
  try {
    const products = await ProductItem.find();
    console.log(products);
    res.json(products);
  } catch (error) {
    console.log({ message: error });
  }
};
