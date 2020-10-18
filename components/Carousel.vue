<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="900"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide v-for="(slide, index) in pages" img-alt="Blank image"
        :img-src="slide._embedded['wp:featuredmedia'][0].source_url"
        :key="index">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script lang="ts">
  import { PropOptions } from 'vue';
  import { Pages } from '~/interfaces/interfaces';
  export default {
    data(): {
      slide: number;
      sliding: boolean | null;
    } {
      return {
        slide: 0,
        sliding: null
      }
    },
    props: {
      pages: {
        type: Array,
        required: true
      } as PropOptions<Pages[]>
    },
    methods: {
      onSlideStart(slide: boolean): void {
        this.sliding = true
      },
      onSlideEnd(slide: boolean): void {
        this.sliding = false
      }
    },
    // created() {
    //   console.log(this.pages);
    // }
  }
</script>