export default ListY;
type ListY = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & {
        [key: string]: any;
    }>): void;
};
declare const ListY: import("svelte").Component<{
    items: any[];
    elseSnippet?: Snippet<any>;
    children: Snippet<any>;
} & {
    [key: string]: any;
}, {}, "">;
type Props = {
    items: any[];
    elseSnippet?: Snippet<any>;
    children: Snippet<any>;
};
