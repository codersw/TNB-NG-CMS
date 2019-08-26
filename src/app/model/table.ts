export class Table {
  showIndex = true;
  page: any;
  [key: string]: any;
  constructor() {
    this.page = {};
    this.page.front = false;
  }
}
