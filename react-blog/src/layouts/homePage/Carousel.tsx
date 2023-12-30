import {CarouselCard} from "./CarouselCard";

export const Carousel = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide border shadow-lg"
             data-bs-ride="carousel" style={{marginTop: '50px'}}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <CarouselCard/>
                </div>
                <div className="carousel-item">
                    <CarouselCard/>
                </div>
                <div className="carousel-item">
                    <CarouselCard/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}