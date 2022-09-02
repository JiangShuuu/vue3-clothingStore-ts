import { DirectiveBinding } from 'vue'

export function defaultImg (el:HTMLImageElement, binding:DirectiveBinding) {
  if (el.src === binding.value) {
    return
  }

  if (binding.value) {
    const img = new Image()
    img.src = binding.value
    img.onload = () => {
      el.src = binding.value
    }
    img.onerror = () => {
      el.src = '/defaultImg.png'
    }
  }
}
