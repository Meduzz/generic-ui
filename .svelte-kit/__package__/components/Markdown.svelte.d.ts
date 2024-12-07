export default Markdown;
type Markdown = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & {
        [key: string]: any;
    }>): void;
};
declare const Markdown: import("svelte").Component<{
    markdown: string;
    editing?: boolean;
    function?: any;
} & {
    [key: string]: any;
}, {}, "">;
type Props = {
    markdown: string;
    editing?: boolean;
    function?: any;
};
