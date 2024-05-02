import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';

config();

export default defineConfig({
    testDir: './tests',
    expect: {
        toHaveScreenshot: {
            maxDiffPixelRatio: 0.01,
            stylePath: './tests/screenshot.css'
        }
    },
    snapshotPathTemplate: '{testDir}/{testFilePath}-snapshots/{arg}-{projectName}.snap{ext}',
    fullyParallel: false,
    forbidOnly: process.env.CI !== undefined,
    retries: 0,
    workers: 1,
    outputDir: 'reports/tests/e2e/test-results',
    reporter: [
        ['list'],
        ['html', { outputFolder: 'reports/tests/e2e/html', open: 'never' }],
        ['json', { outputFile: 'reports/tests/e2e/json/test-results.json' }],
        ['junit', { outputFile: 'reports/tests/e2e/junit/test-results.xml' }],
        ['github']
    ],
    use: {
        baseURL: `http://localhost:${process.env.APP_DEV_SERVER_PORT}`,
        trace: 'on-first-retry'
    },
    projects: [
        {
            name: 'Desktop Chrome',
            use: { ...devices['Desktop Chrome'] }
        }
    ],
    webServer: {
        command: 'npm run serve',
        timeout: 60_000,
        url: `http://localhost:${process.env.APP_DEV_SERVER_PORT}`,
        reuseExistingServer: process.env.CI === undefined
    }
});
