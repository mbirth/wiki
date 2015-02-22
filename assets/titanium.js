/**
 * @package Titanium
 * @namespace Global Titanium namespace
 */
Titanium = {
    /**
     * Titanium platform name property. For iPhone, the value is 'iphone' (regardless of version). For Android, the value is 'android'.
     * @since 0.4
     */
    'platform': 'iphone',

    /**
     * Titanium platform version property. This is the version/build of the Titanium Mobile SDK you're using.
     * @since 0.4
     */
    'version': '0.8.0'
};

/**
 * @package Titanium
 * @subpackage Platform
 */
Titanium.Platform = {
    /**
     * IP address if any. [read-only]
     * The primary IP address of the system.
     * @since 0.4
     */
    'address': '192.168.1.1',

    /**
     * CPU description [read-only]
     * The operating system architecture.
     * @since 0.4
     */
    'architecture': 'i386',

    /**
     * Available memory as reported by the VM. [read-only]
     * Memory availible on the system.
     * @since 0.4
     */
    'availableMemory': 1243.93359375,

    /**
     * Display metrics. [read-only]
     * Array containing keys: width, height, density, dpi.
     * @since 0.8
     */
    'displayCaps': {
        'width': 320,
        'height': 480,
        'density': 'low',
        'dpi': 160
    },

    /**
     * Device identifier [read-only]
     * The unique machine id of the system.
     * @since 0.4
     */
    'id': '00000000-0000-1000-8000-DEADCAFEBABE',

    /**
     * MAC address if any. [read-only]
     * The primary MAC address of the system.
     * @since 0.4
     */
    'macaddress': 'DE:AD:CA:FE:BA:BE',

    /**
     * Model identifier of the device [read-only]
     * The model name of the device.
     * @since 0.4
     */
    'model': 'Simulator',

    /**
     * Platform name [read-only]
     * The operating system name.
     * @since 0.4
     */
    'name': 'iPhone OS',

    /**
     * OS type [read-only]
     * The architecture type of the system (either 32 bit or 64 bit).
     * @since 0.4
     */
    'ostype': '32bit',

    /**
     * Number of processors as reported by device. [read-only]
     * The number of processors for the machine.
     * @since 0.4
     */
    'processorCount': 1,

    /**
     * Name of user. [read-only]
     * The platform's user name.
     * @since 0.4
     */
    'username': 'iPhone Simulator',

    /**
     * Platform version information [read-only]
     * The operating system version.
     * @since 0.4
     */
    'version': '3.0',

    /**
     * Creates a globally unique id
     */
    'createUUID': function() { },

    /**
     * A developer helper method to see installed applications. This api will most likely be replaced in the future. It should not be used in production.
     * @deprecated
     * @since 0.4
     */
    'logInstalledApplicationNames': function() { },

    /**
     * Launch an Android application use the helper method {@link #logInstalledApplicationNames} to discover applications.
     * @param {String} app Android application name
     * @return {Boolean} true if application was launched.
     * @since 0.4
     */
    'openApplication': function( app ) { },

    /**
     * Launch the system browser
     * Opens a URL in the default system browser.
     * @param {String} url url to open
     * @return {Boolean} true if browser was launched
     * @since 0.4
     */
    'openURL': function( url ) { }
};

/**
 * @package Titanium
 * @subpackage Network
 */
Titanium.Network = {

    /**
     * The network connection is a LAN.
     * Indicates that there is an ethernet or wired network present.
     * @constant
     * @final
     * @since 0.4
     */
    'NETWORK_LAN': 1,

    /**
     * The network connection is Mobile.
     * Indicates that there is either an EDGE or 3G network present.
     * @constant
     * @final
     * @since 0.4
     */
    'NETWORK_MOBILE': 2,

    /**
     * No network connection.
     * Indicates that there is no network present.
     * @constant
     * @final
     * @since 0.4
     */
    'NETWORK_NONE': 0,

    /**
     * The network type is unknown.
     * Indicates that there is a network, but its nature is unknown.
     * @constant
     * @final
     * @since 0.4
     */
    'NETWORK_UNKNOWN': -1,

    /**
     * The network connection is WIFI.
     * Indicates that there is a WiFi network present.
     * @constant
     * @final
     * @since 0.4
     */
    'NETWORK_WIFI': 3,

    /**
     * The current network connection type.
     * The kind of network that the device is connected to.
     * @since 0.4
     */
    'networkType': 0,

    /**
     * The current network connection type.
     * The human-readable name of kind of network that the device is connected to.
     * @since 0.4
     */
    'networkTypeName': 'WiFi',

    /**
     * Examine connectivity state.
     * Whether or not the system is connected to the internet.
     * @since 0.4
     */
    'online': true,

    /**
     * Not supported in android. Use addEventListener.
     * Adds a connectivity change listener that fires when the system connects or disconnects from the internet.
     * @since 0.4
     */
    'addConnectivityListener': function() { },

    /**
     * Register an event handler for connectivity events.
     * @param {String} eventName Must be 'connectivity'. Only event currently supported.
     * @param {function} listener function to receive notification of network connectivity changes.
     * @return {Number} an id used to remove the event listener.
     * @since 0.4
     */
    'addEventListener': function( eventName, listener ) { },

    /**
     * Create an HTTPClient object.
     * Creates an HTTPClient object. You can only create one HTTPClient object per window,
     * so if you want to do multiple requests you'll need to reuse the same instance.
     * Also, since the request is asynchronous, if you depend on the result of the first
     * call to use in the second, you'll need to chain the calls together so that they
     * happen in sequence.
     * @return {Titanium.Network.HTTPClient} the HTTP client
     * @since 0.4
     */
    'createHTTPClient': function() { },

    /**
     * URL Decode
     * Decodes a URI component.
     * @param {String} fragment The fragment to URL decode
     * @return {String} the decoded fragment
     * @since 0.4
     */
    'decodeURIComponent': function( fragment ) { },

    /**
     * URL Encode
     * Encodes a URI Component.
     * @param {String} fragment URL fragment to encode
     * @return {String} the encoded fragment
     * @since 0.4
     */
    'encodeURIComponent': function( fragment ) { },

    /**
     * Not supported in android. Use removeEventListener.
     * Removes a connectivity change listener.
     * @since 0.4
     */
    'removeConnectivityListener': function() { },

    /**
     * RemoveEventListener
     * @param {String} eventName The event name used to register for an event.
     * @param {Number} listenerId The id returned by addEventListener
     * @since 0.4
     */
    'removeEventListener': function( eventName, listenerId ) { }

};

/**
 * @package Titanium
 * @subpackage Network
 */
