var fs = require('fs');
var FIDList = [];

	
function createFIDEntry(line)
{
	var acronym 	= line.substring(0,14).trim();
	var fieldID		= line.substring(15,20).trim();
	var rippleField = line.substring(20,30).trim();
	var transmissionEncoding = line.substring(31,40).trim();
	var displayEncoding = line.substring(41,50).trim();
	var fieldLength = line.substring(51,60).trim();

	var obj = { ACR: acronym,
				FID: fieldID,
				RIP: rippleField,
				TEF: transmissionEncoding,
				DIF: displayEncoding,
				LEN: fieldLength };

	return obj; 
}


function processFIDFile(filename)
{
	var buffer = fs.readFileSync(filename);
	var lines = buffer.toString().split('\n');

	for (var loop = 0; loop<lines.length;loop++)
	{
		var line = lines[loop];
		if (line[0] != '!' && line.length > 0)
		{
			var obj = createFIDEntry(line)
			FIDList.push(obj);
		}
	}

	return FIDList;
}


module.exports = processFIDFile;