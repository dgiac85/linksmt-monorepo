import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run linksmt-monorepo-firstapp:serve:development',
        production: 'nx run linksmt-monorepo-firstapp:serve:production',
      },
      ciWebServerCommand: 'nx run linksmt-monorepo-firstapp:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
