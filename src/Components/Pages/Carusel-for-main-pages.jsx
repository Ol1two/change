import Carousel from "react-bootstrap/Carousel";
import "./CSS-for-pages/styles-for-main-page.css"
import First_Slider_Pic from "/src/Pictures/first-slide.jpg"
import Second_Slider_Pic  from "/src/Pictures/second-slide.jpg"

export default function CaruselForMainPages() {
    return(
        <Carousel slide={false}>
            <Carousel.Item className="first-slide">
                <img
                    className="d-block w-100"
                    src={First_Slider_Pic}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Умная колонка</h3>
                    <p>СКИДКА 30%</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="second-slide">
                <img
                    className="d-block w-100"
                    src={Second_Slider_Pic}
                    alt="Secend slide"
                />
                <Carousel.Caption>
                    <h3>Iphone 15pro</h3>
                    <ul>
                        <li>Титановый корпус</li>
                        <li>Универсальный Type-C с USB 3</li>
                        <li>Производительный чип A17 Pro</li>
                        <li>Специальная кнопка для действий</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}