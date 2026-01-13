"use client";

import { useReportWebVitals } from "next/web-vitals";

const logWebVitals = (metric: any) => {
  // Ezeknek a Browser Console-ban kell megjelenniük
  console.log("[vitals]", metric.name, metric.value, metric);
};

export default function WebVitals() {
  // Biztos jel, hogy a komponens tényleg mountol
  console.log("[vitals] WebVitals mounted");

  useReportWebVitals(logWebVitals);

  return null;
}
