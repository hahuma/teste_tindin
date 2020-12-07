class CreateClassController {
  constructor(CreateClassUseCase) {
    this._createClassUseCase = CreateClassUseCase;
  }

  async handle(req, res) {
    try {
      const { name, description, video, data_init, data_end } = req.body;

      const newClass = await this._createClassUseCase.execute({
        name,
        description,
        video,
        data_init,
        data_end,
      });

      return res.status(201).json(newClass);
    } catch (e) {
      return res.status(400).json({
        message: e.message || 'Internal server Error, try again later',
      });
    }
  }
}

module.exports = CreateClassController;
