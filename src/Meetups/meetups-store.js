import { writable } from "svelte/store";

const meetups = writable( [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description:
        "In this meetup, we will have some experts that teach you how to code!",
      imageUrl:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHRlY2hub2xvZ3l8ZW58MHwwfDB8fHww",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "rjBkA@example.com",
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Let's go for some swimming",
      description: "We will simply swim some strokes!",
      imageUrl:
        "https://media.istockphoto.com/id/1498672637/nl/foto/professional-swimmers-in-a-swimming-pool.jpg?s=612x612&w=0&k=20&c=4MsneMyK2BpGS6FvdulbzofocV5ZHQT-Yuzo5T4kB1Y=",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "rjBkA@example.com",
    },
  ])



  const customMeetupsStore = {
    subscribe: meetups.subscribe,
    addMeetups: meetupData => {
      const newMeetup = {
        ...meetupData,
        id: Math.random().toString(),
        isFavorite: false
      }
      meetups.update((item) => {
        return [newMeetup, ...item]
      })
    },
    toggleFavorite: id => {
      meetups.update(items => {
        const updatedMeetup = { ...items.find(m => m.id === id) };
        updatedMeetup.isFavorite = !updatedMeetup.isFavorite

        const findIndex = items.findIndex(item => item.id === id)
        const updatedMeetups = [...items]
        items[findIndex] = updatedMeetups
        return updatedMeetups
      })
    }
  }
  export default customMeetupsStore