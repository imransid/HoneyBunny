import React from "react";
import Title from "../components/title/Title";
import logo_Img from "../assets/img/logo.png";

const App = props => {
  const title = "Honey Bunny";
  return (
    <html lang="en">
      <head>
        <Title title={title} />
      </head>
      <body>
        {/* HEADER  */}
        <header>
          {/*  top Header  */}
          <div id="top-header">
            <div className="container">
              <div className="pull-left">
  <span>Welcome to {title}</span>
              </div>
              <div className="pull-right">
                <ul className="header-top-links">
                  <li>
                    <a href="#">Store</a>
                  </li>
                  <li>
                    <a href="#">Newsletter</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li className="dropdown default-dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      ENG <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="custom-menu">
                      <li>
                        <a href="#">English (ENG)</a>
                      </li>
                      <li>
                        <a href="#">Russian (Ru)</a>
                      </li>
                      <li>
                        <a href="#">French (FR)</a>
                      </li>
                      <li>
                        <a href="#">Spanish (Es)</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown default-dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      USD <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="custom-menu">
                      <li>
                        <a href="#">USD ($)</a>
                      </li>
                      <li>
                        <a href="#">EUR (€)</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- /top Header -->

		<!-- header --> */}
          <div id="header">
            <div className="container">
              <div className="pull-left">
                {/* Logo  */}
                <div className="header-logo">
                  <a className="logo" href="#">
                    <img src={logo_Img} alt="" />
                  </a>
                </div>
                {/*  /Logo  */}

                {/* <!-- Search --> */}
                <div className="header-search">
                  <form>
                    <input
                      className="input search-input"
                      type="text"
                      placeholder="Enter your keyword"
                    />
                    <select className="input search-categories">
                      <option value="0">All Categories</option>
                      <option value="1">Category 01</option>
                      <option value="1">Category 02</option>
                    </select>
                    <button className="search-btn">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
                {/* <!-- /Search --> */}
              </div>

              <div className="pull-right">
                <ul className="header-btns">
                  {/*  Account  */}
                  <li className="header-account dropdown default-dropdown">
                    <div
                      className="dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <div className="header-btns-icon">
                        <i className="fa fa-user-o"></i>
                      </div>
                      <strong className="text-uppercase">
                        My Account <i className="fa fa-caret-down"></i>
                      </strong>
                    </div>
                    <a href="#" className="text-uppercase">
                      Login
                    </a>{" "}
                    /{" "}
                    <a href="#" className="text-uppercase">
                      Join
                    </a>
                    <ul className="custom-menu">
                      <li>
                        <a href="#">
                          <i className="fa fa-user-o"></i> My Account
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o"></i> My Wishlist
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-exchange"></i> Compare
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check"></i> Checkout
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-unlock-alt"></i> Login
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user-plus"></i> Create An Account
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- /Account --> */}

                  {/* <!-- Cart --> */}
                  <li className="header-cart dropdown default-dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <div className="header-btns-icon">
                        <i className="fa fa-shopping-cart"></i>
                        <span className="qty">3</span>
                      </div>
                      <strong className="text-uppercase">My Cart:</strong>
                      <br />
                      <span>35.20$</span>
                    </a>
                    <div className="custom-menu">
                      <div id="shopping-cart">
                        <div className="shopping-cart-list">
                          <div className="product product-widget">
                            <div className="product-thumb">
                              <img
                                src="../assets/img/thumb-product01.jpg"
                                alt=""
                              />
                            </div>
                            <div className="product-body">
                              <h3 className="product-price">
                                $32.50 <span className="qty">x3</span>
                              </h3>
                              <h2 className="product-name">
                                <a href="#">Product Name Goes Here</a>
                              </h2>
                            </div>
                            <button className="cancel-btn">
                              <i className="fa fa-trash"></i>
                            </button>
                          </div>
                          <div className="product product-widget">
                            <div className="product-thumb">
                              <img
                                src="../assets/img/thumb-product01.jpg"
                                alt=""
                              />
                            </div>
                            <div className="product-body">
                              <h3 className="product-price">
                                $32.50 <span className="qty">x3</span>
                              </h3>
                              <h2 className="product-name">
                                <a href="#">Product Name Goes Here</a>
                              </h2>
                            </div>
                            <button className="cancel-btn">
                              <i className="fa fa-trash"></i>
                            </button>
                          </div>
                        </div>
                        <div className="shopping-cart-btns">
                          <button className="main-btn">View Cart</button>
                          <button className="primary-btn">
                            Checkout <i className="fa fa-arrow-circle-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*  /Cart  */}

                  {/*  Mobile nav toggle */}
                  <li className="nav-toggle">
                    <button className="nav-toggle-btn main-btn icon-btn">
                      <i className="fa fa-bars"></i>
                    </button>
                  </li>
                  {/*  / Mobile nav toggle  */}
                </ul>
              </div>
            </div>
            {/*  header  */}
          </div>
          {/*  container */}
        </header>
        {/* HEADER */}

        {/* NAVIGATION  */}
        <div id="navigation">
          {/*  container  */}
          <div className="container">
            <div id="responsive-nav">
              {/* category nav  */}
              <div className="category-nav">
					<span className="category-header">Categories <i className="fa fa-list"></i></span>
					<ul className="category-list">
						<li className="dropdown side-dropdown">
							<a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Women’s Clothing <i className="fa fa-angle-right"></i></a>
							<div className="custom-menu">
								<div className="row">
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr className="hidden-md hidden-lg" />
									</div>
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr className="hidden-md hidden-lg" />
									</div>
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
								</div>
								<div className="row hidden-sm hidden-xs">
									<div className="col-md-12">
										<hr />
										<a className="banner banner-1" href="#">
											<img src="../assets/img/banner05.jpg" alt="" />
											<div className="banner-caption text-center">
												<h2 className="white-color">NEW COLLECTION</h2>
												<h3 className="white-color font-weak">HOT DEAL</h3>
											</div>
										</a>
									</div>
								</div>
							</div>
						</li>
						<li><a href="#">Men’s Clothing</a></li>
						<li className="dropdown side-dropdown"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Phones & Accessories <i className="fa fa-angle-right"></i></a>
							<div className="custom-menu">
								<div className="row">
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr />
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr className="hidden-md hidden-lg" />
									</div>
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr />
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
									<div className="col-md-4 hidden-sm hidden-xs">
										<a className="banner banner-2" href="#">
											<img src="../assets/img/banner04.jpg" alt="" />
											<div className="banner-caption">
												<h3 className="white-color">NEW<br />COLLECTION</h3>
											</div>
										</a>
									</div>
								</div>
							</div>
						</li>
						<li><a href="#">Computer & Office</a></li>
						<li><a href="#">Consumer Electronics</a></li>
						<li className="dropdown side-dropdown">
							<a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Jewelry & Watches <i className="fa fa-angle-right"></i></a>
							<div className="custom-menu">
								<div className="row">
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr />
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr className="hidden-md hidden-lg" />
									</div>
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr />
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr className="hidden-md hidden-lg" />
									</div>
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr />
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
								</div>
							</div>
						</li>
						<li><a href="#">Bags & Shoes</a></li>
						<li><a href="#">View All</a></li>
					</ul>
				</div>
				{/*  /category nav  */}
        {/* menu nav  */}
				<div className="menu-nav">
					<span className="menu-header">Menu <i className="fa fa-bars"></i></span>
					<ul className="menu-list">
						<li><a href="#">Home</a></li>
						<li><a href="#">Shop</a></li>
						<li className="dropdown mega-dropdown"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Women <i className="fa fa-caret-down"></i></a>
							<div className="custom-menu">
								<div className="row">
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr className="hidden-md hidden-lg" />
									</div>
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr className="hidden-md hidden-lg" />
									</div>
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
								</div>
								<div className="row hidden-sm hidden-xs">
									<div className="col-md-12">
										<hr />
										<a className="banner banner-1" href="#">
											<img src="../assets/img/banner05.jpg" alt="" />
											<div className="banner-caption text-center">
												<h2 className="white-color">NEW COLLECTION</h2>
												<h3 className="white-color font-weak">HOT DEAL</h3>
											</div>
										</a>
									</div>
								</div>
							</div>
						</li>
						<li className="dropdown mega-dropdown full-width"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Men <i className="fa fa-caret-down"></i></a>
							<div className="custom-menu">
								<div className="row">
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img src="../assets/img/banner06.jpg" alt="" />
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Women’s</h3>
												</div>
											</a>
											<hr />
										</div>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img src="../assets/img/banner07.jpg" alt="" />
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Men’s</h3>
												</div>
											</a>
										</div>
										<hr />
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img src="../assets/img/banner08.jpg" alt="" />
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Accessories</h3>
												</div>
											</a>
										</div>
										<hr />
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img src="../assets/img/banner09.jpg" alt="" />
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Bags</h3>
												</div>
											</a>
										</div>
										<hr />
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
								</div>
							</div>
						</li>
						<li><a href="#">Sales</a></li>
						<li className="dropdown default-dropdown"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Pages <i className="fa fa-caret-down"></i></a>
							<ul className="custom-menu">
								<li><a href="index.html">Home</a></li>
								<li><a href="products.html">Products</a></li>
								<li><a href="product-page.html">Product Details</a></li>
								<li><a href="checkout.html">Checkout</a></li>
							</ul>
						</li>
					</ul>
				</div>
				{/*  /menu nav  */}
            </div>
          </div>
          {/*  /container  */}
        </div>
        {/*  /NAVIGATION  */}

        {/*  HOME  */}
	<div id="home">
    {/* container */}
    <div className="container">
      {/* home wrap */}
      <div className="home-wrap">
        {/* home slick */}
        <div id="home-slick">
          {/* banner */}
          <div className="banner banner-1">
						<img src="../assets/img/banner01.jpg" alt="" />
						<div className="banner-caption text-center">
							<h1>Bags sale</h1>
							<h3 className="white-color font-weak">Up to 50% Discount</h3>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
           {/* /banner */}

           {/*  banner  */}
					<div className="banner banner-1">
						<img src="../assets/img/banner02.jpg" alt="" />
						<div className="banner-caption">
							<h1 className="primary-color">HOT DEAL<br /><span className="white-color font-weak">Up to 50% OFF</span></h1>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
					{/*  /banner  */}

					{/*  banner  */}
					<div className="banner banner-1">
						<img src="../assets/img/banner03.jpg" alt="" />
						<div className="banner-caption">
							<h1 className="white-color">New Product <span>Collection</span></h1>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
					{/*  /banner  */}
        </div>
        {/*  /home slick */}
      </div>
      {/* /home wrap */}
    </div>
    {/* /container  */}
  </div>
  {/* /HOME  */}



	{/*  section  */}
	<div className="section">
		{/*  container  */}
		<div className="container">
			{/*  row  */}
			<div className="row">
				{/*  banner  */}
				<div className="col-md-4 col-sm-6">
					<a className="banner banner-1" href="#">
						<img src="../assets/img/banner10.jpg" alt="" />
						<div className="banner-caption text-center">
							<h2 className="white-color">NEW COLLECTION</h2>
						</div>
					</a>
				</div>
				{/*  /banner  */}

        {/* <!-- banner --> */}
				<div className="col-md-4 col-sm-6">
					<a className="banner banner-1" href="#">
						<img src="../assets/img/banner11.jpg" alt="" />
						<div className="banner-caption text-center">
							<h2 className="white-color">NEW COLLECTION</h2>
						</div>
					</a>
				</div>
				{/* <!-- /banner --> */}

        {/* <!-- banner --> */}
				<div className="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
					<a className="banner banner-1" href="#">
						<img src="../assets/img/banner12.jpg" alt="" />
						<div className="banner-caption text-center">
							<h2 className="white-color">NEW COLLECTION</h2>
						</div>
					</a>
				</div>
				{/* <!-- /banner --> */}

        </div>
        {/*  /row  */}
        </div>
        {/* 		 /container  */}
        </div>
        {/*  /section  */}

       

        {/*  section  */}
	<div className="section">
		{/*  container  */}
		<div className="container">
			{/*  row  */}
			<div className="row">
				{/*  section-title  */}
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Deals Of The Day</h2>
						<div className="pull-right">
							<div className="product-slick-dots-1 custom-dots"></div>
						</div>
					</div>
				</div>
				{/*  /section-title  */}

				{/*  banner  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="banner banner-2">
						<img src="../assets/img/banner14.jpg" alt="" />
						<div className="banner-caption">
							<h2 className="white-color">NEW<br />COLLECTION</h2>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
				</div>
				{/*  /banner  */}

				{/*  Product Slick  */}
				<div className="col-md-9 col-sm-6 col-xs-6">
					<div className="row">
						<div id="product-slick-1" className="product-slick">
							{/*  Product Single  */}
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span>New</span>
										<span className="sale">-20%</span>
									</div>
									<ul className="product-countdown">
										<li><span>00 H</span></li>
										<li><span>00 M</span></li>
										<li><span>00 S</span></li>
									</ul>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src="../assets/img/product01.jpg" alt="" />
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							{/*  /Product Single  */}

							{/*  Product Single  */}
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span className="sale">-20%</span>
									</div>
									<ul className="product-countdown">
										<li><span>00 H</span></li>
										<li><span>00 M</span></li>
										<li><span>00 S</span></li>
									</ul>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									{/* <img src="../assets/img/product07.jpg" alt="" /> */}
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							{/*  /Product Single  */}

							{/*  Product Single  */}
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span>New</span>
										<span className="sale">-20%</span>
									</div>
									<ul className="product-countdown">
										<li><span>00 H</span></li>
										<li><span>00 M</span></li>
										<li><span>00 S</span></li>
									</ul>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									{/* <img src="../assets/img/product06.jpg" alt="" /> */}
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							{/*  /Product Single  */}

							{/*  Product Single  */}
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span>New</span>
										<span className="sale">-20%</span>
									</div>
									<ul className="product-countdown">
										<li><span>00 H</span></li>
										<li><span>00 M</span></li>
										<li><span>00 S</span></li>
									</ul>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									{/* <img src="../assets/img/product08.jpg" alt="" /> */}
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							{/* /Product Single */}
						</div>
					</div>
				</div>
				{/* /Product Slick */}
			</div>
			{/* /row  */}

			{/* row */}
			<div className="row">
				{/* section title */}
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Deals Of The Day</h2>
						<div className="pull-right">
							<div className="product-slick-dots-2 custom-dots">
							</div>
						</div>
					</div>
				</div>
				{/* section title */}

				{/*  Product Single  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single product-hot">
						<div className="product-thumb">
							<div className="product-label">
								<span className="sale">-20%</span>
							</div>
							<ul className="product-countdown">
								<li><span>00 H</span></li>
								<li><span>00 M</span></li>
								<li><span>00 S</span></li>
							</ul>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="../assets/img/product01.jpg" alt="" />
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				{/*  /Product Single  */}

				{/*  Product Slick  */}
				<div className="col-md-9 col-sm-6 col-xs-6">
					<div className="row">
						<div id="product-slick-2" className="product-slick">
							{/* Product Single */}
							<div className="product product-single">
								<div className="product-thumb">
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									{/* <img src="../assets/img/product06.jpg" alt="" /> */}
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50</h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							{/* /Product Single */}

							{/* Product Single */}
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span className="sale">-20%</span>
									</div>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									{/* <img src="../assets/img/product05.jpg" alt="" /> */}
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							{/*  /Product Single  */}

							{/*  Product Single  */}
							<div className="product product-single">
								<div className="product-thumb">
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									{/* <img src="../assets/img/product04.jpg" alt="" /> */}
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50</h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							{/*  /Product Single  */}

							{/*  Product Single  */}
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span>New</span>
										<span className="sale">-20%</span>
									</div>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									{/* <img src="../assets/img/product03.jpg" alt="" /> */}
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							{/*  /Product Single  */}

						</div>
					</div>
				</div>
				{/*  /Product Slick  */}
			</div>
			{/*  /row  */}
		</div>
		{/*  /container  */}
	</div>
	{/*  /section  */}

  {/* section */}
	<div className="section section-grey">
		{/* container  */}
		<div className="container">
			{/*  row  */}
			<div className="row">
				{/*  banner  */}
				<div className="col-md-8">
					<div className="banner banner-1">
						<img src="../assets/img/banner13.jpg" alt="" />
						<div className="banner-caption text-center">
							<h1 className="primary-color">HOT DEAL<br /><span className="white-color font-weak">Up to 50% OFF</span></h1>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
				</div>
				{/*  /banner */}

				{/*  banner  */}
				<div className="col-md-4 col-sm-6">
					<a className="banner banner-1" href="#">
						<img src="../assets/img/banner11.jpg" alt="" />
						<div className="banner-caption text-center">
							<h2 className="white-color">NEW COLLECTION</h2>
						</div>
					</a>
				</div>
				{/*  /banner  */}

				{/*  banner */}
				<div className="col-md-4 col-sm-6">
					<a className="banner banner-1" href="#">
						<img src="../assets/img/banner12.jpg" alt="" />
						<div className="banner-caption text-center">
							<h2 className="white-color">NEW COLLECTION</h2>
						</div>
					</a>
				</div>
				{/*  /banner  */}
			</div>
			{/*  /row  */}
		</div>
		{/*  /container  */}
	</div>
	{/*  /section  */}

