var mongoose = require('mongoose');
mongoose.connect('mongodb://user:zaq12wsx@ds047612.mongolab.com:47612/fids');

var schema = mongoose.Schema;
var fidSchema = new schema( {ACR:String, FID:String, RIP: String, TEF: String, DIF:String, LEN: String } );

fidSchema.methods.log = function()
{
	console.log('Acronym    : '	+ this.ACR + '\n' +
				'Field ID   : '	+ this.FID + '\n' +
				'Ripples To : '	+ this.RIP + '\n' +
				'TEF Format : '	+ this.TEF + '\n' +
				'DIF Format : '	+ this.DIF + '\n' +
				'Length     : '	+ this.LEN + '\n');
}

var fid = mongoose.model('fid',fidSchema);
module.exports = fid;


