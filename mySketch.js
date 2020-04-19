
let socket = io.connect(":30000?sketch=876428")

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	userStartAudio();
	socket.on("sending", setFreq)
	socket.on("respond", calcDist)
	socket.on("distance", setDist)
  pulse = new p5.Pulse();
	fft = new p5.FFT();
  pulse.amp(1);
	f = 1000
	a = 1
	w = 0.001
	time = false
	startTime = false
	distance = false
  pulse.freq(f);
	userStartAudio()
  mic = new p5.AudioIn();
  mic.start();
	mic.connect(fft);
	micLevel = 0;
	del = 60;
	id = random([1,2,3,4,5,6,7,8,9])
}

function draw(){
  background(0);
  fill(255);
	let spectrum = fft.analyze();
	oldmicLevel = micLevel
  micLevel = fft.getEnergy(f)
	if(micLevel != oldmicLevel && micLevel > 30 && del > 60){
		date = new Date();
		time = date.getTime()
		socket.emit("respond", time, id)
		print("Responding: " + time + " " + id)
		del = 0
	}
  let y = height - micLevel/255 * height;
	textSize(32)
	if(distance){
		let string = distance + "m"
		let w = textWidth(string)
		text(string, (width-w)/2, height/2)}
	del ++
}

function mousePressed() {
	startDate = new Date();
	startTime = startDate.getTime()
	socket.emit("sending", f)
  pulse.start();
  pulse.amp(a, w);
	pulse.freq(f);
}

function mouseReleased() {
	pulse.stop()
  //pulse.amp(0, 0.01);
	//pulse.freq(f);
}
