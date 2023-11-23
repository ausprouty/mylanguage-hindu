<template>
  <div>
    <div v-if="show">
      <q-select
        filled
        v-model="segment"
        :options="segments"
        option-label="label"
        option-value="value"
        @update:model-value="updateSegment"
        label="Video Segment"
      />
  </div>
</div>
</template>

<script>
import { api } from "boot/axios";
import { useLanguageStore } from "stores/LanguageStore";
export default {
  name: "FollowingHimSegmentSelect",
  props: {
    languageCodeHL: String,
  },
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore,
    };
  },
  data() {
    return {
      segment: {
        value: 1,
        label: 'SELECT'
      },
      segments: [],
      video: null,
      show:false
    };
  },
  watch: {
    languageCodeHL: function (newLanguage, oldLanguage) {
      if (newLanguage !== oldLanguage) {
        this.getSegmentList(newLanguage);
      }
    }
  },

  created() {
    this.getSegmentList( this.languageCodeHL);
    this.languageStore.updateJVideoSegment(this.segment);
  },
  methods: {
    getSegmentList(languageCodeHL) {
      var url = "api/followingjesus/segments/" + languageCodeHL;
      console.log(url);
      api.get(url).then((response) => {
        var data = JSON.parse(response.data);
        console.log(data)
        this.segments = data.map((item) => ({
          label: item.Title,
          value: item.VideoSegment,
        }));
        console.log (this.segments)
      });
      this.show = true;
    },
    updateSegment() {
      this.languageStore.updateFollowingHimSegment(this.segment.value);
      this.$emit('showVideo',this.segment.value)
    },
  },
};
</script>
<style>

.q-item__label{
  color:black;
}
</style>
