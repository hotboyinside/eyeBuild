"use client";
import { Heading, Title, Paragraph } from "@/components/common";

export const TicketsHeading = () => {
	return (
		<div>
			<Heading underline>
				<Title tag='h1'>Tickets</Title>
				<Paragraph>Track clients, cameras, tickets, and issues.</Paragraph>
			</Heading>
		</div>
	);
};