Titanium.Network.HTTPClient = {
    /**
     * Receive data as a blob a chunk at a time.
     * The handler function that will be fired as stream data is received from an HTTP request.
     * @since 0.7
     */
    'ondatastream': null,

    /**
     * Set or get the error handler.
     * This error handler will not be called if the HTTP request succeeds but does not return
     * a 2xx status code. For catching and dealing with non-2xx HTTP status codes, use
     * Titanium.Network.HTTPClient.onload and Titanium.Network.HTTPClient.getStatus().
     * @since 0.8
     */
    'onerror': null,

    /**
     * Set or get the onload handler.
     * The handler function that will be fired when the ready-state code of an HTTPClient
     * object changes to ready state (DONE)
     * @since 0.7
     */
    'onload': null,

    /**
     * Set or get the ready stage change handler.
     * The handler function that will be fired when the ready-state code of an HTTPClient
     * object changes.
     * @since 0.4
     */
    'onreadystatechange': null,

    /**
     * Get the current ready state.
     * The ready-state status for the connection.
     * @since 0.4
     */
    'readyState': 0,

    /**
     * Get the response as XML from the operation.
     * The response of an HTTP request as text.
     * @since 0.7
     */
    'responseText': '',

    /**
     * Get the response as blob.
     * @since 0.7
     */
    'responseXML': '',

    /**
     * Get the status code of the request.
     * The response status code of an HTTP request.
     * @since 0.4
     */
    'status': 0,

    /**
     * Get the status text of the request.
     * @since 0.4
     */
    'statusText': '',

    /**
     * Aborts an in progress connection.
     * @since 0.4
     */
    'abort': function() { },

    /**
     * Get all response headers.
     * @return Array headers
     * @since 0.4
     */
    'getAllResponseHeaders': function() { return new Array(); },

    /**
     * The state of the network operation.
     * @return int current operation state
     * @since 0.4
     */
    'getReadyState': function() { return 0; },

    /**
     * The response of an HTTP request as blob.
     * @return blob the response text
     * @since 0.7
     */
    'getResponseData': function() { return ''; },

    /**
     * Get the value of a response header.
     * Returns the value of a response header.
     * @param header (string) Name of header value to retrieve
     * @return string the value
     * @since 0.4
     */
    'getResponseHeader': function( header ) { return ''; },

    /**
     * The response of an HTTP request as text.
     * @return string the response text
     * @since 0.4
     */
    'getResponseText': function() { return ''; },

    /**
     * The response status code of an HTTP request.
     * @return int the response status code
     * @since 0.4
     */
    'getStatus': function() { return 0; },

    /**
     * The response status text of an HTTP Request.
     * @return string the response string
     * @since 0.4
     */
    'getStatusText': function() { return ''; },

    /**
     * Open an HTTP connection.
     * @param method (string) HTTP method (GET, POST, HEAD)
     * @param url (string) Url to perform method on
     * @since 0.4
     */
    'open': function( method, url ) { },

    /**
     * Send data through the HTTP connection.
     * @param data (string) zero or more data segments to transmit.
     * @since 0.4
     */
    'send': function( data ) { },

    /**
     * Set a function to be called when the ready state changes same as onreadystatechange property.
     * @param f (function) callback for ready state change events
     * @since 0.4
     */
    'setOnReadyStateChange': function( f ) { },

    /**
     * Set a request header for the connection.
     * @param name (string) header name
     * @param value (string) value to associate with header
     * @since 0.4
     */
    'setRequestHeader': function( name, value ) { }
};

/**
 * @package Titanium
 * @subpackage API
 */
Titanium.API = {
    /**
     * Log data at the CRITICAL level.
     * logs an object with severity "critical"
     * @param msg (string) Message to send to the console
     * @since 0.4
     */
    'critical': function( msg ) { },

    /**
     * Log data at the DEBUG level.
     * logs an object with severity "debug"
     * @param msg (string) Message to send to the console
     * @since 0.4
     */
    'debug': function( msg ) { },

    /**
     * Log data at the ERROR level.
     * logs an object with severity "error"
     * @param msg (string) Message to send to the console
     * @since 0.4
     */
    'error': function( msg ) { },

    /**
     * Log data at the FATAL level.
     * logs an object with severity "fatal"
     * @param msg (string) Message to send to the console
     * @since 0.4
     */
    'fatal': function( msg ) { },

    /**
     * Log data at the INFO level.
     * logs an object with severity "info"
     * @param msg (string) Message to send to the console
     * @since 0.4
     */
    'info': function( msg ) { },

    /**
     * Log data to the console.
     * writes information to the console log/STDERR
     * @param severity (int) Severity code from FATAL down to TRACE
     * @param msg (string) Message to send to the console
     * @since 0.4
     */
    'log': function( severity, msg ) { },

    /**
     * Log data at the NOTICE level.
     * logs an object with severity "notice"
     * @param msg (string) Message to send to the console
     * @since 0.4
     */
    'notice': function( msg ) { },

    /**
     * Log data at the TRACE level.
     * logs an object with severity "trace"
     * @param msg (string) Message to send to the console
     * @since 0.4
     */
    'trace': function( msg ) { },

    /**
     * Log data at the WARN level.
     * logs an object with severity "warn"
     * @param msg (string) Message to send to the console
     * @since 0.4
     */
    'warn': function( msg ) { }
};

/**
 * @package Titanium
 * @subpackage Accelerometer
 */
Titanium.Accelerometer = {
    /**
     * Listen for events from the accelerometer.
     * add an event listener to be called for a accelerometer event and returns the function to use when removing
     * @param eventName (string) The name of the event. This API supports 'update' events.
     * @param listener (function) Function that receives an event object on each update.
     * @return int id to pass to removeEventListener to cancel the event
     * @since 0.4
     */
    'addEventListener': function( eventName, listener ) { return 0; },

    /**
     * Remove a listener previously set with addEventListener.
     * removes an event listener from Accelerometer events.
     * @param eventName (string) Name of the event used to register in addEventListener
     * @param listenerId (int) Value returned from addEventListener
     * @since 0.4
     */
    'removeEventListener': function( eventName, listenerId ) { }
};

/**
 * @package Titanium
 * @subpackage Analytics
 */
Titanium.Analytics = {
    /**
     * Send an analytics event associated with the application.
     * @param {String} evtType event type
     * @param {String} evtName event name
     * @param {Object} [data] event data (optional)
     * @since 0.4
     */
    'addEvent': function( evtType, evtName, data ) { },

    /**
     * Send an application feature event.
     * @param event (string) name of the event
     * @param data (Object) data to send with the event (optional)
     * @since 0.7
     */
    'featureEvent': function( event, data ) { },

    /**
     * Send an application nav event.
     * @param from (string) The from string
     * @param to (string) The to string
     * @param event (string) name of the event (optional)
     * @param data (Object) data to send with the event (optional)
     * @since 0.7
     */
    'navEvent': function( from, to, event, data ) { },

    /**
     * Send an application settings event.
     * @param event (string) name of the event
     * @param data (Object) data to send with the event (optional)
     * @since 0.7
     */
    'settingsEvent': function( event, data ) { },

    /**
     * Send an application timed event.
     * @param event (string) name of the event
     * @param start (Date) Start date (optional)
     * @param stop (Date) End date (optional)
     * @param duration (string) duration in seconds (optional)
     * @param data (Object) data to send with the event (optional)
     * @since 0.7
     */
    'timedEvent': function( event, start, stop, duration, data ) { },

    /**
     * Send an application user event.
     * @param event (string) name of the event
     * @param data (Object) data to send with the event (optional)
     * @since 0.7
     */
    'userEvent': function( event, data) { }
};

/**
 * @package Titanium
 * @subpackage App
 */
