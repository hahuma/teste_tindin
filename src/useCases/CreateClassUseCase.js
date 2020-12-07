class CreateClassUseCase {
  constructor(CreateClassRepository) {
    this.createClassRepository = CreateClassRepository;
  }

  async execute(data) {
    const newClass = await this.createClassRepository.create(data);

    return newClass;
  }
}

module.exports = CreateClassUseCase;
