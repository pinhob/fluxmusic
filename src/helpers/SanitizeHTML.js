// adaptado de: https://stackoverflow.com/a/38663813/18637712
import sanitizeHtml from "sanitize-html";

const sanitize = (dirty) => ({
  __html: sanitizeHtml(dirty)
});

const SanitizeHTML = ({ html }) => (
  <div dangerouslySetInnerHTML={sanitize(html)} />
);

export default SanitizeHTML;
