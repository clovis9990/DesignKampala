import React from 'react';
import { AboutSetting } from '../components/about/AboutSetting';
import { AboutTask } from '../components/about/AboutTask';
import { AboutObstacles } from '../components/about/AboutObstacles';
import { AboutResults } from '../components/about/AboutResults';
import { AboutYou } from '../components/about/AboutYou';

export function AboutPage() {
  return (
    <div className="pt-16">
      <AboutSetting />
      <AboutTask />
      <AboutObstacles />
      <AboutResults />
      <AboutYou />
    </div>
  );
}