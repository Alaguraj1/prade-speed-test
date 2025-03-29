import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const HomeCategorySection = () => {
    const router = useRouter();
    return (
        <>
            <section className="section-gap">
                <div className="row-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="feature-main">
                                <h5 className="feature-adipisicing" style={{ fontWeight: "400" }}>
                                    Explore our exclusive collections
                                </h5>
                                <h4 style={{ fontWeight: "400" }}>CATEGORIES</h4>
                                <p style={{ color: "gray", fontSize: "14px" }}>
                                    Carefully curated for modern women
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 category-section-1">
                                    <Image
                                        src="/assets/img/home/Catergories/1.jpg"
                                        alt="image-1"
                                        width={600}  // Set image width
                                        height={400} // Set image height
                                        layout="responsive"
                                        quality={75} // Optional image quality
                                        style={{ borderRadius: "20px", cursor: "pointer" }}
                                        onClick={() => {
                                            router.push({
                                                pathname: "/shop",
                                                query: { category: "finger_rings" },
                                            });
                                        }}
                                    />
                                </div>

                                <div className="col-xl-6 col-lg-6 category-section-2">
                                    <Image
                                        src="/assets/img/home/Catergories/2.jpg"
                                        alt="image-2"
                                        width={600}  // Set image width
                                        height={400} // Set image height
                                        layout="responsive"
                                        quality={75} // Optional image quality
                                        style={{ borderRadius: "20px", cursor: "pointer" }}
                                        onClick={() => {
                                            router.push({
                                                pathname: "/shop",
                                                query: { category: "necklaces" },
                                            });
                                        }}
                                    />
                                </div>

                                <div className="col-xl-6 col-lg-6 category-section-3">
                                    <Image
                                        src="/assets/img/home/Catergories/3.jpg"
                                        alt="image-3"
                                        width={600}  // Set image width
                                        height={400} // Set image height
                                        layout="responsive"
                                        quality={75} // Optional image quality
                                        style={{ borderRadius: "20px", cursor: "pointer" }}
                                        onClick={() => {
                                            router.push({
                                                pathname: "/shop",
                                                query: { category: "earrings" },
                                            });
                                        }}
                                    />
                                </div>

                                <div className="col-xl-6 col-lg-6  category-section-4">
                                    <Image
                                        src="/assets/img/home/Catergories/4.jpg"
                                        alt="image-4"
                                        width={600}  // Set image width
                                        height={400} // Set image height
                                        layout="responsive"
                                        quality={75} // Optional image quality
                                        style={{ borderRadius: "20px", cursor: "pointer" }}
                                        onClick={() => {
                                            router.push({
                                                pathname: "/shop",
                                                query: { category: "short_necklaces" },
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6  category-section-5">
                                    <Image
                                        src="/assets/img/home/Catergories/5.jpg"
                                        alt="image-5"
                                        width={600}  // Set image width
                                        height={400} // Set image height
                                        layout="responsive"
                                        quality={75} // Optional image quality
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        style={{ borderRadius: "20px", cursor: "pointer" }}
                                        onClick={() => {
                                            router.push({
                                                pathname: "/shop",
                                                query: { category: "other_accessories" },
                                            });
                                        }}
                                    />
                                </div>

                                <div className="col-xl-6 col-lg-6">
                                    <Image
                                        src="/assets/img/home/Catergories/6.jpg"
                                        alt="image-6"
                                        width={600}  // Set image width
                                        height={400} // Set image height
                                        layout="responsive"
                                        quality={75} // Optional image quality
                                        style={{ borderRadius: "20px", cursor: "pointer" }}
                                        onClick={() => {
                                            router.push({
                                                pathname: "/shop",
                                                query: { category: "bangles__bracelets" },
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeCategorySection;
