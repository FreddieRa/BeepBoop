function setFreq(freq) {
	f = freq
}

function setDist(dis, rid) {
	if(rid != id){
		//distance = dis
	}
}

function calcDist(rTime, rid) {
	if (rid != id) {
		print(startTime)
		print(rTime)
		let delay = (rTime - startTime)
		print(delay)
		distance = 0
		let temp = ((delay-125)/10)
		print(temp)
		//if(0.1 < temp && temp < 12) {
			distance = temp.toFixed(3)
		//}
		print("Distance: " + distance + "m")
		socket.emit("distance", distance, id)
	}
}