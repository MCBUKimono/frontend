<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import PersonName from "./PersonName.svelte";

    // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
    const { Story } = defineMeta({
        title: "Components/PersonName",
        component: PersonName,
        tags: ["autodocs"],
        argTypes: {
            given: { control: "text" },
            last: { control: "text" },
            nick: { control: "text" },
            prefix: { control: "text" },
            suffix: { control: "text" },
            formal: { control: "boolean" }
        },
        args: {
            given: "John",
            last: "Doe"
        }
    });
</script>

<Story name="Informal" />
<Story name="Formal" args={{ formal: true }} />
<Story name="Nick" args={{ nick: "Johnny" }} />
<Story name="Full" args={{ prefix: "Mr. ", suffix: ", Ph.D.", nick: "Johnny" }} />
