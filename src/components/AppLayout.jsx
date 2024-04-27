import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import JobSearchSection from "./JobSearchSection";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <JobSearchSection />
    </>
  );
}
