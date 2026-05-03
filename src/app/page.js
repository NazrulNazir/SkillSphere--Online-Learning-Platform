import HeroArea from "@/components/HeroArea";
import Instructors from "@/components/HomePage/Instructors";
import LearningTips from "@/components/HomePage/LearningTips";
import PopularCourses from "@/components/HomePage/PopularCourses";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[#e8e1fd]">
        <HeroArea></HeroArea>
      </div>
      <PopularCourses></PopularCourses>
      <LearningTips></LearningTips>
      <Instructors></Instructors>
    </div>
  );
}
