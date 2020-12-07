class DeleteClassController {
  constructor(DeleteClassUseCase) {
    this._deleteClassUseCase = DeleteClassUseCase;
  }

  async handle(req, res) {
    try {
      const { id } = req.params;

      await this._deleteClassUseCase.execute(id);

      return res.status(200).send();
    } catch (e) {
      return res.status(400).json({
        message: e.message || 'Internal server Error, try again later',
      });
    }
  }
}

module.exports = DeleteClassController;
