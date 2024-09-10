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
            // Only register the Rsdoctoe plugin when the mode is in production, not when we are running the dev server
            if (process.env.NODE_ENV === 'production') {
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
        }
    },
    output: {
        target: 'web',
        cleanDistPath: true,
        distPath: {
            root: './dist/bundle',
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
