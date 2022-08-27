function ProductService() {
   
    this.getProductList = function () {

        var promise = axios({
            method: 'get',
            url: 'https://630854d2722029d9ddcc62ca.mockapi.io/sanpham',

        });
        return promise;

    }
    this.addProduct = function (sp) {
        console.log(sp);
        
        return axios({
            method: 'post',
            url: 'https://630854d2722029d9ddcc62ca.mockapi.io/sanpham',
            data: sp 
        });
    }
    this.deleteProduct = function (id) {
        console.log(id);
        return axios({
            method: 'delete',
            url: `https://630854d2722029d9ddcc62ca.mockapi.io/sanpham/${id}`,

        });
       
    }
    this.getProductDetail = function (id) {
        return  axios({
            method: 'get',
            url: `https://630854d2722029d9ddcc62ca.mockapi.io/sanpham/${id}`,

        });
        
    }
    this.updateproduct = function (id, sp) {
        console.log(id);
        return axios({
            method: 'put',
            url: `https://62ee1290a785760e67737090.mockapi.io/Products/${id}`,
            data: sp
        });
       
    }
}