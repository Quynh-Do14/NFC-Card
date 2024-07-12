import { useEffect, useRef, useState } from 'react'

const VideoComponent = () => {
    const textRef = useRef<any>(null);
    const [isAnimate, setIsAnimate] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsAnimate(entry.isIntersecting);
            },
            {
                threshold: 0.1 // Adjust this value to determine when the section is considered "in view"
            }
        );

        const currentSectionRef = textRef.current;
        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, []);


    return (
        <div className='video padding-common flex flex-col justify-center items-center gap-6'>
            <h2 ref={textRef} className={`${isAnimate ? "animate" : ""} text`}>
                Hướng dẫn sử dụng NFC
            </h2>
            <iframe className='w-full h-[50dvh]' src="https://www.youtube.com/embed/BZdvHWGh-OU?si=-bOaHxBsRszM3rSp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default VideoComponent