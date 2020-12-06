 class ListClassesUseCase {
  
  constructor (ListClassesRepository){
    this.listClassesRepository = ListClassesRepository
  }
  async execute(data){
    
    const { classes, count } = await this.listClassRepository.list(page)
    
    
    return {
      classes,
      count
    }
    
  }
  
} 

module.exports = ListClassesUseCase