Titanium.App = {
    /**
     * Get url for file under Resources.
     * get a full path from an application using app: URL
     * @param url (string) path portion of the url.
     * @return string full url including path. On Android this will normally prefix with file:///android_asset/
     * @since 0.4
     */
    'appURLToPath': function( url ) { return ''; },

    /**
     * Not implemented yet.
     * get a dictionary of application launch arguments or null if none
     * @return Object empty object
     * @since 0.8
     */
    'getArguments': function() { return new Object(); },

    /**
     * Get application copyright.
     * get the application copyright
     * @return string application copyright as stored in tiapp.xml
     * @since 0.4
     */
    'getCopyright': function() { return ''; },

    /**
     * Get description of application.
     * get the application description
     * @return string description of application as stored in tiapp.xml
     * @since 0.4
     */
    'getDescription': function() { return ''; },

    /**
     * Get the application's globally unique id.
     * @return string global unique id as stored in tiapp.xml
     * @since 0.4
     */
    'getGUID': function() { return ''; },

    /**
     * Get the application id.
     * @return string the id as stored in tiapp.xml
     * @since 0.4
     */
    'getID': function() { return ''; },

    /**
     * Get the name of the application.
     * @return string the name as stored in tiapp.xml
     * @since 0.4
     */
    'getName': function() { return ''; },

    /**
     * Get the publisher.
     * get the application publisher
     * @return string the publisher name as stored in tiapp.xml
     * @since 0.4
     */
    'getPublisher': function() { return ''; },

    /**
     * Not implemented yet.
     * @param stream (string) deploytype (TBD)
     * @return string url for analytics
     * @since 0.4
     */
    'getStreamURL': function( stream ) { return ''; },

    /**
     * Get the url to application's external website.
     * @return string url to external website as stored in tiapp.xml
     * @since 0.4
     */
    'getURL': function() { return ''; },

    /**
     * Get the application version.
     * @return string the application version as stored in tiapp.xml
     * @since 0.4
     */
    'getVersion': function() { return ''; },

    /**
     * Used to control automatic execution of triggerLoad.
     * @param load (bool) if true, automatically call triggerLoad.
     * @since 0.4
     */
    'setLoadOnPageEnd': function( load ) { },

    /**
     * (Internal, Android only) Method to signal switching to the webView in the activity.
     * Normally called automatically when the page end event fires.
     * @since 0.4
     */
    'triggerLoad': function() { }
};

/**
 * @package Titanium
 * @subpackage App
 */
Titanium.App.Properties = {
    /**
     * Retrieve a boolean property.
     * get value as boolean
     * @param name (string) property name
     * @param def (bool) default value if no value set for key in name
     * @return bool property value or default
     * @since 0.4
     */
    'getBool': function( name, def ) { return true; },

    /**
     * Retrieve a double property.
     * get value as double
     * @param name (string) property name
     * @param def (double) default value if no value set for key in name
     * @return double property value or default
     * @since 0.4
     */
    'getDouble': function( name, def ) { return 0.0; },

    /**
     * Retrieve an integer property.
     * get value as integer
     * @param name (string) property name
     * @param def (int) default value if no value set for key in name
     * @return int property value or default
     * @since 0.4
     */
    'getInt': function( name, def ) { return 0; },

    /**
     * Retrieve a list.
     * get value as a list
     * @param name (string) property name
     * @param def (list) default value if no value set for key in name
     * @return list property value or default
     * @since 0.7
     */
    'getList': function( name, def ) { return []; },

    /**
     * Retrieve a string property.
     * get value as string
     * @param name (string) property name
     * @param def (string) default value if no value set for key in name
     * @return string property value or default
     * @since 0.4
     */
    'getString': function( name, def ) { return ''; },

    /**
     * Detect existence of a property.
     * check to see if a property exists
     * @param name (string) property name
     * @return bool true if property with 'name' exists.
     * @since 0.7
     */
    'hasProperty': function( name ) { return true; },

    /**
     * Retrieve a list of property names.
     * get a list of property values
     * @return list list of property names
     * @since 0.7
     */
    'listProperties': function() { return []; },

    /**
     * Remove a property.
     * @param name (string) property name
     * @since 0.7
     */
    'removeProperty': function( name ) { },

    /**
     * Store a boolean property.
     * @param name (string) property name
     * @param value (bool) property value
     * @since 0.4
     */
    'setBool': function( name, value ) { },

    /**
     * Store an integer property.
     * @param name (string) property name
     * @param value (int) property value
     * @since 0.4
     */
    'setInt': function( name, value ) { },

    /**
     * Store a list of JSON'able objects.
     * @param name (string) property name
     * @param value (list) value to store
     * @since 0.7
     */
    'setList': function( name, value ) { },

    /**
     * Store a string property.
     * @param name (string) property name
     * @param value (string) property value
     * @since 0.4
     */
    'setString': function( name, value ) { }
};

/**
 * @package Titanium
 * @subpackage App
 */
Titanium.App.SystemProperties = {
    /**
     * Retrieve a boolean property.
     * @param name (string) property name
     * @param def (bool) default value if no value set for key in name
     * @return bool property value or default
     * @since 0.4
     */
    'getBool': function( name, def ) { return true; },

    /**
     * Retrieve a double property.
     * @param name (string) property name
     * @param def (double) default value if no value set for key in name
     * @return double property value or default
     * @since 0.4
     */
    'getDouble': function( name, def ) { return 0.0; },

    /**
     * Retrieve an integer property.
     * @param name (string) property name
     * @param def (int) default value if no value set for key in name
     * @return int property value or default
     * @since 0.4
     */
    'getInt': function( name, def ) { return 0; },

    /**
     * ???
     */
    'getList': function( name ) { },

    /**
     * Retrieve a string property.
     * @param name (string) property name
     * @param def (string) default value if no value set for key in name
     * @return (string) property value or default
     * @since 0.4
     */
    'getString': function( name, def ) { return ''; },

    /**
     * Detect existence of a property.
     * @param name (string) property name
     * @return bool true if property with 'name' exists.
     * @since 0.7
     */
    'hasProperty': function( name ) { return true; },

    /**
     * Retrieve a list of property names.
     * @return list list of property names
     * @since 0.7
     */
    'listProperties': function() { return []; },

    /**
     * Store a boolean property.
     * @param name (string) property name
     * @param value (bool) property value
     * @since 0.4
     */
    'setBool': function( name, value ) { },

    /**
     * Store an integer property.
     * @param name (string) property name
     * @param value (int) property value
     * @since 0.4
     */
    'setInt': function( name, value ) { },

    /**
     * Store a list of JSON'able objects.
     * @param name (string) property name
     * @param value (list) value to store
     * @since 0.7
     */
    'setList': function( name, value ) { },

    /**
     * Store a string property.
     * @param name (string) property name
     * @param value (string) property value
     * @since 0.4
     */
    'setString': function( name, value ) { }
};

/**
 * @package Titanium
 * @subpackage Database
 */
