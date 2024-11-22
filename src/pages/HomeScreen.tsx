import { ResumeForm } from "@/components/ResumeForm";
import { ResumePreview } from "@/components/ResumePreview";
import { useState } from "react";

export default function Home() {

    const [resumeData, setResumeData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        jobTitle: "",
        summary: "",
    });

    return (
        <div className="flex min-h-screen ml-5">
            <div className="w-1/3 ">
                <ResumeForm onFormChange={setResumeData} />
            </div>
            <div className="w-2/3 "><ResumePreview resumeData={resumeData} /></div>
        </div>
    );
}