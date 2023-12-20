type BadgeProps = {
  title: string;
};

const Badge = ({ title }: BadgeProps) => {
  return (
    <span className="h-6 px-3 py-1 bg-gray-2 text-xs-plus text-black rounded-xl">
      {title}
    </span>
  );
};

export default Badge;
