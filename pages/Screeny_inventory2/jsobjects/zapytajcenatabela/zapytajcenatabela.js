export default {
storeProductIndex: (index) => {
storeValue('productIndex', indeks);
},

fetchProductPrice: async () => {
const index = {{data_table.}};
// Assuming you have an API that fetches price based on index
const response = await zapytajtabelacena.run({index: index});
return response.data.cenakatalogowa;
}
}