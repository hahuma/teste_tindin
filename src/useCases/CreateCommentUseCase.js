 class CreateCommentUseCase {
  
  constructor (CreateCommentRepository){
    this.commentRepository = CreateCommentRepository
  }
  async execute(data){

    const newComment = await this.commentRepository.create(data)
    
    
    return newComment
    
  }
  
} 

module.exports = CreateCommentUseCase