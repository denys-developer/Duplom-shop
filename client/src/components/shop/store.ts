import SlideBar from './sideBar/slideBar';
export default class Store {
    slideeBar: SlideBar;
    constructor() {
        this.slideeBar = new SlideBar();
    }
}