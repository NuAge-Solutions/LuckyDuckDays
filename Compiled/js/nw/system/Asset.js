OJ.importJs("oj.net.Rpc");"use strict";OJ.extendClass(OjObject,"NwAsset",{_props_:{source:null},_constructor:function(){this._super("NwRpc","_constructor",arguments);this._request.getData()["gateway"]=NW.getGateway()}});