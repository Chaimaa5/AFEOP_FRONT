declare module 'zarrita' {
    export interface ZarrArray {
      shape: number[];
      dtype: string;
      get(selection: (number | null)[][]): Promise<{ data: any[] }>;
    }
  
    export function openArray(store: string): Promise<ZarrArray>;
    export function openGroup(store: string): Promise<any>;
  }
  