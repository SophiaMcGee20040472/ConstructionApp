import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    // Your custom theme tokens go here
    colors: {
      brand: {
        500: '#8257e6',
      },
    },
    // ... other theme customizations like fonts, breakpoints, etc.
  },
});

// Create your system
export const system = createSystem(defaultConfig, config);
