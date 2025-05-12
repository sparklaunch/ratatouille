"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export default function HistoryPage() {
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
            <div className={styles.historyContainer}>
                <h2 className={styles.historyHeader}>History</h2>
                <Accordion className={styles.accordion} disableGutters>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        className={styles.accordionSummary}
                    >
                        <h3 className={styles.accordionHeader}><span className={styles.accordionHeaderTitle}>SEASON 3</span> (2020~현재) 청년 정책 사각 지대 해소와 사회적 경제 커먼즈 구축</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className={styles.accordionContent}>씨즈는 팬데믹이 드러낸 '재난의 양극화'를 체감한 이후, 서울시 청년허브 운영을 통해 청년 정책의 사각 지대를 해소하고, 은둔·고립 청년을 지원해 왔습니다. 세대·국가·계층을 넘는 시민 협력으로 대안 경제의 해결 역량을 키워왔으며, 지금도 새로운 변화의 씨앗을 심고 있습니다. 앞으로는 청년·시니어 간 서로 돌봄 도시 실험, 사회적 경제 기반 그린 스마트 클러스터 조성, 586세대의 사회적 유산을 활용한 금융 확충 등을 통해, 또 다른 10년의 도전을 이어갑니다.</p>
                        <div className={styles.season3Container}>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2022 ~ 현재</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>청년 문화 예술 창작자 및 은둔·고립 청년의 사회 치유형 공공 임대 주택 운영 제안 (LH, 나눔과미래 협력)</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2021 ~ 2022</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>경기도 미취업 취약층 청년 '버팀목 일자리 인턴쉽 지원' (SK M & Service 및 모금회)</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2020 ~ 2021</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>• 서울시 청년 정책 개발 및 청년 네트워크 지원을 위한 청년허브 위탁 운영 (서울시)</p>
                                <p>• 은둔·고립 청년 온라인 플랫폼 및 서로 돌봄 서클 지원, 1인 가구 청년 고독사 예방 협력망 구축 (사무 금융 우분투 재단 外)</p>
                                <p>• 지역 순환 경제 협업형 사회적 경제 클러스터 조성 시민 자산화 추진 (행안부)</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2020</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>• 인도네시아 청년 혁신 기업가 창업 지원 (공동 모금회 지정 기부)</p>
                                <p>• 팬데믹 위기 상황의 저개발국 사회적 경제 발굴 지원 (KOICA 협력)</p>
                                <p>• 지역 순환 경제 거점 모델 조성을 위한 기초 연구 (서울연구원)</p>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordion} disableGutters>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        className={styles.accordionSummary}
                    >
                        <h3 className={styles.accordionHeader}><span className={styles.accordionHeaderTitle}>SEASON 2</span> (2013~2019) 사회적 경제의 성장 및 정책 확산</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={styles.season2Container}>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2019 ~ 2020</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>청년의 농산어촌 활동 및 지역 연계형 창업 지원 '넥스트 로컬' (서울시)</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2019</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>신중년 X 사회적 기업 상생 프로젝트 (상상우리)</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2016 ~ 2017</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>지역 소멸 지역 활동 청년 발굴 지원 'N'gels X 소셜 벤처' (네이버)</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2016 ~ 2020</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>창의 허브 세운 SE:CLOUD 조성 및 운영 (서울시 및 현대자동차)</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2015 ~ 2019</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>세월호 공동체 치유 공간 '꼬두물정거장' 운영 및 '소금버스협동조합' 육성 (개인 후원자)</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2015 ~ 2016</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>광주광역시 서민 생활 지원 창업 지원 (광주창조경제혁신센터)</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2014 ~ 2016</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>• 소셜 벤처 아이디어 대회 서울 대회 (고용노동부)</p>
                                <p>• 청소년 창의 리더십 스쿨 (현대자동차 및 DDP)</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2012 ~ 2016</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>은평구 사회적 경제 허브 센터 설치 및 운영 (서울시 및 은평구)</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2012 ~ 2013</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>광진구 청년 창업 보육 센터 (광진구)</p>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordion} disableGutters>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        className={styles.accordionSummary}
                    >
                        <h3 className={styles.accordionHeader}><span className={styles.accordionHeaderTitle}>SEASON 1</span> (2010~2012) 청년 주도의 사회 문제 해결 및 주체 성장 지원</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={styles.season1Container}>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2012</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>Seoul Sustainability Jam 주관</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2012 ~ 2020</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>H-온드림 오디션 (현대자동차)</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2011 ~ 2016</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>국내 최초 청년 사회적 기업가 공유 오피스 '서초 창의허브' 운영 (현대자동차, 서초구청)</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2011 ~ 2022</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>• 청년 사회적 기업가 육성 사업 정책 개발 및 전국 확산 (고용노동부 外)</p>
                                <p>• NHN Fellow 사회적 금융 지원 (NHN 창업가)</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2011 ~ 2019</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>• SEEKER:S 청년 해외 탐방 지원 (교보생명 外)</p>
                                <p>• BORA 활동 지속</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2010 ~ 2022</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>사회적 경제 정책 개발 지원 생태계 조성 (충청남도, 서울시, 강원특별자치도, 청와대 등)</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>2010 ~ 2011</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>• '청년 체인지메이커의 이야기' (삼선배움과나눔재단 후원)</p>
                                <p>• 청년 윤리적 소비 캠페인단 'BORA' 조직화 시작</p>
                            </div>
                            <div className={styles.accordionHistoryHeader}>
                                <p>기타</p>
                            </div>
                            <div className={styles.accordionHistoryContent}>
                                <p>• 세상콘테스트, SK 사회적 기업 스쿨 멘토링</p>
                                <p>• '우리 마을이 학교가 되다' (포스코) 등 다수</p>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
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
                    <Image src="/partners/ChungMongKooFoundation.png" alt="정몽구재단 로고" fill />
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