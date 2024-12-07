export default Header;
type Header = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & {
        [key: string]: any;
    }>): void;
};
declare const Header: import("svelte").Component<{
    title: string;
    makePageTitle?: boolean;
} & {
    [key: string]: any;
}, {}, "">;
type Props = {
    title: string;
    makePageTitle?: boolean;
};
