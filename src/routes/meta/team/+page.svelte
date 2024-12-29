<script>
    import PersonName from "$lib/components/PersonName.svelte";
    import Title from "$lib/components/Title.svelte";
</script>

<style>
    .small {
        font-size: 0.95em;
        opacity: 0.8;
        font-style: italic;
    }
</style>

<Title title="Team" />

<ul>
    <li><PersonName given="Oğuz Anıl" last="Ateş" /></li>
    <li><PersonName given="Muhammet Berk" last="Can" /></li>
    <li><PersonName given="Eren" last="Gökçe" /></li>
    <li><PersonName given="Emre" last="Özcan" /></li>
    <li><PersonName given="Melisa" last="Uyar" /></li>
</ul>
<p class="small">alphabetical by last name.</p>
