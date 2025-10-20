declare module 'zarr' {
    export function openArray(params: {
      store: string;
    }): Promise<any>;
  
    export function createArray(params: {
      shape: number[];
      chunks?: number[];
      dtype?: string;
    }): Promise<any>;
  }
  