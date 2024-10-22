
import axios from 'axios';
import { FileVO } from '../interface/fileVO';
import axiosInstance from '../utils/axiosInstance';
export const downloadFile = async (FileVO: FileVO,  token: string | null): Promise<void> => {
     if (!token) {
        console.error('Token is null. Download cannot proceed.');
        return; 
    }
    try {
        const response = await axiosInstance.post('/fileDownload/', FileVO, {
            responseType: 'blob', // 응답 유형을 blob으로 설정
            headers: {
                Authorization: `Bearer ${token}`, // 필요한 경우 Authorization 헤더 추가
                'Content-Type': 'application/json', // 요청 본문의 Content-Type
            },
        });

        // Blob 데이터를 URL로 변환
        const blobUrl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = blobUrl;

        // 다운로드할 파일 이름 설정
        const contentDisposition = response.headers['content-disposition'];
        const filename = contentDisposition?.split('filename=')[1]?.replace(/"/g, '') || 'downloaded_file';
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        link.remove();

        // Blob URL 해제
        window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
        console.error('File download error:', error);
    }
};
