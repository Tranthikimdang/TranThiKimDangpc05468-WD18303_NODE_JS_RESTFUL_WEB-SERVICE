
const express = require('express');
const bodyParser = require("body-parser");
const multer = require('multer');

const app = express();
const port = 3000;
var jsonParser = bodyParser.json();
const upload = multer({ dest: "public/data/uploads" })
app.use(express.static("public"));

const listProduct = [
  {
    "category": "Tivi",
    "description": "Sở hữu thiết kế sang trọng, màn hình siêu mỏng kích thước 58 inch, độ phân giải 4K sắc nét, công nghệ HDR10 tối ưu độ sáng, độ tương phản cho trải nghiệm xem phim tuyệt vời. Tích hợp hệ điều hành Google TV với giao diện trực quan, dễ sử dụng cùng kho ứng dụng giải trí đa dạng, phong phú.",
    "hotdeal": 1,
    "id": 1,
    "image": "tivi1.jpeg",
    "name": "TCL Google TV 58P635",
    "price": 10490000,
    "sale": 9990000,
    "star": 5
  },
  {
    "id": 2,
    "name": "LG Smart TV 55UQ8000PSC",
    "category": "Tivi",
    "price": 12990000,
    "sale": 11990000,
    "image": "tivi2.jpeg",
    "hotdeal": 0,
    "star": 3.5,
    "description": "Sở hữu thiết kế sang trọng, màn hình siêu mỏng kích thước 58 inch, độ phân giải 4K sắc nét, công nghệ HDR10 tối ưu độ sáng, độ tương phản cho trải nghiệm xem phim tuyệt vời. Tích hợp hệ điều hành Google TV với giao diện trực quan, dễ sử dụng cùng kho ứng dụng giải trí đa dạng, phong phú. "
  },
  {
    "id": 3,
    "name": "Casper Android TV 32HG5200",
    "category": "Tivi",
    "price": 6990000,
    "sale": 5990000,
    "image": "tivi3.jpeg",
    "hotdeal": 1,
    "star": 3,
    "description": "Sở hữu thiết kế sang trọng, màn hình siêu mỏng kích thước 58 inch, độ phân giải 4K sắc nét, công nghệ HDR10 tối ưu độ sáng, độ tương phản cho trải nghiệm xem phim tuyệt vời. Tích hợp hệ điều hành Google TV với giao diện trực quan, dễ sử dụng cùng kho ứng dụng giải trí đa dạng, phong phú. "
  },
  {
    "id": 4,
    "name": "Samsung Smart TV UA43AU7002",
    "category": "Tivi",
    "price": 15990000,
    "sale": 13990000,
    "image": "tivi4.jpeg",
    "hotdeal": 0,
    "star": 4.5,
    "description": "Sở hữu thiết kế sang trọng, màn hình siêu mỏng kích thước 58 inch, độ phân giải 4K sắc nét, công nghệ HDR10 tối ưu độ sáng, độ tương phản cho trải nghiệm xem phim tuyệt vời. Tích hợp hệ điều hành Google TV với giao diện trực quan, dễ sử dụng cùng kho ứng dụng giải trí đa dạng, phong phú. "
  },
  {
    "id": 5,
    "name": "Samsung Smart TV Crystal UHD UA65AU8100",
    "category": "Tivi",
    "price": 8990000,
    "sale": 6890000,
    "image": "tivi5.jpeg",
    "hotdeal": 0,
    "star": 5,
    "description": "Sở hữu thiết kế sang trọng, màn hình siêu mỏng kích thước 58 inch, độ phân giải 4K sắc nét, công nghệ HDR10 tối ưu độ sáng, độ tương phản cho trải nghiệm xem phim tuyệt vời. Tích hợp hệ điều hành Google TV với giao diện trực quan, dễ sử dụng cùng kho ứng dụng giải trí đa dạng, phong phú. "
  },
  {
    "id": 6,
    "name": "LG Smart TV NanoCell",
    "category": "Tivi",
    "price": 7990000,
    "sale": 6990000,
    "image": "tivi6.jpeg",
    "hotdeal": 0,
    "star": 3.5,
    "description": "Sở hữu thiết kế sang trọng, màn hình siêu mỏng kích thước 58 inch, độ phân giải 4K sắc nét, công nghệ HDR10 tối ưu độ sáng, độ tương phản cho trải nghiệm xem phim tuyệt vời. Tích hợp hệ điều hành Google TV với giao diện trực quan, dễ sử dụng cùng kho ứng dụng giải trí đa dạng, phong phú. "
  },
  {
    "id": 7,
    "name": "Aqua 130 lít ",
    "category": "tủ lạnh",
    "price": 4990000,
    "sale": 3990000,
    "image": "tulanh1.jpeg",
    "hotdeal": 0,
    "star": 5,
    "description": "Thuộc dòng tủ lạnh side by side được trang bị công nghệ Smart Inverter giúp tiết kiệm điện năng. Bên cạnh đó, công nghệ làm lạnh đa chiều mang hơi lạnh lan tỏa khắp các ngăn."
  },
  {
    "id": 8,
    "name": "Aqua Inverter 347 lít  ",
    "category": "tủ lạnh",
    "price": 6590000,
    "sale": 6290000,
    "image": "tulanh2.jpeg",
    "hotdeal": 1,
    "star": 3,
    "description": "Thuộc dòng tủ lạnh side by side được trang bị công nghệ Smart Inverter giúp tiết kiệm điện năng. Bên cạnh đó, công nghệ làm lạnh đa chiều mang hơi lạnh lan tỏa khắp các ngăn."
  },
  {
    "id": 9,
    "name": "Samsung Inverter 382 ",
    "category": "tủ lạnh",
    "price": 7990000,
    "sale": 6990000,
    "image": "tulanh3.jpeg",
    "hotdeal": 0,
    "star": 5,
    "description": "Thuộc dòng tủ lạnh side by side được trang bị công nghệ Smart Inverter giúp tiết kiệm điện năng. Bên cạnh đó, công nghệ làm lạnh đa chiều mang hơi lạnh lan tỏa khắp các ngăn."
  },
  {
    "id": 10,
    "name": "Samsung Inverter 208 ",
    "category": "tủ lạnh",
    "price": 8990000,
    "sale": 5990000,
    "image": "tulanh4.jpeg",
    "hotdeal": 1,
    "star": 4,
    "description": "Thuộc dòng tủ lạnh side by side được trang bị công nghệ Smart Inverter giúp tiết kiệm điện năng. Bên cạnh đó, công nghệ làm lạnh đa chiều mang hơi lạnh lan tỏa khắp các ngăn."
  },
  {
    "id": 11,
    "name": "Aqua Inverter ",
    "category": "tủ lạnh",
    "price": 7990000,
    "sale": 6990000,
    "image": "tulanh5.jpeg",
    "hotdeal": 1,
    "star": 5,
    "description": "Thuộc dòng tủ lạnh side by side được trang bị công nghệ Smart Inverter giúp tiết kiệm điện năng. Bên cạnh đó, công nghệ làm lạnh đa chiều mang hơi lạnh lan tỏa khắp các ngăn."
  },
  {
    "id": 12,
    "name": "Toshiba Inverter",
    "category": "tủ lạnh",
    "price": 10990000,
    "sale": 7990000,
    "image": "tulanh6.jpeg",
    "hotdeal": 0,
    "star": 5,
    "description": "Thuộc dòng tủ lạnh side by side được trang bị công nghệ Smart Inverter giúp tiết kiệm điện năng. Bên cạnh đó, công nghệ làm lạnh đa chiều mang hơi lạnh lan tỏa khắp các ngăn."
  }
];



