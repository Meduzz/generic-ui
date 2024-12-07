export default Navbar;
type Navbar = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & {
        [key: string]: any;
    }>): void;
};
declare const Navbar: import("svelte").Component<{
    items?: any[];
    brand?: Snippet;
} & {
    [key: string]: any;
}, {}, "">;
type Props = {
    items?: any[];
    brand?: Snippet;
};
