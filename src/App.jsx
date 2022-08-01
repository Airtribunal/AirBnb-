// Imports
import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Cards';
import Lessons from './data/LessonsData';
// ...

const App = () => {
  const lessonsData = Lessons.map((lesson) => {
    return (
      <Card
        key={lesson.id}
        lesson={lesson} //or {...lesson}
      />
    )
  })
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="card">
        {lessonsData}
      </section>
    </div>
  );
}

export default App;
