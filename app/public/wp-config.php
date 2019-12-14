<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'yTXvvT1/OyuJ4PBkVTxJVLajrL75ZthAXfii8U2C5VP2i8i0l6dkOfmRjOTT42pgOIJoyUx73Brqj5so7AWNcQ==');
define('SECURE_AUTH_KEY',  'vgfhvGCHO6CUlouu2I+/iXnkAwrPDmxCatC0xQ07+RlNWU76msji1fPo/2SWfFjFbXM/UPeN78GucQblOFDJYQ==');
define('LOGGED_IN_KEY',    'SS2TkTpvLDr3i9UXTPXLAmozW6W9qTDZEIBP576PwFdFA9Yxg80xH29jkfSXfSsCVNL8Em3UaLpt210EYgRyrg==');
define('NONCE_KEY',        'He8Ozm+FmdtVLzZDH3rD9fSGyCz6wrwZmTVmXHVdLFAh+hxZGrSyQbNz3z6kcIsBXQCSkSgktgm+Nwwg0KD1WQ==');
define('AUTH_SALT',        'w7lbvrlf32kRG0+hXuJpZZAXqsjtN+/B6Vh8BpkO0VQhnuRPAy43P2jA6YKyZE3HHL13SgyKGANpMxXajgGOXw==');
define('SECURE_AUTH_SALT', 'Niz2tYSTePrptbo0hYduuOyB8koppz7GcPpTU6xARSBsGlD0bEZDYLJg1gHMYznkbmo24PVJtJj0X8exxWyFbg==');
define('LOGGED_IN_SALT',   'kDzEPXoabEOoRG5ja1q7yKRHurlFKS9y6abrGMaUdq/G0WKRBvTVyz9rkykvlMIBxirMDkYVNzHH+rbC07KShw==');
define('NONCE_SALT',       'FgDXDN4iiivnAEoMNlzfI9dta+ZjOtJ/JVLC2HHhHOZgIWadBXSiO60Ab8aZY8x8tQOwUG9i86/XUA9OlxUexw==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
