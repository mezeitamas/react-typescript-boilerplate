import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

export default defineConfig({
    plugins: [pluginReact()],
    html: {
        template: './src/index.html'
    },
    tools: {
        rspack(config, { appendPlugins }) {
            appendPlugins(
                new RsdoctorRspackPlugin({
                    disableClientServer: true,
                    features: ['loader', 'plugins', 'bundle'],
                    mode: 'brief',
                    reportDir: `${__dirname}/reports/bundle/`,
                    brief: {
                        reportHtmlName: 'report.html',
                        writeDataJson: true
                    }
                })
            );
        }
    },
    output: {
        target: 'web',
        distPath: {
            js: '',
            css: ''
        }
    },
    source: {
        alias: {
            '@/shared': './src/shared'
        }
    },
    server: {
        open: false,
        port: parseInt(process.env.APP_DEV_SERVER_PORT ?? '8080', 10),
        strictPort: true
    },
    performance: {
        chunkSplit: {
            strategy: 'split-by-experience'
        }
    }
});
