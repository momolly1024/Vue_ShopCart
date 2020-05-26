<template lang="pug">
  #Products
    h1 商品
    b-table(:items="products" :fields="fields" hover striped )
      template(v-slot:cell(action)="data")
        b-btn(variant="link" @click="addCart(data.item)")
          font-awesome-icon(:icon="['fas', 'cart-plus']")
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          id: 1,
          name: 'HP 14吋窄邊輕薄筆電',
          price: 21999
        },
        {
          id: 2,
          name: 'Lenovo 9代i5雙碟電競',
          price: 21900
        },
        {
          id: 3,
          name: 'Apple iPhone 11 (64G)-白色',
          price: 15990
        },
        {
          id: 4,
          name: 'Acer行動投影機',
          price: 17900
        },
        {
          id: 5,
          name: 'Dyson圓筒式吸塵器',
          price: 17888
        }
      ],
      fields: [
        {
          key: 'name',
          label: '商品名稱'
        },
        {
          key: 'price',
          label: '價格'
        },
        {
          key: 'action',
          label: ''
        }
      ]
    }
  },
  methods: {
    addCart (data) {
      this.$store.commit('addCart', data)
    }
  }
}
</script>
