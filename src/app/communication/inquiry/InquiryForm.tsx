"use client";

import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Form from "next/form";
import Image from "next/image";
import { useState } from "react";
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
    return <div className={styles.inquiryContainer}>
        <Image src="/images/Inquiry.png" alt="문의하기 이미지" fill className={styles.inquiryImage} />
        <Form action="/api/inquiry">
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
        </Form>
    </div >;
}