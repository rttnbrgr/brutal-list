import type { StorybookConfig } from "@storybook/nextjs-vite";
import postcss from "@tailwindcss/postcss";

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
    // "@storybook/addon-styling-webpack",
    "storybook-addon-pseudo-states",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  viteFinal: async (config) => {
    // Ensure PostCSS is configured for Tailwind CSS v4
    config.css = {
      postcss: {
        plugins: [postcss()],
      },
    };

    // Add Vite server optimizations
    config.server = {
      ...config.server,
      watch: {
        ignored: ["**/node_modules/**", "**/.next/**", "**/dist/**"],
      },
      hmr: {
        overlay: false, // Disable overlay if needed
      },
    };

    // Optimize dependencies
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: ["react", "react-dom", "react/jsx-runtime"],
      exclude: ["@tailwindcss/postcss"], // Don't pre-bundle Tailwind
    };

    // Critical: Don't process CSS in node_modules
    if (!config.css) config.css = {};
    config.css.devSourcemap = false; // Disable source maps in dev

    return config;
  },
  staticDirs: ["../public"],
  typescript: {
    check: false,
    reactDocgen: false,
  },
};
export default config;
