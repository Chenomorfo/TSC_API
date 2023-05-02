<script>
  import {
    GodColor,
    GodDescColor,
    bgColor,
    descColor,
  } from "../scripts/CardsConfig";

  export let Details = {
    Id: 0,
    CardType: "",
    Deck_Cost: 0,
    Name: "",
    Description: "",
    URL_IMAGE: "",
    Level: 0,
    Atack: 0,
    Defense: 0,
    MonsterType: "",
    MonsterRace: "",
    Summon: "",
  };

  const setBgColor = (Id = 0, type = "") => {
    if (Id === 832 || Id === 833 || Id === 834) return GodColor.get(Id);

    return bgColor.get(type);
  };
  const setDescColor = (Id = 0, type = "") => {
    if (Id === 832 || Id === 833 || Id === 834) return GodDescColor.get(Id);

    return descColor.get(type);
  };
</script>

<article
  style="{setBgColor(
    Details.Id,
    Details.MonsterType
  )} color:black; background-size:cover;"
  class={Details.Id === 832 || Details.Id === 833 || Details.Id === 834
    ? "God"
    : null}
>
  <div style={setDescColor(Details.Id, Details.MonsterType)}>
    <h3>{Details.Name}</h3>
    <h3>{Details.Summon}</h3>
  </div>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img src={Details.URL_IMAGE} alt="Image card" />
  <p style={setDescColor(Details.Id, Details.MonsterType)}>
    <span
      ><strong style="font-size: 1rem;"
        >[ {Details.MonsterRace} / {Details.MonsterType.replace(
          "Monster",
          ""
        )}]</strong
      > <br />
      {Details.Description}
    </span>
    <strong style="text-align: right;font-size:1.2em;">
      ATK/{Details.Defense} | DEF/{Details.Atack}
    </strong>
  </p>
</article>

<style>
  article {
    display: grid;
    width: calc(59px * 6);
    height: calc(86px * 6);
    border: 5px solid rgb(197, 192, 192);
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
    border: 3px solid rgb(197, 192, 192);
  }
  div {
    width: 95%;
    height: 100%;
    border: 2px solid rgb(197, 192, 192);

    padding: 4px;

    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
  p {
    padding: 2px 5px;
    border: 2px solid rgb(197, 192, 192);
    width: 95%;
    height: 95%;
    font-size: 1rem;
    text-align: justify;

    display: grid;
    grid-template-rows: 80% 1fr;
  }
  .God {
    position: relative;
    overflow: hidden;
  }
  .God::before {
    content: "";
    position: absolute;
    height: 650px;
    filter: blur(12px);
    width: 40px;
    background-color: white;
    animation: shiny 3s infinite;
  }

  @keyframes shiny {
    0% {
      transform: rotate(35deg) translate(-320px);
    }
    33% {
      transform: rotate(35deg) translate(320px);
    }
    100% {
      transform: rotate(35deg) translate(320px);
    }
  }
</style>
