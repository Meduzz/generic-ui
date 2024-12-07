export default Table;
type Table = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & {
        [key: string]: any;
    }>): void;
};
declare const Table: import("svelte").Component<{
    rows: any[];
    header: Snippet;
    body: Snippet<any>;
    footer: Snippet;
} & {
    [key: string]: any;
}, {}, "">;
type Props = {
    rows: any[];
    header: Snippet;
    body: Snippet<any>;
    footer: Snippet;
};
