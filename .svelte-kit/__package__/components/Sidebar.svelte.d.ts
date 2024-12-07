export default Sidebar;
type Sidebar = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & {
        [key: string]: any;
    }>): void;
};
declare const Sidebar: import("svelte").Component<{
    children?: import("svelte").Snippet<[any]>;
} & {
    [key: string]: any;
}, {}, "">;
type Props = {
    children?: import("svelte").Snippet<[any]>;
};
