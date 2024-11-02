interface item {
  /**
   * First heading of the item.
   *
   * @type {string}
   */
  mainHeading: string;
  /**
   * Second heading of the item.
   *
   * @type {string}
   */
  secondHeading: string;
  /**
   * Description of the item.
   *
   * @type {string}
   */
  description: string;
  /**
   * A link that will be applied to the first heading.
   *
   * Pass ```null``` to remove the link.
   *
   * @type {(string | null)}
   */
  link: string | null;
}

interface footer {
  /**
   * The famous quote that you like.
   *
   * @type {string}
   */
  quote: string;
  /**
   * The author of the quote.
   *
   * @type {string}
   */
  author: string;
  /**
   * The title of the author.
   *
   * @type {string}
   */
  title: string;
}

/**
 * Types for the content.config.ts file.
 * This will help you with itellisense and type checking.
 * @interface Content
 */
declare interface Content {
  /**
   * Your name.
   *
   * @type {string}
   * @default 'name'
   */
  name: string;
  /**
   * Your address.
   *
   * @type {string}
   * @default 'location'
   */
  addr: string;
  /**
   * Your job title.
   *
   * @type {string}
   * @default 'job'
   */
  job: string;
  /**
   * A short bio about you.
   *
   * @type {string}
   * @default 'This is my portfolio website.'
   */
  bio: string;
  /**
   * Your GitHub profile link.
   *
   * @type {string}
   * @default 'https://github.com/gogglesgogs'
   */
  github: string;
  /**
   * Your email address.
   *
   * @type {string}
   * @default 'email@example.com'
   */
  email: string;
  /**
   * Your Discord User ID.
   * {@link https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID Get your User ID here}
   *
   * @type {string}
   * @default '799597159661699112'
   */
  discord: string;
  /**
   * Your Kofi link.
   *
   * @type {string}
   * @default 'https://ko-fi.com/gogglesgogs'
   */
  kofi: string;
  /**
   * An array of your skills.
   *
   * @type {item[]}
   */
  skills: item[];
  /**
   * An array of your projects.
   *
   * @type {item[]}
   */
  projects: item[];
  /**
   * The subfooter easter egg where you can put a famous quote that you like.
   *
   * You can pass the value ```null``` to remove it.
   *
   * @type {footer}
   */
  footer: footer | null;
}

export default Content;
