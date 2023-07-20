import { CSSProperties, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

interface Props {
    text: string;
    href: string;
}

const ActiveLink: FC<Props> = ({ text, href }) => {
    const { asPath } = useRouter();
    
    return (
        <Link legacyBehavior href={href}>
            <a style={ asPath === href ? style : undefined}>{text}</a>
        </Link>
    );
}
 
export default ActiveLink;