class SalesController {
  index(request, response) {
    return response.json(["Venda 1", "Venda 2", "Venda 3"]);
  }
}

module.exports = SalesController;