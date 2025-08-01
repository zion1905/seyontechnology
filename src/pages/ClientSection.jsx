// Import images
import client1 from '../assets/client1.jpeg';
import client2 from '../assets/client2.jpeg';
import client3 from '../assets/client3.jpeg';
import client4 from '../assets/client4.jpeg';
import client5 from '../assets/client5.jpeg';
import client6 from '../assets/client6.jpeg';
import client7 from '../assets/client7.jpeg';
import client8 from '../assets/client8.jpeg';
import client9 from '../assets/client9.jpeg';
import client10 from '../assets/client10.jpeg';
import client12 from '../assets/client12.jpeg';
import client13 from '../assets/client13.jpeg';
import client14 from '../assets/client14.jpeg';
import client15 from '../assets/client15.jpeg';
import client16 from '../assets/client16.jpeg';
import client17 from '../assets/client17.jpeg';
import client18 from '../assets/client18.jpeg';


const ClientSection = () => {
    // 18 client logos/images
    const clientImages = [
        client1, client2, client3, client4, client5,
        client6, client7, client8, client9, client10,client12,client13,client14,client15,client16,
        client17,client18,
    ];

    return (
        <section className="client-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h2 className="text-color">Our Trusted Clients</h2>
                        <p className="client-para" style={{ maxWidth: '800px' }}>
                            We're proud to work with amazing companies and help them achieve their digital marketing goals
                        </p>
                    </div>
                </div>
            </div>

            <div className="scrolling-wrapper">
                <div className="scrolling-content">
                    {/* First set of images */}
                    {clientImages.map((image, index) => (
                        <div key={`first-${index}`} className="client-item">
                            <img
                                src={image}
                                alt={`Client ${index + 1}`}
                                className="client-image"
                            />
                        </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {clientImages.map((image, index) => (
                        <div key={`second-${index}`} className="client-item">
                            <img
                                src={image}
                                alt={`Client ${index + 1}`}
                                className="client-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ClientSection