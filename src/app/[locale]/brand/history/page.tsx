import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import HistoryAccordion from "./HistoryAccordion";
import styles from "./style.module.scss";

export default async function HistoryPage() {
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>브랜드 스토리</h1>
            <div className={styles.subheader}>
                <Link href="/brand/introduction">
                    <span>씨즈 소개</span>
                </Link>
                <Link href="/brand/history" className={styles.activeSubheader}>
                    <span>연혁</span>
                </Link>
            </div>
            <HistoryAccordion />
            <div className={styles.partnersContainer}>
                <h2 className={styles.partnersHeader}>Partners</h2>
                <div className={styles.partners}>
                    <Image src="/partners/MOEL.svg" alt="고용노동부 로고" fill />
                    <Image src="/partners/KHS.svg" alt="국가유산청 로고" fill />
                    <Image src="/partners/NTS.svg" alt="국세청 로고" fill />
                    <Image src="/partners/ACRC.svg" alt="국민권익위원회 로고" fill />
                    <Image src="/partners/KSEPA.svg" alt="한국사회적기업진흥원 로고" fill />
                    <Image src="/partners/GangwonState.svg" alt="강원특별자치도 로고" fill />
                    <Image src="/partners/Gyeonggido.svg" alt="경기도 로고" fill />
                    <Image src="/partners/GwangjuMetropolitanCity.svg" alt="광주광역시 로고" fill />
                    <Image src="/partners/Gangnamgu.svg" alt="강남구 로고" fill />
                    <Image src="/partners/Gwangjingu.svg" alt="광진구 로고" fill />
                    <Image src="/partners/BucheonCity.svg" alt="부천시 로고" fill />
                    <Image src="/partners/SeoulSpecialMetropolitanCity.svg" alt="서울특별시 로고" fill />
                    <Image src="/partners/Seochogu.svg" alt="서초구 로고" fill />
                    <Image src="/partners/Eunpyeonggu.svg" alt="은평구 로고" fill />
                    <Image src="/partners/Chungcheongnamdo.svg" alt="충청남도 로고" fill />
                    <Image src="/partners/NHN.svg" alt="NHN 로고" fill />
                    <Image src="/partners/SK.svg" alt="SK 로고" fill />
                    <Image src="/partners/KyoboLife.svg" alt="교보생명 로고" fill />
                    <Image src="/partners/LISCC.svg" alt="생명보험사회공헌위원회 로고" fill />
                    <Image src="/partners/ShinhanBank.svg" alt="신한은행 로고" fill />
                    <Image src="/partners/IncheonAirport.svg" alt="인천국제공항 로고" fill />
                    <Image src="/partners/POSCO.svg" alt="포스코 로고" fill />
                    <Image src="/partners/HanwhaLife.svg" alt="한화생명 로고" fill />
                    <Image src="/partners/HyundaiMotors.svg" alt="현대자동차 로고" fill />
                    <Image src="/partners/ChungMongKooFoundation.svg" alt="정몽구재단 로고" fill />
                    <Image src="/partners/KCCSE.svg" alt="한국사회적기업중앙협의회 로고" fill />
                    <Image src="/partners/CCEI.svg" alt="광주창조경제혁신센터 로고" fill />
                    <Image src="/partners/DDP.svg" alt="DDP 로고" fill />
                    <Image src="/partners/KAIST.svg" alt="KAIST 로고" fill />
                    <Image src="/partners/CCK.svg" alt="사회복지공동모금회 로고" fill />
                    <Image src="/partners/SamseonNanum.svg" alt="삼선배움과나눔재단 로고" fill />
                    <Image src="/partners/SFAC.svg" alt="서울문화재단 로고" fill />
                    <Image src="/partners/SSEC.svg" alt="서울특별시사회적경제지원센터 로고" fill />
                    <Image src="/partners/HajaCenter.svg" alt="하자센터 로고" fill />
                    <Image src="/partners/KMA.svg" alt="한국메세나협회 로고" fill />
                    <Image src="/partners/Ubuntu.svg" alt="사무금융우분투재단 로고" fill />
                    <Image src="/partners/WorldVision.svg" alt="월드비전 로고" fill />
                    <Image src="/partners/Byeopssi.svg" alt="볍씨학교 로고" fill />
                </div>
            </div>
        </div>
        <Footer />
    </>;
}