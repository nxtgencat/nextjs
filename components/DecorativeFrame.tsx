interface DecorativeFrameProps {
    src: string;
    alt: string;
    size?: number;
    rotateRight?: boolean;
}

export default function DecorativeFrame({ src, alt, size = 360, rotateRight = true }: DecorativeFrameProps) {
    return (
        <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover rounded-lg shadow-inner"
            />
            <div className={`absolute -inset-3 ${rotateRight ? 'rotate-3' : '-rotate-3'} border-2 border-[#4a1220] rounded-lg pointer-events-none`} />
            <div className={`absolute -inset-6 ${rotateRight ? 'rotate-6' : '-rotate-6'} border border-[#3b0b13] rounded-lg opacity-30 pointer-events-none`} />
        </div>
    );
}
