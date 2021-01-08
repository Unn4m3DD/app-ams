export default {
  email: "default_email",
  name: "default_name",
  address: "default_address",
  post_code: "default_post_code",
  phone_number: "default_phone_number",
  animal: {
    image: "https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
    type: "default_type",
    name: "default_name",
    birth_date: "default_birth_date",
    breed: "default_breed",
    proof: "default_proof"
  },
  orders: [
    {
      date: "10/04/2020",
      type: "food",
      items: [
        {
          name: "Ração para pastor alemão, 1Kg",
          price: 13,
          vat: 23,
          total: 2
        },
        {
          name: "Ração para periquito, 200g",
          price: 4,
          vat: 23,
          total: 1
        }
      ],
    }
  ],
  cart: [
    {
      name: "Ração para pastor alemão, 1Kg",
      price: 13,
      vat: 23,
      total: 2
    },
    {
      name: "Ração para periquito, 200g",
      price: 4,
      vat: 23,
      total: 1
    }
  ]
}