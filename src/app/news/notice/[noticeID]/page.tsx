export default function NoticeContentPage({ params }: { params: { noticeID: String } }) {
    return <>
        <p>{params.noticeID}</p>
    </>;
}