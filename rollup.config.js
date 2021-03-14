import typescript from '@rollup/plugin-typescript';

export const commonPlugins = [typescript()];
export const commonConfig = {
  input: 'src/index.ts',
};
