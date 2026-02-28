const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Số lượng sản phẩm và chi tiết
const totalProducts = 8;  // Thay đổi số này theo số lượng sản phẩm bạn có

// Ẩn tất cả chi tiết sản phẩm và ảnh ban đầu
for (let i = 1; i <= totalProducts; i++) {
    document.getElementById(`product-details-${i}`).style.display = 'none';
    document.getElementById(`Main-img${i}`).style.display = 'none';
}

// Hiển thị chi tiết sản phẩm và ảnh tương ứng với sản phẩm được chọn
if (productId && productId >= 1 && productId <= totalProducts) {
    for (let i = 1; i <= totalProducts; i++) {
        if (i == productId) {
            document.getElementById(`product-details-${i}`).style.display = 'block';
            document.getElementById(`Main-img${i}`).style.display = 'block';
        } else {
            document.getElementById(`product-details-${i}`).style.display = 'none';
            document.getElementById(`Main-img${i}`).style.display = 'none';
        }
    }
}