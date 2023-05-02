<script>
  import Card from "../../../components/MonsterCard.svelte";

  const fetchCards = (async () => {
    const res = await fetch("/api/MonsterList.json");
    const data = await res.json();
    return data;
  })();
</script>

{#await fetchCards then CardList}
  {#each CardList as cardDetails}
    <Card Details={cardDetails} />
  {/each}
{/await}
