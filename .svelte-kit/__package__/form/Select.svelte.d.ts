export default Select;
type Select = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & {
        [key: string]: any;
    }>): void;
};
declare const Select: import("svelte").Component<{
    name: string;
    items: any[];
    value: any;
    type: string;
    children: Snippet<any>;
} & {
    [key: string]: any;
}, {}, "value">;
type Props = {
    name: string;
    items: any[];
    value: any;
    type: string;
    children: Snippet<any>;
};
