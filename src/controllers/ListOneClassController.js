class ListOneClassController {
  constructor(ListOneClassUseCase) {
    this._listOneClassUseCase = ListOneClassUseCase;
  }

  async handle(req, res) {
    try {
      const { id } = req.params;
      const filteredClass = await this._listOneClassUseCase.execute(id);

      return res.status(201).json(filteredClass);
    } catch (e) {
      return res.status(400).json({
        message: e.message || 'Internal server Error, try again later',
      });
    }
  }
}

module.exports = ListOneClassController;
