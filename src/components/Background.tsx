import Image from 'next/image'

//If using fill, also use sizes="100vw"
export default function Background() {
    return (
        <Image
        alt="Fire"
        src="/ig.png"
        placeholder='blur'
        quality={100}
        fill 
        sizes="100vw"
        style={{
            objectFit: 'cover',
        }}
        />
    );
}