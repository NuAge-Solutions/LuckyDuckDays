OJ.importJs("oj.list.List");OJ.importJs("oj.table.TableColumn");OJ.importJs("oj.table.TableCell");OJ.importJs("oj.table.TableRow");OJ.importCss("oj.table.Table");"use strict";OJ.extendClass(OjList,"OjTable",{_template:"oj.table.Table",_column_renderer:OjTableColumn,_item_renderer:OjTableRow,_cell_renderer:OjTableCell,_constructor:function(){this._cols=[];this._super("OjTable","_constructor",[]);var a=arguments.length;if(a){this.setColumns(arguments[0]);if(a>1){this.setDataProvider(data_provider)}}this.addClasses("OjTable");this.removeClasses("OjList")},_setDomSource:function(g,b){this._super("OjTable","_setDomSource",arguments);var d=OJ.query("> *",g),h=d.length,f,c,k,e,j,a;for(f=0;f<h;f++){c=d[f];k=c.tagName.toLowerCase();if(k=="columns"){e=[];j=OJ.query("column",c);a=j.length;while(a-->0){e.unshift(this._createColumn(j[a]))}this.setColumns(e)}}},_createColumn:function(a){var c=new this._column_renderer(),b=a.attributes,d=b.length,e;while(d-->0){e=OjElement.attributeToSetter(b[d].nodeName);if(isFunction(c[e])){c[e](b[d].value)}}a=b=d=e=null;return c},_createRow:function(a){return new this._item_renderer(a)},_createCell:function(a){return new this._cell_renderer(a)},_createItem:function(d,a){var c=this._super("OjTable","_createItem",arguments),b=this.numColumns();while(b-->0){c.addChildAt(this._createCell(this.getColumnAt(b).getBodyCell(d)),0)}return this._redrawItem(c,d,a)},addColumn:function(a){return this.addColumnAt(a,this.numColumns())},addColumnAt:function(b,a){if(!this.hasColumn(b)){this._cols.splice(a,0,b);b._setTable(this);this.header.addChildAt(this._createCell(b.getHeaderCell()),a);this.footer.addChildAt(this._createCell(b.getFooterCell()),a);if(b.isPrimary()){this.header.getChildAt(a).setAttr("width","100%")}var c=this.numItems();while(c-->0){this.items.getChildAt(c).addChildAt(new OjTableCell(this._cols[a].getBodyCell(this._data_provider[c])),a)}this.redraw()}},getColumnAt:function(a){return this._cols[a]},getColumnIndex:function(a){return this._cols.indexOf(a)},hasColumn:function(a){return this.getColumnIndex(a)!=-1},numColumns:function(){return this._cols.length},removeColumn:function(a){return this.removeColumnAt(this.getColumnIndex(a))},removeColumnAt:function(a){var b=this._cols.splice(a,1);if(this.header&&!(this.header.numChildren()<a)){this.header.removeChildAt(a)}if(this.footer&&!(this.footer.numChildren()<a)){this.footer.removeChildAt(a)}var c=this.numItems(),d;while(c-->0){d=this.items.getChildAt(c);if(d&&!(d.numChildren()<a)){OJ.destroy(d.removeChildAt(a))}}this.redraw();return b},getColumns:function(){var a=[],b=this.numColumns();while(b-->0){a.unshift(this.getColumnAt(b))}return a},setColumns:function(b){var c=b.length,a;for(a=0;a<c;a++){this.addColumn(b[a])}}});