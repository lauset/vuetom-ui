<template>
  <vt-json
    :value="{
      name: '金木',
      age: 99,
      flag: false,
      date: new Date(),
      fn: () => {},
      arr: [2, 4, false, { name: 'SkyT' }],
    }"
    :copyable="true"
  >
  </vt-json>
</template>
