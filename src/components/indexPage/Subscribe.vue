<template>
  <main class="relative mt-2 flex-center">
    <div class="w-full overflow-hidden h-96">
      <img class="object-cover w-full h-96"
        src="https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=779&q=80"
        alt="" />
    </div>
    <div class="w-full overflow-hidden h-96 bevel">
      <img class="object-cover w-full h-96"
        src="https://images.unsplash.com/photo-1603197788269-c76bbc23b1de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80"
        alt="" />
    </div>
    <section class="absolute flex-col top-[25%] md:top-[35%] flex-center">
      <span class="text-3xl text-white">訂閱最新優惠內容</span>
      <form class="inline-block w-[150%] md:w-[200%] lg:w-[400%] flex-center text-center my-4">
        <input type="text" placeholder="Enter email for news updates" name="subscript" />
        <button class="btn" type="submit">SING UP!</button>
      </form>
      <p class="text-xs font-thin text-white">
        By registering you agree with our <a class="underline underline-offset-2 text-primary" href="">Integrity
          Policy</a>
      </p>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
.bevel {
  position: absolute;
    top: 0;
    left: 0;
    -webkit-mask-image: -webkit-linear-gradient(left top,
        transparent 50%,
        white 50%);
    mask-image: -webkit-linear-gradient(left top,
        transparent 50%,
        white 50%);
}
input {
  all: unset;
  color: black;
  text-align: left;
  width: 50%;
  padding: 0.75rem;
  background: white;
  border-radius: 25px 0 0 25px;
}
.btn {
  all: unset;
  @apply bg-stone-500 font-thin text-white flex-1 cursor-pointer;
  padding: 0.75rem;
  border-radius: 0 25px 25px 0;
  text-align: center;
  letter-spacing: 1px;
}
</style>
