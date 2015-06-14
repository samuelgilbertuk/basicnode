var fid = require('./FIDModel.js');
var fidReader = require('./FIDReader');

var fidList = fidReader('./CLASS1MASTER.DAT');

for (var loop=0;loop < fidList.length; loop++)
{
	record = new fid(fidList[loop]);
//	record.log();
}
console.log(fidList.length);


console.log('Finding');


function cb(err,records)
{
	console.log("Callback")
	if (err)
	{
		console.log(err);
	}
	else
	{
		for (var loop=0;loop< records.length;loop++)
		{
			console.log(records[loop].FID);
		}
	}
};

console.log("<<1>>");
fid.find({}).sort({FID:1}).skip(0).limit(20).exec(cb);
console.log("<<2>>");
fid.find({}).sort({FID:1}).skip(10).limit(20).exec(cb);
console.log("<<3>>");
fid.find({}).sort({FID:1}).skip(20).limit(20).exec(cb);
console.log("<<4>>");
fid.find({}).sort({FID:1}).skip(30).limit(20).exec(cb);
console.log("<<5>>");
fid.find({}).sort({FID:1}).skip(40).limit(20).exec(cb);
console.log("<<6>>");
