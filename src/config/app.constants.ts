export const MYSQL_ERROR:any            = {code:1000, msg:"mysql_error"};
export const BAD_HTTP_VERB_ERROR:any    = {code:2000, msg:"bad_http_verb"};
export const BAD_CRSF_TOKEN_ERROR:any   = {code:3000, msg:"bad_crsf_token"};
export const NOT_CONNECTED_ERROR:any    = {code:4000, msg:"not_connected"};
export const BAD_PARAM_ERROR:any        = {code: 5000, msg:"bad_param_error"};
export const BAD_URI_ERROR:any          = {code: 6000, msg:"bad_uri_error"};


export const AUTH_OK:any                = {code: 100, msg:"auth_ok"};
export const OK:any                     = {code: 200, msg:"ok"};
export const ONLY_ONE_ANNOUNCE          = {code: 300, msg:"only_one_announce_per_user_per_event_authorized"};