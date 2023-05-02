<script>
  import { bgColor, descColor } from "../scripts/CardsConfig";

  export let Details = {
    Id: 0,
    CardType: "",
    Deck_Cost: 0,
    Name: "",
    Description: "",
    URL_IMAGE: "",
  };
</script>

<article
  style="{bgColor.get(Details.CardType)} color:black; background-size:cover;"
>
  <div style={descColor.get(Details.CardType)}>
    <h3>{Details.Name}</h3>
  </div>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img src={Details.URL_IMAGE} alt="Image card" />
  <p style={descColor.get(Details.CardType)}>
    <span
      ><strong style="font-size: 1.3rem;">[ {Details.CardType} ]</strong> <br />
      {Details.Description.split(".")[0]} <br /><br />
      {Details.Description.split(".")[1]}
    </span>
  </p>
</article>

<style>
  article {
    display: grid;
    width: calc(59px * 6);
    height: calc(86px * 6);

    border: 3px solid white;
    border-radius: 10px;
    grid-template-rows: 40px 1fr 1fr;
    gap: 5px;
    place-items: center;
    padding: 5px;
  }

  img {
    background-color: green;
    margin: auto;
    width: 85%;
  }
  div {
    width: 95%;
    height: 100%;
    border: 1px solid white;
    padding: 4px;

    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
  p {
    padding: 2px 5px;
    border: 1px solid white;
    width: 95%;
    height: 95%;
    font-size: 1rem;
    text-align: justify;

    display: grid;
    grid-template-rows: 80% 1fr;
  }
</style>
