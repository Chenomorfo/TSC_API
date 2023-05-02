<script>
  const Links = [
    { name: "Home", path: "/" },
    { name: "Cards", path: "/cards" },
    { name: "Monsters", path: "/cards/monsters" },
    { name: "Spells", path: "/cards/spells" },
    { name: "Home", path: "/" },
  ];
  
</script>

<nav>
  <ul>
    {#each Links as { path, name }}
      <li><a href={path}>{name}</a></li>
    {/each}
  </ul>
</nav>
<slot />

<style>
  ul {
    display: flex;
    gap: 15px;
    list-style: none;
    padding: 15px;
  }
  li {
    font-size: 2em;
  }
  a {
    background-color: white;
    padding: 5px 10px;
    border-radius: 5px;
    color: #242424;
    text-decoration: none;
  }
</style>
