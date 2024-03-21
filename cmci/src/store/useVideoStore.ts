import create from 'zustand'

// Define a type for a video
type Video = {
  id: number;
  title: string;
  link: string;
  tags: string[];
}

// Define a type for the store's state
interface VideoState {
  videos: Video[];
  addVideo: (video: Video) => void;
  removeVideo: (id: number) => void;
  updateTags: (id: number, tags: string[]) => void;
  addTagToVideo: (id: number, newTag: string) => void;
  getVideo: (id: number) => Video | undefined;
  searchVideo: (value: string) => Video[];
}

// Create the store with typed actions
const useVideoStore = create<VideoState>((set, get) => ({
  videos: [{ id: 1, title: 'Prière 1', link: "www.google.com", tags: ['Prière', 'Frère Patrice'] }, { id: 2, link: "www.google.com", title: 'Prière 2', tags: ['Prière', 'Frère Théodore'] }, { id: 3, link: "www.google.com", title: 'Retraite 1', tags: ['Retraite', 'Frère Harizo'] }],

  addVideo: (video: Video) => set((state) => ({
    videos: [...state.videos, video],
  })),

  removeVideo: (id: number) => set((state) => ({
    videos: state.videos.filter(video => video.id !== id),
  })),

  updateTags: (id: number, tags: string[]) => set((state) => ({
    videos: state.videos.map(video =>
      video.id === id ? { ...video, tags: tags } : video,
    ),
  })),

  addTagToVideo: (id: number, newTag: string) => set((state) => ({
    videos: state.videos.map(video => {
      if (video.id === id) {
        const updatedTags = video.tags.includes(newTag) ? video.tags : [...video.tags, newTag];
        return { ...video, tags: updatedTags };
      }
      return video;
    }),
  })),

  getVideo: (id: number) => get().videos.find(video => video.id === id),
  searchVideo: (value: string) => value ? get().videos.filter((video) => video.title.includes(value) || video.tags.some((tag) => tag.includes(value))) : get().videos,
}));

export default useVideoStore;
