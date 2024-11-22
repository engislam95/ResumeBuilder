export function ResumePreview({
    resumeData,
}: {
    resumeData: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        country: string;
        city: string;
        jobTitle: string;
        summary: string;
    };
}) {
    return (
        <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-lg border">
            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold">{resumeData.firstName || "First Name"} {resumeData.lastName || "Last Name"}</h1>
                <p className="text-lg text-gray-500">{resumeData.jobTitle || "Job Title"}</p>
                <div className="mt-2 text-sm text-gray-600">
                    <p>{resumeData.email || "Email"} | {resumeData.phone || "Phone"}</p>
                    <p>{resumeData.city || "City"}, {resumeData.country || "Country"}</p>
                </div>
            </div>

            {/* Summary */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Professional Summary</h2>
                <p className="mt-2 text-gray-700">{resumeData.summary || "Write a brief overview of your professional experience and achievements."}</p>
            </section>

            {/* Work Experience */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Work Experience</h2>
                <div className="mt-4">
                    <div className="mb-4">
                        <h3 className="text-lg font-medium text-gray-800">Software Developer</h3>
                        <p className="text-sm text-gray-500">Tech Company | 2019 - Present</p>
                        <ul className="list-disc list-inside mt-2 text-gray-700">
                            <li>Developed and maintained web applications using React.js and Tailwind CSS.</li>
                            <li>Collaborated with cross-functional teams to deliver high-quality products on time.</li>
                            <li>Improved application performance by 30% through code optimization.</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-medium text-gray-800">Frontend Intern</h3>
                        <p className="text-sm text-gray-500">Startup Inc | 2017 - 2019</p>
                        <ul className="list-disc list-inside mt-2 text-gray-700">
                            <li>Assisted in the development of responsive websites for various clients.</li>
                            <li>Wrote clean, maintainable, and scalable code following best practices.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Education</h2>
                <div className="mt-4">
                    <div className="mb-4">
                        <h3 className="text-lg font-medium text-gray-800">Bachelor of Computer Science</h3>
                        <p className="text-sm text-gray-500">University of Tech | 2015 - 2019</p>
                        <p className="text-gray-700 mt-1">Graduated with honors, CGPA: 3.9</p>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section>
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Skills</h2>
                <ul className="list-disc list-inside mt-2 text-gray-700 grid grid-cols-2 gap-2">
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>Git & GitHub</li>
                    <li>Agile Methodologies</li>
                    <li>Problem-Solving</li>
                    <li>Responsive Design</li>
                </ul>
            </section>
        </div>
    );
}
