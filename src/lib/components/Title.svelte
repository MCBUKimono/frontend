<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        title: string;
        children?: Snippet;
        level?: number;
    }

    const { title, level = 1, children }: Props = $props();
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

{#snippet tag_content()}
    {#if children}
        {@render children()}
    {:else}
        {title}
    {/if}
{/snippet}

{#if level == 1}
    <h1>{@render tag_content()}</h1>
{:else if level == 2}
    <h2>{@render tag_content()}</h2>
{:else if level == 3}
    <h3>{@render tag_content()}</h3>
{:else if level == 4}
    <h4>{@render tag_content()}</h4>
{:else if level == 5}
    <h5>{@render tag_content()}</h5>
{:else if level == 6}
    <h6>{@render tag_content()}</h6>
{:else}
    {@debug level}
{/if}