Titanium.Database = {
    /**
     * Install and opens a database.
     * Install (if not already installed) and opens a database.
     * @param filename (string) Path to existing sqlite database file
     * @param name (string) Name of the database. On Android it must not contain path elements.
     * @return Titanium.Database.DB a database object, used to interact with the database
     * @since 0.8
     */
    'install': function( filename, name ) { return new Titanium.Database.DB(); },

    /**
     * Opens a database.
     * @param name (string) Name of the database. On Android it must not contain path elements.
     * @return Titanium.Database.DB a database object, used to interact with the database
     * @since 0.4
     */
    'open': function( name ) { return new Titanium.Database.DB(); }
};

/**
 * @package Titanium
 * @subpackage Database
 */
Titanium.Database.DB = {
    /**
     * Same as getLastInsertRowId method.
     * the id of the last of rows affected by the last execute
     * @since 0.4
     */
    'lastInsertRowId': 0,

    /**
     * Same as getRowsAffected method.
     * the number of rows affected by the last execute
     * @since 0.4
     */
    'rowsAffected': 0,

    /**
     * Close the database. This should be called to prevent resource leaks.
     * close an open database
     * @since 0.4
     */
    'close': function() { },

    /**
     * Perform an operation on the database.
     * perform a command on a database
     * @param sql (string) the SQL text. Multiple statements, separated by semi-colons, are not supported on Android.
     * @param args (mixed) one or more arguments appearing after the sql parameter. Must be integer, float, string, or any data converted to string (optional)
     * @return Titanium.Database.ResultSet
     * @since 0.4
     */
    'execute': function( sql, args) { return new Titanium.Database.ResultSet(); },

    /**
     * The row id of the last insert operation.
     * convenience method for lastInsertRowId
     * @return int The id.
     * @since 0.4
     */
    'getLastInsertRowId': function() { return 0; },

    /**
     * The number of rows affected by the last operation.
     * convenience method for rowsAffected
     * @return int the affected row count.
     * @since 0.4
     */
    'getRowsAffected': function() { return 0; },

    /**
     * Remove this database from the device. This is a destructive operation.
     * remove a database
     * @since 0.4
     */
    'remove': function() { }
};

/**
 * @package Titanium
 * @subpackage Database
 */
Titanium.Database.ResultSet = {
    /**
     * Close an open ResultSet. Should be called to prevent resources from leaking.
     * Releases the state associated with the result set
     * @since 0.4
     */
    'close': function() { },

    /**
     * Retrieve the data from a column on the current row.
     * Returns the contents of the specified field in the current row
     * @param index (int) The zero-based index of the column to retrieve.
     * @return string The contents of the column.
     * @since 0.4
     */
    'field': function( index) { return ''; },

    /**
     * Retrieve the contents of a column on the current row using the column name.
     * Returns the contents of the specified field in the current row using the name of the field as an identifier
     * @param fieldName (string) the column name
     * @return string the contents of the column.
     * @since 0.4
     */
    'fieldByName': function( fieldName ) { return ''; },

    /**
     * The number of columns in each row of the current ResultSet.
     * Returns the number of fields of the result set
     * @return int the number of columns
     * @since 0.4
     */
    'fieldCount': function() { return 0; },

    /**
     * The name of the field at the given column position.
     * Returns the name of the specified field in the current result set taken from the SQL statement which was executed
     * @param index (int) the zero-based index
     * @return string the column name
     * @since 0.4
     */
    'fieldName': function( index ) { return ''; },

    /**
     * The number of rows in the ResultSet. Previously rowCount().
     * @return int the row count
     * @since 0.8
     */
    'getRowCount': function() { return 0; },

    /**
     * Used to determine if operations may be peformed on this row.
     * Checks whether you can call data extraction methods
     * @return bool True, if it is safe to operate on the row.
     * @since 0.4
     */
    'isValidRow': function() { return true; },

    /**
     * Move to the next row in the ResultSet.
     * @return bool True, if the move was successful.
     * @since 0.4
     */
    'next': function() { return true; },

    /**
     * The number of rows in the ResultSet.
     * Returns the number of rows of the result set
     * @return int the row count
     * @since 0.4
     * @deprecated
     */
    'rowCount': function() { }
};

/**
 * @package Titanium
 * @subpackage Filesystem
 */
Titanium.Filesystem = {
    /**
     * Flag for opening in append mode.
     * @constant
     * @final
     * @since 0.7
     */
    'MODE_APPEND': 0,

    /**
     * Flag for opening in read mode.
     * @constant
     * @final
     * @since 0.7
     */
    'MODE_READ': 1,

    /**
     * Flag for opening in write mode.
     * @constant
     * @final
     * @since 0.7
     */
    'MODE_WRITE': 2,

    /**
     * Creates a temporary directory.
     * @return (Titanium.Filesystem.File) a File object referencing a temporary directory.
     * @since 0.4
     */
    'createTempDirectory': function() { return new Titanium.Filesystem.File(); },

    /**
     * Creates a temporary file.
     * @return (Titanium.Filesystem.File) a File object referencing a temporary file.
     * @since 0.4
     */
    'createTempFile': function() { return new Titanium.Filesystem.File(); },

    /**
     * Returns a file object pointing to the application's on device data directory.
     * @return (Titanium.Filesystem.File) the file object to the application data directory
     * @since 0.4
     */
    'getApplicationDataDirectory': function() { return new Titanium.Filesystem.File(); },

    /**
     * Returns a file object pointing to the application's off device data directory.
     * @return (Titanium.Filesystem.File) the file object to the application mass data directory
     * @since 0.7.2
     */
    'getApplicationMassDataDirectory': function() { return new Titanium.Filesystem.File(); },

    /**
     * Returns a file path, optionally joining multiple arguments together in an OS specific way.
     * @param arguments (string) one or more path segments to join
     * @return (Titanium.Filesystem.File) a File reference the file
     * @since 0.4
     */
    'getFile': function( arguments ) { return new Titanium.Filesystem.File(); },

    /**
     * Returns a file stream, optionally joining multiple arguments together in an OS specific way.
     * @param arguments (string) one or more path segments to join
     * @return (Titanium.Filesystem.Filestream) a FileStream reference the file
     * @since 0.4
     */
    'getFileStream': function( arguments ) { return new Titanium.Filesystem.Filestream(); },

    /**
     * Returns the line ending for this system.
     * @return (string) the end of line character(s)
     * @since 0.4
     */
    'getLineEnding': function() { return ''; },

    /**
     * Returns a file object pointing to the application's Resources.
     * @return (Titanium.Filesystem.File) the file object to the application Resources directory
     * @since 0.4
     */
    'getResourcesDirectory': function() { return new Titanium.Filesystem.File(); },

    /**
     * Returns the PATH separator for this system.
     * @return (string) the PATH separator
     * @since 0.4
     */
    'getSeparator': function() { return ''; },

    /**
     * Check to see if external media storage exists.
     * @return (bool) true if external storage is present; otherwise, false.
     * @since 0.4
     */
    'isExternalStoragePresent': function() { return false; }
};

/**
 * @package Titanium
 * @subpackage Filesystem
 */
