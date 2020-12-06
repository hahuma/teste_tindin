class ListClassController {
  constructor(ListClassUseCase){
    this._listClassUseCase = ListClassUseCase
  }
  
  async handle(req, res) {
    try {
      const { page } = req.query
      
      const { classes, count } = await this._listClassUseCase.execute(page)
      
      res.headers("X-Total-Count", count)
      
      return res.status(201).json(classes)
    } catch (e) {
      return res.status(400).json({ message: e.message || "Internal server Error, try again later" })
    }
  }

}

module.exports = ListClassController