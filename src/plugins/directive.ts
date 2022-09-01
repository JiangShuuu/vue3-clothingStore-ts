import { DirectiveBinding } from 'vue'

export function defaultImg (el:HTMLImageElement, binding:DirectiveBinding) {
  if (el.src === binding.value) {
    return
  }

  el.src = '/image/loading.gif'
  el.style.width = '30%'
  el.style.display = 'flex'
  el.style.margin = 'auto'

  if (binding.value) {
    const img = new Image()
    img.src = binding.value
    img.onload = () => {
      el.src = binding.value
      el.style.width = '100%'
    }
    img.onerror = () => {
      el.src = '/defaultImg.png'
    }
  }
}
