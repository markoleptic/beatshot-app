"use client"
import image_TargetSpawningSystem_teaser from "../../public/TargetSpawningSystem-teaser.png";
import image_Hero from "../../public/GAS_Diagram.png";
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/navigation'
import React from "react";

const BlogPostsMain = () => {
  let router = useRouter();

  const handleClick = async (event, path) => {
    router.push(path);
  };

  return (
    <>
      <div className="flex-container-column">
        <div className="hero-container">
          <div className="hero">
            <h1>BeatShot Developer Blog</h1>
          </div>
        </div>
        <div className="flex-container-row padding-1rem gap-1rem flex-wrap">
          <div
            className="card-container gap-1rem padding-1rem"
            onClick={(event) => handleClick(event, `/devblog/target-spawning-system`)}
          >
            <div className="card">
              <p className="sub-heading">
                Article
                <time dateTime="2023-07-02">July 2, 2023 </time>
              </p>
              <Image src={image_TargetSpawningSystem_teaser} alt="TargetSpawningSystem-teaser" />
              <div className="card-label">
                <Link className="link" href="/devblog/target-spawning-system">
                  A look into BeatShot&#39;s target spawning system
                </Link>
              </div>
              <p className="card-sub-label">
                How are spawn locations decided for targets? How are targets managed? This article goes into detail
                about how this is accomplished in Unreal.
              </p>
            </div>
          </div>
          <div
            className="card-container gap-1rem padding-1rem"
            onClick={(event) => handleClick(event, `/devblog/gameplay-ability-system-overview`)}
          >
            <div className="card">
              <p className="sub-heading">
                Article
                <time dateTime="2023-09-10">September 10, 2023 </time>
              </p>
              <Image src={image_Hero} alt="TargetSpawningSystem-teaser" />
              <div className="card-label">
                <Link className="link" href="/devblog/target-spawning-system">
                An Overview of Unreal&#39;s Gameplay Ability System in BeatShot
                </Link>
              </div>
              <p className="card-sub-label">
              Why is the Gameplay Ability System used in BeatShot? This article explains the role of GAS and provides a walkthrough of a
              common ability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostsMain;
