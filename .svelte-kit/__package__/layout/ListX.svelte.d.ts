export default ListX;
type ListX = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & {
        [key: string]: any;
    }>): void;
};
declare const ListX: import("svelte").Component<{
    children: Snippet<any>;
} & {
    [key: string]: any;
}, {}, "">;
type Props = {
    children: Snippet<any>;
};
