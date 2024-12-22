<script lang="ts">
    import FontDisplay from "./FontDisplay.svelte";
    import type { Props } from "./FontDisplay.svelte";
    import { fonts } from "./FontDisplay";

    const props: Omit<Props, "font"> = $props();
</script>

{#each fonts as font}
    <FontDisplay {font} {...props} italic={false} />
    {#if props.italic}
        <FontDisplay {font} {...props} italic={true} />
    {/if}
{/each}
