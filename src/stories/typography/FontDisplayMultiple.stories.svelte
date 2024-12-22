<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import FontDisplayMultiple from "./FontDisplayMultiple.svelte";

    const { Story } = defineMeta({
        title: "Typography/Fonts",
        component: FontDisplayMultiple,
        argTypes: {
            text: {
                control: "text"
            },
            size: {
                control: {
                    type: "range",
                    min: 0,
                    max: 72,
                    step: 1
                }
            },
            italic: {
                control: "boolean"
            }
        },
        args: {
            text: "Pijamalı hasta yağız şoföre çabucak güvendi.",
            size: 16,
            italic: true
        }
    });
</script>

<Story name="All fonts" />
