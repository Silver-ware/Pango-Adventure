<script setup lang="ts"></script>

<template>
  <router-view />
  <h1 style="cursor: url('/cursors/cursor-default.cur'), auto">
    Default cursor here
  </h1>
  <h1 style="cursor: url('/cursors/cursor-pointer.cur'), pointer">
    Pointer cursor here
  </h1>
  <h1 style="cursor: url('/cursors/cursor-text.cur'), text">
    Text cursor here
  </h1>
  <h1 style="cursor: url('/cursors/cursor-code.cur'), auto">
    Code cursor here
  </h1>
  <h1 style="cursor: url('/cursors/cursor-adventure.cur'), auto">
    Adventure cursor here
  </h1>
</template>

<style>
html,
body {
  cursor: url("/cursors/cursor-default.cur"), not-allowed;
}
</style>