Titanium.Filesystem.File = {
    /**
     * Copies a file to a specified location.
     * @param destination (string) destination to copy to
     * @return (bool) true if the file was successfully copied; otherwise false.
     * @since 0.4
     */
    'copy': function( destination ) { return true; },

    /**
     * Creates a new directory.
     * @since 0.4
     */
    'createDirectory': function() { },

    /**
     * Returns the created timestamp of a file or directory.
     * @return (double) the creation time of the file or directory
     * @since 0.4
     */
    'createTimestamp': function() { return 0.0; },

    /**
     * Deletes a directory.
     * @return (bool) true if the file was successfully deleted; otherwise, false.
     * @since 0.4
     */
    'deleteDirectory': function() { return true; },

    /**
     * Deletes a file.
     * @return (bool) true if the file was successfully deleted; otherwise, false.
     * @since 0.4
     */
    'deleteFile': function() { return true; },

    /**
     * Checks whether a file or directory exists in the users system.
     * @return (bool) true if the file or directory exists; otherwise false.
     * @since 0.4
     */
    'exists': function() { return true; },

    /**
     * Returns the extension of a file.
     * @return (string) extension of the file
     * @since 0.4
     */
    'extension': function() { return ''; },

    /**
     * Returns a list containing the names of items in a directory.
     * @return (list) a list of File items inside the directory. (Not implemented in Android beta)
     * @since 0.4
     */
    'getDirectoryListing': function() { return []; },

    /**
     * Returns the parent directory of a file or directory.
     * @return (Titanium.Filesystem.File) the parent directory
     * @since 0.4
     */
    'getParent': function() { return new Titanium.Filesystem.File(); },

    /**
     * Checks whether a file object references a directory.
     * @return (bool) true if the File object references a directory; otherwise, false.
     * @since 0.4
     */
    'isDirectory': function() { return true; },

    /**
     * Checks whether a file is an executable file.
     * @return (bool) true if the file is an executable file, false if otherwise
     * @since 0.4
     */
    'isExecutable': function() { return true; },

    /**
     * Checks whether a file object references a file.
     * @return (bool) true if the File object references a file; otherwise, false.
     * @since 0.4
     */
    'isFile': function() { return true; },

    /**
     * Checks whether a file or directory is hidden.
     * @return (bool) true if the file or directory is hidden, false if otherwise
     * @since 0.4
     */
    'isHidden': function() { return true; },

    /**
     * Checks whether a file or directory is read-only.
     * @return (bool) true if the file or directory is read-only, false if otherwise
     * @since 0.4
     */
    'isReadonly': function() { return true; },

    /**
     * Checks whether the File object references a symbolic link.
     * @return (bool) true if the File object references a symbolic link, false if otherwise
     * @since 0.4
     */
    'isSymbolicLink': function() { return true; },

    /**
     * Checks whether a file or directory is writeable.
     * @return (bool) true if the file or directory is writeable, false if otherwise
     * @since 0.4
     */
    'isWritable': function() { return true; },

    /**
     * Returns the last modified timestamp of a file or directory.
     * @return (double) the modification time of the file or directory
     * @since 0.4
     */
    'modificationTimestamp': function() { return 0.0; },

    /**
     * Moves a file to a specified location.
     * @param destination (string) destination to move to
     * @return (bool) true if the file was successfully moved; otherwise, false
     * @since 0.4
     */
    'move': function( destination ) { return true; },

    /**
     * Returns the full native path of a file or directory.
     * @return (string) full native path of the file or directory
     * @since 0.4
     */
    'nativePath': function() { return ''; },

    /**
     * Returns one line (separated by line ending) from a file.
     * @return (string) a string of data from the file
     * @since 0.4
     */
    'read': function() { return ''; },

    /**
     * Returns one line (separated by line ending) from a file.
     * @return (string) A string of data from the file
     * @since 0.4
     */
    'readline': function() { return ''; },

    /**
     * Renames a file.
     * @param destination (string) new name
     * @return (bool) true if the file was successfully renamed; otherwise, false
     * @since 0.4
     */
    'rename': function( destination ) { return true; },

    /**
     * Resolves a File object to a file path.
     * @param path (string) path to resolve
     * @return (Titanium.Filesystem.File) a file object referencing a path. (Not implemented in Android, beta)
     * @since 0.4
     */
    'resolve': function( path ) { return new Titanium.Filesystem.File(); },

    /**
     * Makes the file or directory executable.
     * @return (bool) returns true if the operation was successful; otherwise, false
     * @since 0.4
     */
    'setExecutable': function() { return true; },

    /**
     * Makes the file or directory readonly.
     * @return (bool) returns true if the operation was successful; otherwise, false
     * @since 0.4
     */
    'setReadonly': function() { return true; },

    /**
     * Makes the file or directory writeable.
     * @return (bool) returns true if the operation was successful; otherwise, false
     * @since 0.4
     */
    'setWriteable': function() { return true; },

    /**
     * Returns the size of the file in bytes.
     * @return (double) the size of a file or directory in bytes
     * @since 0.4
     */
    'size': function() { return 0.0; },

    /**
     * Returns the space available on the filesystem.
     * @return (double) the space available on the filesystem (Not implemented in Android beta)
     * @since 0.4
     */
    'spaceAvailable': function() { return 0.0; },

    /**
     * Get the string representation.
     * @return (string) returns string representation of the file or directory
     * @since 0.4
     */
    'toString': function() { return ''; },

    /**
     * Returns the url to a file or directory.
     * @return (string) full url of the file or directory
     * @since 0.7
     */
    'toURL': function() { return ''; },

    /**
     * Writes data to the file
     * @param data (string) data to write to file
     * @param append (bool) true if write should append to file
     * @return (bool) returns true if the operation was successful; otherwise, false
     * @since 0.4
     */
    'write': function( data, append ) { return true; }
};

/**
 * @package Titanium
 * @subpackage Filesystem
 */
Titanium.Filesystem.Filestream = {
    /**
     * Returns the url to a file or directory.
     * @return (string) full url of the file or directory
     * @since 0.7
     */
    'toURL': function() { return ''; }
};

/**
 * @package Titanium
 * @subpackage Geolocation
 */
Titanium.Geolocation = {
    'hasCompass': true,

    /**
     * Stop watching geolocation events.
     * @param watchId (int) The value returned from watchPosition
     * @since 0.4
     */
    'clearWatch': function( watchId ) { },

    'forwardGeocoder': function( address, callback ) { },

    'getCurrentHeading': function( success, failure ) { },

    /**
     * Query the device for the last known position. On Android, this method does not cause the radio to start.
     * @param success (function) Function to be invoked with a position object if the operation is successful
     * @param failure (function) Function to be invoked if a failure occurs while retrieving the last position
     * @param options (Object) An object that contains options to be used by the method
     * @since 0.4
     */
    'getCurrentPosition': function( success, failure, options ) { },

    'reverseGeocoder': function( latitude, longitude, callback ) { },

    'watchHeading': function( success, failure ) { },

    /**
     * Register to receive geolocation updates.
     * continously query the Geolocation services for location updates
     * @param success (function) Function to be invoked with a position object if the operation is successful
     * @param failure (function) Function to be invoked if a failure occurs while retrieving the last position
     * @param options (Object) An object that contains options to be used by the method
     * @return (int) id to pass to clearWatch to stop un-register
     * @since 0.4
     */
    'watchPosition': function( success, failure, options ) { return 0; }
};

