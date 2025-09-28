import { defineConfig } from '@rstest/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
    plugins: [pluginReact()],
    include: ['src/**/*.test.tsx'],
    testEnvironment: 'jsdom',
    reporters: ['verbose', 'github-actions'],
    coverage: {
        enabled: true,
        clean: true,
        provider: 'istanbul',
        reporters: ['text', 'html', 'clover', 'json'],
        reportsDirectory: `./reports/tests/unit/coverage`,
        include: ['src/**/*.{ts,tsx}'],
        exclude: ['src/**/index.{ts,tsx}', '**/*.config.[c|m][jt]s']
    }
});