{/*  */}

{/* s section  */}
	<div className="section">
		{/*  container  */}
		<div className="container">
			{/*  row  */}
			<div className="row">
				{/*  section title  */}
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Latest Products</h2>
					</div>
				</div>
				{/*  section title  */}

				{/*  Product Single  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="../assets/img/product01.jpg" alt="" />
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50</h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				{/*  /Product Single  */}

				{/*  Product Single  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="../assets/img/product02.jpg" alt="" />
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				{/*  /Product Single  */}

				{/*  Product Single  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="../assets/img/product03.jpg" alt="" />
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				{/*  /Product Single  */}

				{/*  Product Single  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="../assets/img/product04.jpg" alt="" />
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50</h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				{/*  /Product Single  */}
			</div>
			{/*  /row  */}

			{/*  row  */}
			<div className="row">
				{/*  banner  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="banner banner-2">
						<img src="../assets/img/banner15.jpg" alt="" />
						<div className="banner-caption">
							<h2 className="white-color">NEW<br />COLLECTION</h2>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
				</div>
				{/*  /banner  */}

				{/*  Product Single  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="../assets/img/product07.jpg" alt="" />
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				{/*  /Product Single  */}

				{/*  Product Single  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="../assets/img/product06.jpg" alt="" />
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				{/*  /Product Single  */}

				{/*  Product Single  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="../assets/img/product05.jpg" alt="" />
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				{/*  /Product Single  */}
			</div>
			{/*  /row  */}

			{/*  row  */}
			<div className="row">
				{/*  section title  */}
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Picked For You</h2>
					</div>
				</div>
				{/*  section title  */}

				{/*  Product Single  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="../assets/img/product04.jpg" alt="" />
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50</h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				{/* /Product Single  */}

				{/*  Product Single  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="../assets/img/product03.jpg" alt="" />
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50</h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				{/*  /Product Single  */}

				{/*  Product Single  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="../assets/img/product02.jpg" alt="" />
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				{/*  /Product Single  */}

				{/*  Product Single  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="../assets/img/product01.jpg" alt="" />
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				{/*  /Product Single  */}
			</div>
			{/*  /row  */}
		</div>
		{/*  /container  */}
	</div>
	{/*  /section  */}


  {/*  */}


  {/*  FOOTER  */}
	<footer id="footer" className="section section-grey">
		{/*  container  */}
		<div className="container">
			{/*  row  */}
			<div className="row">
				{/*  footer widget  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="footer">
						{/*  footer logo  */}
						<div className="footer-logo">
							<a className="logo" href="#">
		            <img src="./img/logo.png" alt="" />
		          </a>
						</div>
						{/*  /footer logo  */}

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>

						{/*  footer social */}
						<ul className="footer-social">
							<li><a href="#"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#"><i className="fa fa-instagram"></i></a></li>
							<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
							<li><a href="#"><i className="fa fa-pinterest"></i></a></li>
						</ul>
						{/*  /footer social  */}
					</div>
				</div>
				{/*  /footer widget  */}

				{/*  footer widget  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="footer">
						<h3 className="footer-header">My Account</h3>
						<ul className="list-links">
							<li><a href="#">My Account</a></li>
							<li><a href="#">My Wishlist</a></li>
							<li><a href="#">Compare</a></li>
							<li><a href="#">Checkout</a></li>
							<li><a href="#">Login</a></li>
						</ul>
					</div>
				</div>
				{/*  /footer widget  */}

				<div className="clearfix visible-sm visible-xs"></div>

				{/*  footer widget  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="footer">
						<h3 className="footer-header">Customer Service</h3>
						<ul className="list-links">
							<li><a href="#">About Us</a></li>
							<li><a href="#">Shiping & Return</a></li>
							<li><a href="#">Shiping Guide</a></li>
							<li><a href="#">FAQ</a></li>
						</ul>
					</div>
				</div>
				{/*  /footer widget  */}

				{/*  footer subscribe  */}
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="footer">
						<h3 className="footer-header">Stay Connected</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
						<form>
							<div className="form-group">
								<input className="input" placeholder="Enter Email Address" />
							</div>
							<button className="primary-btn">Join Newslatter</button>
						</form>
					</div>
				</div>
				{/*  /footer subscribe  */}
			</div>
			{/*  /row  */}
			<hr />
			{/*  row  */}
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center">
					{/*  footer copyright  */}
					<div className="footer-copyright">
						
          Copyright &copy;{new Date().getFullYear()} All rights reserved | This Project is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://imrankhan.xyz" target="_blank">Imran Khan</a>
						
					</div>
					{/*  /footer copyright  */}
				</div>
			</div>
			{/*  /row  */}
		</div>
		{/*  /container  */}
	</footer>
	{/*  /FOOTER  */}

  {/*  */}

      </body>
    </html>
  );
};

export default App;
