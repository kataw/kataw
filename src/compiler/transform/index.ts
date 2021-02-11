//import { transformES2017 } from './transformers/es2017';
import { createContext } from './context';

export function transform(root: any, transformers: any[]): any {
  if (!transformers || transformers.length === 0) return root;
  const context = createContext();
  for (let i = 0; i < transformers.length; i++) {
    root = transformers[i](context)(root);
  }
  return root;
}
