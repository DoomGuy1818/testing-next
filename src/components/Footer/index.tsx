import styles from './Footer.module.scss'
import Image from 'next/image';

function Footer() {

    return(

        <footer className={styles.footerContainer}>

            <section className={styles.topContainer}>

                <div className={styles.subContainer}>

                    <div className={styles.logo}>

                        <Image 
                        src="img/Logo.svg"
                        width={48}
                        height={48}
                        alt="Logo"
                        />

                        <h3 className={styles.logoTitle}>
                        Estatein
                        </h3>

                    </div>

                    <div className={styles.inputField}>

                        <i className={styles.icon1}>
                            <Image 
                                src="icons/Mail.svg"
                                width={24}
                                height={24}
                                alt="Logo"
                            />
                        </i>

                        <span className={styles.inputText}>
                            Enter Your Email
                        </span>

                        <i className={styles.icon2}>
                            <Image 
                                src="icons/Send.svg"
                                width={30}
                                height={30}
                                alt="Logo"
                            />
                        </i>

                    </div> 

                </div>

                <div className={styles.footerNavigation}>

                    <ul className={styles.homeList}>
                        <li className={styles.topTitle}>Home</li>
                        <li className={styles.otherItem}>Hero Section</li>
                        <li className={styles.otherItem}>Features</li>
                        <li className={styles.otherItem}>Properties</li>
                        <li className={styles.otherItem}>Testimonials</li>
                        <li className={styles.bottomItem}>FAQ's</li>
                    </ul>

                    <ul className={styles.aboutUsList}>
                        <li className={styles.topTitle}>About Us</li>
                        <li className={styles.otherItem}>Our story</li>
                        <li className={styles.otherItem}>Our Works</li>
                        <li className={styles.otherItem}>How it Works</li>
                        <li className={styles.otherItem}>Our Team</li>
                        <li className={styles.bottomItem}>Our Clients</li>
                    </ul>

                    <ul className={styles.propertiesList}>
                        <li className={styles.topTitle}>Properties</li>
                        <li className={styles.otherItem}>Portfolio</li>
                        <li className={styles.bottomItem}>Categories</li>
                    </ul>

                    <ul className={styles.servicesList}>
                        <li className={styles.topTitle}>Services</li>
                        <li className={styles.otherItem}>Valuation Mastery</li>
                        <li className={styles.otherItem}>Strategic Marketing</li>
                        <li className={styles.otherItem}>Negotiation Wizardry</li>
                        <li className={styles.otherItem}>Closing Success</li>
                        <li className={styles.bottomItem}>Property Management</li>
                    </ul>

                    <ul className={styles.contactUsList}>
                        <li className={styles.topTitle}>Contact Us</li>
                        <li className={styles.otherItem}>Contact Form</li>
                        <li className={styles.bottomItem}>Our Offices</li>
                    </ul>

                </div>

            </section>

            <section className={styles.bottomContainer}>

                <div className={styles.privacyContainer}>

                    <span className={styles.privacyText1}>
                        @2023 Estatein. All Rights Reserved.
                    </span>

                    <span className={styles.privacyText2}>
                        Terms & Conditions
                    </span>

                </div>

                <div className={styles.socialContainer}>

                    <div className={styles.btnIcon}>
                        <Image 
                            src="icons/Facebook.svg"
                            width={24}
                            height={24}
                            alt="Logo"
                        />
                    </div>

                    <div className={styles.btnIcon}>
                        <Image 
                            src="icons/Inst.svg"
                            width={24}
                            height={24}
                            alt="Logo"
                        />
                    </div>

                    <div className={styles.btnIcon}>
                        <Image 
                            src="icons/Twitter.svg"
                            width={24}
                            height={24}
                            alt="Logo"
                        />
                    </div>

                    <div className={styles.btnIcon}>
                        <Image 
                            src="icons/YouTube.svg"
                            width={24}
                            height={24}
                            alt="Logo"
                        />
                    </div>

                </div>

            </section>

        </footer>

    )

}

export default Footer;
