import ProductItem from '../model/productItem.js';

export const getProducts = async (req, res) => {
  try {
    const products = await ProductItem.find();

    res.json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCategory = async ({ params, query }, res) => {
  try {
    let products;
    if (query.category) {
      products = await ProductItem.find({
        gender: `${params.gender}`,
        category: `${query.category}`,
      });
    } else {
      products = await ProductItem.find({
        gender: `${params.gender}`,
      });
    }

    res.json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const products = await ProductItem.findById(req.params.productId);
    res.json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
