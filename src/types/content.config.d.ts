import { MDXContent } from 'mdx/types';

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
   * @type {string}
   */
  link?: string;
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
  /**
   * The MDXContent of the imported blog.mdx file.
   *
   * @type {MDXContent}
   */
  content: MDXContent;
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
 * The content of the website.
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
   * @type {string}
   */
  hover_name?: string;
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
   * @type {Record<string, string>}
   */
  links: Record<string, string>;
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
   * @type {Record<string, blogItems>}
   */
  blogs: Record<string, blogItems>;
  /**
   * An object of your commands.
   *
   * @type {Record<string, (args: string[]) => string>}
   */
  commands: Record<string, (args?: string[]) => string>;
  /**
   * The subfooter easter egg where you can put a famous quote that you like.
   *
   * @type {footer}
   */
  footer?: footer;
}

export default Content;
