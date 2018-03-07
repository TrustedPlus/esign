import io from 'socket.io-client';

var socket = io.connect('https://localhost:4040');
var formsign = document.getElementById('sign');
var formverify = document.getElementById('verify');

var file1 = {};
file1.name = 'filename1.txt';
file1.url = 'http://localhost:3000/resources/file1.txt'
file1.id = 1;

var file2 = {};
file2.name = 'filename2.txt';
file2.url = 'http://localhost:3000/resources/file2.txt'
file2.id = 2;

var file3 = {};
file3.name = 'filename3.txt';
file3.url = 'http://localhost:3000/resources/file3.txt'
file3.id = 3;

var file4 = {};
file4.name = 'filename4.sig';
file4.url = 'http://localhost:3000/resources/file4.sig'
file4.id = 4;

var signRequest = {};
signRequest.jsonrpc = '2.0';
signRequest.method = 'sign';
signRequest.params = {};
signRequest.params.token = '';
signRequest.params.files = [file1, file2, file3];
signRequest.params.extra = {};
signRequest.params.uploader = 'https://bitrix.tsumo.org/bitrix/components/trustednet/trustednet.sign/ajax.php?command=upload';
signRequest.params.cancel = 'https://bitrix.tsumo.org/bitrix/components/trustednet/trustednet.sign/ajax.php?command=updateStatus&status=2';
signRequest.params.error = 'https://bitrix.tsumo.org/bitrix/components/trustednet/trustednet.sign/ajax.php?command=updateStatus&status=3';

socket.on('signed', function (data) {
	console.log('signed: ', data);
});

formsign.onsubmit = function(ev) {
	ev.preventDefault();

	socket.emit("sign", signRequest);
}

var verifyRequest = {};
verifyRequest.jsonrpc = '2.0';
verifyRequest.method = 'verify';
verifyRequest.params = {};
verifyRequest.params.token = '';
verifyRequest.params.files = [file4];
verifyRequest.params.extra = {};

formverify.onsubmit = function(ev) {
	ev.preventDefault();

	socket.emit("verify", verifyRequest);
}

socket.on('verified', function (data) {
	console.log('verified: ', data);
});
