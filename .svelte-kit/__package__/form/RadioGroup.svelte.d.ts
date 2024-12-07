export default RadioGroup;
type RadioGroup = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & {
        [key: string]: any;
    }>): void;
};
declare const RadioGroup: import("svelte").Component<{
    items: {
        value: any;
        label: string;
    }[];
    value: any[];
    name: string;
} & {
    [key: string]: any;
}, {}, "value">;
type Props = {
    items: {
        value: any;
        label: string;
    }[];
    value: any[];
    name: string;
};
