export default Vertical;
type Vertical = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props>): void;
};
declare const Vertical: import("svelte").Component<{
    label: string;
    labelClass: string;
    wrapperClass: string;
    children?: import("svelte").Snippet;
}, {}, "">;
type Props = {
    label: string;
    labelClass: string;
    wrapperClass: string;
    children?: import("svelte").Snippet;
};
