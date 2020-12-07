class ListClassesUseCase {
  constructor(ListClassesRepository) {
    this.listClassesRepository = ListClassesRepository;
  }

  async execute(page) {
    const { classes, count } = await this.listClassesRepository.list(page);

    return {
      classes,
      count,
    };
  }
}

module.exports = ListClassesUseCase;
