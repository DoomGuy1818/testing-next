import Image from "next/image";
import styles from "./page.module.css"
import Sidebar from "@/components/sideNavbar/index"
import CreatingWish from "../components/creating-wish"
import CreateWishlist from "../components/createWishlist"
import Login from "../components/login/index"
import Register from "../components/register"
import Wishlist from "../components/wishlist"

export default function Home() {
  return (
    <main>
        <Register/>
    </main>
  );
}
