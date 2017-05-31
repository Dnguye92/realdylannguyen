const studentGrades = [
	{
		idNum: 7911,
		totalPoints: 41,
		percent: 100
	},
	{
		idNum: 3956,
		totalPoints: 41,
		percent: 100
	},
	{
		idNum: 2557,
		totalPoints: 41,
		percent: 100
	},
	{
		idNum: 9904,
		totalPoints: 41,
		percent: 100
	},
	{
		idNum: 2728,
		totalPoints: 41,
		percent: 100
	},
	{
		idNum: 2330,
		totalPoints: 41,
		percent: 100
	},
	{
		idNum: 1250,
		totalPoints: 41,
		percent: 100
	},
	{
		idNum: 5359,
		totalPoints: 41,
		percent: 100
	},
	{
		idNum: 5852,
		totalPoints: 41,
		percent: 100
	},
	{
		idNum: 4218,
		totalPoints: 40.5,
		percent: 99
	},
	{
		idNum: 7748,
		totalPoints: 40.5,
		percent: 99
	},
	{
		idNum: 8477,
		totalPoints: 40.5,
		percent: 99
	},
	{
		idNum: 0146,
		totalPoints: 40,
		percent: 98
	},
	{
		idNum: 9624,
		totalPoints: 40,
		percent: 98
	},
	{
		idNum: 6919,
		totalPoints: 40,
		percent: 98 
	},
	{
		idNum: 6678,
		totalPoints: 40,
		percent: 98
	},
	{
		idNum: 6995,
		totalPoints: 40,
		percent: 98
	},
	{
		idNum: 1284,
		totalPoints: 40,
		percent: 98
	},
	{
		idNum: 8949,
		totalPoints: 40,
		percent: 98
	},
	{
		idNum: 5416,
		totalPoints: 39.5,
		percent: 96
	},
	{
		idNum: 6856,
		totalPoints: 39.5,
		percent: 96
	},
	{
		idNum: 1140,
		totalPoints: 39.5,
		percent: 96
	},
	{
		idNum: 3668,
		totalPoints: 39.5,
		percent: 96
	},
	{
		idNum: 5813,
		totalPoints: 39.5,
		percent: 96
	},
	{
		idNum: 5029,
		totalPoints: 39.5,
		percent: 96
	},
	{
		idNum: 6619,
		totalPoints: 39.5,
		percent: 96
	},
	{
		idNum: 3856,
		totalPoints: 39,
		percent: 95
	},
	{
		idNum: 8439,
		totalPoints: 39,
		percent: 95
	},
	{
		idNum: 1720,
		totalPoints: 39,
		percent: 95
	},
	{
		idNum: 2823,
		totalPoints: 39,
		percent: 95
	},
	{
		idNum: 7534,
		totalPoints: 39,
		percent: 95
	},
	{
		idNum: 6697,
		totalPoints: 39,
		percent: 95
	},
	{
		idNum: 3209,
		totalPoints: 39,
		percent: 95
	},
	{
		idNum: 6092,
		totalPoints: 39,
		percent: 95
	},
	{
		idNum: 3472,
		totalPoints: 39,
		percent: 95
	},
	{
		idNum: 8550,
		totalPoints: 39,
		percent: 95
	},
	{
		idNum: 0335,
		totalPoints: 38.5,
		percent: 94
	},
	{
		idNum: 6180,
		totalPoints: 38,
		percent: 93
	},
	{
		idNum: 4868,
		totalPoints: 38,
		percent: 93
	},
	{
		idNum: 2510,
		totalPoints: 37.5,
		percent: 91
	},
	{
		idNum: 1388,
		totalPoints: 37.5,
		percent: 91
	},
	{
		idNum: 7834,
		totalPoints: 37,
		percent: 90
	},
	{
		idNum: 5732,
		totalPoints: 37,
		percent: 90
	},
	{
		idNum: 4523,
		totalPoints: 37,
		percent: 90
	},
	{
		idNum: 3665,
		totalPoints: 37,
		percent: 90
	},
	{
		idNum: 2687,
		totalPoints: 36.5,
		percent: 89
	},
	{
		idNum: 3477,
		totalPoints: 36.5,
		percent: 89
	},
	{
		idNum: 0966,
		totalPoints: 36.5,
		percent: 89
	},
	{
		idNum: 9991,
		totalPoints: 36,
		percent: 88
	},
	{
		idNum: 0712,
		totalPoints: 36,
		percent: 88
	},
	{
		idNum: 1911,
		totalPoints: 35.5,
		percent: 87
	},
	{
		idNum: 0176,
		totalPoints: 35.5,
		percent: 87
	},
	{
		idNum: 7932,
		totalPoints: 35.5,
		percent: 87
	},
	{
		idNum: 7747,
		totalPoints: 35.5,
		percent: 87
	},
	{
		idNum: 4403,
		totalPoints: 35,
		percent: 85
	},
	{
		idNum: 1644,
		totalPoints: 35 ,
		percent: 85
	},
	{
		idNum: 6725,
		totalPoints: 34.5,
		percent: 84
	},
	{
		idNum: 0689,
		totalPoints: 34.5,
		percent: 84
	},
	{
		idNum: 3367,
		totalPoints: 34,
		percent: 83
	},
	{
		idNum: 4966,
		totalPoints: 34,
		percent: 83
	},
	{
		idNum: 7529,
		totalPoints: 34,
		percent: 83
	},
	{
		idNum: 0925,
		totalPoints: 32,
		percent: 78
	},
	{
		idNum: 6687,
		totalPoints: 31,
		percent: 76
	},
	{
		idNum: 2744,
		totalPoints: 30.5,
		percent: 74
	},
	{
		idNum: 4669,
		totalPoints: 29.5,
		percent: 72
	},
	{
		idNum: 4844,
		totalPoints: 29,
		percent: 71
	},
	{
		idNum: 6859,
		totalPoints: 28.5,
		percent: 70
	},
	{
		idNum: 9038,
		totalPoints: 27,
		percent: 66
	},
	{
		idNum: 3999,
		totalPoints: 26,
		percent: 63
	},
	{
		idNum: 3239,
		totalPoints: 26,
		percent: 63
	},
	{
		idNum: 8947,
		totalPoints: 25.5,
		percent: 62
	},
	{
		idNum: 0171,
		totalPoints: 25,
		percent: 61
	},
	{
		idNum: 6339,
		totalPoints: 24.5,
		percent: 60
	},
	{
		idNum: 6251,
		totalPoints: 19,
		percent: 46
	},
	{
		idNum: 1469,
		totalPoints: 14,
		percent: 34
	},
	{
		idNum: 7708,
		totalPoints: 5,
		percent: 12
	},
	{
		idNum: 6103,
		totalPoints: 4,
		percent: 10
	}
]
studentButton.addEventListener('click', () => {
	let studentButton = document.getElementById('studentButton');
	let studentId = document.getElementById('studentId').value;

	for(i = 0; i < studentGrades.length; i++) {
		if(studentId == studentGrades[i].idNum) {
			document.getElementById('student').innerHTML = studentGrades[i].idNum;
			document.getElementById('totalPoints').textContent = studentGrades[i].totalPoints + ' / 41 pts';
			document.getElementById('percentage').textContent = studentGrades[i].percent + '%';
			return
		} else {
			document.getElementById('student').innerHTML = 'Invalid Student ID!!';
			document.getElementById('totalPoints').textContent = '';
			document.getElementById('percentage').textContent = '';
		}
	}
})
