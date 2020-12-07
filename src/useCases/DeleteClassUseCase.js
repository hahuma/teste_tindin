class DeleteClassUseCase {
  constructor(DeleteClassRepository) {
    this.deleteClassRepository = DeleteClassRepository;
  }

  async execute(id) {
    const hasClass = this.deleteClassRepository.validate(id);

    if (hasClass) {
      await this.deleteClassRepository.findByIdAndDelete(id);
    }

    return hasClass;
  }
}

module.exports = DeleteClassUseCase;
