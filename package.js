Package.describe({
  name: 'rhythnic:xdan-datetimepicker',
  version: '0.0.11',
  summary: 'Wrapper for xdan-datetimepicker',
  git: 'https://github.com/rhythnic/meteor-xdan-datetimepicker',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery', '');
  api.addFiles(['xdan-datetimepicker.css', 'xdan-datetimepicker.js'], 'client');
});
