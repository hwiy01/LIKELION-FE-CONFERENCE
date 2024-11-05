"use client";

import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [menu, setMenu] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ menu }),
      });
      const data = await response.json();
      console.log("Server response:", data);
    } catch (error) {
      console.error(error);
      alert("실패했습니다. 다시 시도해주세요");
    }
  };

  return (
    <>
      <Head>
        <title>Week26 - Next.js 13 실습</title>
        <meta name="description" content="Next.js 13을 사용한 저녁 메뉴 추천 애플리케이션" />
        <meta name="keywords" content="Next.js, React, 저녁메뉴 추천, SEO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>
        <h1>Week26 - Next.js 13 실습하기</h1>
        <p>히히</p>
        <img src="images/tteakbokki.jpeg"/>
        <span>
        <h3>
          저녁메뉴 추천해주세요</h3></span>
        <span>

        <input
          type="text"
          value={menu}
          onChange={(e) => setMenu(e.target.value)}
          placeholder="메뉴를 입력하세요"
          aria-label="저녁 메뉴 입력"
        />
        <button onClick={handleSubmit}>클릭</button>
        </span>
      </div>
    </>
  );
}
