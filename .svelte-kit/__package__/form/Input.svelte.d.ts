export default Input;
type Input = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & {
        [key: string]: any;
    }>): void;
};
declare const Input: import("svelte").Component<{
    name: string;
    value: any;
    type: string;
} & {
    [key: string]: any;
}, {}, "value">;
type Props = {
    name: string;
    value: any;
    type: string;
};
