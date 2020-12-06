class ListCommentController {
  constructor(ListCommentUseCase){
    this._listCommentUseCase = ListCommentUseCase
  }
  
  async handle(req, res) {
    try {
      const { page } = req.query
      
      const { comments, count } = await this._listCommentUseCase.execute(page)
      
      res.headers("X-Total-Count", count)
      
      return res.status(201).json(comments)
    } catch (e) {
      return res.status(400).json({ message: e.message || "Internal server Error, try again later" })
    }
  }

}

module.exports = ListCommentController 