<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from '#imports';
import { Text3D } from '@tresjs/cientos'

const { isAnimationEnabled } = defineProps<{ isAnimationEnabled: boolean }>()


type Indices<N extends number, R extends number[] = []> =
  R['length'] extends N ? R[number] : Indices<N, [...R, R['length']]>;

const texts = [
  {
    text: "_(__´*-*)_",
    position: [-4, 0, 5]
  },
  {
    text: "petaxa",
    position: [-3, 0, 5]
  },
  {
    text: "damenamepu",
    position: [-6, 0, 5]
  },
] as const

const WAIT_TIME_FOR_AFTER_DELETE = 3
const WAIT_TIME_FOR_AFTER_TYPE = 10

let index: Indices<typeof texts["length"]> = 0
let length = texts[0].text.length

const text = ref<string>(texts[index].text)
const position = ref<(typeof texts)[number]["position"]>(texts[index].position)

type Phase = "deleting" | "pausing" | "typing"
let phase: Phase = "pausing"
let waitRemaining = WAIT_TIME_FOR_AFTER_TYPE

let timer: number | undefined
onMounted(() => {
  if (timer) clearInterval(timer)
  timer = window.setInterval(() => {
    if (!isAnimationEnabled) {
      text.value = texts[index].text
      length = texts[index].text.length
      phase = "pausing"
      waitRemaining = 3
      return
    }
    text.value = texts[index].text.slice(0, length)
    position.value = texts[index].position;

    ({ length, phase, waitRemaining, index } = culcPhase(length, phase, waitRemaining, index))
  }, 150)
})
onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

function culcPhase(
  length: number,
  phase: Phase,
  waitRemaining: number,
  index: Indices<(typeof texts)["length"]>
): {
  length: number;
  phase: Phase;
  waitRemaining: number;
  index: Indices<(typeof texts)["length"]>;
} {
  switch (phase) {
    case "deleting":
      return (() => {
        const isContinueDeleting = length > 0;

        const l = isContinueDeleting ? length - 1 : length;
        const p = isContinueDeleting ? phase : "pausing";
        const wr = isContinueDeleting
          ? waitRemaining
          : WAIT_TIME_FOR_AFTER_DELETE;
        const idx = isContinueDeleting ? index : (index + 1) % texts.length;

        return {
          length: l,
          phase: p,
          waitRemaining: wr,
          index: idx as Indices<(typeof texts)["length"]>,
        };
      })();
    case "typing":
      return (() => {
        const isContinueTyping = length < texts[index].text.length;

        const l = isContinueTyping ? length + 1 : length;
        const p = isContinueTyping ? phase : "pausing";
        const wr = isContinueTyping ? waitRemaining : WAIT_TIME_FOR_AFTER_TYPE;
        const idx = index;

        return {
          length: l,
          phase: p,
          waitRemaining: wr,
          index: idx,
        };
      })();
    case "pausing":
      return (() => {
        const l = length;
        const p = (() => {
          if (waitRemaining === 0 && length === 0) return "typing";
          else if (waitRemaining === 0 && length !== 0) return "deleting";
          else return "pausing";
        })();
        const wr = waitRemaining - 1 > 0 ? waitRemaining - 1 : 0;
        const idx = index;

        return {
          length: l,
          phase: p,
          waitRemaining: wr,
          index: idx,
        };
      })();
  }
}

</script>

<template>
  <Suspense>
    <Text3D ref="boxRef" font="/fonts/optimer_bold.typeface.json" :key="text" :text :position :rotation="[0, 0, 0]"
      :size="1.5" :height="0.2" :center="false" need-updates>
      <TresMeshStandardMaterial color="#eeeeef" />
    </Text3D>
  </Suspense>
</template>

<style scoped></style>
