type BadgeProps = {
  title: string;
};

const Badge = ({ title }: BadgeProps) => {
  return (
    <span
      className="inline-block h-6 px-3 bg-gray-1.5 text-xs-plus text-black
                 leading-6 rounded-xl"
    >
      {title}
    </span>
  );
};

export default Badge;
