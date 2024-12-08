export default Textarea;
type Textarea = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & {
        [key: string]: any;
    }>): void;
};
declare const Textarea: import("svelte").Component<{
    name?: string;
    value: any;
} & {
    [key: string]: any;
}, {}, "value">;
type Props = {
    name?: string;
    value: any;
};
