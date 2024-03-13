

// // Bài 1
// const express = require('express');
// const app = express();
// const port = 3000;
// // Đường dẫn mặc định
// app.get('/', (req, res) => {
//     res.send('<strong>Chưa xác định bất kỳ đường dẫn nào cả, do đó mọi yêu cầu đều sẽ nhận được thông báo lỗi </strong>');
// });

// app.listen(port, () => {
//     console.log(`Ứng dụng đang chạy với port ${port}`);
// });

// Bài 2
// const express = require('express');
// const bodyParser = require("body-parser");

// const app = express();
// const port = 3000;
// var jsonParser = bodyParser.json();

// const productList = [
// ];
// app.use(bodyParser.urlencoded());

// app.get('/', (req, res) => {
//     res.send(`<strong>Đây là trang chủ</strong>`)
// })
// app.get('/product', (req, res) => {
//     res.send(`<p>Đây là trang sản phẩm</p>`)
// })
// app.get('/add-product', (req, res) => {
//     res.send(`<strong>Đây là trang sản phẩm</strong>
//     <form action="/product" method="post">
//         <input type="text" placeholder="ProductName" name="ProductName">
//         <button>Add Products</button>
//     </form>
//     `)
// })
// app.post('/product', jsonParser, function (req, res) {
//     console.log(req.body.ProductName);
//     productList.unshift(req.body.ProductName);
//     res.send(req.body);
// })
// app.listen(port, () => {
//     console.log(`Ứng dụng đang chạy với port ${port}`);
// });



// Bài 3
// const express = require("express");
// const app = express();
// const port = 3000;

// // hổ trợ đường vẫn tĩnh
// app.use('/images', express.static(__dirname + '/public/images'));

// const products = [
//     { id: 1, name: "Táo", price: 100, categoryId: 1, img: "tao.jpg", description: "Description 1" },
//     { id: 2, name: "Chuối", price: 200, categoryId: 2, img: "chuoi.jpg", description: "Description 2" },
//     { id: 3, name: "Xoài", price: 300, categoryId: 3, img: "xoai.jpg", description: "Description 3" },
//     { id: 4, name: "Cherry", price: 400, categoryId: 1, img: "cherry.jpg", description: "Description 4" },
//     { id: 5, name: "Cam", price: 500, categoryId: 2, img: "cam.png", description: "Description 5" },
//     { id: 6, name: "Bơ", price: 600, categoryId: 3, img: "bo.jpg", description: "Description 6" },
// ];
// app.get("/products", (req, res) => {
//     let list = "<h2>Danh sách trái cây<ul>";
//     products.forEach((product) => {
//         list += `<li><a style="text-decoration:none;color:green;" href="/products/${product.id}">${product.name}</a></li>`;
//     });
//     list += "</ul></h2>";
//     res.send(list);
// });
// app.get('/products/:id', function (req, res) {
//     // req request "yêu cầu" là user gửi tới server
//     //res response "phản hồi" là dữ liệu server trả về user
//     let id = req.params.id;
//     let product = products.find(p => p.id == id)
//     // params là tham số
//     res.send(`
//     <h1> Đây là trang chi tiết sản phẩm trái cây</h1>
//     <h4>${product.name}</h4>
//     <img src="../images/${product.img}" width="200px">
//     <h4>Giá: ${product.price}</h4>
//     `);
// });

// app.listen(port, () => {
//     console.log(`Ứng dụng đang chạy trên cổng: ${port}`);
// });




// Bài 4
// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// const port = 3000;

// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));

// let inventors = [];

// app.get("/inventors", (req, res) => {
//   res.render("inventors", { inventors });
// });

// // Đường dẫn để hiển thị form thêm mới
// app.get("/add-inventor", (req, res) => {
//   res.render("home");
// });

// // Xử lý yêu cầu POST từ form thêm mới
// app.post("/inventor", (req, res) => {
//   let newInventor = req.body;
//   newInventor.id = inventors.length + 1;
//   inventors.push(newInventor);
//   res.redirect("/inventors");
// });

// app.listen(port, () => {
//   console.log(`Ứng dụng đang chạy trên cổng: ${port}`);
// });




