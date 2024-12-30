<script module lang="ts">
    export type Props = {
        font: string;
        text: string | undefined;
        size: number | undefined;
        italic: boolean | undefined;
    };
</script>

<script lang="ts">
    const {
        font = "serif",
        text = "Pijamalı hasta yağız şoföre çabucak güvendi.",
        size = 16,
        italic = false
    }: Props = $props();
</script>

<style>
    .italic {
        font-style: italic;
    }
</style>

<div>
    <span class={font} style="font-size: {size}px;" class:italic>{text}</span>
</div>
