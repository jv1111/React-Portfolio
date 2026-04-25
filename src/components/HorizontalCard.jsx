import { Icon } from "@iconify/react";

const sizeMap = {
  1: {
    icon: 32,
    title: "text-sm",
    desc: "text-xs",
    gap: "gap-2",
    padding: "px-2 py-3"
  },
  2: {
    icon: 50, // current default
    title: "text-base",
    desc: "text-sm",
    gap: "gap-3",
    padding: "px-2 py-5"
  },
  3: {
    icon: 64,
    title: "text-lg",
    desc: "text-base",
    gap: "gap-4",
    padding: "px-3 py-6"
  }
};

const HorizontalCard = ({
  icon,
  title,
  description,
  size = 2,
  className = "",
  ...props
}) => {
  const styles = sizeMap[size] || sizeMap[2];

  return (
    <div
      className={`group flex ${size === 1? 'max-w-115' : 'max-w-130'} items-center ${styles.gap} rounded-md border border-white bg-[#1f1f1f] ${styles.padding} shadow-md duration-400 select-none cursor-pointer hover:-translate-y-1 hover:scale-105 hover:border-primary ${className}`}
      {...props}
    >
      {/* left */}
      <div className="flex w-25 h-25 items-center justify-center text-white duration-400 group-hover:text-primary">
        <Icon icon={icon} width={styles.icon} height={styles.icon} />
      </div>

      <div className="h-25 w-1 rounded-sm bg-white duration-400 group-hover:bg-primary" />

      {/* right */}
      <div className="flex-1 flex flex-col gap-2 justify-center text-start">
        <h3 className={`${styles.title} text-white duration-400 group-hover:text-primary`}>
          {title}
        </h3>
        <div className={`${styles.desc} font-extralight text-secondary-light duration-400 group-hover:text-primary`}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;