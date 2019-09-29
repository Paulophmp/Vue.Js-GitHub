<template>
  <v-layout column>
    <v-flex xs12>
      <div class="text-xs-center">
        <v-progress-circular
          :size="50"
          indeterminate
          color="primary"
        />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'FotosApp',
};
</script>
