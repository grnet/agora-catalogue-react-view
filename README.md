# Agora UI

Agora UI is a React application that is used in combination with Agora Drupal Connector in order to render a predefined set of fields and data, provided by the drupal module.

It is based on create-react-app, so the same principles apply on development/building the project.

Agora Drupal Connector requires the `build/static/js/main.XXX.js` file in order to integrate the functionality of the React App inside the drupal module. More details on how to release a new drupal module version are [here](https://gitlab.grnet.gr/devs/agora/agora-drupal-connector#updating-the-react-app)

## Development

In order to develop this project without the drupal module, you need to provide a configuration object on the `window` level of the plugin.

The following example is taken from the staging environment, that provides the object:

```
window.agora_sp: {
  feed_url: "https://your.domain.here/api/v2/ext-services",
  page: "catalogue",
  fields: [{field_key: "key", field_label: "label"}]
}
```
where:
  - `feed_url` is the API endpoint of the `agora-sp` installation that retrieves the data
  - `page` is the path where the React app should render
  - `fields` are the fields selected from the drupal module to be visible in the details page of each service

You can add the snippet above inside the `src/context/catalogue.js` in order to provide the required context for the app to load (or you can use the same object from the staging environment by typing `window.agora_sp` in the console of the staging environment)

Run `yarn start` in order to run the dev server.

You can then navigate to your browser to `localhost:3000/catalogue` in order to preview the app. **NOTE**: the key `page` inside the `window.agora_sp` object, is the location you need to navigate in order to see the app.
