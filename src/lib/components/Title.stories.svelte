<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Title from "./Title.svelte";

    // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
    const { Story } = defineMeta({
        title: "Components/Title",
        component: Title,
        tags: ["autodocs"],
        argTypes: {
            title: { control: "text" },
            level: {
                control: {
                    type: "range",
                    min: 1,
                    max: 6,
                    step: 1
                }
            }
        },
        args: {
            title: "Lorem Ipsum",
            level: 1
        }
    });
</script>

<Story name="Header 1" />
<Story name="Header 2" args={{ level: 2 }} />
<Story name="Header 3" args={{ level: 3 }} />
<Story name="Header 4" args={{ level: 4 }} />
<Story name="Header 5" args={{ level: 5 }} />
<Story name="Header 6" args={{ level: 6 }} />
