class UpdateClassController {
  constructor(UpdateClassUseCase){
    this._updateClassUseCase = UpdateClassUseCase
  }
  
  async handle(req, res) {
    try {
      const {
        name,
        description,
        video,
        data_init,
        data_end
      } = req.body
      
      const updatedClass = await this._updateClassUseCase.execute({
        name,
        description,
        video,
        data_init,
        data_end
      })
      
      return res.status(201).json(updatedClass)
    } catch (e) {
      return res.status(400).json({ message: e.message || "Internal server Error, try again later" })
    }
  }

}

module.exports = UpdateClassController