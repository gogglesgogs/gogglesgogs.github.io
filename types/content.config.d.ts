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
   * @type {string | null}
   */
  link: string | null;
}

interface blogItems {
  /**
   * Title of the blog.
   *
   * @type {string}
   */
  title: string;
  /**
   * Published date of the blog.
   *
   * @type {string}
   */
  date: string;
  /**
   * Author of the blog.
   *
   * @type {string}
   */
  author: string;
  /**
   * A short description of the blog.
   *
   * @type {string}
   */
  desc: string;
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
   */
  name: string;
  /**
   * Another name or nickname that will be displayed when hovering the name element.
   *
   * You can pass ```null``` to remove the hover name.
   *
   * @type {string | null}
   */
  hover_name: string | null;
  /**
   * Your address.
   *
   * @type {string}
   */
  addr: string;
  /**
   * Your job title.
   *
   * @type {string}
   */
  job: string;
  /**
   * A short bio about you.
   *
   * @type {string}
   */
  bio: string;
  /**
   * An object of your links.
   *
   * @type {{ [key: string]: string }}
   */
  links: { [key: string]: string };
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
   * An object of your blogs.
   *
   * @type {{ [key: string]: blogItems }}
   */
  blogs: { [key: string]: blogItems };
  /**
   * The subfooter easter egg where you can put a famous quote that you like.
   *
   * You can pass the value ```null``` to remove it.
   *
   * @type {footer | null}
   */
  footer: footer | null;
}

export default Content;
