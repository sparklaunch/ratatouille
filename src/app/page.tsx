import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import styles from "./style.module.scss";

export default function Home() {
    return (
        <>
            <Header />
            <div className={styles.videoContainer}>
                <video autoPlay loop muted playsInline className={styles.video}>
                    <source src="/videos/Video.mp4" type="video/mp4" />
                </video>
            </div>
            <Footer />
        </>
    );
}
