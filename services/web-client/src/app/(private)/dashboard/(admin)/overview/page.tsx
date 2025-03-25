import {
  Grid,
  Heading,
  Paragraph,
  Title,
  UsersIcon,
  MetricItem,
} from "@/components/common";

const metrics = [
  { title: "Total Customers", value: "2,420", icon: <UsersIcon size="lg" /> },
  { title: "Total Customers", value: "2,420", icon: <UsersIcon size="lg" /> },
  { title: "Total Customers", value: "2,420", icon: <UsersIcon size="lg" /> },
];

export default function Overview() {
  return (
    <div>
      <Heading underline>
        <Title tag="h1">Overview</Title>
        <Paragraph>Track clients, cameras, tickets, and issues.</Paragraph>
      </Heading>
      <Grid container spacing={5}>
        {metrics.map((metric, index) => (
          <Grid key={index} size={4}>
            <MetricItem {...metric} fullWidth />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
