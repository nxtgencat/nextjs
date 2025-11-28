import React from "react";

interface HairServiceProps {
    title?: string;
    description?: string;
    imageSrc?: string;
    onClick?: () => void;
    className?: string;
}

const defaultImage =
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6b1b7e9f8d0a3b9f7c2b8b3f9a9f6c5e";

export default function HairServiceCard({
    title = "Premium Hair Service",
    description = "Professional styling, cut and treatment tailored to you. Includes consultation and aftercare tips.",
    imageSrc = defaultImage,
    onClick,
    className,
}: HairServiceProps) {
    const containerStyle: React.CSSProperties = {
        width: 320,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(16,24,40,0.12)",
        cursor: onClick ? "pointer" : "default",
        transition: "transform 180ms ease, box-shadow 180ms ease",
        background: "#fff",
    };

    const imgWrapperStyle: React.CSSProperties = {
        position: "relative",
        height: 200,
        overflow: "hidden",
        background: "#f3f4f6",
    };

    const imgStyle: React.CSSProperties = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        transition: "transform 300ms ease",
    };

    const contentStyle: React.CSSProperties = {
        padding: "16px",
    };

    const titleStyle: React.CSSProperties = {
        margin: 0,
        fontSize: 18,
        fontWeight: 600,
        color: "#111827",
    };

    const descStyle: React.CSSProperties = {
        marginTop: 8,
        marginBottom: 0,
        fontSize: 14,
        color: "#6b7280",
        lineHeight: 1.4,
    };

    return (
        <div
            className={className}
            style={containerStyle}
            onClick={onClick}
            onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 12px 30px rgba(16,24,40,0.16)";
                const img = el.querySelector("img");
                if (img) img.style.transform = "scale(1.06)";
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "none";
                el.style.boxShadow = "0 6px 20px rgba(16,24,40,0.12)";
                const img = el.querySelector("img");
                if (img) img.style.transform = "none";
            }}
            role={onClick ? "button" : undefined}
            aria-pressed={onClick ? false : undefined}
        >
            <div style={imgWrapperStyle}>
                <img src={imageSrc} alt={title} style={imgStyle} />
            </div>

            <div style={contentStyle}>
                <h3 style={titleStyle}>{title}</h3>
                <p style={descStyle}>{description}</p>
            </div>
        </div>
    );
}