import { Alert } from "@/types/alert";

const alertsData: Alert[] = [
  {
    type: "warning",
    message: "Your farm is at risk of pests",
    createdAt: "2021-09-01T12:00:00",
  },
  {
    type: "danger",
    message: "Your farm is at risk of flooding",
    createdAt: "2021-09-01T12:00:00",
  },
  {
    type: "warning",
    message: "New disease detected near your farm",
    createdAt: "2021-09-01T12:00:00",
  },
];

export default alertsData;
