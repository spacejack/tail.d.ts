declare interface TailOptions {
    separator?: string | RegExp;
    fromBeginning?: boolean;
    fsWatchOptions?: Record<string, any>;
    follow?: boolean;
    logger?: any;
    encoding?: string;
    useWatchFile?: boolean;
}

declare interface Tail {
    /** Callback to listen for newlines appended to file */
    on(eventType: 'line', cb: (data: any) => void): void;
    /** Error callback */
    on(eventType: 'error', cb: (data: any) => void): void;
    /** Stop watching file */
    unwatch(): void;
    /** Start watching file if previously stopped */
    watch(): void;
}

declare interface TailConstructor {
    /** Creates a new Tail object that starts watching the specified file immediately. */
    new(filename: string, options?: TailOptions): Tail;
}

declare interface TailStatic {
    Tail: TailConstructor;
}

declare module 'tail' {
    const t: TailStatic;
    export = t;
}
