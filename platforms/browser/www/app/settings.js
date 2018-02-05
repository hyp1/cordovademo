/**************|
 * Development |
 **************/

// Uncomment to clear the app's local storage cache each time the app loads.
//window.localStorage.clear();

// Set to true to see console.log() messages. Set to false when publishing app.
Drupal.settings.debug = true;

/****************************************|
 * Drupal Settings (provided by jDrupal) |
 ****************************************/
Drupal.settings.update_url = 'https://awri.ch/app/update';
Drupal.settings.info_url = 'https://awri.ch/app/info';

/* DRUPAL PATHS */
 

// Site Path (do not use a trailing slash)
Drupal.settings.site_path = 'https://awri.ch'; // e.g. http://www.example.com

// Default Services Endpoint Path
Drupal.settings.endpoint = 'drupalgap';

// Files Directory Paths (use one or the other)
Drupal.settings.file_public_path = 'sites/default/files';
//Drupal.settings.file_private_path = 'system/files';

// The Default Language Code
Drupal.settings.language_default = 'de';

/* CACHING AND PERFORMANCE */

// Entity Caching
Drupal.settings.cache.entity = {

  /* Globals (will be used if not overwritten below) */
  enabled: false,
  expiration: 60, // # of seconds to cache, set to 0 to cache forever

  /* Entity types */
  entity_types: {

    /* Comments */
    /*comment: {
     bundles: {}
     },*/

    /* Files */
    /*file: {
     bundles: {}
     },*/

    // Nodes
    /*node: {

      // Node Globals (will be used if not overwritten below)
      enabled: true,
      expiration: 120,

      // Content types (aka bundles)
      bundles: {

        article: {
          expiration: 3600
        },
        page: {
          enabled: false
        }

      }
    },*/

    /* Terms */
    /*taxonomy_term: {
     bundles: {}
     },*/

    /* Vocabularies */
    /*taxonomy_vocabulary: {
     bundles: {}
     },*/

    /* Users */
    /*user: {
     bundles: {}
     }*/

  }

};

/* Views Caching */

Drupal.settings.cache.views = {
  enabled: false,
  expiration: 3600
};

/*********************|
 * DrupalGap Settings |
 *********************/

// DrupalGap Mode (defaults to 'web-app')
//  'web-app' - use this mode to build a web application for a browser window
//  'phonegap' - use this mode to build a mobile application with phonegap
drupalgap.settings.mode = 'phonegap';

// Language Files - locale/[language-code].json
drupalgap.settings.locale = {
    de: { } 
};

drupalgap.settings.flag = {
		  data_theme_flagged: 'a',
		  data_theme_unflagged: 'b'
		};

drupalgap.settings.facebook = {
  app_id: '126766317359254',
  scope: 'email'
};



/*************|
 * Appearance |
 *************/

// App Title
drupalgap.settings.title = 'AWRIMobile';
 
// App Front Page
drupalgap.settings.front = 'start';
//drupalgap.settings.front = 'testpubsub';
// Theme
drupalgap.settings.theme = 'app_theme';
drupalgap.theme = {
		    theme_header: 'b',
		    theme_content: 'a',
		    theme_footer: 'b',
		  };
// Logo
drupalgap.settings.logo = 'images/re_logo640.jpg';

// Offline Warning Message. Set to false to hide message.
drupalgap.settings.offline_message = 'Keine Verbindung zu '+Drupal.settings.site_path+'... !';

// Exit app message.
drupalgap.settings.exit_message = '' + drupalgap.settings.title + ' schliessen?';

// Loader Animations - http://demos.jquerymobile.com/1.4.0/loader/
drupalgap.settings.loader = {
  loading: {
    text: 'Loading...',
    textVisible: true,
    theme: 'b'
  },
  saving: {
    text: 'Saving...',
    textVisible: true,
    theme: 'b'
  },
  deleting: {
    text: 'Deleting...',
    textVisible: true,
    theme: 'b'
  }
};

/*****************************************|
 * Modules - http://drupalgap.org/node/74 |
 *****************************************/

/** Contributed Modules - www/app/modules **/

Drupal.modules.contrib['facebook'] = {};
Drupal.modules.contrib['date'] = {};
Drupal.modules.contrib['fivestar'] = {};
Drupal.modules.contrib['flag'] = {};
Drupal.modules.contrib['avatar'] = {};
Drupal.modules.contrib['entityreference'] = {};
Drupal.modules.contrib['pathfix'] = {};
Drupal.modules.contrib['media'] = {};


/** Custom Modules - www/app/modules/custom **/

;
Drupal.modules.custom['start'] = {};
Drupal.modules.custom['suche'] = {};
Drupal.modules.custom['stellen'] = {};
Drupal.modules.custom['inhalt'] = {};
Drupal.modules.custom['lesezeichen'] = {};
Drupal.modules.custom['mobile_update'] = {};
Drupal.modules.custom['mobile_info'] = {};

Drupal.modules.custom['nodetest'] = {};
Drupal.modules.custom['nodeedit'] = {};
Drupal.modules.custom['upload'] = {};
Drupal.modules.custom['createfrage'] = {};
Drupal.modules.custom['testpubsub'] = {};

Drupal.modules.custom['dmt_menu'] = {};
drupalgap.settings.dmt_menu = {		 
		attributes: {
         "style":"position:relative",          
         "data-icon": 'star',
           "data-iconpos": 'notext',
           "data-mini": 'true',
           "class": 'ui-btn-left',  //ui-btn-right         	                
          }
          };

Drupal.modules.custom['mobile_update'] = {};
drupalgap.settings.mobile_update = {
	auto:true
};


/***************************************|
 * Menus - http://drupalgap.org/node/85 |
 ***************************************/
drupalgap.settings.menus = {}; // Do not remove this line.

