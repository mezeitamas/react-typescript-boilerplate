import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';
import { CircularDependencyRspackPlugin, experiments } from '@rspack/core';
import { config } from 'dotenv';

config();

const { SubresourceIntegrityPlugin } = experiments;

export default defineConfig({
    plugins: [pluginReact(), pluginSvgr()],
    html: {
        template: './src/index.html'
    },
    tools: {
        rspack(config, { appendPlugins }) {
            // This is recommended by the SubresourceIntegrityPlugin
            // https://rspack.rs/plugins/rspack/subresource-integrity-plugin#recommended-rspack-configuration
            config.output.crossOriginLoading = 'anonymous';

            // Only register the Rsdoctoe plugin when the mode is in production, not when we are running the dev server
            if (process.env.NODE_ENV === 'production') {
                appendPlugins([
                    new CircularDependencyRspackPlugin({
                        failOnError: true,
                        exclude: /node_modules/
                    }),
                    new SubresourceIntegrityPlugin(),
                    new RsdoctorRspackPlugin({
                        disableClientServer: true,
                        features: ['loader', 'plugins', 'bundle'],
                        mode: 'brief',
                        output: {
                            reportDir: `${__dirname}/reports/bundle/`
                        },
                        brief: {
                            reportHtmlName: 'report.html',
                            writeDataJson: true
                        }
                    })
                ]);
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
    resolve: {
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
