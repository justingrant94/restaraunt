import dbConnect from "../../../utilities/mongo"
import Product from '../../../models/product'

// remember we use async as we arent sure how long it will take.

export default async function handler(req, res) {
  const { method,
    query:
    { id }
  } = req

  dbConnect()

  if (method === "GET") {
    try {
      const product = await Product.findById(id)
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }


  if (method === "DELETE") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product, "Your product has been added.");
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "PUT") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product, "Your product has been added.");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

