import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariant = cva("px-6 py-3 rounded-xl duration-300", {
  variants: {
    color: {
      green: "bg-accent1 text-light hover:bg-accent1/90",
      dark: "bg-dark text-light hover:bg-dark/90",
      light: "bg-light text-dark hover:bg-light/90",
      gost: "bg-transparent text-dark hover:bg-dark/90",
    },
  },
  defaultVariants: {
    color: "green",
  },
});

interface ButtonProps extends VariantProps<typeof buttonVariant> {
  href: string;
  target?: string;
  placeholder: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  target,
  placeholder,
  color,
}) => {
  return (
    <div>
      <Link
        href={href}
        target={target}
        className={clsx(buttonVariant({ color }))}
      >
        {placeholder}
      </Link>
    </div>
  );
};

export default Button;