// User Menu Anonymous
drupalgap.settings.menus['user_menu_anonymous'] = {
  options: menu_popup_get_default_options(),
  links: [
    {
      title: 'Login',
      path: 'user/login',
      options: {
        attributes: {
          'data-icon': 'lock',
          'class': 'ui-btn ui-btn-icon-right'
        }
      }
    },
    {
      title: 'Create new account',
      path: 'user/register',
      options: {
        attributes: {
          'data-icon': 'plus'
        }
      }
    }
  ]
};

// User Menu Authenticated
drupalgap.settings.menus['user_menu_authenticated'] = {
  options: menu_popup_get_default_options(),
  links: [
    {
      title: 'My Account',
      path: 'user',
      options: {
        attributes: {
          'data-icon': 'user',
          'class': 'ui-btn ui-btn-icon-right'
        }
      }
    },
 /*
    {
      title: 'Picture',
      path: 'avatar',
      options: {
        attributes: {
          'data-icon': 'camera'
        }
      }
    },
   */
    {
      title: 'Logout',
      path: 'user/logout',
      options: {
        attributes: {
          'data-icon': 'delete'
        }
      }
    },
    
    {
        title:'Info',
        path:'mobile_info',
        options:{
          attributes: {
            'data-icon': 'grid',
            'class': 'ui-btn ui-btn-icon-right'
          }
        }
      },

    
  ]
};

// Main Menu
drupalgap.settings.menus['main_menu'] = {
  options: menu_popup_get_default_options(),
  links: [          
            
    {
      title:'Rechtsfragen',
      path:'inhalt',
      options:{
        attributes: {
          'data-icon': 'grid',
          'class': 'ui-btn ui-btn-icon-right'
        }
      }
    },
 
    {
      title:'Suchen',
      path:'suche',
      options:{
        attributes:{
          'data-icon':'search'
        }
      }
    },
    
    {
        title:'Frage stellen',
        path:'createfrage',
        options:{
          attributes:{
            'data-icon':'comment'
          }
        }
      },
      
      {
          title:'Lesezeichen',
          path:'lesezeichen',
          options:{
            attributes:{
              'data-icon':'tag'
            }
          }
        },
    
    {
      title:'Taxonomy',
      path:'taxonomy/vocabularies',
      options:{
        attributes:{
          'data-icon':'bullets'
        }
      }
    },
  ]
};

/****************************************|
 * Blocks - http://drupalgap.org/node/83 |
 ****************************************/
drupalgap.settings.blocks = {}; // Do not remove this line.

// Easy Street 3 Theme Blocks
drupalgap.settings.blocks.app_theme = {
  header: {
    user_menu_anonymous: {
      roles: {
        value: ['anonymous user'],
        mode: 'include',
      }
    },
    inhalt_block:{},
    user_menu_authenticated: {
      roles: {
        value: ['authenticated user'],
        mode: 'include',
      }
    },
    main_menu: { }
  },
  sub_header: {
    title: { },
 
  },
  navigation: {
    primary_local_tasks: { },
  },
  content: {
    messages: { },
    main: { },

  },

  footer: {
	  dmt_menu: {
		   pages: {
		        value: [drupalgap.settings.front],
		        mode: 'include'
		      }	
	},
//	start_footer: { },
	 // powered_by: { }
    control_block:{
   	 pages: {
   	        value: ['inhalt','node/*','suche','createfrage'],
   	        mode: 'include'
   	      }
   },
  }
};


/****************************************************|
 * Region Menu Links - http://drupalgap.org/node/173 |
 ****************************************************/
drupalgap.settings.menus.regions = {}; // Do not remove this line.

// Header Region Links
drupalgap.settings.menus.regions['header'] = {
  links:[
    /* Main Menu Popup Menu Button */
    {
      options: {
        popup: true,
        popup_delta: 'main_menu',
        attributes: {
          'class': 'ui-btn-left',
          'data-icon': 'bars'
        }
      }
    },
    /* Home Button */
    {
      path: '#',
      options: {
        attributes: {
          'data-icon': 'home',
          'data-iconpos': 'notext',
          'class': 'ui-btn-left',
          'onclick':"pubsub.trigger('main-menu-clicked', { 'page':'root','action':'Home' } )",

        }
      },
      pages: {
        value: [''],
        mode: 'exclude'
      }
    },
    /* Anonymous User Popup Menu Button */
    {
      options: {
        popup: true,
        popup_delta: 'user_menu_anonymous',
        attributes: {
          'class': 'ui-btn-right',
          'data-icon': 'user'
        }
      },
      roles: {
        value: ['anonymous user'],
        mode: 'include',
      }
    },
    /* Authenticated User Popup Menu Button */
    {
      options: {
        popup: true,
        popup_delta: 'user_menu_authenticated',
        attributes: {
          'class': 'ui-btn-right',
          'data-icon': 'user'
        }
      },
      roles: {
        value: ['authenticated user'],
        mode: 'include',
      }
    }
  ]
};


// Footer Region Links
drupalgap.settings.menus.regions['footer'] = {
  links: [      
    /* Back Button */
    
    {
      options: {
        attributes: {
          'data-icon': 'back',
          'data-iconpos': 'notext',
          'class': 'ui-btn-right',
          'onclick': 'javascript:drupalgap_back();'
        }
      },
      pages: {
        value: ['suche','lesezeichen'],
        mode: 'include'
      }
    },
    
  ],
};

/*********|
 * Camera |
 **********/
drupalgap.settings.camera = {
  quality: 90
};

/***********************|
 * Performance Settings |
 ***********************/
drupalgap.settings.cache = {}; // Do not remove this line.

// Theme Registry - Set to true to load the page.tpl.html contents from cache.
drupalgap.settings.cache.theme_registry = true;
