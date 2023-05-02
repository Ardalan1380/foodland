import Appetizer from "../modules/Appetizer";
import MainCourse from "../modules/MainCourse";
import Others from "../modules/Others";
import styles from "./Products.module.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Products = ({data}) => {
    const appetizerFood = data.filter(food => food.id <=4);
    const mainCourse  = data.slice(4,10)
    const others = data.slice(10,15);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 3,
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 496 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 496, min: 0 },
          items: 1,
          
        }
      };
    return (
        <div className={styles.container}>
            <h1>محصولات</h1>
            <div className={styles.subContainer}>
                <h3>پیش غذا</h3>
                <div>    
                <Carousel responsive={responsive}>
                {
                    appetizerFood.map(item => (
                        <Appetizer key={item.id} {...item} />
                        ))
                    }
                </Carousel>
                </div>
            </div>

            <div className={styles.subContainer}>
                <h3>غذای اصلی</h3>
                <div>    
                <Carousel responsive={responsive}>
                    {
                        mainCourse.map(item => (
                            <MainCourse key={item.id} {...item} />
                        ))
                    }
                </Carousel>
                </div>
            </div>
            <div className={styles.subContainer}>
                <h3>سایر</h3>
                <div>    
                <Carousel responsive={responsive}>
                    {
                        others.map(item => (
                            <Others key={item.id} {...item} />
                        ))
                    }
                </Carousel>
                </div>
            </div>
            
        </div>  
        
    );  
};

export default Products;