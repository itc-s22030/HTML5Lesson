import Link from "next/link";
const Nav = () => {
    return (
        <ul>
            <li>
                <ul><Link href="/web">WEB</Link></ul>
                <ul><Link href="/prep">PREP</Link></ul>
                <ul ><Link href="/cafe">CAFE</Link></ul>
                <ul><Link href="/pc">PC</Link></ul>
                <ul><Link href="paper">PAPER</Link></ul>
            </li>
        </ul>
    )
}

export default Nav