"use client";

import InquiryType from "@/enums/InquiryType";
import {
    Checkbox, FormControl, FormControlLabel, InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import { DatePicker, DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./style.module.scss";

const textFieldSharedSlotProps = {
    inputLabel: {
        shrink: true
    }
};

const menuItemSharedStyles = {
    fontFamily: "Nanum Gothic",
    fontSize: "17px"
};

export default function InquiryForm() {
    const [type, setType] = useState(InquiryType.Inquiry);
    const [name, setName] = useState("");
    const [affiliation, setAffiliation] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [other, setOther] = useState("");
    const [applicationDate, setApplicationDate] = useState<Dayjs | null>(dayjs());
    const [visitDateTime, setVisitDateTime] = useState<Dayjs | null>(dayjs());
    const [headCount, setHeadCount] = useState(0);
    const [purposeOfFieldTrip, setPurposeOfFieldTrip] = useState(false);
    const [purposeOfListening, setPurposeOfListening] = useState(false);
    const [termsAgreed, setTermsAgreed] = useState(false);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        switch (type) {
            case InquiryType.Inquiry: {
                const payload = {
                    name,
                    affiliation,
                    contact,
                    email,
                    other,
                    termsAgreed
                };
                const response = await fetch("/api/inquiry", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                if (response.ok) {
                    const { hasSucceeded } = await response.json();
                    alert(hasSucceeded);
                } else {
                    alert("오류가 발생하였습니다.");
                }
                break;
            }
            case InquiryType.Visit: {
                const payload = {
                    name,
                    affiliation,
                    contact,
                    email,
                    applicationDate,
                    visitDateTime,
                    headCount,
                    purposeOfFieldTrip,
                    purposeOfListening,
                    other,
                    termsAgreed
                };
                const response = await fetch("/api/visit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                if (response.ok) {
                    const { hasSucceeded } = await response.json();
                    alert(hasSucceeded);
                } else {
                    alert("오류가 발생하였습니다.");
                }
                break;
            }
        }
    }
    return <div className={styles.inquiryContainer}>
        <Image src="/images/Inquiry.png" alt="문의하기 이미지" fill className={styles.inquiryImage} />
        <form onSubmit={handleSubmit} className={styles.inquiryForm}>
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                <InputLabel id="type">선택</InputLabel>
                <Select labelId="type" label="선택" value={type} MenuProps={{ disableScrollLock: true }} onChange={(event) => setType(event.target.value)} >
                    <MenuItem value={InquiryType.Inquiry} sx={menuItemSharedStyles}>문의하기</MenuItem>
                    <MenuItem value={InquiryType.Visit} sx={menuItemSharedStyles}>두더집 탐방 신청하기</MenuItem>
                </Select>
            </FormControl>
            <div className={styles.inquiryGridContainer}>
                <FormControl fullWidth>
                    <TextField label="성명" variant="outlined" placeholder="이름을 입력해주세요" value={name} onChange={(event) => setName(event.target.value)} slotProps={textFieldSharedSlotProps} />
                </FormControl>
                <FormControl fullWidth>
                    <TextField label="소속" variant="outlined" placeholder="소속팀" value={affiliation} onChange={(event) => setAffiliation(event.target.value)} slotProps={textFieldSharedSlotProps} />
                </FormControl>
            </div>
            <div className={styles.inquiryGridContainer}>
                <FormControl fullWidth>
                    <TextField label="연락처" variant="outlined" placeholder="000-000-0000" type="tel" value={contact} onChange={(event) => setContact(event.target.value)} slotProps={textFieldSharedSlotProps} />
                </FormControl>
                <FormControl fullWidth>
                    <TextField label="이메일" variant="outlined" placeholder="example@email.com" type="email" value={email} onChange={(event) => setEmail(event.target.value)} slotProps={textFieldSharedSlotProps} />
                </FormControl>
            </div>
            {type === InquiryType.Visit && <>
                <div className={styles.inquiryGridContainer}>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                            <DatePicker label="신청 날짜" value={applicationDate} onChange={(date) => setApplicationDate(date)} sx={{
                                ".MuiPickersSectionList-sectionContent": {
                                    fontFamily: "Nanum Gothic",
                                    fontSize: "17px"
                                }
                            }} />
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                            <DateTimePicker label="방문 일시" value={visitDateTime} onChange={(dateTime) => setVisitDateTime(dateTime)} slotProps={{
                                textField: {
                                    InputLabelProps: {
                                        shrink: true
                                    }
                                }
                            }} sx={{
                                ".MuiPickersSectionList-sectionContent": {
                                    fontFamily: "Nanum Gothic",
                                    fontSize: "17px"
                                }
                            }} />
                        </LocalizationProvider>
                    </FormControl>
                </div>
                <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                    <TextField label="방문 인원" variant="outlined" placeholder="신청인 外 00명 (소속을 달리할 경우 소속별 인원 기재)" value={headCount} onChange={(event) => {
                        const input = event.target.value;
                        if (input === "") {
                            setHeadCount(0);
                        } else {
                            const number = parseInt(input.replace(/\D/g, ""));
                            setHeadCount(number);
                        }
                    }} slotProps={textFieldSharedSlotProps} />
                </FormControl>
                <div className={styles.purposeOuterContainer}>
                    <p>방문 목적</p>
                    <div className={styles.purposeInnerContainer}>
                        <p>희망 시 체크</p>
                        <FormControlLabel control={<Checkbox sx={{
                            color: "#FF301E",
                            "&.Mui-checked": {
                                color: "#FF301E"
                            }
                        }} value={purposeOfFieldTrip} onChange={(event) => setPurposeOfFieldTrip(event.target.checked)} />} label="두더집 탐방 (시설 및 운영, 두더지땅굴 소개 등)" slotProps={{
                            typography: {
                                fontFamily: "Nanum Gothic",
                                fontSize: 17
                            }
                        }} />
                        <FormControlLabel control={<Checkbox sx={{
                            color: "#FF301E",
                            "&.Mui-checked": {
                                color: "#FF301E"
                            }
                        }} value={purposeOfListening} onChange={(event) => setPurposeOfListening(event.target.checked)} />} label="고립·은둔 청년 사업 관련 설명 청취" slotProps={{
                            typography: {
                                fontFamily: "Nanum Gothic",
                                fontSize: 17
                            }
                        }} />
                    </div>
                </div>
            </>}
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                <TextField label="기타 사항" variant="outlined" placeholder="기타 사항을 입력하세요" multiline rows="5" value={other} onChange={(event) => setOther(event.target.value)} slotProps={textFieldSharedSlotProps} />
            </FormControl>
            {type === InquiryType.Visit && <div className={styles.informationContainer}>
                <p>탐방비 안내</p>
                <ul>
                    <li>- 1시간 기준: 200,000원, 1시간 ~ 2시간: 300,000원
                        <ul className={styles.informationList}>
                            <li>• 방문 기관 사정에 따라 강사비(지급 기준 적용)로 지급 가능하며, 기타 비용으로 납부 시, 기부금 영수증 발행 가능. (신한은행 100-026-478197 (사)씨즈)</li>
                            <li>• 탐방비는 고립·은둔 청년들을 위한 공간 및 프로그램 운영비로 사용됩니다.</li>
                        </ul>
                    </li>
                    <li>- 운영 시간 안내
                        <ul className={styles.informationList}>
                            <li>• 수 ~ 토: 12:00 ~ 20:00</li>
                        </ul>
                    </li>
                </ul>
            </div>}
            <FormControlLabel control={<Checkbox sx={{
                color: "#FF301E",
                "&.Mui-checked": {
                    color: "#FF301E"
                }
            }} value={termsAgreed} onChange={(event) => setTermsAgreed(event.target.checked)} />} label="이용 약관 / 개인 정보 수집 및 이용 동의" slotProps={{
                typography: {
                    fontFamily: "Nanum Gothic",
                    fontSize: 15
                }
            }} />
            <button className={styles.submitButton} type="submit">보내기</button>
        </form>
    </div >;
}