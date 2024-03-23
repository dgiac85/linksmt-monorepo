import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run linksmt-monorepo-secondapp:serve',
        production: 'nx run linksmt-monorepo-secondapp:preview',
      },
      ciWebServerCommand: 'nx run linksmt-monorepo-secondapp:serve-static',
    }),
    //baseUrl: 'http://localhost:4700',
  },
});
