export default CheckboxGroup;
type CheckboxGroup = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & {
        [key: string]: any;
    }>): void;
};
declare const CheckboxGroup: import("svelte").Component<{
    items: {
        value: any;
        label: string;
    }[];
    values: any[];
    name: string;
} & {
    [key: string]: any;
}, {}, "values">;
type Props = {
    items: {
        value: any;
        label: string;
    }[];
    values: any[];
    name: string;
};
