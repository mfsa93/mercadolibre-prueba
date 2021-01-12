export const environment = {
    'endpoints': {
        "search" : "https://api.mercadolibre.com/sites/MLA/search?q=:query",
        "item": "https://api.mercadolibre.com/items/:id",
        "itemDescription": "https://api.mercadolibre.com/items/:id/description",
        "categories": "https://api.mercadolibre.com/categories/:id"
    },
    author: {
        name: 'Michael Fernando',
        lastname: 'Sanchez Aguirre'
    },
    errors: {
        detail: {
            error: 0x0001,
            message: "No se encuentra el producto"
        }
    }
}