<script>
  export let FaceUpTemplate = "";
  export let isGod = false;
  $: faceDown = false;

  const FaceDownTemplate = `
  background: url("/imgs/void.gif") center;
    background-size: contain 200%;`;
</script>

<article
  style={faceDown ? FaceDownTemplate : FaceUpTemplate}
  class={isGod ? "God" : null}
>
  <slot />
</article>

<style>
  article {
    display: grid;
    grid-template-rows: 40px 1fr 1fr;
    gap: 5px;
    place-items: center;
    padding: 5px;

    width: calc(59px * 6);
    height: calc(86px * 6);
    border: 5px solid rgb(197, 192, 192);
    border-radius: 10px;

    color: black;
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
