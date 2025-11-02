import { computed, onMounted, type ComputedRef } from "#imports";
import { useStorage, type RemovableRef } from "@vueuse/core";

export function useAnimationStore(): [
  isEnabled: ComputedRef<boolean>,
  set: (value: boolean) => void
] {
  const isEnabled: RemovableRef<boolean> = useStorage(
    "animation-enabled",
    true,
    undefined,
    {
      initOnMounted: true,
    }
  );

  function setAnimationEnabled(value: boolean): void {
    isEnabled.value = value;
  }

  return [computed(() => isEnabled.value), setAnimationEnabled];
}
