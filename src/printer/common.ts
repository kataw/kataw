import { RootNode} from '../ast/rootNode';

export interface Printer {
  source: string
}

export function createPrinter(  source: string): Printer {
  return {
    source
  }
}
