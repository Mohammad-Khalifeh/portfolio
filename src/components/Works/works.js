import './works.css';
import home from '../../assets/amaz/home.png';
import signin from '../../assets/amaz/signin.PNG';
import signup from '../../assets/amaz/signup.PNG';
import cart from '../../assets/amaz/cart.png';
import reset from '../../assets/amaz/reset.PNG';
import history from '../../assets/amaz/history.PNG';
import order from '../../assets/amaz/order.png';
import search from '../../assets/amaz/search.png';
import shipping from '../../assets/amaz/shipping.png';
import userList from '../../assets/amaz/userList.png';
import capture from '../../assets/bet/capture.PNG';
import bet2 from '../../assets/bet/2.PNG';
import bet3 from '../../assets/bet/3.PNG';
import bet4 from '../../assets/bet/4.PNG';
import bet5 from '../../assets/bet/5.PNG';
import bet6 from '../../assets/bet/6.PNG';
import bet7 from '../../assets/bet/7.PNG';
import bet8 from '../../assets/bet/8.PNG';
import bet9 from '../../assets/bet/9.PNG';
import bet10 from '../../assets/bet/10.PNG';
import bet11 from '../../assets/bet/11.PNG';
import bet12 from '../../assets/bet/12.PNG';
import cash1 from '../../assets/cash/cash1.PNG';
import cash2 from '../../assets/cash/cash2.PNG';
import cash3 from '../../assets/cash/cash3.PNG';
import cash4 from '../../assets/cash/cash4.PNG';
import cash5 from '../../assets/cash/cash5.PNG';
import cash6 from '../../assets/cash/cash6.PNG';
import cash7 from '../../assets/cash/cash7.PNG';
import cash8 from '../../assets/cash/cash8.PNG';
import cash9 from '../../assets/cash/cash9.PNG';
import cash10 from '../../assets/cash/cash10.PNG';
import shop1 from '../../assets/shop/shop1.PNG';
import shop2 from '../../assets/shop/shop2.PNG';
import shop3 from '../../assets/shop/shop3.PNG';
import shop4 from '../../assets/shop/shop4.PNG';
import shop5 from '../../assets/shop/shop5.PNG';
import shop6 from '../../assets/shop/shop6.PNG';
import shop7 from '../../assets/shop/shop7.PNG';
import shop8 from '../../assets/shop/shop8.PNG';
import shop9 from '../../assets/shop/shop9.PNG';
import shop10 from '../../assets/shop/shop10.PNG';
import shop11 from '../../assets/shop/shop11.PNG';
import shop12 from '../../assets/shop/shop12.PNG';
import shop13 from '../../assets/shop/shop13.PNG';
import shop14 from '../../assets/shop/shop14.PNG';
import shop15 from '../../assets/shop/shop15.PNG';
import shop16 from '../../assets/shop/shop16.PNG';
import shop17 from '../../assets/shop/shop17.PNG';

