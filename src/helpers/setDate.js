function setDate() {
  const date = Number(new Date().toISOString().split('T')[0].replace(/-/g, ''));

  return date;
}

module.exports = setDate;
