import React from "react";
import forumData from "@/data/forumData";
import { Forum, Discussion, Comment, Category, Topic } from "@/types/forum";

const data = forumData;

function ForumBox() {
  return (
    <div className="flex flex-col gap-4">
      {data.map((forum: Forum) => (
        <div key={forum.id} className="bg-white p-4 rounded shadow">
          <h1 className="text-xl font-bold text-green-light">{forum.title}</h1>
          <p className="text-gray-500">{forum.description}</p>
          <div className="flex flex-col gap-4 mt-4">
            {forum.discussions.map((discussion: Discussion) => (
              <div
                key={discussion.id}
                className="bg-gray-100 p-4 rounded shadow"
              >
                <h1 className="text-lg font-bold text-green-light-1">{discussion.title}</h1>
                <p className="text-gray-500">{discussion.description}</p>
                <div className="flex flex-col gap-4 mt-4">
                  {discussion.comments.map((comment: Comment) => (
                    <div
                      key={comment.farmerId}
                      className="bg-gray-200 p-4 rounded shadow"
                    >
                      <p>{comment.message}</p>
                      <p className="text-gray-500 text-sm">{comment.createdAt}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ForumBox;
