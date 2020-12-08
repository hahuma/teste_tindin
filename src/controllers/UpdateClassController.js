class UpdateClassController {
  constructor(UpdateClassUseCase) {
    this._updateClassUseCase = UpdateClassUseCase;
  }

  async handle(req, res) {
    try {
      const { name, description, video, data_init, data_end } = req.body;
      const { _id } = req.query;

      const updatedClass = await this._updateClassUseCase.execute({
        _id,
        name,
        description,
        video,
        data_init,
        data_end,
      });

      return res.status(200).json(updatedClass);
    } catch (e) {
      return res.status(400).json({
        message: e.message || 'Internal server Error, try again later',
      });
    }
  }
}

module.exports = UpdateClassController;
