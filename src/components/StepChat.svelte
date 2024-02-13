<script>
  import { Input, Label, Spinner } from "flowbite-svelte";
  import { appStatusInfo } from "$lib/store";
  const { url, pages, id } = $appStatusInfo;

  let loading = false;

  const numOfImagesShow = Math.min(pages, 4)
  const images = Array.from(
    {length: numOfImagesShow},
    (_, i) => {
      const page = i+1
      return url 
        .replace("/upload/", `/upload/w_400,h_540,c_fill,pg_${page}/`)
        .replace("pdf", ".jpg")
    }
  )

  const handleSubmit = () => {

  }
</script>

<div class="grid grid-cols-1-4 gap-2">
  {#each images as image}
    <img src={image} alt="PDF page" class="rounded w-full h-auto">
  {/each}
</div>

<form on:submit={handleSubmit}>
  <label for="question-input" class="block mb-2">Que pregunta tienes</label>
  <input
    id="question-input"
    required
    placeholder="De que trata este documento?"
  />
</form>
