export declare class DebugLogHelper {
    private callerName;
    private environmentName;
    private showInProdEnv;
    private showInTestEnv;
    constructor();
    /** Log a debug message if not production */
    logmsg(message: string, msgPrefix?: string): void;
    private getMsgPrefix;
    private getEnvironment;
}
