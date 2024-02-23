import React, { useState, useEffect } from 'react';
import { Document } from 'html-docx-js/dist/html-docx';

const ResumePage = () => {
    const [resumeHTML, setResumeHTML] = useState('');

    useEffect(() => {
        async function fetchResumeHTML() {
            try {
                const response = await fetch('/documents/Data Science Software Engineer Resume.docx');
                if (!response.ok) {
                    throw new Error(`Fetch failed with status ${response.status}`);
                }
                const arrayBuffer = await response.arrayBuffer();
                console.log('Fetched data:', arrayBuffer);
                const blob = new Blob([arrayBuffer], { type: 'text/html' });

                const reader = new FileReader();
                reader.onload = function(event) {
                    const html = event.target.result;
                    console.log('Converted HTML:', html);
                    setResumeHTML(html);
                };
                reader.readAsText(blob);
            } catch (error) {
                console.error('Error fetching and converting resume:', error);
            }
        }

        fetchResumeHTML();
    }, []);

    return (
        <div>
            <h1>Welcome to My Portfolio!</h1>
            <p>Hi, I'm Amram, a Data Scientist and Machine Learning Engineer.</p>
            <div dangerouslySetInnerHTML={{ __html: resumeHTML }} />
            <p>Here, you can download my resume:</p>
            {/*<a href="" download>Download Resume</a>*/}
        </div>
    );
};

export default ResumePage;
