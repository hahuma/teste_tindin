class CreateCommentController {
  constructor(CreateCommentUseCase){
    this._createCommentUseCase = CreateCommentUseCase
  }
  
  async handle(req, res) {
    try {
      const { comment } = req.body
      const { id_class } = req.query
      
      const newComment = await this._createCommentUseCase.execute({
        comment,
        id_class
        
      })
      
      return res.status(201).json(newComment)
    } catch (e) {
      return res.status(400).json({ message: e.message || "Internal server Error, try again later" })
    }
  }

}

module.exports = CreateCommentController