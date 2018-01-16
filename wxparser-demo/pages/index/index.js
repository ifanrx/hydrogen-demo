const wxParser = require('../../wxParser/index')

Page({
  onLoad: function () {
    this.renderContent()
  },

  renderContent: function() {
    wxParser.parse({
      bind: 'richText',
      html: this.getContent(),
      target: this,
    })
  },

  getContent: function() {
    return '<p style="text-align: center;"><em><span style="font-size: 36px; color: rgb(227, 108, 9);"><strong>hello world</strong></span></em><br/></p>'
  },
})
