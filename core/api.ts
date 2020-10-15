import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const api = new WooCommerceRestApi({
    url: 'http://localhost/emes',
    consumerKey: 'ck_325eca4a49fb6d5f7cc5926c30fe24b902e505d9',
    consumerSecret: 'cs_425299ebef1291e4c4ea09f5b261abfa99a2447d',
    version: 'wc/v3',
    // queryStringAuth: true // Force Basic Authentication as query string true and using under HTTPS
})

export default api;