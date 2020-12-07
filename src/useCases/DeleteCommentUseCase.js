class DeleteCommentUseCase {
  constructor(DeleteCommentRepository) {
    this.deleteCommentRepository = DeleteCommentRepository;
  }

  async execute(id) {
    const hasComment = this.deleteCommentRepository.validate(id);

    if (hasComment) {
      await this.deleteCommentRepository.findByIdAndDelete(id);
    }
  }
}

module.exports = DeleteCommentUseCase;
