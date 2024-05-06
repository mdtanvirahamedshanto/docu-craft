import Icon from "@/public/assets/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="lg:flex">
      <Link href="/">
        <Image
          className="h-6 w-auto"
          src={Icon}
          alt="Logo"
          width={100}
          height={24}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
