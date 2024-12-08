export default Button;
type Button = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Button: import("svelte").Component<{
    onclick: any;
    children: any;
} & Record<string, any>, {}, "">;
type $$ComponentProps = {
    onclick: any;
    children: any;
} & Record<string, any>;
