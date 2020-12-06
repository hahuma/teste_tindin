 class CreateClassUseCase {
  
  constructor (CreateClassRepository){
    this.createClassRepository = CreateClassRepository
  }
  async execute(data){
    const hasClass = this.createClassRepository.validate(data.video_url)
    
    if(hasClass) throw new Error("This class already exists")
    
    const newClass = await this.createClassRepository.create(data)
    
    
    return newClass
    
  }
  
} 

module.exports = CreateClassUseCase