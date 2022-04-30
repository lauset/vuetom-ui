<!-- <template>
  <vt-button plain @click="open1"> Success </vt-button>
  <vt-button plain @click="open2"> Warning </vt-button>
  <vt-button plain @click="open3"> Info </vt-button>
  <vt-button plain @click="open4"> Error </vt-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VTNotif } from '@lauset/vuetom-ui/src'

export default defineComponent({
  setup() {
    const open1 = () => {
      VTNotif({
        title: 'Success',
        message: 'This is a success message',
        type: 'success',
      })
    }

    const open2 = () => {
      VTNotif({
        title: 'Warning',
        message: 'This is a warning message',
        type: 'warning',
      })
    }

    const open3 = () => {
      VTNotif({
        title: 'Info',
        message: 'This is an info message',
        type: 'info',
      })
    }

    const open4 = () => {
      VTNotif({
        title: 'Error',
        message: 'This is an error message',
        type: 'error',
      })
    }
    return {
      open1,
      open2,
      open3,
      open4,
    }
  },
})
</script> -->
