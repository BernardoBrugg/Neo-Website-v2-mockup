declare module "jquery" {
    export interface JQuery {
        ripples(options?: unknown): JQuery;
        ripples(command: string): JQuery;
    }
    export interface JQueryStatic {
        (selector: string | Element | null): JQuery;
        fn: JQuery;
    }
    const $: JQueryStatic;
    export default $;
}

declare module "jquery.ripples";
