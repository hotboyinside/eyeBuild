import { Tab, TabList, TabPanel, Tabs } from "@/components/common";
import { IUserBase } from "@/types/user";
import { UserDetailsContent } from "../userDetailsContent";

export const UserDetailsTabs = ({ userData }: { userData: IUserBase }) => {
  return (
    <Tabs variant="underline" wideTabList>
      <TabList>
        <Tab index={0}>User details</Tab>
        <Tab index={1}>Locations and Cameras</Tab>
      </TabList>
      <TabPanel index={0}>
        <UserDetailsContent userData={userData} />
      </TabPanel>
      <TabPanel index={1}>...preview</TabPanel>
    </Tabs>
  );
};