/**
 * @package Titanium
 * @subpackage Gesture
 */
Titanium.Gesture = {
    /**
     * Device is rotated 90 degrees to the left of portrait.
     * integer that represents both landscape left or landscape right orientation
     * @constant
     * @final
     * @since 0.4
     */
    'LANDSCAPE': 3,

    /**
     * Device is rotated 90 degrees to the left of portrait. Same as LANDSCAPE.
     * integer that represents landscape orientation where the home button is to the left of the screen
     * @constant
     * @final
     * @since 0.4
     */
    'LANDSCAPE_LEFT': 1,

    /**
     * Device is rotated 90 degrees to the right of portrait. Not reported on Android.
     * integer that represents landscape orientation where the home button is to the right of the screen
     * @constant
     * @final
     * @since 0.4
     */
    'LANDSCAPE_RIGHT': 2,

    /**
     * Portrait orientation.
     * integer that represents portrait orientation
     * @constant
     * @final
     * @since 0.4
     */
    'PORTRAIT': 0,

    /**
     * Not reported on Android. Device rotated 180 degrees from portrait.
     * integer that represents an upside-down portrait orientation
     * @constant
     * @final
     * @since 0.4
     */
    'UPSIDE_PORTRAIT': 4,

    /**
     * Listen for Gesture events. currently supported events are 'orientationchange' and 'shake'.
     * add an event listener to be called for a gesture event and returns the function to use when removing
     * @param eventName (string) A supported gesture event name
     * @param listener (function) Function to pass events gesture events to.
     * @return (int) id to pass to removeEventListener to stop receiving events. Id is only valid for use with the event name that was used to register the listener
     * @since 0.4
     */
    'addEventListener': function( eventName, listener ) { return 0; },

    /**
     * Helper method to determine if device is in any landscape position.
     * indicates whether or not the passed in value is a landscape view.
     * @param orientation (int) Obtained via the 'orentationchange' event's 'to' or 'from' property
     * @since 0.4
     */
    'isLandscape': function( orientation ) { },

    /**
     * Helper method to determine if device is in any portrait position.
     * indicates whether or not the passed in value is a portrait view.
     * @param orientation (int) Obtained via the 'orientationchange' event's 'to' or 'from' property
     * @since 0.4
     */
    'isPortrait': function( orientation ) { },

    /**
     * Remove gesture event listener.
     * removes an event listener from gesture events
     * @param eventName (string) Event name used to register event.
     * @param listenerId (int) Id returned from addEventListener. Ids are only valid for the eventName passed in addEventListener
     * @since 0.4
     */
    'removeEventListener': function( eventName, listenerId ) { }
};

/**
 * @package Titanium
 * @subpackage Map
 */
Titanium.Map = { };

/**
 * @package Titanium
 * @subpackage Media
 */
Titanium.Media = {
    /**
     * Play an audio alert using the system default notification.
     * Causes the system to make an alert noise and/or vibrate
     * @since 0.4
     */
    'beep': function() { },

    /**
     * Creates a Sound object.
     * @param url (string) url to sound
     * @return (Titanium.Media.Sound) the sound object
     * @since 0.4
     */
    'createSound': function( url ) { return new Titanium.Media.Sound(); },

    /**
     * Start video player.
     * Creates a video-playing object
     * @param options (Object) hash/dictionary of video player options
     * @since 0.4
     */
    'createVideoPlayer': function( options ) { },

    /**
     * Show a photo browser. On Android the browser allows editing.
     * Presents the image picker interface to the user to let them choose an image from their image gallery.
     * @since 0.4
     */
    'openPhotoGallery': function() { },

    /**
     * Start the photo gallery on a specific image.
     * @param options (Object) hash/dictionary of viewing options
     * @since 0.4
     */
    'previewImage': function( options ) { },

    /**
     * Start the camera for capturing an image.
     * Presents the camera interface to the user to let them take a photo
     * @param options (Object) hash/dictionary for camera options
     * @since 0.4
     */
    'showCamera': function( options ) { },

    /**
     * Vibrate the device.
     * Causes the system to vibrate.
     * @since 0.4
     */
    'vibrate': function() { }
};

/**
 * @package Titanium
 * @subpackage Media
 */
Titanium.Media.Sound = {
    /**
     * Add event listener, currently supports 'complete' and 'error' events.
     * add an event listener to be called for a Media.Sound event and returns the function to use when removing
     * @param eventName (string) Name of event
     * @param listener (function) listener for the event in eventName
     * @return (int) id to pass to removeEventListener to stop receiving events
     * @since 0.4
     */
    'addEventListener': function( eventName, listener ) { return 0; },

    /**
     * Returns the volume value of a Sound object.
     * @return (double) current level for this Sound
     * @since 0.4
     */
    'getVolume': function() { return 0.0; },

    /**
     * Checks whether a Sound object is set to loop.
     * @return (bool) true, if the Sound is currently set to loop
     * @since 0.4
     */
    'isLooping': function() { return true; },

    /**
     * Checks whether a Sound object is paused.
     * @return (bool) true if the sound is currently paused
     * @since 0.4
     */
    'isPaused': function() { return true; },

    /**
     * Checks whether a Sound object is currently playing.
     * @return (bool) true, if the Sound is currently playing
     * @since 0.4
     */
    'isPlaying': function() { return true; },

    /**
     * Pauses a currently playing Sound object.
     * @since 0.4
     */
    'pause': function() { },

    /**
     * Plays the file referenced by a Sound object.
     * @since 0.4
     */
    'play': function() { },

    /**
     * Release native resources associated with this Sound object.
     * This should release a Sound object as soon as you are finished with it.
     * Invalidates the sound object and frees associated memory.
     * @since 0.4
     */
    'release': function() { },

    /**
     * removes an event listener from Media.Sound events.
     * @since 0.4
     */
    'removeEventListener': function() { },

    /**
     * Reset sound to the beginning.
     * Moves the starting point to the beginning. If the music was paused,
     * this is the same as pressing stop. If the music was playing,
     * the sound will start playing from the start.
     * @since 0.4
     */
    'reset': function() { },

    /**
     * Sets the looping of a Sound object.
     * @param loop (bool) if true, Sound will loop until stopped
     * @since 0.4
     */
    'setLooping': function( loop ) { },

    /**
     * Sets the volume value of a Sound object.
     * @param v (double) value between 0.0 and 1.0
     * @since 0.4
     */
    'setVolume': function( v ) { },

    /**
     * Stop the sound and reset to the beginning.
     * Stops a currently playing Sound object.
     * @since 0.4
     */
    'stop': function() { }
};

/**
 * @package Titanium
 * @subpackage Media
 */
Titanium.Media.Video = {
    'addEventListener': function() { },
    'isPaused': function() { },
    'isPlaying': function() { },
    'pause': function() { },
    'play': function() { },
    'release': function() { },
    'removeEventListener': function() { },
    'reset': function() { },
    'stop': function() { }
};

/**
 * @package Titanium
 * @subpackage UI
 */
