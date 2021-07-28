module.exports = (on, config) => {
  return Object.assign({}, config, {
    fixturesFolder: false,
    integrationFolder: 'tests/e2e/specs',
    screenshotsFolder: false,
    videosFolder: false,
    supportFile: false,
  });
};