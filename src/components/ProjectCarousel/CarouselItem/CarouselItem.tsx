import "./CarouselItem.css";

interface CarouselItem {
  srcPath: string;
  description: string;
  title: string;
  shadow: boolean;
  link: string;
  alt: string;
}

function CarouselItem({ srcPath, description, title, shadow, link, alt }: CarouselItem) {
  return (
    <div className="carouselItem-cont">
      <a href={link}>
        <img
          className={shadow ? "carouselItem-img shadow" : "carouselItem-img"}
          src={srcPath}
          alt={alt}
        />
      </a>
      <div className="carouselItem-textCont">
        <h4 className="carouselItem-title">{title}</h4>
        <span className="carouselItem-description">{description}</span>
      </div>
    </div>
  );
}

export default CarouselItem;
