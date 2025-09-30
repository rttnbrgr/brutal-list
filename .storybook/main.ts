import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-styling-webpack",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  viteFinal: async (config) => {
    // Ensure PostCSS is configured for Tailwind CSS v4
    config.css = {
      postcss: {
        plugins: [require("@tailwindcss/postcss")()],
      },
    };
    return config;
  },
  staticDirs: ["../public"],
};
export default config;
