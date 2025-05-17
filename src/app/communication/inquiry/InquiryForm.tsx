"use client";

import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./style.module.scss";

const sharedFontSettings = {
    fontFamily: "Nanum Gothic",
    fontSize: "17px"
}

const textFieldSlotProps = {
    inputLabel: {
        shrink: true,
        sx: {
            sharedFontSettings,
            fontWeight: "bold"
        }
    },
    htmlInput: {
        sx: sharedFontSettings
    }
}

export default function InquiryForm() {
    const [type, setType] = useState("inquiry");
    const [name, setName] = useState("");
    const [affiliation, setAffiliation] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [other, setOther] = useState("");
    const [termsAgreed, setTermsAgreed] = useState(false);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            type,
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
            alert("문의가 접수되었습니다.");
        } else {
            alert("오류가 발생하였습니다.");
        }
    }
    return <div className={styles.inquiryContainer}>
        <Image src="/images/Inquiry.png" alt="문의하기 이미지" fill className={styles.inquiryImage} />
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                <InputLabel id="type" sx={{
                    sharedFontSettings,
                    fontWeight: "bold"
                }}>선택</InputLabel>
                <Select labelId="type" label="선택" value={type} MenuProps={{ disableScrollLock: true }} sx={sharedFontSettings} onChange={(event) => setType(event.target.value)}>
                    <MenuItem value="inquiry" sx={sharedFontSettings}>문의하기</MenuItem>
                    <MenuItem value="visit" sx={sharedFontSettings}>두더집 탐방 신청하기</MenuItem>
                </Select>
            </FormControl>
            <div className={styles.inquiryGridContainer}>
                <FormControl fullWidth>
                    <TextField label="성명" variant="outlined" placeholder="이름을 입력해주세요" slotProps={textFieldSlotProps} value={name} onChange={(event) => setName(event.target.value)} />
                </FormControl>
                <FormControl fullWidth>
                    <TextField label="소속" variant="outlined" placeholder="소속팀" slotProps={textFieldSlotProps} value={affiliation} onChange={(event) => setAffiliation(event.target.value)} />
                </FormControl>
            </div>
            <div className={styles.inquiryGridContainer}>
                <FormControl fullWidth>
                    <TextField label="연락처" variant="outlined" placeholder="000-000-0000" type="tel" slotProps={textFieldSlotProps} value={contact} onChange={(event) => setContact(event.target.value)} />
                </FormControl>
                <FormControl fullWidth>
                    <TextField label="이메일" variant="outlined" placeholder="example@email.com" type="email" slotProps={textFieldSlotProps} value={email} onChange={(event) => setEmail(event.target.value)} />
                </FormControl>
            </div>
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                <TextField label="기타 사항" variant="outlined" placeholder="기타 사항을 입력하세요" multiline rows="5" slotProps={textFieldSlotProps} value={other} onChange={(event) => setOther(event.target.value)} />
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