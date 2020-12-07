class ListCommentsController {
  constructor(ListCommentsUseCase) {
    this._listCommentsUseCase = ListCommentsUseCase;
  }

  async handle(req, res) {
    console.log('foi chamado');
    try {
      const { page } = req.query;
      const { comments, count } = await this._listCommentsUseCase.execute(page);

      res.header('X-Total-Count', count);

      return res.status(200).json(comments);
    } catch (e) {
      return res.status(400).json({
        message: e.message || 'Internal server Error, try again later',
      });
    }
  }
}

module.exports = ListCommentsController;
