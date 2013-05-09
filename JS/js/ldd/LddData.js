OJ.importJs('nw.data.NwData');
OJ.importJs('nw.data.properties.NwDateProperty');


'use strict';

OJ.extendClass(
	NwData, 'LddData',
	{},
	{
		'DEFINITION' : OJ.merge(
			{
				'created' : new NwDateProperty(),
				'updated' : new NwDateProperty()
			},
			NwData.DEFINITION
		)
	}
)