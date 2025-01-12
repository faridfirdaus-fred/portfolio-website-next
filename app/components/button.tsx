import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "red"; // Tambahkan opsi varian
  type?: "button" | "submit" | "reset"; // Add type property
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  variant = "primary",
  type = "button",
}) => {
  // Tentukan kelas dasar berdasarkan varian
  const variantClass =
    variant === "red"
      ? "bg-red-500 text-white hover:bg-red-600"
      : "bg-primary text-white";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variantClass} ${className} px-4 py-2 mt-4 rounded-3xl hover:scale-105 transform transition duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
