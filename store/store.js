import create from 'zustand';

const useStore = create((set) => ({
    color: 'white',
    changeColor: () =>
        set((state) => ({
            color: state.color === 'white' ? '#212529' : 'white',
        })),
}));
