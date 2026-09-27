import type { Metadata } from "next";
import ResumeClient from "./resume-client";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return <ResumeClient />;
}
