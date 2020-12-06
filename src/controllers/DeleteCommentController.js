class DeleteCommentController {
  constructor(DeleteCommentUseCase){
    this._deleteCommentUseCase = DeleteCommentUseCase
  }
  
  async handle(req, res) {
    try {
      const { id } = req.params
      
       await this._deleteCommentUseCase.execute(id)
      
      return res.status(201).send()
    } catch (e) {
      return res.status(400).json({ message: e.message || "Internal server Error, try again later" })
    }
  }

}

module.exports = DeleteCommentController