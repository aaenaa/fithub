<template>
  <div>
    <!-- <v-navigation-drawer width="225">
      <v-list nav>
        <v-list-item>
          <v-btn class="w-100" variant="flat" to="/home/supplements">Supplements</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn class="w-100" variant="flat" to="/home/vitamins">Vitamins</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn class="w-100" variant="flat" to="/home/clothing">Clothing</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn class="w-100" variant="flat" to="/home/program">Program</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <div class="ma-10">
      <router-view />
    </div>
  </div>
</template>

<script setup>

</script>