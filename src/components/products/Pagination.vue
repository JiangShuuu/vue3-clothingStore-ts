<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 前一頁 previousPage -->
      <li v-if="currentPage !== 1" :class="[
        'page-item',
        {
          disabled: currentPage === 1,
        },
      ]">
        <router-link class="page-link" aria-label="Previous" :to="{
          name: 'Products',
          query: { page: previousPage, categoryId: categoryNum },
        }">
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>

      <!-- 頁籤 -->
      <li :class="['page-item', { active: currentPage === page }]" v-for="(page, index) in totalPage" :key="index">
        <router-link class="page-link" :to="{ name: 'Products', query: { page, categoryId: categoryNum } }">
          {{ page }}
        </router-link>
      </li>

      <!-- 後一頁 nextPage -->
      <li v-if="currentPage !== totalPage?.length" :class="[
        'page-item',
        {
          disabled: currentPage === totalPage?.length,
        },
      ]">
        <router-link class="page-link" aria-label="Next"
          :to="{ name: 'Products', query: { page: nextPage, categoryId: categoryNum } }">
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

const props = defineProps({
  categoryNum: {
    type: String
  },
  currentPage: {
    type: Number,
    default: 1
  },
  totalPage: {
    type: Array<Number>
  },
  previousPage: {
    type: Number
  },
  nextPage: {
    type: Number
  }
})
</script>

<style lang="postcss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page-link {
  height: 37px;
  padding: 7px 20px;
  color: #bd2333;
}

.page-item.active .page-link,
.page-item.active span {
  color: white;
  background-color: #bd2333;
  border-color: #bd2333;
  z-index: 1;
}

.page-item span {
  color: #bd2333;
}

a.page-link:hover,
a.page-link:hover span {
  color: white;
  background-color: #bd2333;
  border-color: #bd2333;
}
</style>