Titanium.UI = {
    /**
     * Full ASCII keyboard.
     * A possible value for UI.NativeControl.keyboardType; indicates the
     * keyboard will be standard QWERTY keyboard
     * @constant
     * @final
     * @since 0.6
     */
    'KEYBOARD_ASCII': 0,

    /**
     * ASCII keyboard with email keys like '@'.
     * A possible value for UI.NativeControl.keyboardType; indicates the
     * keyboard will be the standard QWERTY keyboard, but with @ and
     * period keys next to the space key
     * @constant
     * @final
     * @since 0.6
     */
    'KEYBOARD_EMAIL_ADDRESS': 1,

    /**
     * Full ASCII keyboard with Numbers and Punctuation visible.
     * A possible value for UI.NativeControl.keyboardType; indicates the
     * keyboard will be the standard QUERTY keyboard, but displaying
     * numbers and punctuation by default
     * @constant
     * @final
     * @since 0.6
     */
    'KEYBOARD_NUMBERS_PUNCTUATION': 2,

    /**
     * Current same as KEYBOARD_NUMBERS_PUNCTUATION.
     * A possible value for UI.NativeControl.keyboardType; indicates the
     * keyboard will be a 12-key keypad, with a blank key to the left of
     * the 0, and delete to the right
     * @constant
     * @final
     * @since 0.6
     */
    'KEYBOARD_NUMBER_PAD': 3,

    /**
     * Phone dialpad keys.
     * A possible value for UI.NativeControl.keyboardType; indicates the
     * keyboard will be a 12-key keypad, with +*# to the left of the
     * 0 key, and delete to the right
     * @constant
     * @final
     * @since 0.6
     */
    'KEYBOARD_PHONE_PAD': 4,

    /**
     * Hybrid map view.
     * @constant
     * @final
     * @since 0.8
     */
    'MAP_VIEW_HYBRID': 2,

    /**
     *Satellite map view.
     * @constant
     * @final
     * @since 0.8
     */
    'MAP_VIEW_SATELLITE': 1,

    /**
     * Standard map view.
     * @constant
     * @final
     * @since 0.8
     */
    'MAP_VIEW_STANDARD': 0,

    /**
     * Displays the Done button.
     * A possible value for UI.NativeControl.returnKeyType; indicates
     * the lower right keyboard button will be labelled "Done"
     * @constant
     * @final
     * @since 0.6
     */
    'RETURNKEY_DONE': 0,

    /**
     * Displays the Go button. (Soft keyboard doesn't allow for text change yet)
     * A possible value for UI.NativeControl.returnKeyType; indicates
     * the lower right keyboard button will be labelled "Emergency Call"
     * @constant
     * @final
     * @since 0.6
     */
    'RETURNKEY_EMERGENCY_CALL': 1,

    /**
     * Displays the Go button.
     * A possible value for UI.NativeControl.returnKeyType; indicates
     * the lower right keyboard button will be labelled "Go"
     * @constant
     * @final
     * @since 0.6
     */
    'RETURNKEY_GO': 2,

    /**
     * Displays the Go button. (Soft keyboard doesn't allow for text change yet)
     * A possible value for UI.NativeControl.returnKeyType; indicates
     * the lower right keyboard button will be labelled "Google"
     * @constant
     * @final
     * @since 0.6
     */
    'RETURNKEY_GOOGLE': 3,

    /**
     * Displays the Go button. (Soft keyboard doesn't allow for text change yet)
     * A possible value for UI.NativeControl.returnKeyType; indicates
     * the lower right keyboard button will be labelled "Join"
     * @constant
     * @final
     * @since 0.6
     */
    'RETURNKEY_JOIN': 4,

    /**
     * Displays the Next button.
     * A possible value for UI.NativeControl.returnKeyType; indicates
     * the lower right keyboard button will be labelled "Next"
     * @constant
     * @final
     * @since 0.6
     */
    'RETURNKEY_NEXT': 5,

    /**
     * Displays the Go button. (Soft keyboard doesn't allow for text change yet)
     * A possible value for UI.NativeControl.returnKeyType; indicates
     * the lower right keyboard button will be labelled "Route"
     * @constant
     * @final
     * @since 0.6
     */
    'RETURNKEY_ROUTE': 6,

    /**
     * Displays the Search button.
     * A possible value for UI.NativeControl.returnKeyType; indicates
     * the lower right keyboard button will be labelled "Search"
     * @constant
     * @final
     * @since 0.6
     */
    'RETURNKEY_SEARCH': 7,

    /**
     * Displays the Go button. (Soft keyboard doesn't allow for text change yet)
     * A possible value for UI.NativeControl.returnKeyType; indicates
     * the lower right keyboard button will be labelled "Yahoo"
     * @constant
     * @final
     * @since 0.6
     */
    'RETURNKEY_YAHOO': 8,

    /**
     * Position the row at top if currently above the tableview. Position the row at bottom if currently below the tableview. Don't change if already visible in the tableview.
     * @constant
     * @final
     * @since 0.8
     */
    'TABLEVIEW_POSITION_ANY': 0,

    /**
     * Position the row at the top of the tableview.
     * @constant
     * @final
     * @since 0.8
     */
    'TABLEVIEW_POSITION_BOTTOM': 3,

    /**
     * Position the row in the middle of the tableview.
     * @constant
     * @final
     * @since 0.8
     */
    'TABLEVIEW_POSITION_MIDDLE': 2,

    /**
     * Position the row at the top of the tableview.
     * @constant
     * @final
     * @since 0.8
     */
    'TABLEVIEW_POSITION_TOP': 1,

    /**
     * open the window
     * @param {Array} options Options used to configure window before opening. (optional)
     * @since 0.8
     */
    'UserWindow': function( options ) { },

    /**
     *
     */
    'addEventListener': function( eventName, eventHandler ) { },

    /**
     *
     */
    'createActivityIndicator': function( options ) { },

    /**
     *
     */
    'createAlertDialog': function( options ) { },

    /**
     *
     */
    'createButton': function( options ) { },

    /**
     *
     */
    'createCompositeView': function( options ) { },

    /**
     *
     */
    'createEmailDialog': function( options ) { },

    /**
     *
     */
    'createImageView': function( options ) { },

    /**
     *
     */
    'createMapView': function( options ) { },

    /**
     *
     */
    'createMenu': function() { },

    /**
     *
     */
    'createNotification': function( options ) { },

    /**
     *
     */
    'createOptionDialog': function( options ) { },

    /**
     *
     */
    'createProgressBar': function( options ) { },

    /**
     *
     */
    'createScrollableView': function( options ) { },

    /**
     *
     */
    'createSlider': function( options ) { },

    /**
     *
     */
    'createSwitch': function( options ) { },

    /**
     *
     */
    'createTableView': function( options ) { },

    /**
     *
     */
    'createTextArea': function( options ) { },

    /**
     *
     */
    'createTextField': function( options ) { },

    /**
     *
     */
    'createWebView': function( options ) { },

    /**
     *
     */
    'createWindow': function( options ) { },

    /**
     *
     */
    'currentView': function() { },

    /**
     *
     */
    'currentWindow': function() { },

    /**
     *
     */
    'getTabs': function() { },

    /**
     *
     */
    'getTagByName': function( name ) { },

    /**
     *
     */
    'removeEventListener': function( eventName, listenerId ) { },

    /**
     *
     */
    'setActiveTab': function( Tab ) { },

    /**
     *
     */
    'setMenu': function( m ) { }
};

