export default Button;
type Button = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Button: import("svelte").Component<{
    label: any;
    onclick: any;
} & Record<string, any>, {}, "">;
type $$ComponentProps = {
    label: any;
    onclick: any;
} & Record<string, any>;
