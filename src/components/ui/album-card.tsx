import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const AlbumCard: React.FC<CardProps> = ({
  image,
  title,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`border rounded-2xl overflow-hidden cursor-pointer transition-all w-40 h-40 ${
        isActive ? "border-primary" : "border-gray-300"
      }`}
    >
      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-24 object-cover"
      />
      <div
        className={`h-full px-4 py-3 ${
          isActive ? "bg-primary text-white" : "bg-white text-black"
        }`}
      >
        <h3 className="font-semibold text-xs">{title}</h3>
      </div>
    </div>
  );
};

export default AlbumCard;
