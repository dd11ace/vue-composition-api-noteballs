import { defineStore } from 'pinia';
import { nextTick } from 'vue';

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
    deleteNote(idToDelete) {
      this.notes = this.notes.filter(note => note.id !== idToDelete);
    },
    updateNote(id, content) {
      console.log('id', id);
      console.log('content', content);

      let index = this.notes.findIndex(note => note.id === id);
      console.log('index', index);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: state => {
      return id => {
        return state.notes.filter(note => note.id === id)[0].content;
      };
    },
  },
});
