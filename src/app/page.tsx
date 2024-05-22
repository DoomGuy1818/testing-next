
// import Image from "next/image";
// import styles from "./page.module.css"
// import Sidebar from "@/components/sideNavbar/index"
// import CreatingWish from "../components/creating-wish"
// import CreateWishlist from "../components/createWishlist"
// import Login from "../components/login/index"
// import Register from "../components/register"
// import Wishlist from "../components/wishlist"
// import WishesInWishlist from "../components/wishesInWishlist/index"
//
// export default function Home() {
//   return (
//     <main>
//         <Wishlist/>
//     </main>
//   );
// }

import Header from "../components/Header/Header";
import Main from "../components/Main/index"


export default function Home() {
    return (
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <Main/>
        </div>
      </div>
      );
    }

