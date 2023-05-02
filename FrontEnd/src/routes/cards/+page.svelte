<script>
  import MonsterCard from "../../components/MonsterCard.svelte";
  import SpellCard from "../../components/SpellCard.svelte";

  const fetchCards = (async () => {
    const Mres = await fetch("/api/MonsterList.json");
    const Mdata = await Mres.json();

    const Sres = await fetch("/api/SpellList.json");
    const Sdata = await Sres.json();

    let list = [Mdata, Sdata].flat().sort((a, b) => a.Id - b.Id);
    return list
  })();
</script>

{#await fetchCards then CardList}
  {#each CardList as cardDetails}
    {#if cardDetails.Summon}
      <MonsterCard Details={cardDetails} />
    {:else}
      <SpellCard Details={cardDetails} />
    {/if}
  {/each}
{/await}
