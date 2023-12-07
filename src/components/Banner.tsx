import "react-slideshow-image/dist/styles.css";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const slideImages = [
    {
        url: "https://s3-alpha-sig.figma.com/img/6756/899b/e7ba28ab8442c7b81b88906a80aeb8fe?Expires=1702857600&Signature=TmDg3pNjsqtQ0mJnXaHW1sDqW3h80qob2YhFhXuXvRzSZBpiYn1cxqam9lz1~0dGtjsSsueThnDRBNMRBQxO~1VocTWXluq5yxMl08iE10TzEXSTtcPzmm3IGx4BDU3Xiw13PovvNIfqgYa5FfHNNWx4tba4BQsSg6CFSzBaJ8Z5vkErg65J5ncNaHiVAle1ir6NUDSz3yFFkpI17T3YJlrJlVeRt8Jm6WNWkL33OhRxv~POh4JaM20qv7hi5mI9OzDdWdMwHpcKQwr7RDqpzLhVrrmFdwzPjZIEDCS2rEEss8xnTv8V-c6ZGcLoT9wh-Po4InG47xo76yDhwI184A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/c173/91fc/55b0d60897d030520a08a9986afd4392?Expires=1702857600&Signature=I7~znsrW91RdWM5olpV-uvEHbvXZDszYSiU32DoOcB63TmRjq~5hposgTMNLi9d4syrVpyQYfBV47DRcBMpjcWkACIOJYwQPY5lGmbxy2FU2Kn~UIlyov9qd8RnbyFHnlYdWMRUljEjrrzE59dOW-JmDlBR4oGvFz-eJqFlAwZ0UsEo49MhPzGE1Wg1mvLklbK8YOwVf-LgZZNr8TE6cDo~bFRG7wmzQRxfzj6PM1dTn8Ye5BbA02yy4rbNL~8CPD6YWjd4eZ3ihjZbkcGrCi7TjvibBuN8RFGpaE~RQz8849o2HyUXDPMqhY~SX85HhLuzw6JF44kHYKP3vtaGzJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/1e4d/5421/0ec0dd621d387396518307a4d5833128?Expires=1702857600&Signature=J6Zhp-v4uAiQWhOQzMPsvN5JNRXgK7rIkikQUofwU2nuOr9Qmwi3IC1BRsH2vkmjvhhGX6Xc4wLT3EoPDkbjSBQY6-zGalkiD8Ac2ooeYF8tNiyPHdUYODQ3GqIf-vrKwQXEApKwEXrPd~Cx1PZBOTg6a5xJ1b6Gwb9GEmAJWMu2gTPwUty~TpzjZSmCReIjBKnhhyytU4vbizh7Gq0~bTZuKpdFN1QJYyRnVhnO1YRk6TbRxi28V9BJeSN067xyplgUE1FuzRAGMb5tY~hfgKDywu8XjLaQxw4R8pqVU8qiI~gMKeClo3MWODRr8TXd-9El7vndXeiIemLZt-K4rg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/f3ab/5f96/4f6f7938078ed40088092628b43fef2b?Expires=1702857600&Signature=QJw57o4PgyWg8ExHeCGnk431dK5lLx4biiROHhbbIzIxLw-4t-I4HKgs8hzv7WM8uxe0gk3mJ0UcxZZNOaT33KV-5sf8CmC4qNR2qTtSF4WD~cAAimyfaFWFxRkKHtd5F9WZ3HHTH4-V6AXFaJuF88gqqwNh2sYCHVWsPTglTukKRsr60WH-nrWRjaXiK2fbcP6NP299Gs35V12Q0E3d57zNwzMXbTMNg2VJlcMTG5RsHFrGnHRzGGiJvCIU3bztx-B5zO~nbG8FaghMYQyuWeNFDZ0Azc-dOHzA~~XYG64x5Hx~T5EgUWxX1ttwyF5dU9naZnitD-iB1GaX~C9SBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/ba2a/7a04/69607fdac7bc70a8f0fe760541a5c664?Expires=1702857600&Signature=SF64Ae~f9JCGF0LjWxliBCEI1bDM6xV4wPiCH7giO-cxa99sW9C5DPZ5rFel4g1~I4ndNzvBuyJ4chyt9M4K5PuIRlveb--mlb-P7FJU0V1OckBLbaezNfZ27SlFF76UDudRHraIkD3Xo3Cd0PbTJn6vBHeP7HvXEqE-i3xOl6U3rPvk1qmKTXnLElEaNc6dB77Iwc9U7umvoeIpi7uJE70MZ8u6etur75gDaKFYjhbhDCYzNzaj9EKue-oORR6UxvxXNMNsczAg4reEHvqRzoyWLfUacT7qqdErrMX4yodv50mZ~TxagIdn~ELHZMfFIpx5flCpTW5ezTq73GbWXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
];

function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slideImages.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <>
            <div className="max-w-[1400px] h-[680px] w-full m-auto py-16 px-4 relative group">
                <div
                    style={{ backgroundImage: `url(${slideImages[currentIndex].url})` }}
                    className="w-full h-full rounded-2xl bg-cover bg-center duration-500"
                ></div>
                <div
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
                    onClick={prevSlide}
                >
                    <BsChevronCompactLeft size={30} />
                </div>
                <div
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
                    onClick={nextSlide}
                >
                    <BsChevronCompactRight size={30} />
                </div>
            </div>
        </>
    );
}

export default Banner;