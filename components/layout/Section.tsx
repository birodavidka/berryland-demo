import React from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";

type Props = {
  id?: string;
  className?: string; // Section wrapper (full width)
  containerClassName?: string; // belső container extra class
  children: React.ReactNode;
};

export default function Section({
  id,
  className,
  containerClassName,
  children,
}: Props) {
  return (
    <section id={id} className={cn("w-full", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
