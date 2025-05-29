# 🛍️MyShop(multivendor ecommerce)

A practice multivendor eCommerce web application built using **React**, **Tailwind CSS**, **Firebase**, and **React Router**. This project demonstrates a modern frontend architecture and core features of an online marketplace.

## 🚀 Tech Stack

- **React** – Frontend library for building user interfaces
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Firebase** – Authentication, database, and hosting
- **React Router** – Declarative routing for React apps

## 📦 Features

- 🔐 User authentication (Login/Register with Firebase)
- 🛒 Product browsing by category
- 🧑‍💼 Vendor dashboard to manage products
- 🧾 Add to cart & checkout flow (coming soon)
- 🔍 Search & filter functionality
- 🖥️ Responsive design for all devices

## 📁 Project Structure
src/
├── assets/
│   ├── 317020431739wsqe06kdzz8abbcj9ubb1txjumovorxogdiwsxfdahjy5lxcole5zugbetwsrclps4hvvlt84nfffvkb7aeykoiptprmrlpzsux.webp
│   ├── bk.png
│   ├── loader/
│   │   └── shoploader.json
│   ├── nogod.png
│   ├── p9-Upay-Logo.jpg
│   ├── react.svg
│   ├── rocket.png.png.png
│   ├── stripe.png
│   └── upay.png
├── Components/
│   ├── BottomNavContent.jsx
│   ├── CartSlider.jsx
│   ├── CategoryMap.jsx
│   ├── Container/
│   │   └── Container.jsx
│   ├── DashHeaders.jsx
│   ├── loader/
│   │   └── AdminDashLoader.jsx
│   ├── MobileCart.jsx
│   ├── Pagination.jsx
│   ├── PendingAccount.jsx
│   ├── Ratings.jsx
│   ├── RatingTemp.jsx
│   ├── Skeleton/
│   │   ├── CategorySkeleton.jsx
│   │   └── GridSlideSkeleton.jsx
│   ├── SwiperBtn.jsx
│   └── WishlistSlider.jsx
├── Dashboard/
│   ├── AdminDashboard/
│   │   ├── AdminAddBanner.jsx
│   │   ├── AdminDashCategory.jsx
│   │   ├── AdminDashChatSeller.jsx
│   │   ├── AdminDashDeactiveSeller.jsx
│   │   ├── AdminDashHome.jsx
│   │   ├── AdminDashOrder.jsx
│   │   ├── AdminDashPaymentsReq.jsx
│   │   ├── AdminDashSellerReq.jsx
│   │   ├── AdminDashSellers.jsx
│   │   ├── AdminDashSidebar.jsx
│   │   ├── AdminDashUsers.jsx
│   │   └── PieChart.jsx
│   ├── DashboardLayout/
│   │   └── DashboardLayout.jsx
│   ├── SellerDashboard/
│   │   ├── AddProduct.jsx
│   │   ├── darkmood/
│   │   │   ├── AddBtn.css
│   │   │   ├── DarkMood.jsx
│   │   │   └── toggle.css
│   │   ├── DiscountUpdate.jsx
│   │   ├── MobileSideNav.jsx
│   │   ├── SellerChatCustomer.jsx
│   │   ├── SellerDashAllProduct.jsx
│   │   ├── SellerDashHome.jsx
│   │   ├── SellerDashPayments.jsx
│   │   ├── SellerDashSidebar.jsx
│   │   ├── SellerDiscount.jsx
│   │   ├── SellerOrders.jsx
│   │   ├── SellerPieChart.jsx
│   │   ├── SellerProfile.jsx
│   │   ├── SellerSupportChat.jsx
│   │   └── UpdateProduct.jsx
│   └── UserDashboard/
│       ├── UserDashChangePass.jsx
│       ├── UserDashHome.jsx
│       ├── UserDashNotification.jsx
│       ├── UserDashProfile.jsx
│       ├── UserDashSideBar.jsx
│       ├── UserDashWishList.jsx
│       └── UserOrder.jsx
├── Firebase/
│   └── firebase.config.js
├── Hooks/
│   ├── useAdmin.jsx
│   ├── useAuth.jsx
│   ├── useAxiosPublic.jsx
│   ├── useAxiosSecure.jsx
│   ├── useCart.jsx
│   ├── useCategories.jsx
│   ├── useCategory.jsx
│   ├── useCheckStatus.jsx
│   ├── useProducts.jsx
│   ├── useSeller.jsx
│   ├── useSellerProduct.jsx
│   ├── useUsers.jsx
│   └── useWishlist.jsx
├── I18/
│   └── i18n.js
├── index.css
├── Layout/
│   └── MainLayout.jsx
├── main.jsx
├── Pages/
│   ├── Blog/
│   │   └── Blog.jsx
│   ├── Bookmarks/
│   │   └── Bookmarks.jsx
│   ├── Cart/
│   │   └── Cart.jsx
│   ├── Checkout/
│   │   ├── Checkout.jsx
│   │   ├── OrderSummary.jsx
│   │   ├── ShippingForm.jsx
│   │   ├── Step.jsx
│   │   └── Success.jsx
│   ├── Compare/
│   │   └── Compare.jsx
│   ├── Contact/
│   │   └── Contact.jsx
│   ├── ErrorPage/
│   │   ├── error.css
│   │   └── ErrorPage.jsx
│   ├── Faq/
│   │   └── Faq.jsx
│   ├── Gallary/
│   │   └── Gallary.jsx
│   ├── Home/
│   │   ├── Advertisement/
│   │   │   └── Advertisement.jsx
│   │   ├── AllProducts/
│   │   │   └── Recommended.jsx
│   │   ├── Banner/
│   │   │   └── Banner.jsx
│   │   ├── Category/
│   │   │   └── Category.jsx
│   │   ├── DiscountCard/
│   │   │   └── DiscountCard.jsx
│   │   ├── Faq/
│   │   │   └── Faq.jsx
│   │   ├── GridProduct/
│   │   │   └── GridProduct.jsx
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── Products/
│   │   │   └── Featured.jsx
│   │   └── Service/
│   │       └── Service.jsx
│   ├── Login/
│   │   └── Login.jsx
│   ├── Payment/
│   │   └── Payment.jsx
│   ├── ProductDetails/
│   │   ├── Description.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── RelatedProduct.jsx
│   │   ├── Review.jsx
│   │   └── SellerInform.jsx
│   ├── Register/
│   │   └── Register.jsx
│   ├── SellerAccount/
│   │   └── SellerRegistration.jsx
│   └── Shop/
│       ├── ProductCard.jsx
│       ├── shop.css
│       ├── Shop.jsx
│       └── ShopLoader.jsx
├── Provider/
│   └── AuthProvider.jsx
├── Responsive/
│   └── Responsive.css
├── Router/
│   ├── PrivateRoute.jsx
│   ├── Route.jsx
│   └── SecureSeller.jsx
├── Shared/
│   ├── Footer/
│   │   └── Footer.jsx
│   └── Navbar/
│       ├── data.js
│       ├── Navbar.jsx
│       └── SubHeader.jsx
├── src/
└── utils/
    └── index.js


## 🔧 Setup Instructions

1. **Clone the repository:**

```bash
https://github.com/Ahmdpolash/E-Commerce-Client.git
cd E-Commerce-Client
```

2. **Install dependencies:**
```bash
npm install
```




Made with ❤️ by [Polash Ahmed]

