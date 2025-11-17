<script lang="ts">
  import { Columns2 } from "@lucide/svelte";
  import { cn } from "@/lib/utils";
  import { Button } from "@/lib/components/ui/button";

  export let src: string;
  export let className: string = "";
  export let toggle: () => void;

  let isHovered = false;
</script>

<Button
  variant="ghost"
  size="icon"
  onclick={toggle}
  aria-label="Toggle sidebar"
  class="text-muted-foreground cursor-pointer"
  onmouseenter={() => isHovered = true}
  onmouseleave={() => isHovered = false}
>
  {#if isHovered}
    <Columns2 />
  {:else}
    <img 
		src={src} 
		alt="toggle-image" 
		aria-hidden="true"
		class={cn("", className)} 
	/>
  {/if}
</Button>