export default function Works() {
  const openNewTabAmazona = () => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      // Set the content of the new tab
      newWindow.document.write(`
        <html>
          <head>
            <title>Amazon Clone Images</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                margin: 0;
                padding: 20px;
                background-color: #f5f5f5;
              }
              .amazonImage {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
              }
              img {
                width: 60rem;
                height: 40rem;
                margin: 10px;
                border: 2px solid #ddd;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              img:hover {
                transform: scale(1.05);
                transition: transform 0.2s ease-in-out;
              }
              .amazoneParag {
                margin-top: 20px;
                padding: 30px 10rem;
                font-size: 1.2rem;
                text-align: center;
                line-height: 1.6;
                color: rgb(111, 119, 130);;
              }
            </style>
          </head>
          <body>
          <div class="amazoneParag">
              The Amazon Clone project is a web application that replicates key functionalities of the Amazon
              e-commerce platform. It features a responsive design, user authentication, product browsing, and a
              shopping cart. Users can explore a wide range of products, add items to their cart, and proceed to
              checkout with integrated payment options. Built using modern technologies like React for the
              frontend, Redux for state management, and Node.js with Express for the backend, the project
              demonstrates advanced web development skills and provides a seamless shopping experience. This
              clone showcases the ability to design, develop, and deploy scalable and user-friendly applications.
            </div>
            <div class="amazonImage">
              <img src="${home}" alt="Home Image" />
              <img src="${signin}" alt="Sign In Image" />
              <img src="${signup}" alt="Sign Up Image" />
              <img src="${cart}" alt="Cart Image" />
              <img src="${search}" alt="Search Image" />
              <img src="${shipping}" alt="Shipping Image" />
              <img src="${order}" alt="Order Image" />
              <img src="${reset}" alt="Reset Image" />
              <img src="${history}" alt="History Image" />
              <img src="${userList}" alt="User List Image" />
            </div>
          </body>
        </html>
      `);
    }
  };

  const openNewTabBet = () => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      // Set the content of the new tab
      newWindow.document.write(`
        <html>
          <head>
            <title>Bet Almouneh Images</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                margin: 0;
                padding: 20px;
                background-color: #f5f5f5;
              }
              .betImage {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
              }
              img {
                width: 60rem;
                height: 40rem;
                margin: 10px;
                border: 2px solid #ddd;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              img:hover {
                transform: scale(1.05);
                transition: transform 0.2s ease-in-out;
              }
              .betParag {
                margin-top: 20px;
                padding: 30px 10rem;
                font-size: 1.2rem;
                text-align: center;
                line-height: 1.6;
                color: rgb(111, 119, 130);;
              }
            </style>
          </head>
          <body>
          <div class="betParag">
            Betelmoune  is a website created with the intention to support various customers in harvesting.
            We have accomplished this by providing the website in three different languages. We aim to support
            both the seller and the buyer, by allowing the seller with a space to sell their products, and the
            buyer to purchase and develop their knowledge of the products. We mirrored our culture by providing
            a space for the buyers and sellers to collaborate.
          </div>
            <div class="betImage">
              <img src="${capture}" alt="Home Image" />
              <img src="${bet2}" alt="About us Image" />
              <img src="${bet3}" alt="Contact us Image" />
              <img src="${bet4}" alt="Products Image" />
              <img src="${bet5}" alt="Workshops Image" />
              <img src="${bet6}" alt="Finished Workshop Image" />
              <img src="${bet7}" alt="Dashboard Image" />
              <img src="${bet8}" alt="UserList Image" />
              <img src="${bet9}" alt="OrderList Image" />
              <img src="${bet10}" alt="Cart Image" />
              <img src="${bet11}" alt="Add Product Image" />
              <img src="${bet12}" alt="Chat Group Image" />
            </div>
          </body>
        </html>
      `);
    }
  };

  const openNewTabCash = () => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      // Set the content of the new tab
      newWindow.document.write(`
        <html>
          <head>
            <title>POS Images</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                margin: 0;
                padding: 20px;
                background-color: #f5f5f5;
              }
              .cashImage {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
              }
              img {
                width: 60rem;
                height: 40rem;
                margin: 10px;
                border: 2px solid #ddd;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              img:hover {
                transform: scale(1.05);
                transition: transform 0.2s ease-in-out;
              }
              .cashParag {
                margin-top: 20px;
                padding: 30px 10rem;
                font-size: 1.2rem;
                text-align: center;
                line-height: 1.6;
                color: rgb(111, 119, 130);;
              }
            </style>
          </head>
          <body>
          <div class="cashParag">
            The POS (Point of Sale) system for a restaurant is a comprehensive solution designed to streamline
            operations and enhance customer service. It enables staff to take orders efficiently, manage table
            reservations, and process payments seamlessly. The system integrates features like inventory tracking,
            sales analytics, and menu customization, providing valuable insights into business performance. With
            a user-friendly interface and support for multiple payment methods, the restaurant POS system improves
            accuracy, reduces wait times, and helps create a smooth dining experience for customers while optimizing
            backend operations.
          </div>
            <div class="cashImage">
            <img src="${cash1}" alt="Sign In Image" />
              <img src="${cash9}" alt="Home Image" />
              <img src="${cash2}" alt="Dashboard Image" />
              <img src="${cash3}" alt="UserList Image" />
              <img src="${cash4}" alt="CategoryList Image" />
              <img src="${cash5}" alt="ProductList Image" />
              <img src="${cash10}" alt="OrderList Image" />
              <img src="${cash6}" alt="Inventory Image" />
              <img src="${cash7}" alt="Stock Image" />
              <img src="${cash8}" alt="Profile Image" />
            </div>
          </body>
        </html>
      `);
    }
  };

  const openNewTabQR = () => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      // Set the content of the new tab
      newWindow.document.write(`
        <html>
          <head>
            <title>QR Code Images</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                margin: 0;
                padding: 20px;
                background-color: #f5f5f5;
              }
              .QRImage {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
              }
              img {
                width: 60rem;
                height: 40rem;
                margin: 10px;
                border: 2px solid #ddd;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              img:hover {
                transform: scale(1.05);
                transition: transform 0.2s ease-in-out;
              }
              .QRParag {
                margin-top: 20px;
                padding: 30px 10rem;
                font-size: 1.2rem;
                text-align: center;
                line-height: 1.6;
                color: rgb(111, 119, 130);;
              }
            </style>
          </head>
          <body>
          <div class="QRParag">
            The QR code ordering system for a coffee shop is a modern, contactless solution designed to 
            enhance the customer experience and streamline service. By simply scanning a QR code, customers 
            are directed to a user-friendly home page where they can instantly select their table number and
            browse the full menu to place orders directly from their devices. This seamless integration 
            eliminates the need for waiting in line, allowing guests to customize their beverages and food 
            at their own pace. The system effectively reduces wait times, minimizes order errors, and 
            optimizes staff workflow, ensuring a smooth and efficient operation that caters to the 
            fast-paced environment of a coffee shop while offering a convenient, digital-first experience 
            for patrons.
          </div>
            <div class="QRImage">
              <img src="${shop1}" alt="QR Code Image" />
              <img src="${shop2}" alt="QR Code Image" />
              <img src="${shop3}" alt="QR Code Image" />
              <img src="${shop4}" alt="QR Code Image" />
              <img src="${shop5}" alt="QR Code Image" />
              <img src="${shop6}" alt="QR Code Image" />
              <img src="${shop7}" alt="QR Code Image" />
              <img src="${shop8}" alt="QR Code Image" />
              <img src="${shop9}" alt="QR Code Image" />
              <img src="${shop10}" alt="QR Code Image" />
              <img src="${shop11}" alt="QR Code Image" />
              <img src="${shop12}" alt="QR Code Image" />
              <img src="${shop13}" alt="QR Code Image" />
              <img src="${shop14}" alt="QR Code Image" />
              <img src="${shop15}" alt="QR Code Image" />
              <img src="${shop16}" alt="QR Code Image" />
              <img src="${shop17}" alt="QR Code Image" />
            </div>
          </body>
        </html>
      `);
    }
  };

  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help businesses achieve their goals and create a strong
        online presence.
      </span>
      <div className="worksImgs">
        <img
          src={home}
          alt="Home"
          className="worksImg"
          onClick={openNewTabAmazona}
        />
        <img
          src={capture}
          alt="Home"
          className="worksImg"
          onClick={openNewTabBet}
        />
        <img
          src={cash9}
          alt="Home"
          className="worksImg"
          onClick={openNewTabCash}
        />
        <img
          src={shop1}
          alt="Home"
          className="worksImg"
          onClick={openNewTabQR}
        />
      </div>
    </section>
  );
}
