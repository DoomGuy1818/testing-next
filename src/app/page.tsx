import Image from "next/image";
import styles from "./page.module.css"
import Sidebar from "@/components/sideNavbar/index"
import CreatingWish from "../components/creating-wish"

export default function Home() {
  return (
    <main>
        <CreatingWish/>
    </main>
  );
}
