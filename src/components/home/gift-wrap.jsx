import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const GiftWrapSection = () => {
    const router = useRouter();
    return (
        <>
            <section className="section-gapBottom">
                <div className="row-container">
                    <div className="row border rounded justify-content-between giftwrap-row-section">
                        <div className="col-12 col-md-12 col-lg-2 justify-content-center justify-content-lg-start gift-section-1 text-center d-flex align-items-center">
                            <div>
                                <Image
                                    src="/assets/img/home/wrap-with-love/gift-box.png"
                                    alt="image-1"
                                    width={150}  // Set image width
                                    height={150} // Set image height
                                    className="img-fluid gift-wrap-gift-image" // Ensures responsive image
                                />
                                <h5>Wrapped with Love</h5>
                            </div>
                        </div>

                        <div className="col-lg-10 col-md-12 col-12">
                            <div className="row">
                                <div className="col-md-4 col-lg-2 col-6 mb-lg-0 mb-3">
                                    <Image
                                        src="/assets/img/home/wrap-with-love/1.jpg"
                                        alt="gift-wrap-1"
                                        width={600}  // Set image width
                                        height={400} // Set image height
                                        layout="responsive"
                                        quality={75} // Optional image quality
                                        style={{ borderRadius: "20px" }}
                                    />
                                    <h6 className="gift-wrap-name" style={{ cursor: "pointer" }} onClick={() => {
                                        router.push({
                                            pathname: "/shop",
                                            query: { category: "idols" }, // Your parameters
                                        });
                                    }}>Idols</h6>
                                </div>

                                <div className="col-md-4 col-lg-2 col-6 mb-lg-0 mb-3">
                                    <Image
                                        src="/assets/img/home/wrap-with-love/2.jpg"
                                        alt="gift-wrap-2"
                                        width={600}  // Set image width
                                        height={400} // Set image height
                                        layout="responsive"
                                        quality={75} // Optional image quality
                                        style={{ borderRadius: "20px" }}
                                    />
                                    <h6 className="gift-wrap-name" style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            router.push({
                                                pathname: "/shop",
                                                query: { category: "bangles__bracelets" }, // Your parameters
                                            });
                                        }}>Bracelets</h6>
                                </div>

                                <div className="col-md-4 col-lg-2 col-6 mb-lg-0 mb-3">
                                    <Image
                                        src="/assets/img/home/wrap-with-love/3.jpg"
                                        alt="gift-wrap-3"
                                        width={600}  // Set image width
                                        height={400} // Set image height
                                        layout="responsive"
                                        quality={75} // Optional image quality
                                        style={{ borderRadius: "20px" }}
                                        onClick={() => {
                                            router.push({
                                                pathname: "/shop",
                                                query: { category: "earrings" }, // Your parameters
                                            });
                                        }}
                                    />
                                    <h6 className="gift-wrap-name" style={{ cursor: "pointer" }}>
                                        Earrings
                                    </h6>
                                </div>

                                <div className="col-md-4 col-lg-2 col-6 mb-lg-0 mb-3">
                                    <Image
                                        src="/assets/img/home/wrap-with-love/4.jpg"
                                        alt="gift-wrap-4"
                                        width={600}  // Set image width
                                        height={400} // Set image height
                                        layout="responsive"
                                        quality={75} // Optional image quality
                                        style={{ borderRadius: "20px" }}
                                        onClick={() => {
                                            router.push({
                                                pathname: "/shop",
                                                query: { category: "pearls__beads" }, // Your parameters
                                            });
                                        }}
                                    />
                                    <h6 className="gift-wrap-name" style={{ cursor: "pointer" }}>
                                        Pearls & Beads
                                    </h6>
                                </div>

                                <div className="col-md-4 col-lg-2 col-6 mb-lg-0 mb-3">
                                    <Image
                                        src="/assets/img/home/wrap-with-love/5.jpg"
                                        alt="gift-wrap-5"
                                        width={600}  // Set image width
                                        height={400} // Set image height
                                        layout="responsive"
                                        quality={75} // Optional image quality
                                        style={{ borderRadius: "20px" }}
                                        onClick={() => {
                                            router.push({
                                                pathname: "/shop",
                                                query: { category: "everyday_jewellery" }, // Your parameters
                                            });
                                        }}
                                    />
                                    <h6 className="gift-wrap-name" style={{ cursor: "pointer" }}>
                                        Everyday Jewellery
                                    </h6>
                                </div>

                                <div className="col-md-4 col-lg-2 col-6 mb-lg-0 mb-3">
                                    <Image
                                        src="/assets/img/home/wrap-with-love/6.jpg"
                                        alt="gift-wrap-6"
                                        width={600}  // Set image width
                                        height={400} // Set image height
                                        layout="responsive"
                                        quality={75} // Optional image quality
                                        style={{ borderRadius: "20px" }}
                                        onClick={() => {
                                            router.push({
                                                pathname: "/shop",
                                                query: { category: "necklaces" }, // Your parameters
                                            });
                                        }}
                                    />
                                    <h6 className="gift-wrap-name" style={{ cursor: "pointer" }}>
                                        Necklaces
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GiftWrapSection;
