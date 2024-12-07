export default Text;
type Text = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & {
        [key: string]: any;
    }>): void;
};
declare const Text: import("svelte").Component<{
    text: string;
} & {
    [key: string]: any;
}, {}, "">;
type Props = {
    text: string;
};
