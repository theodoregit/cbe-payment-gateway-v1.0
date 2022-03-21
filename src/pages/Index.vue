<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <h4 class="text-lg">Pay with your CBEBirr Account!</h4>
    <h1>Payment Summary</h1>

    <p>
      <strong>Reason: </strong> CBE New Tower Cinema<br>
      <strong>Till: </strong> 458962<br>
      <strong>Amount: </strong> <u>ETB</u> 526.53
    </p>
    <form class="w-full max-w-sm">
      <div class="flex items-center border-b border-purple-900 py-2">
        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                type="text" placeholder="+251-9--------" aria-label="phone number">
        <button class="flex-shrink-0 bg-black hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
          Pay
        </button>
      </div>
    </form>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
