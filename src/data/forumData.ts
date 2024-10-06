import { Topic, Category, Comment, Discussion, Forum } from "@/types/forum";

export const topics: Topic[] = [
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

export const categories: Category[] = [
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

export const comments: Comment[] = [
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

export const discussions: Discussion[] = [
  {
    id: 1,
    title: "Planting",
    description: "Discuss about planting techniques",
    topic: topics[0],
    comments: comments,
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
    topic: topics[1],
    comments: comments,
    createdAt: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  },
];

export const forums: Forum[] = [
  {
    id: 1,
    title: "General",
    description: "General discussions",
    category: categories[0],
    discussions: discussions,
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
    category: categories[1],
    discussions: discussions,
    createdAt: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  },
];