class ListOneClassUseCase {
  constructor(ListOneClassRepository) {
    this.listOneClassRepository = ListOneClassRepository;
  }

  async execute(id) {
    const hasClass = await this.listOneClassRepository.validate(id);

    if (!hasClass) throw new Error('This Class does not exists');
    const filteredClass = await this.listOneClassRepository.list(id);

    return filteredClass;
  }
}

module.exports = ListOneClassUseCase;
