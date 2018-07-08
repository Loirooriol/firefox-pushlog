"use strict";
var sourceRevision = class extends ExtensionAPI {
  getAPI() {
    return {
      experiments: {
        sourceRevision: {
          getURL: () => AppConstants.SOURCE_REVISION_URL,
        },
      },
    };
  }
};