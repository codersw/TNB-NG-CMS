export class Menu {
  /** 主键 */
  key?: string;
  /** 文本 */
  text: string;
  /** 路由 */
  link?: string;
  /** 跳转方式 */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** 图标 */
  icon?: string;
  /** 二级菜单 */
  children?: Menu[];
}
