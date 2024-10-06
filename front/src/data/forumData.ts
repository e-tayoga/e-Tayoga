import { Topic, Category, Comment, Discussion, Forum } from "@/types/forum";

export const topicsData: Topic[] = [
  {
    name: "Crops",
    description: "Discuss about crops and planting techniques",
  },
  {
    name: "Pests",
    description: "Discuss about pests and how to prevent them",
  },
  {
    name: "Weather",
    description: "Discuss about weather and how to prevent them",
  },
];

export const categoriesData: Category[] = [
  {
    name: "General",
    description: "General discussions",
  },
  {
    name: "Technical",
    description: "Technical discussions",
  },
  {
    name: "Help",
    description: "Help discussions",
  },
];

export const commentsData: Comment[] = [
  {
    farmerId: 1,
    message: "Hi, I'm a moroccan farmer",
    createdAt: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
    isEdited: false,
  },
  {
    farmerId: 2,
    message: "What do you plant?",
    createdAt: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
    isEdited: false,
  },
];

export const discussionsData: Discussion[] = [
  {
    id: 1,
    title: "Planting",
    description: "Discuss about planting techniques",
    topic: topicsData[0],
    comments: commentsData,
    createdAt: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  },
  {
    id: 2,
    title: "Pests",
    description: "Discuss about pests and how to prevent them",
    topic: topicsData[1],
    comments: commentsData,
    createdAt: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  },
];

export const forumData: Forum[] = [
  {
    id: 1,
    title: "General",
    description: "General discussions",
    category: categoriesData[0],
    discussions: discussionsData,
    createdAt: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  },
  {
    id: 2,
    title: "Technical",
    description: "Technical discussions",
    category: categoriesData[1],
    discussions: discussionsData,
    createdAt: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  },
];

export default forumData;