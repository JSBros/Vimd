import dateFormat from "dateformat";
import inBrowserDownload from "in-browser-download";
import base64 from "base-64";

/**
 * Downloads a markdown file in the browser with the current
 * contents of the editor. The filename is taken from the
 * current date+time.
 *
 * @param {string} content
 */
export default function download(content) {
  // get a formatted string of the current datetime
  const filename = dateFormat(new Date(), "yyyy-mm-dd-hh.MM.ss");
  // download the editor contents in a markdown file.
  inBrowserDownload(
    base64.encode(content),
    `${filename}.md`,
    "text/markdown",
    "base64"
  );
}
