OJ.importJs("oj.list.ListItem");"use strict";OJ.extendClass(OjListItem,"NwDataListItem",{_redrawData:function(){this.content.setText(this._data.title())}});