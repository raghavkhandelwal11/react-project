
const Carousel = () => {
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
      <div id="img1"  class="d-block w-100" alt="..."> </div>
      <div class="carousel-caption d-none d-md-block">
        <h4>Title of vertical gallery</h4>
        <p>Travel  /  August 21 2023</p>
      </div>
    </div>
    <div class="carousel-item">
      <div id="img2"  class="d-block w-100" alt="..."> </div>
      <div class="carousel-caption d-none d-md-block">
      <h4>Title of vertical gallery</h4>
        <p>Travel  /  August 21 2023</p>
      </div>
    </div>
    <div class="carousel-item">
      <div id="img3"  class="d-block w-100" alt="..."></div>
      <div class="carousel-caption d-none d-md-block">
      <h4>Title of vertical gallery</h4>
        <p>Travel  /  August 21 2023</p>
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