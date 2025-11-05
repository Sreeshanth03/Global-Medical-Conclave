import React from "react";
import "./Mediclave.css";
import {
  GiMonoWheelRobot,
  GiMedicines,
  GiBrain,
  GiMedicalDrip,
  GiHeartOrgan,
  GiHealthNormal,
  GiStethoscope,
  GiDoctorFace,
  GiHeartInside,
  GiMuscleUp,
} from "react-icons/gi";
import { FaBaby, FaSyringe, FaFemale, FaBone, FaDna } from "react-icons/fa";
import { MdLocalHospital, MdPsychology, MdOutlineHealthAndSafety } from "react-icons/md";
import { RiMentalHealthLine, RiVirusLine } from "react-icons/ri";
import { Button } from "react-bootstrap";

const tracks = [
  { icon: <GiMonoWheelRobot />, title: "AI in Healthcare" },
  { icon: <MdLocalHospital />, title: "Telemedicine & Digital Health" },
  { icon: <GiHeartOrgan />, title: "Cardiology" },
  { icon: <FaFemale />, title: "Gynecology" },
  { icon: <FaBaby />, title: "Pediatrics" },
  { icon: <GiMedicines />, title: "Emergency Medicine" },
  { icon: <RiVirusLine />, title: "Oncology" },
  { icon: <GiHealthNormal />, title: "Gastroenterology" },
  { icon: <FaDna />, title: "Genetic Disorder" },
  { icon: <MdOutlineHealthAndSafety />, title: "Infectious Diseases" },
  { icon: <GiHeartInside />, title: "Endocrinology" },
  { icon: <FaBone />, title: "Rheumatology" },
  { icon: <RiMentalHealthLine />, title: "Mental Health" },
  { icon: <GiDoctorFace />, title: "Pain Management" },
  { icon: <GiMuscleUp />, title: "Nutrition and Metabolism" },
  { icon: <MdPsychology />, title: "Addiction Medicine" },
  { icon: <GiMedicalDrip />, title: "Geriatrics" },
  { icon: <GiStethoscope />, title: "Women's Health & Midwifery" },
  { icon: <GiBrain />, title: "Cosmetic Surgery" },
  { icon: <FaSyringe />, title: "Vaccines" },
];

const Mediclave = () => {
  return (
    <div className="mediclave-container">
      <h3 className="mediclave-title">Mediclave - Tracks</h3>

      <div className="tracks-grid">
        {tracks.map((item, index) => (
          <div className="track-card" key={index}>
            <div className="track-icon">{item.icon}</div>
            <p className="track-title">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="track-buttons">
        <Button className="read-btn">Read More</Button>
        <Button className="abstract-btn">Submit Abstract</Button>
      </div>
    </div>
  );
};

export default Mediclave;