app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
  var today = new Date();
  var currentday = today.getDay();
  console.log(currentday);
  var days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  var day = days[currentday];
  res.render('./home.ejs', { kindOfDay: day });
});

app.get('/products', (req, res) => {
  res.render('products.ejs', { products: listProduct });
});

app.get('/product/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = listProduct.find(p => p.id === productId);

  if (!product) {
    res.status(404).send('Sản phẩm không tồn tại');
    return;
  }

  res.render('productDetail.ejs', { product: product });
});

app.post('/product/:id/reviews', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = listProduct.find(p => p.id === productId);

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
// chi tiết sp
// Product details route
app.get('/product/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = listProduct.find(item => item.id === productId);

  if (product) {
    res.render('productDetail.ejs', { product });
  } else {
    res.status(404).send('Product not found');
  }
});

app.get('/add-product', (req, res) => {
  res.render('addproducts.ejs', { products: listProduct });
});

app.post('/add-product', upload.single('product_image'), (req, res) => {
  const newProduct = {
    id: listProduct.length + 1,
    name: req.body.product_name,
    category: req.body.product_category,
    price: parseFloat(req.body.product_price),
    description: req.body.product_description,
    image: req.file ? req.file.filename : '',
    hotdeal: 0,
    star: 0
  };

  listProduct.push(newProduct);
  res.redirect('/products');
});

app.get('/footer', (req, res) => {
  res.render('footer.ejs');
});

app.listen(port, () => {
  console.log(`Ứng dụng đang chạy với port ${port}`);
});