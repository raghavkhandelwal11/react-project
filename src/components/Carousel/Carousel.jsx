import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Carousel = () => {
    let [heading1, updateContentHeading1] = useState("");
    let [headin2, updateContentHeading2] = useState("");
    let [headin3, updateContentHeading3] = useState("");

    let [category1, updateContentCategory1] = useState("");
    let [category2, updateContentCategory2] = useState("");
    let [category3, updateContentCategory3] = useState("");

    let [img_url1, updateImage1] = useState("");
    let [img_url2, updateImage2] = useState("");
    let [img_url3, updateImage3] = useState("");


    let [date1, updateContentDate1] = useState("");
    let [date2, updateContentDate2] = useState("");
    let [date3, updateContentDate3] = useState("");


    axios.get('./database/MOCK_DATA.json').then((res) => {
      updateContentHeading1(res.data[60].Heading);
      updateContentHeading2(res.data[61].Heading);
      updateContentHeading3(res.data[62].Heading);

      updateContentCategory1(giveCategory(res.data[60].category));
      updateContentCategory2(giveCategory(res.data[61].category));
      updateContentCategory3(giveCategory(res.data[62].category));
      
      updateContentDate1(res.data[60].date);
      updateContentDate2(res.data[61].date);
      updateContentDate3(res.data[62].date);

  }).catch((error) => {
      console.log(error);
  })

  const giveCategory = (cat1) => {
    if(cat1 == 1) {
      return "Tech";
  } else if(cat1 == 2) {
      return "Style";
  } else {
      return "Bollywood";
  }
  }


  axios.get("/database/Image_URL.json").then((res1) => {
    updateImage1(res1.data[60].download_url);
    updateImage2(res1.data[61].download_url);
    updateImage3(res1.data[62].download_url);
}).catch((err) => {console.log(err);})




    return (
        <div id="carousel">
           <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div id="img1"  class="d-block w-100" alt="..."><img src={img_url1} alt="" /> </div>
      <div class="carousel-caption d-none d-md-block">
        <Link to={`/post/${60}`}>
          <div className="white">
            <h4>Title of vertical gallery</h4>
            <p>Travel  /  August 21 2023</p>
          </div>
        </Link>
      </div>
    </div>
    <div class="carousel-item">
      <div id="img2"  class="d-block w-100" alt="..."><img src={img_url2} alt="" /> </div>
      <div class="carousel-caption d-none d-md-block">
        <Link to={`/post/${61}`}>
          <div className="white">
            <h4>Title of vertical gallery</h4>
            <p>Travel  /  August 21 2023</p>
          </div>
        </Link>
      </div>
    </div>
    <div class="carousel-item">
      <div id="img3"  class="d-block w-100" alt="..."><img src={img_url3} alt="" /></div>
      <div class="carousel-caption d-none d-md-block">
        <Link to={`/post/${62}`}>
          <div className="white">
            <h4>Title of vertical gallery</h4>
            <p>Travel  /  August 21 2023</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Carousel;