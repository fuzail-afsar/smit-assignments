import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card } from "./components/Card";
import image1 from "./assets/images/products/product-1.jpeg";
import image2 from "./assets/images/products/product-2.jpeg";
import image3 from "./assets/images/products/product-3.jpeg";
import image4 from "./assets/images/products/product-4.jpeg";
import image5 from "./assets/images/products/product-5.jpeg";
import image6 from "./assets/images/products/product-6.jpeg";
import image7 from "./assets/images/products/product-7.jpeg";
import image8 from "./assets/images/products/product-8.jpeg";

const data = [
  {
    imagePath: image1,
    title: "1 KANAL RESIDENTIAL PLOT FOR SALE PHASE 7",
    price: "Rs 17,800,000",
    location: "DHA Phase 7, Lahore",
    time: "0 minutes ago",
  },
  {
    imagePath: image2,
    title: "OnePlus 9R 12GB 256GB Global",
    price: "Rs 62,999",
    location: "Hall Road, Lahore",
    time: "6 days ago",
  },
  {
    imagePath: image3,
    title:
      "Jhoola Salide Dustbin  Artificial Grass ,Green Net ,Carpets PVC ,Rugs",
    price: "Rs 65",
    location: "Anarkali, Lahore",
    time: "1 week ago",
  },
  {
    imagePath: image4,
    title: "5 marla house ON instalment (bahadur pur) multan",
    price: "Rs 9,000,000",
    location: "Multan",
    time: "1 week ago",
  },
  {
    imagePath: image5,
    title:
      "Cummins Original 60kva to 500KVA 2 years Warranty(Generators Energy",
    price: "Rs 9,000,000",
    location: "Gulberg 2, Lahore",
    time: "4 weeks ago",
  },
  {
    imagePath: image6,
    title: "Ayam cemani chicks for sale",
    price: "Rs 1,200",
    location: "Shalamar Town, Lahore",
    time: "4 weeks ago",
  },
  {
    imagePath: image7,
    title:
      "Super Fast Charger 2A Next Generation Super Fast Charger 3 USB port",
    price: "Rs 500",
    location: "Gulshan-e-Maymar, Karachi",
    time: "4 weeks ago",
  },
  {
    imagePath: image8,
    title: "Toyota Aqua S Package",
    price: "Rs 3,485,000",
    location: "Faisal Town, Lahore",
    time: "4 weeks ago",
  },
];

function App() {
  return (
    <section className="fresh-recommendations">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="mb-4">Fresh recommendations</h2>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
          {data.map((data, index) => (
            <div className="col">
              <Card key={index} {...data} />
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          <div className="col-auto pt-5">
            <button className="btn btn-link font-bold load-more-btn">
              Load More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
