export declare class TensorflowLoader {
    private checkpointReader;
    private values;
    private NDARRAY;
    constructor(NDArrayWrapper: any);
    loadLocalFiles(path: string): Promise<{
        [varName: string]: any;
    }>;
    loadRemoteFiles(url: string): Promise<{
        [varName: string]: any;
    }>;
    parseValues(): void;
    getValues(): any;
}
