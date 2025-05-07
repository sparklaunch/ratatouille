import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export default function Footer() {
    return <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
            <Image src="/logos/Logo.svg" width={161} height={50} alt="씨즈 로고" />
            <div className={styles.rightContainer}>
                <h2 className={styles.header}>We Believe in The Power of Small SEED:S</h2>
                <div className={styles.gridContainer}>
                    <div className={styles.information}>
                        <h3>Company info</h3>
                        <p>사단법인 씨즈 대표자: 이은애</p>
                        <p>사업자 등록 번호: 110-82-15053</p>
                        <p>주소: (03355) 서울시 은평구 불광로 89-4</p>
                    </div>
                    <div className={styles.conversation}>
                        <h3>Start a conversation</h3>
                        <p>seeds@theseeds.asia</p>
                        <p>+82.2.355.7911</p>
                        <p>02-355-7910</p>
                        <p>010-3442-7901</p>
                    </div>
                    <div className={styles.socialMedia}>
                        <h3>Follow us on</h3>
                        <div className={styles.socialMediaLogos}>
                            <Link href="#">
                                <Image src="/logos/FacebookLogo.svg" alt="페이스북 로고" width={10} height={20} />
                            </Link>
                            <Link href="#">
                                <Image src="/logos/XLogo.svg" alt="X 로고" width={20} height={20} />
                            </Link>
                            <Link href="#">
                                <Image src="/logos/InstagramLogo.svg" alt="인스타그램 로고" width={20} height={20} />
                            </Link>
                            <Link href="#">
                                <Image src="/logos/YouTubeLogo.svg" alt="유투브 로고" width={28} height={20} />
                            </Link>
                        </div>
                    </div>
                    <Link href="#" className={styles.bottomLink}>
                        <span>씨즈 소개</span>
                    </Link>
                    <Link href="#" className={styles.bottomLink}>
                        <span>방문 안내</span>
                    </Link>
                    <p className={styles.copyright}>&copy; 2025 SEED:S All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
}