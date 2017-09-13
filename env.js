window.env = {
  /** variables **/
  environment: 'production',
  environmentKeywords: {
    'katherinepmanuel.com': 'production',  /* production URL must be first because if same URL string is detected, the value of the last matched URL is used */
    'dev.katherinepmanuel.com': 'dev'
  },
  vars: {
    'dev': {
      'googleAnalyticsCode': ''
    },
    'production': {
      'googleAnalyticsCode': 'UA-10647992-1'
    }
  },
  
  /** functions **/
  var: function(key) {
    return this.vars[this.environment][key];
  },
  
  _detectEnvironment: function()
  {
    for ( var environmentKeyword in this.environmentKeywords ) {
      if (window.location.href.indexOf(environmentKeyword) !== -1) {
        this.environment = this.environmentKeywords[environmentKeyword];
      }
    }
    window.environment = this.environment;
  }
};
window.env._detectEnvironment();