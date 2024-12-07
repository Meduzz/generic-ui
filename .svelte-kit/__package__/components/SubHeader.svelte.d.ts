export default SubHeader;
type SubHeader = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & {
        [key: string]: any;
    }>): void;
};
declare const SubHeader: import("svelte").Component<{
    title: string;
} & {
    [key: string]: any;
}, {}, "">;
type Props = {
    title: string;
};
