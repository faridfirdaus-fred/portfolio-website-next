interface CardProps {
  icon: React.ReactNode; // Ikon yang akan ditampilkan (bisa dari library ikon)
  link: string; // URL tujuan
}

const Card: React.FC<CardProps> = ({ icon, link }) => {
  return (
    <div className="p-4 w-40 h-40 flex items-center justify-center bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 text-4xl hover:text-blue-500"
      >
        {icon}
      </a>
    </div>
  );
};

export default Card;
