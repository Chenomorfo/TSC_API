<script>
  import Card from "../../../components/SpellCard.svelte";

  const fetchCards = (async () => {
    const res = await fetch("/api/SpellList.json");
    const data = await res.json();
    return data;
  })();
</script>

{#await fetchCards then CardList}
  {#each CardList as cardDetails}
    <Card Details={cardDetails} />
  {/each}
{/await}
