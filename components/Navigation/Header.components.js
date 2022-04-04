import Link from "next/link";
import Logo from "./Logo.components";
import { useRouter } from 'next/router';


const TextLink = ({ text, url }) => {
    const router = useRouter();
    console.log(router.pathname == url);
    return (
        <Link href={url}>
            <a
                className={`${router.pathname == {url} ? 'text-orange-400 border-b-orange-400 border-b-2' : ''} cursor-pointer font-bold px-4 py-[0.10rem] text-lg text-black duration-100 hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2`}
            >
                {text}
            </a>
        </Link>
    );
};

const Header = () => {
    return (
        <header
            className={`md:fixed md:w-screen text-center md:bg-white md:top-0 z-10 bg-fixed font-darker py-8 sm:flex sm:flex-col sm:items-center sm:justify-center`}
        >
            <Logo/>
            <p className="py-4 md:py-0 sm:flex sm:flex-row sm:gap-x-4">
                <TextLink text="Order Online" url="/order-online" />
                <TextLink text="Get Here" url="/get-here" />
                <TextLink text="Catering" url="/catering" />
                <TextLink text="Private Events" url="/private" />
                <TextLink text="Contact Us" url="/contact" />
            </p>
        </header>
    );
};

export default Header;
