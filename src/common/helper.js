export default function getAppUrl() {
  return (window.react_catalogue && window.react_catalogue.config) ?
    '/' + window.react_catalogue.config.slug :
    '/catalogue';
}
