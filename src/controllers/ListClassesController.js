class ListClassesController {
  constructor(ListClassesUseCase) {
    this._listClassesUseCase = ListClassesUseCase;
  }

  async handle(req, res) {
    try {
      const { page } = req.query;

      const { classes, count } = await this._listClassesUseCase.execute(page);

      res.header('X-Total-Count', count);

      return res.status(200).json(classes);
    } catch (e) {
      return res.status(400).json({
        message: e.message || 'Internal server Error, try again later',
      });
    }
  }
}

module.exports = ListClassesController;
