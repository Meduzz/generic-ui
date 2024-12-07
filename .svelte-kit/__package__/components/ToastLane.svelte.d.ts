export function addToast(data: any, timeout: any): void;
export function removeToast(id: any): void;
export default ToastLane;
type ToastLane = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props>): void;
};
declare const ToastLane: import("svelte").Component<{
    children?: import("svelte").Snippet<[any]>;
}, {}, "">;
type Props = {
    children?: import("svelte").Snippet<[any]>;
};
