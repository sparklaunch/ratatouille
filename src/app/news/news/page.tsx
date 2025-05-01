import Image from "next/image";
import Link from "next/link";
import "./style.css";

export default function News() {
    return <>
        <div className="menu-container">
            <Link className="keeper-container" href="#">
                <p>SEED:S KEEPER</p>
            </Link>
            <div className="navigation-container">
                <Link href="/">
                    <Image src="/SeedsLogo.svg" alt="씨즈 로고" width={163} height={51} />
                </Link>
                <div className="navigation-menu">
                    <div className="navigation">
                        <Link href="#">
                            <p>브랜드 스토리</p>
                        </Link>
                        <Link href="#">
                            <p>프로젝트</p>
                        </Link>
                        <Link href="#">
                            <p>소식</p>
                            <div className="submenu">
                                <Link href="#">
                                    <p>소식</p>
                                </Link>
                                <Link href="#">
                                    <p>언론 보도</p>
                                </Link>
                            </div>
                        </Link>
                        <Link href="#">
                            <p>소통</p>
                            <div className="submenu">
                                <Link href="#">
                                    <p>뉴스레터</p>
                                </Link>
                                <Link href="#">
                                    <p>찾아오시는 길</p>
                                </Link>
                                <Link href="#">
                                    <p>문의하기</p>
                                </Link>
                            </div>
                        </Link>
                    </div>
                    <Link href="/" className="sponsor">
                        <p>후원하기</p>
                    </Link>
                </div>
            </div>
        </div>
    </>;
}