// Bài 5
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const products = [
  { id: 1, ten: "Iphone 14", gia: 10000000, mota: "Điện thoại mới", motact: 1955, hinhanh: 'https://didongviet.vn/dchannel/wp-content/uploads/2023/09/3-iphone-15-pro-max-bao-nhieu-gb-didongviet-2.jpg' },
  { id: 2, ten: "Iphone 13", gia: 20000000, mota: "Điện thoại mới", motact: 1727, hinhanh: 'https://didongviet.vn/dchannel/wp-content/uploads/2023/09/3-iphone-15-pro-max-bao-nhieu-gb-didongviet-2.jpg' },
  { id: 3, ten: "Iphone 15", gia: 30000000, mota: "Điện thoại mới", motact: 1642, hinhanh: 'https://didongviet.vn/dchannel/wp-content/uploads/2023/09/3-iphone-15-pro-max-bao-nhieu-gb-didongviet-2.jpg' },
  { id: 4, ten: "Samsung s22", gia: 4000000, mota: "Điện thoại mới", motact: 1934, hinhanh: 'https://didongviet.vn/dchannel/wp-content/uploads/2023/09/3-iphone-15-pro-max-bao-nhieu-gb-didongviet-2.jpg' },
  { id: 5, ten: "LG v50", gia: 4500000, mota: 1571, motact: "Điện thoại mới", hinhanh: 'https://didongviet.vn/dchannel/wp-content/uploads/2023/09/3-iphone-15-pro-max-bao-nhieu-gb-didongviet-2.jpg' },
  { id: 6, ten: "Huawei mate30", gia: 5000000, mota: "Điện thoại mới", motact: 1543, hinhanh: 'https://didongviet.vn/dchannel/wp-content/uploads/2023/09/3-iphone-15-pro-max-bao-nhieu-gb-didongviet-2.jpg' },
];

app.get('/products', (req, res) => {
  res.send(renderListProduct());
});

app.get('/product/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    res.status(404).send('Sản phẩm không tồn tại');
    return;
  }

  res.send(renderDetailProduct(product));
});

app.post('/product/:id/reviews', (req, res) => {
  const productId = parseInt(req.params.id);
  console.log(productId);
  const product = products.find(p => p.id === productId);

  if (!product) {
    res.status(404).send('Sản phẩm không tồn tại');
    return;
  }
  if (!product.reviews) {
    product.reviews = [];
  }

  const { reviewerName, reviewContent } = req.body;
  const newReview = { reviewerName, reviewContent };

  product.reviews.push(newReview);

  res.redirect(`/product/${productId}`);
});

const renderListProduct = () => {
  return `
    <h1>Danh sách sản phẩm</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th width="200px">Hình ảnh</th>
          <th width="200px">Tên</th>
          <th width="200px">Giá</th>
          <th width="200px">Mô tả</th>
          <th width="200px">Mô tả chi tiết</th>
        </tr>
      </thead>
      <tbody>
        ${products.map((product) => (
    `<tr onclick="redirectToDetailPage(${product.id})">
            <td><img src='${product.hinhanh}' class="img-thumbnail" style="width:100px;height:100px"/></td>
            <td align="center">${product.ten}</td>
            <td align="center">${product.gia}</td>
            <td align="center">${product.mota}</td>
            <td align="center">${product.motact}</td>
          </tr>`
  )).join('')}
      </tbody>
    </table>
    <script>
      function redirectToDetailPage(productId) {
        window.location.href = \`/product/\${productId}\`;
      }
    </script>
  `;
};


const renderDetailProduct = (product) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <body>
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-6">
            <img src="${product.hinhanh}" alt="${product.ten}" class="img-fluid">
          </div>
          <div class="col-md-6">
            <h1>${product.ten}</h1>
            <p>Giá: ${product.gia}</p>
            <p>Mô tả: ${product.mota}</p>
            <p>Mô tả chi tiết: ${product.motact}</p>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-12">
            <h2>Đánh giá sản phẩm</h2>
            ${renderReviewForm(product.id)}
            ${renderProductReviews(product.reviews)}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

const renderReviewForm = (productId) => {
  return `
    <form action="/product/${productId}/reviews" method="post">
      <div class="form-group">
        <label for="reviewerName">Tên của bạn:</label>
        <input type="text" class="form-control" id="reviewerName" name="reviewerName" required>
      </div>
      <div class="form-group">
        <label for="reviewContent">Nội dung đánh giá:</label>
        <textarea class="form-control" id="reviewContent" name="reviewContent" rows="3" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Gửi đánh giá</button>
    </form>
  `;
};

const renderProductReviews = (reviews) => {
  const reviewsHtml = reviews && reviews.length > 0
    ? reviews.map((review) => `<li class="list-group-item"><strong>${review.reviewerName}:</strong> ${review.reviewContent}</li>`).join('')
    : '<p class="mt-3">Chưa có đánh giá nào cho sản phẩm này.</p>';

  return `
    <h3 class="mt-4">Đánh giá của người dùng:</h3>
    <ul class="list-group">${reviewsHtml}</ul>
  `;
};
app.listen(port, () => {
  console.log(`Ứng dụng đang chạy trên cổng: ${port}`);
});
