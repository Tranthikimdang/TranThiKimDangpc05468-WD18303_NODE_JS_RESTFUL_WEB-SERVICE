document.addEventListener('DOMContentLoaded', function () {
    // Lắng nghe sự kiện change trên các phần tử input
    document.body.addEventListener('change', function (e) {
        const qrMomo = document.querySelector('#qr-momo')
        if (e.target.value === 'momo') {
            qrMomo.innerHTML = `<img src='/client/asset/images/shop-cart/qrcode.png' alt="qr-code" style="width:100px"/>`
        } else if (e.target.value === 'cash') {
            qrMomo.innerHTML = ''
        }
    });
});
