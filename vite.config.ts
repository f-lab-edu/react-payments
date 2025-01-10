import { defineConfig as defineTestConfig, mergeConfig } from 'vitest/config';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default mergeConfig(
  defineConfig({
    plugins: [
      react({
        jsxRuntime: 'automatic',
        jsxImportSource: 'react',
      }),
      dts({
        include: ['src'],
        exclude: ['src/**/*.test.tsx', 'src/**/*.stories.tsx'],
        tsconfigPath: './tsconfig.app.json',
        outDir: 'dist',
        copyDtsFiles: true,
        insertTypesEntry: true,
        rollupTypes: true,
        bundledPackages: ['react-payments'],
      }),
    ],
    resolve: {
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.tsx'),
        name: 'ReactPayments',
        formats: ['es', 'umd'], // ESM과 UMD 포맷으로 빌드
        fileName: (format) => `react-payments.${format}.js`,
      },
      rollupOptions: {
        // 외부 의존성 설정
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
  }),
  defineTestConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        reportsDirectory: './.coverage',
        reporter: ['lcov', 'json', 'json-summary'],
      },
    },
  })
);
