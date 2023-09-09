

const formatBytes = bytes => {
    const kb = bytes / 1024;
    return kb < 1024 ? kb.toFixed(2) + " KB" : (kb / 1024).toFixed(2) + " MB";
  };

  module.exports = {
    formatBytes
};