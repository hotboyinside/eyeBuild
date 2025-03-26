"use client";
import { Heading, Title, Paragraph } from "@/components/common";

export const TicketsHeading = () => {
  return (
    <Heading underline>
      <Title tag='h1'>Tickets</Title>
      <Paragraph>
        View and manage user tickets related to their issues.
      </Paragraph>
    </Heading>
  );
};
