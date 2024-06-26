'use client'
import React, { useEffect, useState } from "react";
import Input from "../Generals/Input";
import { useRouter } from "next/navigation";
import UserService from "@/services/user.service";
import collegeService from "@/services/college.service";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import CoursesCard from "./CoursesCard";
import Dropdown from "../TailwindComponents/Dropdown";
import { FaSearch } from "react-icons/fa";

const CoursesSection = () => {
    const [selectedProgram, setSelectedProgram] = useState("");
    const [selectedFieldOfStudy, setSelectedFieldOfStudy] = useState("");
    const [selectedSemester, setSelectedSemester] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const programs = ["Btech", "Mtech"];
    const fieldsOfStudy = ["CSE", "ECE"];
    const semesters = ["I", "II", "III", "IV"];

    const [CourseDetails, setCourseDetails] = useState({
        course_name: "",
        course_code: "",
        credits: "",
        course_type: "",
        course_professor: "",
        semester: "",
        fieldsOfStudy: "",
        program: "",
        college: "",
    });

    const dummyData = {
        course_name: "Advanced Scientific Numerical Methods",
        course_code: "OE3N35",
        credits: 3,
        course_type: "Elective",
        course_professor: "L.K.Balyan",
        semester: "7",
        fieldsOfStudy: ["CSE", "ECE"],
        program: ["BTECH", "Bdes", "Bcom"],
        college: "IIITDMJ",
    };

    useEffect(() => {
        setCourseDetails(dummyData);
    }, []);

    // Dummy courses data
    const courses = [
        {
            code: "CS101",
            name: "Introduction to Computer Science",
            credits: 1,
            professor: "Dr. John Doe",
            type: "Theory",
        },
        {
            code: "CS102",
            name: "Data Structures and Algorithms",
            credits: 3,
            professor: "Dr. Jane Smith",
            type: "Practical",
        },
        // Add more course objects as needed
    ];

    return (
        <>
            <div className="bg-gray-100">
                <div className="py-5 mx-4 sm:mx-2">
                    <div className="md:py-5 md:px-10 md:mx-5 lg:mx-10 xl:mx-[100px] flex justify-center items-center rounded-full md:bg-white flex-wrap gap-2 md:gap-5">
                        {/* Render dropdowns here */}
                        <div className="flex flex-wrap gap-2 sm:gap-5 ">
                            <Dropdown
                                name="Program"
                                options={programs}
                                onSelect={setSelectedProgram}
                            />
                            <Dropdown
                                name="Field Of Study"
                                options={fieldsOfStudy}
                                onSelect={setSelectedFieldOfStudy}
                            />
                            <Dropdown
                                name="Semester"
                                options={semesters}
                                onSelect={setSelectedSemester}
                            />
                            <div className="w-full md:w-[250px]">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search Program"
                                        className=" bg-transparent w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm  pl-10"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaSearch className="text-gray-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Render courses using map */}
                <div className="flex justify-center">
                    <div className="grid gap-4 w-full sm:w-4/5 lg:w-3/5 mx-3 my-5 overflow-y-auto">
                        {courses.map((course, index) => (
                            <CoursesCard key={index} course={course} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoursesSection;
