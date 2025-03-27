import styles from "./page.module.scss";
import {
  Grid,
  Heading,
  Paragraph,
  Title,
  MiniStatCard,
  MetricContainer,
  AlertCard,
  TicketCard,
} from "@/components/common";
import { ALERTS, METRICS, TICKETS } from "./mockData";

export default function Overview() {
  return (
    <div>
      <Heading underline>
        <Title tag="h1">Overview</Title>
        <Paragraph>Track clients, cameras, tickets, and issues.</Paragraph>
      </Heading>

      <Grid container spacing={5}>
        {METRICS.map((metric, index) => (
          <Grid key={index} size={4}>
            <MiniStatCard {...metric} fullWidth />
          </Grid>
        ))}

        <Grid key={"Recent alerts"} size={6}>
          <MetricContainer title="Recent alerts" total={1} link="/">
            <div className={styles.alerts}>
              {ALERTS.map((alert, index) => (
                <AlertCard key={index} {...alert} />
              ))}
            </div>
          </MetricContainer>
        </Grid>
        <Grid key={"Pending tickets"} size={6}>
          <MetricContainer title="Pending tickets" total={8} link="/">
            <div className={styles.tickets}>
              {TICKETS.map((ticket, index) => (
                <TicketCard key={index} {...ticket} />
              ))}
            </div>
          </MetricContainer>
        </Grid>
      </Grid>
    </div>
  );
}
