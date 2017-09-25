# Agora-UI

API: `https://sp.eudat.eu/api/v1/catalogue/services`

### Installation

In order to implement this project in a drupal website, you need to create a new module inside `sites/all/modules` directory with the following structure:

```
├── <module_name>                    
    ├── <module_name>.info          
    ├── <module_name>.module

```
### Example

Create a module named `react_catalogue` inside `sites/all/modules` with the two following files inside:

 - react_catalogue.info

```
name = React Catalogue
description = Show Service Catalogue
package = "Grnet"
core = 7.x
version = 7.x-0.1
```

 - react_catalogue.module

```
<?php

function react_catalogue_menu() {
  $items = array();
  $items['catalogue'] = array(
    'page callback' => 'react_catalogue_page',
    'access arguments' => array('access content')
  );
  return $items;
}

function react_catalogue_page() {
  return "<div id='root'></div><script src='https://snf-761548.vm.okeanos.grnet.gr/sites/default/files/agora-ui-react.js'></script>";
}
```