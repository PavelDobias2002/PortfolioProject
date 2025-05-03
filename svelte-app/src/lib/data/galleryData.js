// import base to prefix local paths
    import { base } from '$app/paths';

export const allItems = [
    {
      id: `${base}1`,
      image: `${base}/turnaround-bluestripes.jpg`,
      title: 'Blue Stripes Project',
      content: 'A blue stripe commando inspired by The Witcher.',
      software: 'Adobe Photoshop, Animate, After Effects',
      style: 'Digital Art',
      date: '15/10/24',
      description: 'This is a Blue Stripes project in which I made a turnaround.'
    },
    {
      id: `${base}2`,
      image: `${base}/ufoAnim.gif`,
      image2: `${base}/abductee.png`,
      image3: `${base}/ufo.png`,
      title: 'Ufo Project',
      content: 'A project about medieval Ufo abducting a priest',
      software: 'Adobe Photoshop, Animate, After Effects',
      style: 'Animation',
      date: '07/11/2024',
      description: 'Who says there were no Ufos at middle ages? Well lets say there were and here is one abducting a priest, thinking that he is going to heaven.'
    },
    {
      id: `${base}3`,
      image: `${base}/sob-final.jpg`,
      image2: `${base}/sob-nocolor.jpg`,
      image3: `${base}/sob-onlymarker.jpg`,
      image4: `${base}/sob-pencil.jpg`,
      title: 'Sister of Battle',
      content: 'Pencil and marker artwork inspired by John Blanche',
      software: 'Marker and Pencil',
      style: 'Traditional Art',
      date: '25/04/2025',
      description: 'I have always loved John Blanche artwork, and when I started working with markers I decided starting with his iconic art style is the way.'
    },
    {
      id: `${base}4`,
      image: `${base}/pavel-dobias-spritesheet-sleepingwiththefishes.jpg`,
      title: 'Sleeping with The fishes',
      content: 'A GGJ25 game created in Unity',
      software: 'Adobe Photoshop/Unity',
      style: 'Game Development',
      date: '10/02/25',
      description: 'A Global Game Jam game created in Unity, to learn more about this game visit the game link',
      link: `${base}https://github.com/PavelDobias2002/Sleeping-with-the-Fishes`
    }
  ];