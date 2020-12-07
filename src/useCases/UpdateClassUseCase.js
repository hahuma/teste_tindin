class UpdateClassUseCase {
  constructor(UpdateClassRepository) {
    this.updateClassRepository = UpdateClassRepository;
  }

  async execute(data) {
    const hasClass = this.updateClassRepository.validate(data.video_url);

    if (!hasClass) throw new Error('This class does not exist');

    const updatedClass = await this.updateClassRepository.update(data);

    return updatedClass;
  }
}

module.exports = UpdateClassUseCase;
