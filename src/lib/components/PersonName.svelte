<script lang="ts">
    interface Props {
        given: string;
        last: string;
        nick?: string;
        prefix?: string;
        suffix?: string;
        formal?: boolean;
    }

    const { given, last, nick, prefix, suffix, formal = false }: Props = $props();
</script>

<style>
    .prefix {
        font-weight: italic;
    }

    .suffix {
        font-weight: italic;
    }

    .nick {
        font-style: italic;
    }
</style>

{#snippet displayed_nick()}
    {#if nick}
        <span class="nick">{" "}"{nick}"{" "}</span>
    {:else}
        {" "}
    {/if}
{/snippet}

{#snippet displayed_prefix()}
    {#if prefix}
        <span class="prefix">{prefix}</span>
    {/if}
{/snippet}

{#snippet displayed_suffix()}
    {#if suffix}
        <span class="suffix">{suffix}</span>
    {/if}
{/snippet}

{#if formal}
    {last}, {given}
{:else}
    {@render displayed_prefix()}{given}{@render displayed_nick()}{last}{@render displayed_suffix()}
{/if}
