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
                }
                const response = await fetch(`/api/inquiry`, {
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
            {type === InquiryType.Visit && <div className={styles.inquiryGridContainer}>
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
            </div>}
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                <TextField label="기타 사항" variant="outlined" placeholder="기타 사항을 입력하세요" multiline rows="5" value={other} onChange={(event) => setOther(event.target.value)} slotProps={textFieldSharedSlotProps} />
            </FormControl>
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