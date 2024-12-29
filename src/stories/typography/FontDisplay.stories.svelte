<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import FontDisplay from "./FontDisplay.svelte";
    import { fonts } from "./FontDisplay";

    // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
    const { Story } = defineMeta({
        title: "Typography/Fonts",
        component: FontDisplay,
        argTypes: {
            font: {
                control: { type: "select" },
                options: fonts
            },
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
            font: "serif",
            text: "Pijamalı hasta yağız şoföre çabucak güvendi.",
            size: 16,
            italic: false
        }
    });
</script>

<Story name="Serif" args={{ font: "serif" }} />
<Story name="Serif Italic" args={{ font: "serif", italic: true }} />
<Story name="Brand" args={{ font: "brand" }} />
<Story name="Brand Italic" args={{ font: "brand", italic: true }} />
