<script>
  import {
    GodColor,
    GodDescColor,
    bgColor,
    descColor,
  } from "../scripts/CardsConfig";
  import Card from "./Card.svelte";

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

  const isGod = Details.Id === 832 || Details.Id === 833 || Details.Id === 834;

  const setBgColor = (Id = 0, type = "") => {
    if (isGod) return GodColor.get(Id);

    return bgColor.get(type);
  };
  const setDescColor = (Id = 0, type = "") => {
    if (isGod) return GodDescColor.get(Id);

    return descColor.get(type);
  };
</script>

<Card {isGod} FaceUpTemplate={setBgColor(Details.Id, Details.MonsterType)}>
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
</Card>

<style>
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
</style>
