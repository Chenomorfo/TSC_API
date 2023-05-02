<div>
  <slot />
</div>

<style>
  div {
    padding: 10px;
    place-items: center;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
  }
</style>
