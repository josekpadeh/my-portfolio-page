import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { FirestoreDB } from "../../db/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import PostAuthorCard from "../../components/PostAuthorCard";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  async function getData() {
    try {
      const querySnapshot = await getDocs(collection(FirestoreDB, "posts"));
      setPosts(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
      console.log(querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      })
    )
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    return () => {
      getData();
    };
  }, []);
  return (
    <>
      <Navbar />
      <div class="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div class="absolute inset-0">
          <div class="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div class="relative mx-auto max-w-7xl">
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            <b> I'm a web developer, welcome to my Blod page.</b>
            </p>
          </div>
      <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
    { posts.length > 0 &&
      posts.map((post) => {
        return(
          <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {
            posts.map((post) =>
                <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div class="flex-shrink-0">
                    <img
                      class="h-48 w-full object-cover"
                      src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-1 flex-col justify-between bg-white p-6">
                    <div class="flex-1">
                      <p class="text-sm font-medium text-indigo-600">
                        {post.tags.split(",").map((tag) => {
                          return (
                            <a href="#" class="hover:underline">
                              {tag}
                            </a>
                          );
                        })}
                      </p>
                      <a href="#" class="mt-2 block">
                        <p class="text-xl font-semibold text-gray-900">
                          {post.title}
                        </p>
                        <p class="mt-3 text-base text-gray-500">
                          {post.description}
                        </p>
                      </a>
                    </div>
                    <div class="mt-6 flex items-center">
                    <PostAuthorCard />
                    </div>
                  </div>
                </div>
              )}
        </div>
        )
      }
      )}
      </div>
        </div>
      </div>
    </>
  );
}


