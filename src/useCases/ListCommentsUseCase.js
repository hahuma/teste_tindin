class ListCommentsUseCase {
  
  constructor (ListCommentsRepository){
    this.listCommentsRepository = ListCommentsRepository
  }
  async execute(data){
    
    const { comments, count } = await this.listCommentsRepository.list(page)
    
    
    return {
      comments,
      count
    }
    
  }
  
} 

module.exports = ListCommentsUseCase