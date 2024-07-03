class ProductsController {
    index(request, response) {
      return response.json(["Produto 1", "Produto 2", "Produto 3"]);
    }

    create(request, response) {
        const { name, price } = request.body;
        return response.status(201).json({ name, price });
      }
  }
  
  module.exports = ProductsController;