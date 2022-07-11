import { defineStore } from 'pinia';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nihil ullam eaque minus sit eveniet explicabo maxime rerum, architecto similique laborum molestiae ratione consectetur quae. Quibusdam perspiciatis error maxime voluptatem.',
        },
        {
          id: 'id2',
          content: 'This is a shorter note! Woo!',
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();

      let note = {
        id,
        content: newNoteContent,
      };

      this.notes.unshift(note);
    },
  },
});