/**
 * @package Titanium
 * @subpackage UI
 */
Titanium.UI.ActivityIndicator = {
    'DETERMINANT': 0,
    'DIALOG': 1,
    'INDETERMINANT': 2,
    'STATUS_BAR': 3,
    'hide': function() { },
    'setLocation': function( location ) { },
    'setMax': function( n ) { },
    'setMessage': function( msg ) { },
    'setMin': function( n ) { },
    'setType': function( type ) { },
    'setValue': function( n ) { },
    'show': function() { }
};

/**
 * @package Titanium
 * @subpackage UI
 */
Titanium.UI.AlertDialog = {
    'addEventListener': function( eventName, listener ) { },
    'removeEventListener': function( eventName, listenerId ) { },
    'setButtonNames': function( names ) { },
    'setMessage': function( message ) { },
    'setTitle': function( title ) { },
    'show': function() { }
};

/**
 * @package Titanium
 * @subpackage UI
 */
Titanium.UI.Android = { };

/**
 * @package Titanium
 * @subpackage UI
 */
Titanium.UI.Android.AnimationStyle = {
    'FADE': 0,
    'HEADLINES': 1,
    'SCALE': 2,
    'SLIDE_FROM_BOTTOM': 3,
    'SLIDE_FROM_LEFT': 4,
    'SLIDE_FROM_RIGHT': 5,
    'SLIDE_FROM_TOP': 6,
    'WINK': 7
};

/**
 * @package Titanium
 * @subpackage UI
 */
Titanium.UI.Android.SystemIcon = {
    'ACTION': '',
    'ADD': '',
    'BACK': '',
    'BOOKMARKS': '',
    'CAMERA': '',
    'CANCEL': '',
    'COMPOSE': '',
    'DONE': '',
    'EDIT': '',
    'FAST_FORWARD': '',
    'FORWARD': '',
    'HELP': '',
    'HOME': '',
    'NEXT': '',
    'ORGANIZE': '',
    'PAUSE': '',
    'PLAY': '',
    'PREFERENCES': '',
    'PREVIOUS': '',
    'REFRESH': '',
    'REPLY': '',
    'REVERT': '',
    'REWIND': '',
    'SAVE': '',
    'SEARCH': '',
    'SEND': '',
    'SHARE': '',
    'STOP': '',
    'TRASH': '',
    'VIEW': '',
    'ZOOM': ''
};

Titanium.UI.Button = {
    'addEventListener': function( eventName, listener ) { },
    'removeEventListener': function( eventName, listenerId ) { }
};

Titanium.UI.CompositeView = {
    'addEventListener': function( eventName, listener ) { },
    'addView': function( view, layout ) { },
    'removeEventListener': function( eventName, listenerId ) { }
};

Titanium.UI.DatePicker = {
    'MODE_DATE': 0,
    'MODE_TIME': 1,
    'addEventListener': function( eventName, listener ) { },
    'removeEventListener': function( eventName, listenerId ) { }
};

Titanium.UI.EmailDialog = {
    'addAttachment': function() { },
    'setSubject': function() { },
    'setMessageBody': function() { },
    'setBarColor': function() { },
    'open': function() { }
};

Titanium.UI.ImageView = {
    'addEventListener': function( eventName, listener ) { },
    'removeEventListener': function( eventName, listenerId ) { }
};

Titanium.UI.MapView = {
    'addEventListener': function( eventName, listener ) { },
    'removeEventListener': function( eventName, listenerId ) { },
    'setCenterCoordinate': function( coordinate ) { },
    'setRegion': function( coordinate ) { },
    'setType': function( type ) { }
};

Titanium.UI.MenuItem = {
    'addItem': function( label, callback, icon ) { },
    'addSeparator': function() { },
    'addSubMenu': function( label, icon ) { },
    'disable': function() { },
    'enable': function() { },
    'getIcon': function() { },
    'getLabel': function() { },
    'isEnabled': function() { },
    'isItem': function() { },
    'isRoot': function() { },
    'isSeparator': function() { },
    'isSubMenu': function() { },
    'setIcon': function( path ) { },
    'setLabel': function( label ) { }
};

Titanium.UI.Notifier = {
    'hide': function( animate ) { },
    'setDelay': function( delay ) { },
    'setIcon': function( iconUrl ) { },
    'setMessage': function( message ) { },
    'setTitle': function( title ) { },
    'show': function( animate, autohide ) { }
};

Titanium.UI.OptionDialog = {
    'addEventListener': function( eventName, listener ) { },
    'removeEventListener': function( eventName, listenerId ) { },
    'setOptions': function( options ) { },
    'setTitle': function( title ) { },
    'show': function() { }
};

Titanium.UI.Picker = {
    'addEventListener': function( eventName, listener ) { },
    'removeEventListener': function( eventName, listenerId ) { }
};

Titanium.UI.ScrollableView = {
    'addEventListener': function( eventName, listener ) { },
    'removeEventListener': function( eventName, listenerId ) { },
    'scrollToView': function( view ) { },
    'setShowPagingControl': function( view ) { },
    'setViews': function( views ) { }
};

Titanium.UI.SearchBar = {
    'blur': function() { },
    'focus': function() { }
};

Titanium.UI.Slider = {
    'value': 0,
    'addEventListener': function( eventName, listener ) { },
    'getValue': function() { return 0; },
    'removeEventListener': function( eventName, listenerId ) { },
    'setValue': function( value ) { }
};

Titanium.UI.Switch = {
    'value': true,
    'addEventListener': function( eventName, listener ) { },
    'getValue': function() { return true; },
    'removeEventListener': function( eventName, listenerId ) { },
    'setValue': function( value ) { }
};

Titanium.UI.TableView = {
    '_data': '',
    'UpdateRow': function( index, options ) { },
    'addEventListener': function( eventName, listener ) { },
    'appendRow': function( rowData, options ) { },
    'deleteRow': function( index ) { },
    'getIndexByName': function( name ) { },
    'getName': function() { },
    'getRowCount': function() { },
    'insertRowAfter': function( index, options ) { },
    'insertRowBefore': function( index, options ) { },
    'removeEventListener': function( eventName, listenerId ) { },
    'scrollToIndex': function( index ) { },
    'setBarColor': function( color ) { },
    'setData': function( data ) { },
    'setRowHeight': function( rowHeight ) { }
};

Titanium.UI.TextArea = {
    'addEventListener': function( eventName, listener ) { },
    'blur': function() { },
    'focus': function() { },
    'getValue': function() { return ''; },
    'removeEventListener': function( eventName, listenerId ) { },
    'setValue': function( value ) { }
};

Titanium.UI.TextField = {
    'value': '',
    'addEventListener': function( eventName, listener ) { },
    'blur': function() { },
    'focus': function() { },
    'getValue': function() { return ''; },
    'removeEventListener': function( eventName, listenerId ) { },
    'setValue': function( value ) { }
};
