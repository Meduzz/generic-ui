export default Panel;
type Panel = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & {
        [key: string]: any;
    }>): void;
};
declare const Panel: import("svelte").Component<{
    children?: import("svelte").Snippet<[any]>;
} & {
    [key: string]: any;
}, {}, "">;
type Props = {
    children?: import("svelte").Snippet<[any]>;
};
