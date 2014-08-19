var places = [
{time: "2014-06-24 16:00:00", location: {latitude: -30.1,longitude: -51.1}, count: 1
, team: 1},
{time: "2014-06-24 16:00:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:01:00", location: {latitude: 18.1,longitude: -66.1}, count: 1
, team: 1},
{time: "2014-06-24 16:01:00", location: {latitude: 26.1,longitude: -80.1}, count: 1
, team: 1},
{time: "2014-06-24 16:01:00", location: {latitude: 29.8,longitude: -95.2}, count: 1
, team: 1},
{time: "2014-06-24 16:01:00", location: {latitude: 3.2,longitude: 101.6}, count: 1
, team: 1},
{time: "2014-06-24 16:01:00", location: {latitude: 40.8,longitude: -73.3}, count: 1
, team: 1},
{time: "2014-06-24 16:01:00", location: {latitude: 49.2,longitude: -121.9}, count: 1
, team: 1},
{time: "2014-06-24 16:01:00", location: {latitude: 5.1,longitude: -75.5}, count: 1
, team: 1},
{time: "2014-06-24 16:01:00", location: {latitude: 53.5,longitude: -1.9}, count: 1
, team: 1},
{time: "2014-06-24 16:01:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:02:00", location: {latitude: -19.9,longitude: -43.9}, count: 1
, team: 1},
{time: "2014-06-24 16:02:00", location: {latitude: -34.6,longitude: -58.6}, count: 1
, team: 1},
{time: "2014-06-24 16:02:00", location: {latitude: 10.0,longitude: -84.0}, count: 2
, team: 1},
{time: "2014-06-24 16:02:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:02:00", location: {latitude: 10.0,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 16:02:00", location: {latitude: 10.1,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 16:02:00", location: {latitude: 5.2,longitude: 96.8}, count: 1
, team: 1},
{time: "2014-06-24 16:02:00", location: {latitude: 50.9,longitude: 7.1}, count: 1
, team: 1},
{time: "2014-06-24 16:02:00", location: {latitude: 53.3,longitude: 15.0}, count: 1
, team: 1},
{time: "2014-06-24 16:02:00", location: {latitude: 53.5,longitude: -1.5}, count: 1
, team: 1},
{time: "2014-06-24 16:02:00", location: {latitude: 8.1,longitude: -81.0}, count: 1
, team: 1},
{time: "2014-06-24 16:02:00", location: {latitude: 8.5,longitude: -80.4}, count: 1
, team: 1},
{time: "2014-06-24 16:02:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:02:00", location: {latitude: 9.9,longitude: -83.9}, count: 2
, team: 1},
{time: "2014-06-24 16:02:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: -22.8,longitude: -47.1}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: -27.5,longitude: -59.0}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: -34.5,longitude: -58.7}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: -4.1,longitude: -63.1}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 10.0,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 10.1,longitude: -84.5}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 10.2,longitude: -83.6}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 14.1,longitude: -87.2}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 25.2,longitude: 51.6}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 29.3,longitude: 48.0}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 29.5,longitude: -98.7}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 29.8,longitude: -95.2}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 34.2,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 36.1,longitude: -80.3}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 43.4,longitude: 6.8}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 50.7,longitude: 1.6}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 51.2,longitude: -0.8}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 51.3,longitude: 0.2}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 53.8,longitude: -1.7}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 7.5,longitude: 4.5}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 8.9,longitude: -83.1}, count: 1
, team: 1},
{time: "2014-06-24 16:03:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: -22.9,longitude: -43.4}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: -3.8,longitude: -38.6}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: -31.4,longitude: -64.1}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: -37.0,longitude: -60.3}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 1.2,longitude: -77.3}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 10.0,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 10.2,longitude: -83.6}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 10.2,longitude: -85.5}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 13.7,longitude: -89.2}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 26.1,longitude: -80.1}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 29.6,longitude: -95.5}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 32.0,longitude: 35.9}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 33.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 4.7,longitude: -74.1}, count: 2
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 41.0,longitude: 29.2}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 41.6,longitude: -4.7}, count: 2
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 48.6,longitude: 7.8}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 48.9,longitude: 2.2}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 52.0,longitude: 8.5}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 53.1,longitude: -3.0}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 53.5,longitude: -2.3}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 9.1,longitude: -79.5}, count: 1
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 9.9,longitude: -83.9}, count: 2
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 9.9,longitude: -84.0}, count: 3
, team: 1},
{time: "2014-06-24 16:04:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: -36.8,longitude: -73.0}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: -37.0,longitude: -60.3}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: -8.1,longitude: -34.9}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: -8.6,longitude: 115.2}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 10.0,longitude: -84.1}, count: 4
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 10.1,longitude: -85.4}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 14.0,longitude: 100.8}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 14.6,longitude: -90.7}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 15.5,longitude: -88.0}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 23.7,longitude: 58.2}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 25.7,longitude: -100.4}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 42.4,longitude: -71.0}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 42.5,longitude: -90.7}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 43.7,longitude: 7.1}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 48.9,longitude: 2.2}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 48.9,longitude: 2.3}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 5.0,longitude: -75.5}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 53.0,longitude: -1.0}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 53.5,longitude: -2.0}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 8.5,longitude: -82.8}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 9.4,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 9.9,longitude: -84.0}, count: 2
, team: 1},
{time: "2014-06-24 16:05:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: -0.0,longitude: -51.2}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: -7.6,longitude: 112.7}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 10.2,longitude: -61.5}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 12.1,longitude: -86.3}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 14.0,longitude: 100.8}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 15.3,longitude: -91.5}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 16.0,longitude: 100.0}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 18.0,longitude: -92.9}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 24.8,longitude: -107.4}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 26.6,longitude: -80.1}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 34.3,longitude: -118.8}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 40.2,longitude: -8.4}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 40.4,longitude: -3.7}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 47.3,longitude: 5.0}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 53.4,longitude: -1.5}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 53.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 54.9,longitude: -3.0}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 9.4,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:06:00", location: {latitude: 9.9,longitude: -84.5}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: -26.1,longitude: 27.7}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: -33.0,longitude: -60.7}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: -34.9,longitude: -57.9}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 1.3,longitude: 103.9}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 10.0,longitude: -84.2}, count: 2
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 13.7,longitude: -89.3}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 18.5,longitude: -70.0}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 34.2,longitude: -117.6}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 34.2,longitude: -118.5}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 34.3,longitude: -118.8}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 48.7,longitude: 3.2}, count: 2
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 53.5,longitude: -2.7}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 56.0,longitude: -4.6}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 9.7,longitude: -84.7}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 9.9,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 9.9,longitude: -84.0}, count: 2
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:07:00", location: {latitude: 9.9,longitude: -84.5}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: -5.4,longitude: 105.2}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: -6.2,longitude: 106.8}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: -6.3,longitude: 107.0}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: -8.1,longitude: -35.0}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: -8.5,longitude: -78.9}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 19.1,longitude: -98.2}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 28.5,longitude: -81.4}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 29.7,longitude: -95.6}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 30.2,longitude: -95.4}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 33.6,longitude: 130.4}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 4.7,longitude: -74.0}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 40.0,longitude: 116.3}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 43.6,longitude: -79.6}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 50.8,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 51.7,longitude: -0.5}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 51.8,longitude: -3.8}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 52.1,longitude: -0.8}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 52.6,longitude: -2.1}, count: 1
, team: 1},
{time: "2014-06-24 16:08:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:09:00", location: {latitude: -12.1,longitude: -77.1}, count: 1
, team: 1},
{time: "2014-06-24 16:09:00", location: {latitude: -20.0,longitude: -45.2}, count: 1
, team: 1},
{time: "2014-06-24 16:09:00", location: {latitude: -35.7,longitude: -63.8}, count: 1
, team: 1},
{time: "2014-06-24 16:09:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:09:00", location: {latitude: 13.0,longitude: 77.6}, count: 1
, team: 1},
{time: "2014-06-24 16:09:00", location: {latitude: 27.9,longitude: -82.3}, count: 1
, team: 1},
{time: "2014-06-24 16:09:00", location: {latitude: 40.7,longitude: -75.2}, count: 1
, team: 1},
{time: "2014-06-24 16:09:00", location: {latitude: 42.6,longitude: -73.7}, count: 1
, team: 1},
{time: "2014-06-24 16:09:00", location: {latitude: 50.8,longitude: 3.2}, count: 1
, team: 1},
{time: "2014-06-24 16:09:00", location: {latitude: 57.3,longitude: -2.3}, count: 1
, team: 1},
{time: "2014-06-24 16:09:00", location: {latitude: 8.0,longitude: -80.4}, count: 1
, team: 1},
{time: "2014-06-24 16:09:00", location: {latitude: 9.8,longitude: -83.9}, count: 2
, team: 1},
{time: "2014-06-24 16:09:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:09:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:10:00", location: {latitude: -0.2,longitude: -78.5}, count: 1
, team: 1},
{time: "2014-06-24 16:10:00", location: {latitude: -6.1,longitude: 106.8}, count: 1
, team: 1},
{time: "2014-06-24 16:10:00", location: {latitude: 10.1,longitude: 122.9}, count: 1
, team: 1},
{time: "2014-06-24 16:10:00", location: {latitude: 35.6,longitude: -77.4}, count: 1
, team: 1},
{time: "2014-06-24 16:10:00", location: {latitude: 35.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:10:00", location: {latitude: 40.4,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 16:10:00", location: {latitude: 43.7,longitude: 7.1}, count: 1
, team: 1},
{time: "2014-06-24 16:10:00", location: {latitude: 51.3,longitude: -0.0}, count: 1
, team: 1},
{time: "2014-06-24 16:10:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:10:00", location: {latitude: 8.0,longitude: -80.4}, count: 1
, team: 1},
{time: "2014-06-24 16:10:00", location: {latitude: 8.5,longitude: -82.8}, count: 1
, team: 1},
{time: "2014-06-24 16:10:00", location: {latitude: 8.6,longitude: -83.0}, count: 1
, team: 1},
{time: "2014-06-24 16:10:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: -33.0,longitude: -60.7}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 10.3,longitude: -85.0}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 18.2,longitude: -66.0}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 25.1,longitude: 55.1}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 27.5,longitude: -81.8}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 4.7,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 43.4,longitude: 6.8}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 51.5,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 51.5,longitude: -2.5}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 53.1,longitude: -3.0}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 55.8,longitude: -4.4}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 9.4,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 9.5,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 9.9,longitude: -84.0}, count: 2
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 9.9,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:11:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: -6.2,longitude: 106.9}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 10.5,longitude: -84.6}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 37.0,longitude: -76.6}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 37.6,longitude: -122.3}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 40.0,longitude: -4.8}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 41.7,longitude: -87.8}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 47.0,longitude: 6.9}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 51.9,longitude: -0.2}, count: 2
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 52.4,longitude: -2.0}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 53.0,longitude: -2.0}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 6.0,longitude: -75.4}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 9.1,longitude: -79.5}, count: 1
, team: 1},
{time: "2014-06-24 16:12:00", location: {latitude: 9.9,longitude: -84.1}, count: 4
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: -23.5,longitude: -46.4}, count: 1
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: -23.6,longitude: -46.4}, count: 1
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: -23.6,longitude: -46.7}, count: 1
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: 10.0,longitude: -83.0}, count: 1
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: 10.0,longitude: -84.2}, count: 2
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: 14.7,longitude: -91.9}, count: 1
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: 24.8,longitude: 46.8}, count: 1
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: 34.3,longitude: -118.8}, count: 1
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: 40.8,longitude: -73.5}, count: 1
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: 51.6,longitude: -2.9}, count: 1
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: 52.7,longitude: -2.7}, count: 1
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: 53.3,longitude: -6.3}, count: 1
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: 53.4,longitude: -1.5}, count: 1
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: 9.9,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:13:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: -23.6,longitude: -46.4}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: -38.1,longitude: -57.6}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 10.0,longitude: -83.0}, count: 2
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 10.4,longitude: -75.5}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 14.5,longitude: -90.6}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 18.5,longitude: -88.5}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 25.1,longitude: 55.3}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 33.3,longitude: -86.9}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 39.7,longitude: -94.8}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 45.8,longitude: 1.3}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 5.1,longitude: -75.5}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 50.4,longitude: 2.8}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 53.5,longitude: -2.7}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 53.8,longitude: -1.4}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 55.9,longitude: -4.4}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 9.9,longitude: -83.9}, count: 3
, team: 1},
{time: "2014-06-24 16:14:00", location: {latitude: 9.9,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:15:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:15:00", location: {latitude: 20.6,longitude: -103.5}, count: 1
, team: 1},
{time: "2014-06-24 16:15:00", location: {latitude: 30.4,longitude: -97.7}, count: 1
, team: 1},
{time: "2014-06-24 16:15:00", location: {latitude: 4.7,longitude: -74.1}, count: 2
, team: 1},
{time: "2014-06-24 16:15:00", location: {latitude: 41.7,longitude: -87.6}, count: 1
, team: 1},
{time: "2014-06-24 16:15:00", location: {latitude: 45.5,longitude: -73.5}, count: 1
, team: 1},
{time: "2014-06-24 16:15:00", location: {latitude: 48.9,longitude: 2.2}, count: 1
, team: 1},
{time: "2014-06-24 16:15:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 1},
{time: "2014-06-24 16:15:00", location: {latitude: 8.6,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 16:15:00", location: {latitude: 9.3,longitude: -83.5}, count: 1
, team: 1},
{time: "2014-06-24 16:15:00", location: {latitude: 9.9,longitude: -84.0}, count: 2
, team: 1},
{time: "2014-06-24 16:15:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:16:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:16:00", location: {latitude: 10.1,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 16:16:00", location: {latitude: 10.1,longitude: -84.5}, count: 2
, team: 1},
{time: "2014-06-24 16:16:00", location: {latitude: 14.6,longitude: -90.6}, count: 1
, team: 1},
{time: "2014-06-24 16:16:00", location: {latitude: 14.7,longitude: -90.5}, count: 1
, team: 1},
{time: "2014-06-24 16:16:00", location: {latitude: 20.0,longitude: -97.2}, count: 1
, team: 1},
{time: "2014-06-24 16:16:00", location: {latitude: 50.5,longitude: -3.6}, count: 1
, team: 1},
{time: "2014-06-24 16:16:00", location: {latitude: 53.0,longitude: -2.2}, count: 1
, team: 1},
{time: "2014-06-24 16:16:00", location: {latitude: 53.8,longitude: -1.6}, count: 1
, team: 1},
{time: "2014-06-24 16:16:00", location: {latitude: 53.8,longitude: -2.7}, count: 1
, team: 1},
{time: "2014-06-24 16:16:00", location: {latitude: 8.5,longitude: -82.6}, count: 1
, team: 1},
{time: "2014-06-24 16:16:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:16:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:16:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:17:00", location: {latitude: -0.2,longitude: -78.5}, count: 1
, team: 1},
{time: "2014-06-24 16:17:00", location: {latitude: -19.8,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:17:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:17:00", location: {latitude: 14.7,longitude: 121.1}, count: 1
, team: 1},
{time: "2014-06-24 16:17:00", location: {latitude: 43.7,longitude: -79.4}, count: 1
, team: 1},
{time: "2014-06-24 16:17:00", location: {latitude: 48.7,longitude: 9.1}, count: 1
, team: 1},
{time: "2014-06-24 16:17:00", location: {latitude: 51.4,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:17:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:17:00", location: {latitude: 53.8,longitude: -2.4}, count: 1
, team: 1},
{time: "2014-06-24 16:17:00", location: {latitude: 8.9,longitude: -79.8}, count: 1
, team: 1},
{time: "2014-06-24 16:17:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:17:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:18:00", location: {latitude: -26.3,longitude: 28.1}, count: 1
, team: 1},
{time: "2014-06-24 16:18:00", location: {latitude: -6.2,longitude: 106.7}, count: 1
, team: 1},
{time: "2014-06-24 16:18:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:18:00", location: {latitude: 18.5,longitude: -66.1}, count: 1
, team: 1},
{time: "2014-06-24 16:18:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 16:18:00", location: {latitude: 40.8,longitude: -74.2}, count: 1
, team: 1},
{time: "2014-06-24 16:18:00", location: {latitude: 41.7,longitude: -0.8}, count: 1
, team: 1},
{time: "2014-06-24 16:18:00", location: {latitude: 51.7,longitude: 0.5}, count: 1
, team: 1},
{time: "2014-06-24 16:18:00", location: {latitude: 52.1,longitude: 1.1}, count: 1
, team: 1},
{time: "2014-06-24 16:18:00", location: {latitude: 8.6,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 16:18:00", location: {latitude: 9.4,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 16:18:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: -34.6,longitude: -58.4}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 10.0,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 10.0,longitude: -84.2}, count: 2
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 10.1,longitude: -83.5}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 10.2,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 26.0,longitude: -80.2}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 38.3,longitude: -112.6}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 4.6,longitude: -74.1}, count: 2
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 4.9,longitude: -74.0}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 40.7,longitude: -74.2}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 43.1,longitude: -77.6}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 45.4,longitude: -72.7}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 47.9,longitude: 1.9}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 51.0,longitude: 7.2}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 52.5,longitude: -1.5}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 53.8,longitude: -1.6}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:19:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:20:00", location: {latitude: -0.1,longitude: -78.5}, count: 1
, team: 1},
{time: "2014-06-24 16:20:00", location: {latitude: -1.5,longitude: -48.5}, count: 1
, team: 1},
{time: "2014-06-24 16:20:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:20:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:20:00", location: {latitude: 10.1,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 16:20:00", location: {latitude: 37.8,longitude: -122.4}, count: 1
, team: 1},
{time: "2014-06-24 16:20:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 16:20:00", location: {latitude: 40.7,longitude: -74.0}, count: 1
, team: 1},
{time: "2014-06-24 16:20:00", location: {latitude: 43.4,longitude: 6.8}, count: 1
, team: 1},
{time: "2014-06-24 16:20:00", location: {latitude: 51.3,longitude: -2.9}, count: 1
, team: 1},
{time: "2014-06-24 16:20:00", location: {latitude: 51.7,longitude: 7.7}, count: 1
, team: 1},
{time: "2014-06-24 16:20:00", location: {latitude: 9.3,longitude: -83.5}, count: 1
, team: 1},
{time: "2014-06-24 16:20:00", location: {latitude: 9.4,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 16:20:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:20:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:21:00", location: {latitude: -0.0,longitude: 109.4}, count: 1
, team: 1},
{time: "2014-06-24 16:21:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:21:00", location: {latitude: -22.9,longitude: -47.0}, count: 1
, team: 1},
{time: "2014-06-24 16:21:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 1},
{time: "2014-06-24 16:21:00", location: {latitude: 10.1,longitude: -84.7}, count: 1
, team: 1},
{time: "2014-06-24 16:21:00", location: {latitude: 10.2,longitude: 122.9}, count: 1
, team: 1},
{time: "2014-06-24 16:21:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 16:21:00", location: {latitude: 46.1,longitude: 4.1}, count: 1
, team: 1},
{time: "2014-06-24 16:21:00", location: {latitude: 47.0,longitude: 6.9}, count: 1
, team: 1},
{time: "2014-06-24 16:21:00", location: {latitude: 51.5,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 16:21:00", location: {latitude: 53.8,longitude: -2.7}, count: 1
, team: 1},
{time: "2014-06-24 16:21:00", location: {latitude: 9.4,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 16:21:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:21:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: -33.4,longitude: -70.6}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 10.6,longitude: -85.7}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 10.9,longitude: -85.0}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 3.9,longitude: -77.0}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 34.0,longitude: -118.3}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 34.3,longitude: -6.6}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 36.8,longitude: -114.1}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 39.6,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 48.6,longitude: -3.5}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 5.4,longitude: 73.3}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 51.4,longitude: -3.0}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 51.5,longitude: -0.1}, count: 2
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 51.8,longitude: -8.4}, count: 1
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 9.9,longitude: -84.0}, count: 2
, team: 1},
{time: "2014-06-24 16:22:00", location: {latitude: 9.9,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: -23.0,longitude: 29.9}, count: 1
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: -23.4,longitude: -48.2}, count: 1
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 10.0,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 10.1,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 10.2,longitude: -83.8}, count: 1
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 10.3,longitude: -85.0}, count: 1
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 10.4,longitude: -85.5}, count: 1
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 18.5,longitude: -69.9}, count: 1
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 18.5,longitude: -70.0}, count: 1
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 25.4,longitude: 55.5}, count: 1
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 34.4,longitude: -86.4}, count: 1
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 36.2,longitude: -86.5}, count: 1
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 51.6,longitude: 0.6}, count: 1
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 51.7,longitude: -0.4}, count: 1
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 9.9,longitude: -83.9}, count: 2
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 9.9,longitude: -84.1}, count: 6
, team: 1},
{time: "2014-06-24 16:23:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:24:00", location: {latitude: 10.0,longitude: -84.0}, count: 2
, team: 1},
{time: "2014-06-24 16:24:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:24:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:24:00", location: {latitude: 10.4,longitude: -71.5}, count: 1
, team: 1},
{time: "2014-06-24 16:24:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 16:24:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 1},
{time: "2014-06-24 16:24:00", location: {latitude: 34.3,longitude: -6.6}, count: 2
, team: 1},
{time: "2014-06-24 16:24:00", location: {latitude: 40.7,longitude: -74.3}, count: 1
, team: 1},
{time: "2014-06-24 16:24:00", location: {latitude: 41.9,longitude: -87.9}, count: 1
, team: 1},
{time: "2014-06-24 16:24:00", location: {latitude: 48.9,longitude: 2.3}, count: 1
, team: 1},
{time: "2014-06-24 16:24:00", location: {latitude: 51.1,longitude: 4.3}, count: 1
, team: 1},
{time: "2014-06-24 16:24:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:24:00", location: {latitude: 9.9,longitude: -84.1}, count: 4
, team: 1},
{time: "2014-06-24 16:25:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:25:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 16:25:00", location: {latitude: 13.0,longitude: 77.6}, count: 1
, team: 1},
{time: "2014-06-24 16:25:00", location: {latitude: 15.0,longitude: -91.8}, count: 1
, team: 1},
{time: "2014-06-24 16:25:00", location: {latitude: 19.5,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 16:25:00", location: {latitude: 25.7,longitude: -80.2}, count: 1
, team: 1},
{time: "2014-06-24 16:25:00", location: {latitude: 41.1,longitude: 29.0}, count: 1
, team: 1},
{time: "2014-06-24 16:25:00", location: {latitude: 50.7,longitude: 3.1}, count: 1
, team: 1},
{time: "2014-06-24 16:25:00", location: {latitude: 51.5,longitude: -3.1}, count: 1
, team: 1},
{time: "2014-06-24 16:25:00", location: {latitude: 8.6,longitude: -83.0}, count: 1
, team: 1},
{time: "2014-06-24 16:25:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:25:00", location: {latitude: 9.9,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: -34.8,longitude: -58.4}, count: 1
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: -7.3,longitude: 112.7}, count: 1
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: 41.0,longitude: 29.0}, count: 1
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: 41.8,longitude: -72.8}, count: 1
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: 50.5,longitude: -4.5}, count: 1
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: 50.8,longitude: 4.3}, count: 1
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: 52.1,longitude: 0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: 54.9,longitude: -3.0}, count: 1
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: 8.3,longitude: -62.7}, count: 1
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: 9.1,longitude: -79.5}, count: 1
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: 9.4,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: 9.9,longitude: -84.0}, count: 2
, team: 1},
{time: "2014-06-24 16:26:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:27:00", location: {latitude: -5.8,longitude: -35.2}, count: 1
, team: 1},
{time: "2014-06-24 16:27:00", location: {latitude: -6.3,longitude: 106.8}, count: 1
, team: 1},
{time: "2014-06-24 16:27:00", location: {latitude: 10.0,longitude: -84.2}, count: 3
, team: 1},
{time: "2014-06-24 16:27:00", location: {latitude: 14.1,longitude: -87.2}, count: 1
, team: 1},
{time: "2014-06-24 16:27:00", location: {latitude: 25.7,longitude: -100.3}, count: 1
, team: 1},
{time: "2014-06-24 16:27:00", location: {latitude: 37.8,longitude: -122.4}, count: 1
, team: 1},
{time: "2014-06-24 16:27:00", location: {latitude: 49.2,longitude: 6.1}, count: 1
, team: 1},
{time: "2014-06-24 16:27:00", location: {latitude: 51.4,longitude: -0.2}, count: 1
, team: 1},
{time: "2014-06-24 16:27:00", location: {latitude: 51.6,longitude: 0.6}, count: 1
, team: 1},
{time: "2014-06-24 16:27:00", location: {latitude: 53.5,longitude: -2.0}, count: 1
, team: 1},
{time: "2014-06-24 16:27:00", location: {latitude: 53.5,longitude: -2.7}, count: 1
, team: 1},
{time: "2014-06-24 16:27:00", location: {latitude: 9.4,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:27:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:27:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: -24.2,longitude: -64.9}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: -3.1,longitude: -60.0}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: -33.4,longitude: -70.6}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: -8.5,longitude: -78.9}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 14.7,longitude: -90.5}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 29.4,longitude: -98.5}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 40.6,longitude: -74.2}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 40.9,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 50.4,longitude: -3.6}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 52.9,longitude: -0.2}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 53.7,longitude: -0.9}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 54.5,longitude: -0.7}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 54.8,longitude: -1.3}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 54.9,longitude: -3.0}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 9.4,longitude: -70.4}, count: 1
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 9.9,longitude: -84.1}, count: 4
, team: 1},
{time: "2014-06-24 16:28:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:29:00", location: {latitude: 10.0,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:29:00", location: {latitude: 10.9,longitude: -74.8}, count: 1
, team: 1},
{time: "2014-06-24 16:29:00", location: {latitude: 12.9,longitude: 77.5}, count: 1
, team: 1},
{time: "2014-06-24 16:29:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 1},
{time: "2014-06-24 16:29:00", location: {latitude: 19.5,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 16:29:00", location: {latitude: 21.5,longitude: -104.9}, count: 1
, team: 1},
{time: "2014-06-24 16:29:00", location: {latitude: 27.7,longitude: 85.4}, count: 1
, team: 1},
{time: "2014-06-24 16:29:00", location: {latitude: 34.3,longitude: -118.8}, count: 1
, team: 1},
{time: "2014-06-24 16:29:00", location: {latitude: 5.2,longitude: 100.8}, count: 1
, team: 1},
{time: "2014-06-24 16:29:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:30:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:30:00", location: {latitude: 38.9,longitude: -77.0}, count: 1
, team: 1},
{time: "2014-06-24 16:30:00", location: {latitude: 40.7,longitude: -74.3}, count: 2
, team: 1},
{time: "2014-06-24 16:30:00", location: {latitude: 51.3,longitude: -0.2}, count: 1
, team: 1},
{time: "2014-06-24 16:30:00", location: {latitude: 51.4,longitude: 0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:30:00", location: {latitude: 51.9,longitude: 0.9}, count: 1
, team: 1},
{time: "2014-06-24 16:30:00", location: {latitude: 9.9,longitude: -84.0}, count: 2
, team: 1},
{time: "2014-06-24 16:30:00", location: {latitude: 9.9,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: -33.4,longitude: -60.2}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 0.3,longitude: 37.9}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 1.4,longitude: 103.9}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 10.4,longitude: -75.5}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 10.6,longitude: -71.6}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 35.1,longitude: -80.6}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 36.2,longitude: -86.5}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 37.4,longitude: -122.2}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 39.9,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 40.0,longitude: -4.0}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 41.1,longitude: 29.0}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 45.5,longitude: -73.5}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 5.4,longitude: 73.3}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 50.4,longitude: -4.2}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 50.6,longitude: 5.8}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 50.7,longitude: -3.5}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 52.3,longitude: -2.0}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 59.3,longitude: 18.0}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 9.9,longitude: -83.9}, count: 3
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:31:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:32:00", location: {latitude: -6.3,longitude: 106.8}, count: 1
, team: 1},
{time: "2014-06-24 16:32:00", location: {latitude: 10.3,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 16:32:00", location: {latitude: 10.5,longitude: -73.3}, count: 1
, team: 1},
{time: "2014-06-24 16:32:00", location: {latitude: 13.7,longitude: 100.5}, count: 1
, team: 1},
{time: "2014-06-24 16:32:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 1},
{time: "2014-06-24 16:32:00", location: {latitude: 18.5,longitude: -69.9}, count: 1
, team: 1},
{time: "2014-06-24 16:32:00", location: {latitude: 19.3,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 16:32:00", location: {latitude: 20.0,longitude: -97.2}, count: 1
, team: 1},
{time: "2014-06-24 16:32:00", location: {latitude: 5.3,longitude: -4.0}, count: 1
, team: 1},
{time: "2014-06-24 16:32:00", location: {latitude: 53.6,longitude: -2.3}, count: 2
, team: 1},
{time: "2014-06-24 16:32:00", location: {latitude: 54.3,longitude: -1.6}, count: 1
, team: 1},
{time: "2014-06-24 16:32:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:32:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:32:00", location: {latitude: 9.9,longitude: -84.2}, count: 2
, team: 1},
{time: "2014-06-24 16:33:00", location: {latitude: -25.5,longitude: -49.3}, count: 1
, team: 1},
{time: "2014-06-24 16:33:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:33:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:33:00", location: {latitude: 10.3,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 16:33:00", location: {latitude: 13.7,longitude: -89.3}, count: 1
, team: 1},
{time: "2014-06-24 16:33:00", location: {latitude: 5.0,longitude: -73.5}, count: 1
, team: 1},
{time: "2014-06-24 16:33:00", location: {latitude: 51.2,longitude: 16.9}, count: 1
, team: 1},
{time: "2014-06-24 16:33:00", location: {latitude: 53.4,longitude: -2.9}, count: 1
, team: 1},
{time: "2014-06-24 16:33:00", location: {latitude: 55.5,longitude: -4.3}, count: 1
, team: 1},
{time: "2014-06-24 16:33:00", location: {latitude: 56.5,longitude: -3.0}, count: 1
, team: 1},
{time: "2014-06-24 16:33:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:34:00", location: {latitude: -33.1,longitude: -71.6}, count: 1
, team: 1},
{time: "2014-06-24 16:34:00", location: {latitude: 10.0,longitude: -84.2}, count: 2
, team: 1},
{time: "2014-06-24 16:34:00", location: {latitude: 10.1,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 16:34:00", location: {latitude: 10.2,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 16:34:00", location: {latitude: 10.3,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 16:34:00", location: {latitude: 10.5,longitude: -73.3}, count: 1
, team: 1},
{time: "2014-06-24 16:34:00", location: {latitude: 24.6,longitude: 46.7}, count: 1
, team: 1},
{time: "2014-06-24 16:34:00", location: {latitude: 33.6,longitude: -7.6}, count: 1
, team: 1},
{time: "2014-06-24 16:34:00", location: {latitude: 39.6,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 16:34:00", location: {latitude: 41.1,longitude: 1.1}, count: 1
, team: 1},
{time: "2014-06-24 16:34:00", location: {latitude: 53.5,longitude: -0.1}, count: 2
, team: 1},
{time: "2014-06-24 16:34:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:34:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:35:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 1},
{time: "2014-06-24 16:35:00", location: {latitude: -23.0,longitude: -43.3}, count: 2
, team: 1},
{time: "2014-06-24 16:35:00", location: {latitude: -3.1,longitude: -60.0}, count: 1
, team: 1},
{time: "2014-06-24 16:35:00", location: {latitude: -33.4,longitude: -70.5}, count: 1
, team: 1},
{time: "2014-06-24 16:35:00", location: {latitude: -6.3,longitude: 106.8}, count: 2
, team: 1},
{time: "2014-06-24 16:35:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:35:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:35:00", location: {latitude: 13.7,longitude: -89.2}, count: 1
, team: 1},
{time: "2014-06-24 16:35:00", location: {latitude: 14.8,longitude: -91.5}, count: 1
, team: 1},
{time: "2014-06-24 16:35:00", location: {latitude: 53.5,longitude: -2.0}, count: 1
, team: 1},
{time: "2014-06-24 16:35:00", location: {latitude: 8.5,longitude: 77.0}, count: 1
, team: 1},
{time: "2014-06-24 16:35:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:35:00", location: {latitude: 9.8,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:35:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:35:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: -0.2,longitude: -78.5}, count: 1
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: -23.6,longitude: -46.7}, count: 1
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: 10.0,longitude: -84.2}, count: 2
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: 10.0,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: 10.1,longitude: -84.5}, count: 1
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: 10.6,longitude: -71.6}, count: 1
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: 19.0,longitude: -98.2}, count: 1
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: 43.8,longitude: -79.4}, count: 1
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: 45.0,longitude: 19.6}, count: 1
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: 53.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: 64.2,longitude: 27.7}, count: 1
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:36:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:37:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:37:00", location: {latitude: -22.8,longitude: -43.2}, count: 1
, team: 1},
{time: "2014-06-24 16:37:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 1},
{time: "2014-06-24 16:37:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:37:00", location: {latitude: 18.5,longitude: -69.9}, count: 1
, team: 1},
{time: "2014-06-24 16:37:00", location: {latitude: 53.0,longitude: -1.3}, count: 1
, team: 1},
{time: "2014-06-24 16:37:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:37:00", location: {latitude: 9.9,longitude: -84.1}, count: 5
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: -6.3,longitude: 106.8}, count: 1
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: -6.8,longitude: 39.3}, count: 1
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: 1.3,longitude: 103.7}, count: 1
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: 10.7,longitude: -71.7}, count: 1
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: 18.5,longitude: -69.9}, count: 1
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: 40.4,longitude: -3.7}, count: 1
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: 40.8,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: 41.1,longitude: 28.7}, count: 1
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: 48.8,longitude: 2.4}, count: 1
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: 51.5,longitude: -0.0}, count: 1
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: 51.5,longitude: -3.7}, count: 1
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: 52.5,longitude: -2.1}, count: 1
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: 54.6,longitude: -5.9}, count: 1
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: 9.9,longitude: -83.9}, count: 2
, team: 1},
{time: "2014-06-24 16:38:00", location: {latitude: 9.9,longitude: -84.1}, count: 5
, team: 1},
{time: "2014-06-24 16:39:00", location: {latitude: -5.8,longitude: -35.2}, count: 1
, team: 1},
{time: "2014-06-24 16:39:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:39:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:39:00", location: {latitude: 10.0,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 16:39:00", location: {latitude: 10.2,longitude: -67.6}, count: 1
, team: 1},
{time: "2014-06-24 16:39:00", location: {latitude: 15.6,longitude: -88.0}, count: 1
, team: 1},
{time: "2014-06-24 16:39:00", location: {latitude: 51.5,longitude: -0.5}, count: 1
, team: 1},
{time: "2014-06-24 16:39:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:39:00", location: {latitude: 9.9,longitude: -84.1}, count: 4
, team: 1},
{time: "2014-06-24 16:40:00", location: {latitude: -6.3,longitude: 106.8}, count: 1
, team: 1},
{time: "2014-06-24 16:40:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:40:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:40:00", location: {latitude: 19.1,longitude: 72.9}, count: 1
, team: 1},
{time: "2014-06-24 16:40:00", location: {latitude: 49.2,longitude: -2.1}, count: 1
, team: 1},
{time: "2014-06-24 16:40:00", location: {latitude: 8.2,longitude: -72.3}, count: 1
, team: 1},
{time: "2014-06-24 16:40:00", location: {latitude: 9.9,longitude: -84.1}, count: 4
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 10.4,longitude: -75.5}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 10.9,longitude: -74.8}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 15.6,longitude: -88.0}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 25.7,longitude: -100.3}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 29.7,longitude: -95.5}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 3.6,longitude: 98.7}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 30.0,longitude: 31.2}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 35.0,longitude: -85.2}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 38.5,longitude: -89.9}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 40.3,longitude: -3.8}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 42.7,longitude: -84.6}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 52.7,longitude: -1.4}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 8.9,longitude: -79.5}, count: 1
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:41:00", location: {latitude: 9.9,longitude: -84.2}, count: 2
, team: 1},
{time: "2014-06-24 16:42:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:42:00", location: {latitude: 10.6,longitude: -85.4}, count: 1
, team: 1},
{time: "2014-06-24 16:42:00", location: {latitude: 34.1,longitude: -117.3}, count: 1
, team: 1},
{time: "2014-06-24 16:42:00", location: {latitude: 39.9,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 16:42:00", location: {latitude: 49.4,longitude: -123.3}, count: 1
, team: 1},
{time: "2014-06-24 16:42:00", location: {latitude: 9.9,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 16:42:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:42:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:43:00", location: {latitude: 10.0,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:43:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:43:00", location: {latitude: 10.1,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 16:43:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 16:43:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 1},
{time: "2014-06-24 16:43:00", location: {latitude: 33.9,longitude: -118.2}, count: 1
, team: 1},
{time: "2014-06-24 16:43:00", location: {latitude: 39.6,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 16:43:00", location: {latitude: 4.8,longitude: 7.0}, count: 1
, team: 1},
{time: "2014-06-24 16:43:00", location: {latitude: 5.4,longitude: 73.3}, count: 1
, team: 1},
{time: "2014-06-24 16:43:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 1},
{time: "2014-06-24 16:43:00", location: {latitude: 9.9,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: 13.0,longitude: 77.8}, count: 1
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: 30.5,longitude: -97.7}, count: 1
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: 34.1,longitude: -117.3}, count: 1
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: 36.8,longitude: -76.2}, count: 1
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: 4.7,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: 43.7,longitude: -79.6}, count: 1
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: 51.3,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: 56.0,longitude: -3.2}, count: 1
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: 9.8,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:44:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: -19.9,longitude: -44.0}, count: 2
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 0.5,longitude: 123.1}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 10.7,longitude: -61.5}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 14.6,longitude: -90.6}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 18.9,longitude: -97.1}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 30.2,longitude: -81.5}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 40.0,longitude: -75.1}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 41.9,longitude: 12.5}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 51.4,longitude: -2.7}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 52.6,longitude: -2.0}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 53.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 53.6,longitude: -0.7}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 54.5,longitude: -1.5}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 56.5,longitude: -3.0}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:45:00", location: {latitude: 9.9,longitude: -84.1}, count: 4
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: -10.2,longitude: 123.6}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: -26.1,longitude: 28.3}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: -33.0,longitude: -60.6}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: -34.1,longitude: 151.1}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 0.3,longitude: 37.9}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 10.5,longitude: -84.6}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 28.5,longitude: -81.4}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 32.8,longitude: 35.0}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 35.0,longitude: 34.0}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 45.0,longitude: -93.2}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 5.1,longitude: -75.5}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 5.4,longitude: 73.3}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 51.6,longitude: 0.6}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 54.8,longitude: -1.6}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 9.0,longitude: -79.5}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 9.5,longitude: -82.6}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:46:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: -1.1,longitude: -79.6}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: -13.0,longitude: -38.5}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: -19.9,longitude: -44.0}, count: 2
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: -23.6,longitude: -46.4}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: -24.2,longitude: -64.9}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: -25.5,longitude: -49.3}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: -33.4,longitude: -60.2}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: -34.6,longitude: -58.6}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: -35.0,longitude: -58.0}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 10.1,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 10.2,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 10.4,longitude: -75.5}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 18.5,longitude: -70.0}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 20.0,longitude: -97.2}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 30.3,longitude: -9.5}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 33.6,longitude: -7.6}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 38.0,longitude: -1.2}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 4.7,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 48.6,longitude: 2.3}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 48.6,longitude: 7.7}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 48.9,longitude: 2.3}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 51.3,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 51.5,longitude: -0.5}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 52.8,longitude: -1.4}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 54.9,longitude: -1.4}, count: 1
, team: 1},
{time: "2014-06-24 16:47:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: -13.0,longitude: -38.5}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: -25.2,longitude: -57.5}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: -6.2,longitude: 106.8}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: -6.9,longitude: 107.5}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 10.0,longitude: -84.7}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 10.1,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 10.9,longitude: -74.8}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 13.9,longitude: 100.6}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 14.0,longitude: -89.5}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 14.5,longitude: -89.9}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 29.3,longitude: 48.0}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 30.5,longitude: -97.7}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 33.6,longitude: 73.2}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 37.5,longitude: -77.5}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 4.7,longitude: -74.1}, count: 2
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 40.1,longitude: -3.9}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 41.6,longitude: -4.8}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 44.6,longitude: 10.9}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 49.1,longitude: 2.3}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 49.5,longitude: 0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 49.9,longitude: 4.8}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 52.4,longitude: -1.9}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 52.7,longitude: 6.9}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 52.9,longitude: -1.4}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 53.0,longitude: -2.7}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 8.3,longitude: -62.8}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:48:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: -0.2,longitude: -78.5}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: -25.3,longitude: -57.6}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: -34.6,longitude: -56.6}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: 1.4,longitude: 104.0}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: 19.5,longitude: -99.1}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: 31.5,longitude: 34.5}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: 35.9,longitude: -78.6}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: 36.0,longitude: -115.1}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: 38.9,longitude: -77.2}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: 54.7,longitude: -1.2}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: 6.3,longitude: -75.6}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: 7.9,longitude: -72.5}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: 8.9,longitude: -75.8}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: 8.9,longitude: -79.5}, count: 1
, team: 1},
{time: "2014-06-24 16:49:00", location: {latitude: 9.9,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: -1.3,longitude: 36.9}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: -2.9,longitude: -79.0}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: -34.6,longitude: -58.4}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: -5.2,longitude: 119.4}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: -6.2,longitude: 106.9}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: 1.0,longitude: -79.7}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: 1.5,longitude: 124.8}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: 10.0,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: 10.9,longitude: -74.8}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: 19.1,longitude: 72.9}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: 21.5,longitude: 39.3}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: 28.7,longitude: 77.2}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: 38.6,longitude: -77.3}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: 39.6,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: 39.6,longitude: 2.7}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: 41.3,longitude: 69.3}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: 51.7,longitude: -0.8}, count: 1
, team: 1},
{time: "2014-06-24 16:50:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:51:00", location: {latitude: -26.9,longitude: -58.3}, count: 1
, team: 1},
{time: "2014-06-24 16:51:00", location: {latitude: -34.6,longitude: -58.4}, count: 1
, team: 1},
{time: "2014-06-24 16:51:00", location: {latitude: -6.8,longitude: 39.3}, count: 1
, team: 1},
{time: "2014-06-24 16:51:00", location: {latitude: -7.9,longitude: 110.3}, count: 1
, team: 1},
{time: "2014-06-24 16:51:00", location: {latitude: 1.5,longitude: 103.8}, count: 1
, team: 1},
{time: "2014-06-24 16:51:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:51:00", location: {latitude: 13.7,longitude: -89.1}, count: 1
, team: 1},
{time: "2014-06-24 16:51:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 16:51:00", location: {latitude: 37.6,longitude: -1.3}, count: 1
, team: 1},
{time: "2014-06-24 16:51:00", location: {latitude: 39.5,longitude: -0.4}, count: 1
, team: 1},
{time: "2014-06-24 16:51:00", location: {latitude: 46.2,longitude: 7.3}, count: 1
, team: 1},
{time: "2014-06-24 16:51:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 16:51:00", location: {latitude: 6.6,longitude: 3.4}, count: 1
, team: 1},
{time: "2014-06-24 16:51:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:52:00", location: {latitude: -23.4,longitude: -46.5}, count: 2
, team: 1},
{time: "2014-06-24 16:52:00", location: {latitude: -33.6,longitude: -70.6}, count: 1
, team: 1},
{time: "2014-06-24 16:52:00", location: {latitude: -34.0,longitude: 18.5}, count: 1
, team: 1},
{time: "2014-06-24 16:52:00", location: {latitude: -35.0,longitude: 138.5}, count: 1
, team: 1},
{time: "2014-06-24 16:52:00", location: {latitude: -39.0,longitude: -68.0}, count: 1
, team: 1},
{time: "2014-06-24 16:52:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:52:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 16:52:00", location: {latitude: 38.6,longitude: -121.3}, count: 1
, team: 1},
{time: "2014-06-24 16:52:00", location: {latitude: 39.6,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 16:52:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 1},
{time: "2014-06-24 16:52:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:53:00", location: {latitude: -23.6,longitude: -46.6}, count: 1
, team: 1},
{time: "2014-06-24 16:53:00", location: {latitude: 20.6,longitude: -100.4}, count: 1
, team: 1},
{time: "2014-06-24 16:53:00", location: {latitude: 41.3,longitude: 13.1}, count: 1
, team: 1},
{time: "2014-06-24 16:53:00", location: {latitude: 42.2,longitude: -8.7}, count: 1
, team: 1},
{time: "2014-06-24 16:53:00", location: {latitude: 51.7,longitude: 0.5}, count: 1
, team: 1},
{time: "2014-06-24 16:53:00", location: {latitude: 52.6,longitude: -2.0}, count: 1
, team: 1},
{time: "2014-06-24 16:53:00", location: {latitude: 9.4,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 16:53:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:53:00", location: {latitude: 9.9,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: -27.5,longitude: -58.8}, count: 1
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: 0.0,longitude: 0.0}, count: 1
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: 10.0,longitude: -84.2}, count: 2
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: 10.3,longitude: -85.6}, count: 1
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: 10.7,longitude: -71.6}, count: 1
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: 18.5,longitude: -66.1}, count: 2
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: 21.5,longitude: 39.3}, count: 1
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: 36.0,longitude: -78.9}, count: 1
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: 36.6,longitude: 36.2}, count: 1
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: 4.5,longitude: 114.0}, count: 1
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: 4.7,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: 52.7,longitude: -2.7}, count: 1
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: 9.5,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:54:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:55:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 1},
{time: "2014-06-24 16:55:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 16:55:00", location: {latitude: -22.8,longitude: -43.2}, count: 1
, team: 1},
{time: "2014-06-24 16:55:00", location: {latitude: -34.6,longitude: -58.4}, count: 1
, team: 1},
{time: "2014-06-24 16:55:00", location: {latitude: -5.4,longitude: 105.3}, count: 1
, team: 1},
{time: "2014-06-24 16:55:00", location: {latitude: -6.2,longitude: 107.0}, count: 1
, team: 1},
{time: "2014-06-24 16:55:00", location: {latitude: 10.0,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 16:55:00", location: {latitude: 10.5,longitude: -85.7}, count: 1
, team: 1},
{time: "2014-06-24 16:55:00", location: {latitude: 45.4,longitude: -72.7}, count: 1
, team: 1},
{time: "2014-06-24 16:55:00", location: {latitude: 54.5,longitude: -3.6}, count: 1
, team: 1},
{time: "2014-06-24 16:55:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 16:55:00", location: {latitude: 9.9,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 16:56:00", location: {latitude: -32.1,longitude: -71.5}, count: 1
, team: 1},
{time: "2014-06-24 16:56:00", location: {latitude: -6.2,longitude: 106.7}, count: 1
, team: 1},
{time: "2014-06-24 16:56:00", location: {latitude: 10.2,longitude: 122.9}, count: 1
, team: 1},
{time: "2014-06-24 16:56:00", location: {latitude: 11.0,longitude: -74.8}, count: 1
, team: 1},
{time: "2014-06-24 16:56:00", location: {latitude: 3.5,longitude: -73.7}, count: 1
, team: 1},
{time: "2014-06-24 16:56:00", location: {latitude: 37.6,longitude: -122.1}, count: 1
, team: 1},
{time: "2014-06-24 16:56:00", location: {latitude: 41.0,longitude: 29.1}, count: 1
, team: 1},
{time: "2014-06-24 16:56:00", location: {latitude: 52.2,longitude: 1.5}, count: 1
, team: 1},
{time: "2014-06-24 16:56:00", location: {latitude: 6.6,longitude: 3.4}, count: 1
, team: 1},
{time: "2014-06-24 16:56:00", location: {latitude: 8.5,longitude: -82.6}, count: 1
, team: 1},
{time: "2014-06-24 16:56:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:57:00", location: {latitude: -34.7,longitude: -58.4}, count: 1
, team: 1},
{time: "2014-06-24 16:57:00", location: {latitude: 3.4,longitude: 101.2}, count: 1
, team: 1},
{time: "2014-06-24 16:57:00", location: {latitude: 33.9,longitude: -118.2}, count: 1
, team: 1},
{time: "2014-06-24 16:57:00", location: {latitude: 44.6,longitude: 2.2}, count: 1
, team: 1},
{time: "2014-06-24 16:57:00", location: {latitude: 53.0,longitude: -2.2}, count: 1
, team: 1},
{time: "2014-06-24 16:57:00", location: {latitude: 53.9,longitude: -2.0}, count: 1
, team: 1},
{time: "2014-06-24 16:58:00", location: {latitude: -5.4,longitude: 105.3}, count: 3
, team: 1},
{time: "2014-06-24 16:58:00", location: {latitude: -7.4,longitude: 110.5}, count: 1
, team: 1},
{time: "2014-06-24 16:58:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 16:58:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 16:58:00", location: {latitude: 10.5,longitude: -85.0}, count: 1
, team: 1},
{time: "2014-06-24 16:58:00", location: {latitude: 13.7,longitude: -89.2}, count: 1
, team: 1},
{time: "2014-06-24 16:58:00", location: {latitude: 28.5,longitude: -81.5}, count: 1
, team: 1},
{time: "2014-06-24 16:58:00", location: {latitude: 42.5,longitude: -90.7}, count: 1
, team: 1},
{time: "2014-06-24 16:58:00", location: {latitude: 51.5,longitude: -0.0}, count: 1
, team: 1},
{time: "2014-06-24 16:59:00", location: {latitude: -38.1,longitude: 144.4}, count: 1
, team: 1},
{time: "2014-06-24 16:59:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 16:59:00", location: {latitude: 10.2,longitude: -83.8}, count: 1
, team: 1},
{time: "2014-06-24 16:59:00", location: {latitude: 25.3,longitude: 55.4}, count: 1
, team: 1},
{time: "2014-06-24 16:59:00", location: {latitude: 4.8,longitude: 7.0}, count: 1
, team: 1},
{time: "2014-06-24 16:59:00", location: {latitude: 40.4,longitude: -80.0}, count: 1
, team: 1},
{time: "2014-06-24 16:59:00", location: {latitude: 40.7,longitude: -74.0}, count: 1
, team: 1},
{time: "2014-06-24 16:59:00", location: {latitude: 41.4,longitude: -74.4}, count: 1
, team: 1},
{time: "2014-06-24 16:59:00", location: {latitude: 43.3,longitude: -2.9}, count: 1
, team: 1},
{time: "2014-06-24 16:59:00", location: {latitude: 45.6,longitude: -73.7}, count: 1
, team: 1},
{time: "2014-06-24 16:59:00", location: {latitude: 53.9,longitude: -2.0}, count: 2
, team: 1},
{time: "2014-06-24 17:00:00", location: {latitude: -34.5,longitude: -58.5}, count: 1
, team: 1},
{time: "2014-06-24 17:00:00", location: {latitude: -6.4,longitude: 106.8}, count: 1
, team: 1},
{time: "2014-06-24 17:00:00", location: {latitude: 10.0,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 17:00:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 17:00:00", location: {latitude: 4.7,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 17:00:00", location: {latitude: 47.9,longitude: 106.9}, count: 1
, team: 1},
{time: "2014-06-24 17:00:00", location: {latitude: 51.0,longitude: -1.3}, count: 1
, team: 1},
{time: "2014-06-24 17:00:00", location: {latitude: 9.3,longitude: -70.6}, count: 1
, team: 1},
{time: "2014-06-24 17:00:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: -2.2,longitude: -79.9}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: -25.5,longitude: -49.3}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: -29.4,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: -6.2,longitude: 106.7}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: 10.2,longitude: -83.8}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: 19.2,longitude: -70.5}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: 24.8,longitude: -107.4}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: 27.7,longitude: 85.3}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: 43.0,longitude: 44.6}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: 43.3,longitude: -2.0}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: 48.9,longitude: 2.2}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: 53.8,longitude: -1.6}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: 55.8,longitude: -4.3}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: 8.5,longitude: -82.6}, count: 1
, team: 1},
{time: "2014-06-24 17:01:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:02:00", location: {latitude: 10.0,longitude: -84.0}, count: 2
, team: 1},
{time: "2014-06-24 17:02:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 1},
{time: "2014-06-24 17:02:00", location: {latitude: 41.6,longitude: -4.8}, count: 1
, team: 1},
{time: "2014-06-24 17:02:00", location: {latitude: 5.6,longitude: -0.2}, count: 1
, team: 1},
{time: "2014-06-24 17:02:00", location: {latitude: 51.5,longitude: -1.8}, count: 1
, team: 1},
{time: "2014-06-24 17:03:00", location: {latitude: -0.2,longitude: -78.5}, count: 1
, team: 1},
{time: "2014-06-24 17:03:00", location: {latitude: -34.6,longitude: -58.6}, count: 1
, team: 1},
{time: "2014-06-24 17:03:00", location: {latitude: -6.1,longitude: 106.9}, count: 1
, team: 1},
{time: "2014-06-24 17:03:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:03:00", location: {latitude: 10.2,longitude: 122.9}, count: 1
, team: 1},
{time: "2014-06-24 17:03:00", location: {latitude: 10.9,longitude: -74.8}, count: 1
, team: 1},
{time: "2014-06-24 17:03:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 17:03:00", location: {latitude: 41.4,longitude: -81.7}, count: 1
, team: 1},
{time: "2014-06-24 17:03:00", location: {latitude: 52.7,longitude: -2.7}, count: 1
, team: 1},
{time: "2014-06-24 17:03:00", location: {latitude: 53.5,longitude: -2.2}, count: 1
, team: 1},
{time: "2014-06-24 17:03:00", location: {latitude: 8.6,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 17:03:00", location: {latitude: 9.8,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:04:00", location: {latitude: -1.3,longitude: -78.6}, count: 1
, team: 1},
{time: "2014-06-24 17:04:00", location: {latitude: 10.0,longitude: -83.0}, count: 1
, team: 1},
{time: "2014-06-24 17:04:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:04:00", location: {latitude: 10.0,longitude: -84.7}, count: 1
, team: 1},
{time: "2014-06-24 17:04:00", location: {latitude: 10.4,longitude: -84.5}, count: 1
, team: 1},
{time: "2014-06-24 17:04:00", location: {latitude: 10.5,longitude: -66.9}, count: 2
, team: 1},
{time: "2014-06-24 17:04:00", location: {latitude: 3.6,longitude: 98.7}, count: 1
, team: 1},
{time: "2014-06-24 17:04:00", location: {latitude: 46.3,longitude: -0.5}, count: 1
, team: 1},
{time: "2014-06-24 17:04:00", location: {latitude: 50.8,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 17:04:00", location: {latitude: 53.0,longitude: -2.2}, count: 1
, team: 1},
{time: "2014-06-24 17:04:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:04:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: -1.2,longitude: 116.9}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: -34.6,longitude: -56.6}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: -6.3,longitude: 107.0}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: 20.0,longitude: -97.2}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: 26.9,longitude: 75.8}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: 30.2,longitude: -97.7}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: 41.0,longitude: 28.6}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: 47.2,longitude: 2.2}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: 5.1,longitude: -75.5}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: 5.6,longitude: -0.2}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: 8.6,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: 8.9,longitude: -75.8}, count: 1
, team: 1},
{time: "2014-06-24 17:05:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:06:00", location: {latitude: -23.0,longitude: -43.3}, count: 1
, team: 1},
{time: "2014-06-24 17:06:00", location: {latitude: -27.8,longitude: -64.3}, count: 1
, team: 1},
{time: "2014-06-24 17:06:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:06:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 17:06:00", location: {latitude: 10.5,longitude: -73.3}, count: 1
, team: 1},
{time: "2014-06-24 17:06:00", location: {latitude: 10.7,longitude: -71.6}, count: 1
, team: 1},
{time: "2014-06-24 17:06:00", location: {latitude: 51.4,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 17:06:00", location: {latitude: 53.9,longitude: -1.7}, count: 1
, team: 1},
{time: "2014-06-24 17:06:00", location: {latitude: 8.8,longitude: -75.9}, count: 1
, team: 1},
{time: "2014-06-24 17:06:00", location: {latitude: 9.0,longitude: -79.5}, count: 1
, team: 1},
{time: "2014-06-24 17:06:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:07:00", location: {latitude: -23.0,longitude: -43.3}, count: 1
, team: 1},
{time: "2014-06-24 17:07:00", location: {latitude: -34.5,longitude: -58.7}, count: 1
, team: 1},
{time: "2014-06-24 17:07:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 1},
{time: "2014-06-24 17:07:00", location: {latitude: 10.0,longitude: -84.2}, count: 2
, team: 1},
{time: "2014-06-24 17:07:00", location: {latitude: 10.0,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 17:07:00", location: {latitude: 10.2,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 17:07:00", location: {latitude: 51.8,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 17:07:00", location: {latitude: 53.5,longitude: -2.3}, count: 1
, team: 1},
{time: "2014-06-24 17:07:00", location: {latitude: 8.3,longitude: -62.8}, count: 1
, team: 1},
{time: "2014-06-24 17:07:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:08:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 1},
{time: "2014-06-24 17:08:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:08:00", location: {latitude: 10.0,longitude: -84.2}, count: 3
, team: 1},
{time: "2014-06-24 17:08:00", location: {latitude: 10.1,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 17:08:00", location: {latitude: 30.7,longitude: -95.6}, count: 1
, team: 1},
{time: "2014-06-24 17:08:00", location: {latitude: 39.5,longitude: -0.4}, count: 1
, team: 1},
{time: "2014-06-24 17:08:00", location: {latitude: 4.6,longitude: -75.7}, count: 1
, team: 1},
{time: "2014-06-24 17:08:00", location: {latitude: 42.4,longitude: -71.0}, count: 1
, team: 1},
{time: "2014-06-24 17:08:00", location: {latitude: 48.4,longitude: -123.4}, count: 1
, team: 1},
{time: "2014-06-24 17:08:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 17:08:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:09:00", location: {latitude: -1.2,longitude: 116.9}, count: 1
, team: 1},
{time: "2014-06-24 17:09:00", location: {latitude: -33.4,longitude: -70.6}, count: 1
, team: 1},
{time: "2014-06-24 17:09:00", location: {latitude: -34.6,longitude: -59.2}, count: 1
, team: 1},
{time: "2014-06-24 17:09:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:09:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:09:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:09:00", location: {latitude: 10.1,longitude: -69.4}, count: 1
, team: 1},
{time: "2014-06-24 17:09:00", location: {latitude: 10.1,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 17:09:00", location: {latitude: 10.1,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 17:09:00", location: {latitude: 10.7,longitude: -71.6}, count: 1
, team: 1},
{time: "2014-06-24 17:09:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 17:09:00", location: {latitude: 3.2,longitude: 101.7}, count: 1
, team: 1},
{time: "2014-06-24 17:09:00", location: {latitude: 39.5,longitude: -0.4}, count: 1
, team: 1},
{time: "2014-06-24 17:09:00", location: {latitude: 49.2,longitude: 2.9}, count: 1
, team: 1},
{time: "2014-06-24 17:09:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:10:00", location: {latitude: -34.8,longitude: -58.2}, count: 1
, team: 1},
{time: "2014-06-24 17:10:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:10:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 17:10:00", location: {latitude: 25.7,longitude: -100.3}, count: 1
, team: 1},
{time: "2014-06-24 17:10:00", location: {latitude: 38.9,longitude: -77.1}, count: 1
, team: 1},
{time: "2014-06-24 17:10:00", location: {latitude: 50.4,longitude: -4.2}, count: 1
, team: 1},
{time: "2014-06-24 17:10:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 17:10:00", location: {latitude: 52.4,longitude: 4.9}, count: 1
, team: 1},
{time: "2014-06-24 17:10:00", location: {latitude: 9.9,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 17:11:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:11:00", location: {latitude: 39.5,longitude: -0.4}, count: 1
, team: 1},
{time: "2014-06-24 17:11:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:11:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:12:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 1},
{time: "2014-06-24 17:12:00", location: {latitude: -7.0,longitude: 110.5}, count: 1
, team: 1},
{time: "2014-06-24 17:12:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:12:00", location: {latitude: 10.1,longitude: -69.4}, count: 1
, team: 1},
{time: "2014-06-24 17:12:00", location: {latitude: 10.1,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 17:12:00", location: {latitude: 10.6,longitude: -85.1}, count: 1
, team: 1},
{time: "2014-06-24 17:12:00", location: {latitude: 3.3,longitude: -76.5}, count: 1
, team: 1},
{time: "2014-06-24 17:12:00", location: {latitude: 49.0,longitude: 2.1}, count: 1
, team: 1},
{time: "2014-06-24 17:12:00", location: {latitude: 50.8,longitude: -0.2}, count: 1
, team: 1},
{time: "2014-06-24 17:12:00", location: {latitude: 51.1,longitude: -0.4}, count: 1
, team: 1},
{time: "2014-06-24 17:12:00", location: {latitude: 53.0,longitude: -2.0}, count: 1
, team: 1},
{time: "2014-06-24 17:12:00", location: {latitude: 8.6,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 17:12:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 17:12:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:13:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:13:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:13:00", location: {latitude: 34.1,longitude: -117.3}, count: 1
, team: 1},
{time: "2014-06-24 17:13:00", location: {latitude: 53.5,longitude: -2.2}, count: 1
, team: 1},
{time: "2014-06-24 17:13:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:14:00", location: {latitude: -22.8,longitude: -43.2}, count: 1
, team: 1},
{time: "2014-06-24 17:14:00", location: {latitude: 0.0,longitude: -51.1}, count: 1
, team: 1},
{time: "2014-06-24 17:14:00", location: {latitude: 10.7,longitude: -85.5}, count: 1
, team: 1},
{time: "2014-06-24 17:14:00", location: {latitude: 2.7,longitude: 101.9}, count: 1
, team: 1},
{time: "2014-06-24 17:14:00", location: {latitude: 26.4,longitude: 44.0}, count: 1
, team: 1},
{time: "2014-06-24 17:14:00", location: {latitude: 50.0,longitude: 33.0}, count: 1
, team: 1},
{time: "2014-06-24 17:14:00", location: {latitude: 9.9,longitude: -84.1}, count: 5
, team: 1},
{time: "2014-06-24 17:14:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:15:00", location: {latitude: -12.1,longitude: -77.1}, count: 1
, team: 1},
{time: "2014-06-24 17:15:00", location: {latitude: 39.5,longitude: -0.4}, count: 1
, team: 1},
{time: "2014-06-24 17:15:00", location: {latitude: 4.7,longitude: -74.0}, count: 1
, team: 1},
{time: "2014-06-24 17:15:00", location: {latitude: 43.5,longitude: -5.7}, count: 1
, team: 1},
{time: "2014-06-24 17:15:00", location: {latitude: 45.5,longitude: 10.3}, count: 1
, team: 1},
{time: "2014-06-24 17:15:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 17:15:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 1},
{time: "2014-06-24 17:15:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 17:15:00", location: {latitude: 8.6,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 17:15:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:15:00", location: {latitude: 9.9,longitude: -84.1}, count: 5
, team: 1},
{time: "2014-06-24 17:16:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 17:16:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:16:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:16:00", location: {latitude: 10.0,longitude: -84.2}, count: 2
, team: 1},
{time: "2014-06-24 17:16:00", location: {latitude: 10.0,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 17:16:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 17:16:00", location: {latitude: 24.2,longitude: -110.3}, count: 1
, team: 1},
{time: "2014-06-24 17:16:00", location: {latitude: 35.6,longitude: 139.7}, count: 1
, team: 1},
{time: "2014-06-24 17:16:00", location: {latitude: 45.0,longitude: -93.2}, count: 1
, team: 1},
{time: "2014-06-24 17:16:00", location: {latitude: 50.4,longitude: -4.2}, count: 1
, team: 1},
{time: "2014-06-24 17:16:00", location: {latitude: 52.1,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 17:16:00", location: {latitude: 8.6,longitude: -83.0}, count: 1
, team: 1},
{time: "2014-06-24 17:16:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 17:16:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 10.1,longitude: -84.5}, count: 1
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 10.3,longitude: -85.0}, count: 1
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 14.5,longitude: -90.5}, count: 1
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 18.7,longitude: -68.4}, count: 1
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 19.0,longitude: -98.3}, count: 1
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 27.3,longitude: -82.4}, count: 1
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 41.6,longitude: -4.8}, count: 1
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 53.5,longitude: -2.2}, count: 1
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 6.0,longitude: 0.6}, count: 1
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 8.6,longitude: -83.0}, count: 1
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 9.0,longitude: -79.5}, count: 1
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 9.9,longitude: -84.1}, count: 5
, team: 1},
{time: "2014-06-24 17:17:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:18:00", location: {latitude: -22.9,longitude: -43.2}, count: 1
, team: 1},
{time: "2014-06-24 17:18:00", location: {latitude: -6.4,longitude: 106.9}, count: 1
, team: 1},
{time: "2014-06-24 17:18:00", location: {latitude: 10.0,longitude: -84.1}, count: 4
, team: 1},
{time: "2014-06-24 17:18:00", location: {latitude: 10.0,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 17:18:00", location: {latitude: 10.4,longitude: -75.5}, count: 1
, team: 1},
{time: "2014-06-24 17:18:00", location: {latitude: 18.7,longitude: -68.4}, count: 1
, team: 1},
{time: "2014-06-24 17:18:00", location: {latitude: 28.5,longitude: -81.5}, count: 1
, team: 1},
{time: "2014-06-24 17:18:00", location: {latitude: 38.9,longitude: -76.9}, count: 1
, team: 1},
{time: "2014-06-24 17:18:00", location: {latitude: 40.6,longitude: 14.2}, count: 1
, team: 1},
{time: "2014-06-24 17:18:00", location: {latitude: 41.0,longitude: -4.0}, count: 1
, team: 1},
{time: "2014-06-24 17:18:00", location: {latitude: 45.0,longitude: -93.2}, count: 1
, team: 1},
{time: "2014-06-24 17:18:00", location: {latitude: 51.9,longitude: 0.9}, count: 1
, team: 1},
{time: "2014-06-24 17:18:00", location: {latitude: 52.1,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 17:18:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 17:19:00", location: {latitude: 30.4,longitude: -86.4}, count: 1
, team: 1},
{time: "2014-06-24 17:19:00", location: {latitude: 39.5,longitude: -0.4}, count: 1
, team: 1},
{time: "2014-06-24 17:19:00", location: {latitude: 53.2,longitude: -0.5}, count: 1
, team: 1},
{time: "2014-06-24 17:20:00", location: {latitude: 10.0,longitude: -84.0}, count: 2
, team: 1},
{time: "2014-06-24 17:20:00", location: {latitude: 10.1,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 17:20:00", location: {latitude: 10.2,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 17:20:00", location: {latitude: 12.9,longitude: 77.5}, count: 1
, team: 1},
{time: "2014-06-24 17:20:00", location: {latitude: 52.9,longitude: -1.2}, count: 1
, team: 1},
{time: "2014-06-24 17:20:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:20:00", location: {latitude: 9.9,longitude: -84.2}, count: 2
, team: 1},
{time: "2014-06-24 17:21:00", location: {latitude: -1.2,longitude: 36.9}, count: 1
, team: 1},
{time: "2014-06-24 17:21:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:21:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:21:00", location: {latitude: 21.1,longitude: -89.4}, count: 1
, team: 1},
{time: "2014-06-24 17:21:00", location: {latitude: 37.8,longitude: -122.4}, count: 1
, team: 1},
{time: "2014-06-24 17:21:00", location: {latitude: 40.5,longitude: -105.1}, count: 1
, team: 1},
{time: "2014-06-24 17:21:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 1},
{time: "2014-06-24 17:21:00", location: {latitude: 52.0,longitude: -0.8}, count: 1
, team: 1},
{time: "2014-06-24 17:21:00", location: {latitude: 9.9,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 17:22:00", location: {latitude: -20.3,longitude: -50.5}, count: 1
, team: 1},
{time: "2014-06-24 17:22:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:22:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:22:00", location: {latitude: 10.3,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 17:22:00", location: {latitude: 10.4,longitude: -85.1}, count: 1
, team: 1},
{time: "2014-06-24 17:22:00", location: {latitude: 3.5,longitude: -73.7}, count: 1
, team: 1},
{time: "2014-06-24 17:22:00", location: {latitude: 35.1,longitude: 33.9}, count: 1
, team: 1},
{time: "2014-06-24 17:22:00", location: {latitude: 53.8,longitude: -3.0}, count: 1
, team: 1},
{time: "2014-06-24 17:22:00", location: {latitude: 54.6,longitude: -5.6}, count: 1
, team: 1},
{time: "2014-06-24 17:22:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:23:00", location: {latitude: 10.0,longitude: -84.2}, count: 2
, team: 1},
{time: "2014-06-24 17:23:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 17:23:00", location: {latitude: 39.6,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 17:23:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 17:23:00", location: {latitude: 51.7,longitude: 0.5}, count: 1
, team: 1},
{time: "2014-06-24 17:23:00", location: {latitude: 53.3,longitude: -6.3}, count: 1
, team: 1},
{time: "2014-06-24 17:23:00", location: {latitude: 53.4,longitude: -1.4}, count: 1
, team: 1},
{time: "2014-06-24 17:23:00", location: {latitude: 8.6,longitude: -83.0}, count: 1
, team: 1},
{time: "2014-06-24 17:23:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 17:23:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:23:00", location: {latitude: 9.9,longitude: -84.1}, count: 4
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: -0.2,longitude: -78.5}, count: 1
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: -1.3,longitude: 36.9}, count: 1
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: 14.6,longitude: -90.7}, count: 1
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: 32.3,longitude: -86.4}, count: 1
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: 33.9,longitude: -118.2}, count: 1
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: 34.3,longitude: -118.8}, count: 1
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: 41.0,longitude: -4.0}, count: 1
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: 45.2,longitude: -0.6}, count: 1
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: 52.5,longitude: -2.1}, count: 1
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: 53.1,longitude: -3.0}, count: 1
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: 53.5,longitude: -2.5}, count: 1
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: 54.5,longitude: -1.3}, count: 1
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: 55.8,longitude: -4.3}, count: 1
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: 9.9,longitude: -84.0}, count: 2
, team: 1},
{time: "2014-06-24 17:24:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:25:00", location: {latitude: -15.6,longitude: -56.1}, count: 1
, team: 1},
{time: "2014-06-24 17:25:00", location: {latitude: -6.2,longitude: 106.7}, count: 1
, team: 1},
{time: "2014-06-24 17:25:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:25:00", location: {latitude: 34.0,longitude: -84.5}, count: 1
, team: 1},
{time: "2014-06-24 17:25:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 1},
{time: "2014-06-24 17:25:00", location: {latitude: 53.0,longitude: -1.1}, count: 1
, team: 1},
{time: "2014-06-24 17:25:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 17:25:00", location: {latitude: 9.9,longitude: -84.0}, count: 2
, team: 1},
{time: "2014-06-24 17:25:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:26:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 1},
{time: "2014-06-24 17:26:00", location: {latitude: -19.8,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 17:26:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 17:26:00", location: {latitude: -6.9,longitude: 107.7}, count: 1
, team: 1},
{time: "2014-06-24 17:26:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:26:00", location: {latitude: 35.1,longitude: -106.7}, count: 1
, team: 1},
{time: "2014-06-24 17:26:00", location: {latitude: 40.7,longitude: -74.3}, count: 1
, team: 1},
{time: "2014-06-24 17:26:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 17:26:00", location: {latitude: 52.4,longitude: -2.2}, count: 1
, team: 1},
{time: "2014-06-24 17:26:00", location: {latitude: 52.7,longitude: -2.7}, count: 1
, team: 1},
{time: "2014-06-24 17:26:00", location: {latitude: 53.5,longitude: -2.3}, count: 1
, team: 1},
{time: "2014-06-24 17:26:00", location: {latitude: 53.9,longitude: -1.7}, count: 1
, team: 1},
{time: "2014-06-24 17:26:00", location: {latitude: 8.1,longitude: -63.5}, count: 1
, team: 1},
{time: "2014-06-24 17:26:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 17:26:00", location: {latitude: 9.9,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 17:27:00", location: {latitude: -14.8,longitude: -39.0}, count: 1
, team: 1},
{time: "2014-06-24 17:27:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:27:00", location: {latitude: 10.0,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 17:27:00", location: {latitude: 29.8,longitude: -95.8}, count: 1
, team: 1},
{time: "2014-06-24 17:27:00", location: {latitude: 3.1,longitude: 101.6}, count: 1
, team: 1},
{time: "2014-06-24 17:27:00", location: {latitude: 4.3,longitude: -73.5}, count: 1
, team: 1},
{time: "2014-06-24 17:27:00", location: {latitude: 40.7,longitude: -74.3}, count: 1
, team: 1},
{time: "2014-06-24 17:27:00", location: {latitude: 52.7,longitude: -2.7}, count: 1
, team: 1},
{time: "2014-06-24 17:27:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:28:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 1},
{time: "2014-06-24 17:28:00", location: {latitude: -37.9,longitude: 145.0}, count: 1
, team: 1},
{time: "2014-06-24 17:28:00", location: {latitude: 19.3,longitude: -99.1}, count: 1
, team: 1},
{time: "2014-06-24 17:28:00", location: {latitude: 21.9,longitude: -102.3}, count: 1
, team: 1},
{time: "2014-06-24 17:28:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 17:28:00", location: {latitude: 51.5,longitude: -3.2}, count: 1
, team: 1},
{time: "2014-06-24 17:28:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 17:28:00", location: {latitude: 9.9,longitude: -83.9}, count: 2
, team: 1},
{time: "2014-06-24 17:28:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:29:00", location: {latitude: -1.3,longitude: 36.9}, count: 1
, team: 1},
{time: "2014-06-24 17:29:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 1},
{time: "2014-06-24 17:29:00", location: {latitude: -29.4,longitude: -66.8}, count: 1
, team: 1},
{time: "2014-06-24 17:29:00", location: {latitude: -3.0,longitude: 104.7}, count: 1
, team: 1},
{time: "2014-06-24 17:29:00", location: {latitude: -8.6,longitude: 115.2}, count: 1
, team: 1},
{time: "2014-06-24 17:29:00", location: {latitude: 10.7,longitude: -85.1}, count: 1
, team: 1},
{time: "2014-06-24 17:29:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 17:29:00", location: {latitude: 19.5,longitude: -99.1}, count: 1
, team: 1},
{time: "2014-06-24 17:29:00", location: {latitude: 34.3,longitude: -118.8}, count: 1
, team: 1},
{time: "2014-06-24 17:29:00", location: {latitude: 48.1,longitude: 11.6}, count: 1
, team: 1},
{time: "2014-06-24 17:29:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 17:29:00", location: {latitude: 53.2,longitude: 7.0}, count: 1
, team: 1},
{time: "2014-06-24 17:29:00", location: {latitude: 53.5,longitude: -2.2}, count: 1
, team: 1},
{time: "2014-06-24 17:29:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:29:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:30:00", location: {latitude: -34.7,longitude: -58.4}, count: 1
, team: 1},
{time: "2014-06-24 17:30:00", location: {latitude: 14.6,longitude: -90.6}, count: 1
, team: 1},
{time: "2014-06-24 17:30:00", location: {latitude: 18.5,longitude: 73.9}, count: 1
, team: 1},
{time: "2014-06-24 17:30:00", location: {latitude: 19.5,longitude: -99.1}, count: 1
, team: 1},
{time: "2014-06-24 17:30:00", location: {latitude: 25.1,longitude: 55.2}, count: 1
, team: 1},
{time: "2014-06-24 17:30:00", location: {latitude: 34.0,longitude: -118.5}, count: 1
, team: 1},
{time: "2014-06-24 17:30:00", location: {latitude: 34.1,longitude: -117.3}, count: 1
, team: 1},
{time: "2014-06-24 17:30:00", location: {latitude: 38.9,longitude: -77.0}, count: 1
, team: 1},
{time: "2014-06-24 17:30:00", location: {latitude: 41.1,longitude: 29.0}, count: 1
, team: 1},
{time: "2014-06-24 17:30:00", location: {latitude: 45.0,longitude: -93.2}, count: 1
, team: 1},
{time: "2014-06-24 17:30:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 17:30:00", location: {latitude: 52.0,longitude: -2.1}, count: 1
, team: 1},
{time: "2014-06-24 17:30:00", location: {latitude: 9.9,longitude: -83.9}, count: 2
, team: 1},
{time: "2014-06-24 17:30:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: -7.9,longitude: -78.1}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: 25.1,longitude: 55.2}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: 37.8,longitude: -122.4}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: 45.0,longitude: -93.2}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: 50.8,longitude: -1.6}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: 51.9,longitude: -0.4}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: 53.5,longitude: -2.0}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: 53.5,longitude: -2.3}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: 54.5,longitude: -1.3}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: 8.6,longitude: -71.6}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:31:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:32:00", location: {latitude: -21.0,longitude: -63.3}, count: 1
, team: 1},
{time: "2014-06-24 17:32:00", location: {latitude: -26.2,longitude: 28.3}, count: 1
, team: 1},
{time: "2014-06-24 17:32:00", location: {latitude: 10.7,longitude: -85.1}, count: 1
, team: 1},
{time: "2014-06-24 17:32:00", location: {latitude: 40.8,longitude: -74.0}, count: 1
, team: 1},
{time: "2014-06-24 17:32:00", location: {latitude: 51.5,longitude: -3.2}, count: 1
, team: 1},
{time: "2014-06-24 17:32:00", location: {latitude: 51.8,longitude: -2.6}, count: 1
, team: 1},
{time: "2014-06-24 17:32:00", location: {latitude: 53.5,longitude: -2.0}, count: 1
, team: 1},
{time: "2014-06-24 17:32:00", location: {latitude: 9.0,longitude: -79.5}, count: 1
, team: 1},
{time: "2014-06-24 17:32:00", location: {latitude: 9.8,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:32:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:33:00", location: {latitude: -31.4,longitude: -64.2}, count: 1
, team: 1},
{time: "2014-06-24 17:33:00", location: {latitude: -5.4,longitude: 105.3}, count: 1
, team: 1},
{time: "2014-06-24 17:33:00", location: {latitude: -6.4,longitude: 106.8}, count: 1
, team: 1},
{time: "2014-06-24 17:33:00", location: {latitude: -7.6,longitude: 110.8}, count: 1
, team: 1},
{time: "2014-06-24 17:33:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:33:00", location: {latitude: 34.1,longitude: -118.3}, count: 1
, team: 1},
{time: "2014-06-24 17:33:00", location: {latitude: 51.6,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 17:33:00", location: {latitude: 9.0,longitude: -79.5}, count: 1
, team: 1},
{time: "2014-06-24 17:34:00", location: {latitude: -0.6,longitude: 30.7}, count: 1
, team: 1},
{time: "2014-06-24 17:34:00", location: {latitude: -1.2,longitude: -78.6}, count: 1
, team: 1},
{time: "2014-06-24 17:34:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:34:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:34:00", location: {latitude: 24.8,longitude: -107.4}, count: 1
, team: 1},
{time: "2014-06-24 17:34:00", location: {latitude: 29.7,longitude: -95.5}, count: 1
, team: 1},
{time: "2014-06-24 17:34:00", location: {latitude: 33.6,longitude: -81.7}, count: 1
, team: 1},
{time: "2014-06-24 17:34:00", location: {latitude: 36.8,longitude: -119.9}, count: 1
, team: 1},
{time: "2014-06-24 17:34:00", location: {latitude: 45.0,longitude: -93.2}, count: 1
, team: 1},
{time: "2014-06-24 17:34:00", location: {latitude: 51.1,longitude: -0.6}, count: 1
, team: 1},
{time: "2014-06-24 17:34:00", location: {latitude: 51.5,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 17:34:00", location: {latitude: 52.5,longitude: -1.9}, count: 1
, team: 1},
{time: "2014-06-24 17:34:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:34:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:35:00", location: {latitude: -6.2,longitude: 106.7}, count: 1
, team: 1},
{time: "2014-06-24 17:35:00", location: {latitude: 10.1,longitude: -69.4}, count: 1
, team: 1},
{time: "2014-06-24 17:35:00", location: {latitude: 10.2,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 17:35:00", location: {latitude: 20.0,longitude: -97.2}, count: 1
, team: 1},
{time: "2014-06-24 17:35:00", location: {latitude: 25.8,longitude: -100.3}, count: 1
, team: 1},
{time: "2014-06-24 17:35:00", location: {latitude: 30.7,longitude: -95.6}, count: 1
, team: 1},
{time: "2014-06-24 17:35:00", location: {latitude: 32.8,longitude: 35.0}, count: 1
, team: 1},
{time: "2014-06-24 17:35:00", location: {latitude: 39.5,longitude: -0.4}, count: 1
, team: 1},
{time: "2014-06-24 17:35:00", location: {latitude: 39.6,longitude: -0.3}, count: 1
, team: 1},
{time: "2014-06-24 17:35:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 17:35:00", location: {latitude: 9.0,longitude: 7.5}, count: 1
, team: 1},
{time: "2014-06-24 17:35:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:35:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:36:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 1},
{time: "2014-06-24 17:36:00", location: {latitude: 3.4,longitude: -76.3}, count: 1
, team: 1},
{time: "2014-06-24 17:36:00", location: {latitude: 37.9,longitude: 23.7}, count: 1
, team: 1},
{time: "2014-06-24 17:36:00", location: {latitude: 43.7,longitude: 7.4}, count: 1
, team: 1},
{time: "2014-06-24 17:36:00", location: {latitude: 44.8,longitude: 20.5}, count: 1
, team: 1},
{time: "2014-06-24 17:36:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 17:36:00", location: {latitude: 53.3,longitude: -2.7}, count: 1
, team: 1},
{time: "2014-06-24 17:36:00", location: {latitude: 53.4,longitude: -6.4}, count: 1
, team: 1},
{time: "2014-06-24 17:36:00", location: {latitude: 53.5,longitude: -1.9}, count: 1
, team: 1},
{time: "2014-06-24 17:36:00", location: {latitude: 8.6,longitude: -83.0}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: -34.5,longitude: -58.5}, count: 2
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: -6.4,longitude: 106.8}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: 10.0,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: 10.1,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: 25.3,longitude: 51.5}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: 25.7,longitude: -100.4}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: 30.3,longitude: -9.5}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: 38.2,longitude: 27.4}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: 4.7,longitude: -74.2}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: 4.8,longitude: 7.0}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: 51.5,longitude: -1.0}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: 9.8,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:37:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:38:00", location: {latitude: 1.3,longitude: 103.7}, count: 1
, team: 1},
{time: "2014-06-24 17:38:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:38:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:38:00", location: {latitude: 10.5,longitude: -85.6}, count: 1
, team: 1},
{time: "2014-06-24 17:38:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 17:38:00", location: {latitude: 31.1,longitude: 29.8}, count: 1
, team: 1},
{time: "2014-06-24 17:38:00", location: {latitude: 37.8,longitude: -122.4}, count: 1
, team: 1},
{time: "2014-06-24 17:38:00", location: {latitude: 48.0,longitude: 91.6}, count: 1
, team: 1},
{time: "2014-06-24 17:38:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 17:38:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 1},
{time: "2014-06-24 17:38:00", location: {latitude: 53.5,longitude: -2.2}, count: 1
, team: 1},
{time: "2014-06-24 17:38:00", location: {latitude: 7.4,longitude: 3.9}, count: 1
, team: 1},
{time: "2014-06-24 17:38:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:39:00", location: {latitude: 52.1,longitude: -1.3}, count: 1
, team: 1},
{time: "2014-06-24 17:39:00", location: {latitude: 53.3,longitude: -2.1}, count: 1
, team: 1},
{time: "2014-06-24 17:43:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:45:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 17:45:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 1},
{time: "2014-06-24 17:45:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:46:00", location: {latitude: -54.8,longitude: -68.3}, count: 1
, team: 1},
{time: "2014-06-24 17:46:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:46:00", location: {latitude: 53.6,longitude: -2.2}, count: 1
, team: 1},
{time: "2014-06-24 17:47:00", location: {latitude: -25.3,longitude: -57.6}, count: 1
, team: 1},
{time: "2014-06-24 17:48:00", location: {latitude: -34.6,longitude: -58.8}, count: 1
, team: 1},
{time: "2014-06-24 17:48:00", location: {latitude: -37.8,longitude: 145.0}, count: 1
, team: 1},
{time: "2014-06-24 17:48:00", location: {latitude: -5.9,longitude: -35.3}, count: 1
, team: 1},
{time: "2014-06-24 17:48:00", location: {latitude: -54.8,longitude: -68.3}, count: 1
, team: 1},
{time: "2014-06-24 17:48:00", location: {latitude: 18.1,longitude: -94.5}, count: 1
, team: 1},
{time: "2014-06-24 17:48:00", location: {latitude: 41.7,longitude: -85.9}, count: 1
, team: 1},
{time: "2014-06-24 17:48:00", location: {latitude: 52.1,longitude: -0.7}, count: 1
, team: 1},
{time: "2014-06-24 17:48:00", location: {latitude: 9.9,longitude: -84.0}, count: 2
, team: 1},
{time: "2014-06-24 17:48:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:49:00", location: {latitude: 8.6,longitude: -83.0}, count: 1
, team: 1},
{time: "2014-06-24 17:50:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:50:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: -0.2,longitude: -78.5}, count: 2
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: -25.5,longitude: -49.3}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: -30.0,longitude: -51.1}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: -6.2,longitude: 106.7}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: -7.8,longitude: 110.4}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 10.2,longitude: -83.8}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 19.3,longitude: -99.1}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 19.5,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 21.5,longitude: 39.8}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 4.7,longitude: -74.0}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 4.7,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 51.5,longitude: -0.1}, count: 2
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 51.5,longitude: 0.7}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 53.3,longitude: -1.4}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 53.8,longitude: -1.7}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 8.6,longitude: -83.0}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 9.9,longitude: -84.1}, count: 4
, team: 1},
{time: "2014-06-24 17:51:00", location: {latitude: 9.9,longitude: -85.6}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: -1.4,longitude: -48.5}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: -12.0,longitude: -77.0}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: -2.2,longitude: -79.8}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: -20.8,longitude: -42.9}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: -22.8,longitude: -43.4}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: -26.9,longitude: -65.3}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: -27.4,longitude: 153.1}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 10.5,longitude: -85.3}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 10.5,longitude: -85.7}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 13.6,longitude: -89.1}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 20.6,longitude: -103.5}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 27.5,longitude: -81.8}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 30.3,longitude: -97.7}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 40.4,longitude: 28.9}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 53.0,longitude: -2.2}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 53.4,longitude: -2.2}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 9.4,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 17:53:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 17:54:00", location: {latitude: -23.0,longitude: -43.4}, count: 1
, team: 1},
{time: "2014-06-24 17:54:00", location: {latitude: -25.3,longitude: -57.6}, count: 1
, team: 1},
{time: "2014-06-24 17:54:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:54:00", location: {latitude: 10.1,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 17:54:00", location: {latitude: 10.4,longitude: -75.5}, count: 1
, team: 1},
{time: "2014-06-24 17:54:00", location: {latitude: 15.4,longitude: -87.8}, count: 1
, team: 1},
{time: "2014-06-24 17:54:00", location: {latitude: 3.2,longitude: 101.7}, count: 1
, team: 1},
{time: "2014-06-24 17:54:00", location: {latitude: 38.6,longitude: -76.6}, count: 1
, team: 1},
{time: "2014-06-24 17:54:00", location: {latitude: 41.8,longitude: -88.1}, count: 1
, team: 1},
{time: "2014-06-24 17:54:00", location: {latitude: 42.5,longitude: -90.7}, count: 1
, team: 1},
{time: "2014-06-24 17:54:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 17:55:00", location: {latitude: 15.6,longitude: -88.0}, count: 1
, team: 1},
{time: "2014-06-24 17:55:00", location: {latitude: 32.3,longitude: -64.8}, count: 1
, team: 1},
{time: "2014-06-24 17:55:00", location: {latitude: 38.6,longitude: 29.4}, count: 1
, team: 1},
{time: "2014-06-24 17:55:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 17:57:00", location: {latitude: 49.0,longitude: 2.3}, count: 1
, team: 1},
{time: "2014-06-24 17:58:00", location: {latitude: -34.5,longitude: -58.7}, count: 1
, team: 1},
{time: "2014-06-24 17:58:00", location: {latitude: -6.3,longitude: 106.9}, count: 1
, team: 1},
{time: "2014-06-24 17:59:00", location: {latitude: -34.7,longitude: -58.2}, count: 1
, team: 1},
{time: "2014-06-24 17:59:00", location: {latitude: 25.8,longitude: -80.3}, count: 1
, team: 1},
{time: "2014-06-24 17:59:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:00:00", location: {latitude: 0.4,longitude: 32.6}, count: 1
, team: 1},
{time: "2014-06-24 18:00:00", location: {latitude: 13.7,longitude: -89.1}, count: 1
, team: 1},
{time: "2014-06-24 18:00:00", location: {latitude: 43.6,longitude: 1.4}, count: 1
, team: 1},
{time: "2014-06-24 18:00:00", location: {latitude: 54.8,longitude: -1.4}, count: 1
, team: 1},
{time: "2014-06-24 18:01:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 18:01:00", location: {latitude: 41.2,longitude: 24.2}, count: 1
, team: 1},
{time: "2014-06-24 18:03:00", location: {latitude: 11.0,longitude: -63.9}, count: 1
, team: 1},
{time: "2014-06-24 18:03:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 18:03:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:04:00", location: {latitude: 10.1,longitude: -85.4}, count: 1
, team: 1},
{time: "2014-06-24 18:04:00", location: {latitude: 37.8,longitude: 48.9}, count: 1
, team: 1},
{time: "2014-06-24 18:05:00", location: {latitude: -11.8,longitude: -77.1}, count: 1
, team: 1},
{time: "2014-06-24 18:05:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 1},
{time: "2014-06-24 18:05:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 18:05:00", location: {latitude: 39.9,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 18:05:00", location: {latitude: 40.0,longitude: -83.0}, count: 1
, team: 1},
{time: "2014-06-24 18:05:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:06:00", location: {latitude: 22.2,longitude: -101.0}, count: 1
, team: 1},
{time: "2014-06-24 18:06:00", location: {latitude: 30.0,longitude: -90.2}, count: 1
, team: 1},
{time: "2014-06-24 18:08:00", location: {latitude: 1.5,longitude: 103.7}, count: 1
, team: 1},
{time: "2014-06-24 18:08:00", location: {latitude: 10.4,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 18:08:00", location: {latitude: 13.7,longitude: -89.3}, count: 1
, team: 1},
{time: "2014-06-24 18:08:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 18:09:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 1},
{time: "2014-06-24 18:09:00", location: {latitude: 21.2,longitude: -101.7}, count: 1
, team: 1},
{time: "2014-06-24 18:09:00", location: {latitude: 53.2,longitude: -4.3}, count: 1
, team: 1},
{time: "2014-06-24 18:09:00", location: {latitude: 8.6,longitude: -71.6}, count: 1
, team: 1},
{time: "2014-06-24 18:09:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 18:09:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 18:10:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 18:11:00", location: {latitude: 40.9,longitude: 14.2}, count: 1
, team: 1},
{time: "2014-06-24 18:12:00", location: {latitude: -12.9,longitude: -38.4}, count: 1
, team: 1},
{time: "2014-06-24 18:12:00", location: {latitude: -13.0,longitude: -38.5}, count: 1
, team: 1},
{time: "2014-06-24 18:12:00", location: {latitude: -34.7,longitude: -58.4}, count: 1
, team: 1},
{time: "2014-06-24 18:12:00", location: {latitude: 13.7,longitude: -89.3}, count: 1
, team: 1},
{time: "2014-06-24 18:12:00", location: {latitude: 19.2,longitude: -70.5}, count: 1
, team: 1},
{time: "2014-06-24 18:12:00", location: {latitude: 29.8,longitude: -95.4}, count: 1
, team: 1},
{time: "2014-06-24 18:12:00", location: {latitude: 30.3,longitude: -9.5}, count: 1
, team: 1},
{time: "2014-06-24 18:12:00", location: {latitude: 39.9,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 18:12:00", location: {latitude: 4.7,longitude: -74.0}, count: 1
, team: 1},
{time: "2014-06-24 18:12:00", location: {latitude: 45.5,longitude: 9.2}, count: 1
, team: 1},
{time: "2014-06-24 18:12:00", location: {latitude: 53.3,longitude: -6.1}, count: 1
, team: 1},
{time: "2014-06-24 18:12:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:14:00", location: {latitude: -1.3,longitude: 36.9}, count: 1
, team: 1},
{time: "2014-06-24 18:14:00", location: {latitude: -2.2,longitude: -79.9}, count: 1
, team: 1},
{time: "2014-06-24 18:14:00", location: {latitude: -23.6,longitude: -46.6}, count: 1
, team: 1},
{time: "2014-06-24 18:14:00", location: {latitude: 10.5,longitude: -84.6}, count: 1
, team: 1},
{time: "2014-06-24 18:14:00", location: {latitude: 10.7,longitude: -61.4}, count: 1
, team: 1},
{time: "2014-06-24 18:14:00", location: {latitude: 13.7,longitude: -89.2}, count: 1
, team: 1},
{time: "2014-06-24 18:14:00", location: {latitude: 19.5,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 18:14:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 1},
{time: "2014-06-24 18:14:00", location: {latitude: 49.3,longitude: -123.1}, count: 1
, team: 1},
{time: "2014-06-24 18:14:00", location: {latitude: 55.8,longitude: -4.3}, count: 2
, team: 1},
{time: "2014-06-24 18:14:00", location: {latitude: 9.8,longitude: -85.2}, count: 1
, team: 1},
{time: "2014-06-24 18:14:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 18:15:00", location: {latitude: -34.6,longitude: -58.5}, count: 1
, team: 1},
{time: "2014-06-24 18:16:00", location: {latitude: -22.9,longitude: -47.0}, count: 1
, team: 1},
{time: "2014-06-24 18:16:00", location: {latitude: -28.4,longitude: -65.8}, count: 1
, team: 1},
{time: "2014-06-24 18:16:00", location: {latitude: -6.3,longitude: 107.0}, count: 1
, team: 1},
{time: "2014-06-24 18:16:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 18:16:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:16:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 18:16:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 1},
{time: "2014-06-24 18:16:00", location: {latitude: 32.9,longitude: -96.9}, count: 1
, team: 1},
{time: "2014-06-24 18:16:00", location: {latitude: 36.7,longitude: -4.3}, count: 1
, team: 1},
{time: "2014-06-24 18:16:00", location: {latitude: 39.9,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 18:16:00", location: {latitude: 8.5,longitude: 76.9}, count: 1
, team: 1},
{time: "2014-06-24 18:16:00", location: {latitude: 9.0,longitude: -79.5}, count: 1
, team: 1},
{time: "2014-06-24 18:16:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:16:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 18:17:00", location: {latitude: -33.6,longitude: -70.6}, count: 1
, team: 1},
{time: "2014-06-24 18:17:00", location: {latitude: -34.6,longitude: -58.5}, count: 2
, team: 1},
{time: "2014-06-24 18:17:00", location: {latitude: 10.3,longitude: -85.0}, count: 1
, team: 1},
{time: "2014-06-24 18:17:00", location: {latitude: 36.7,longitude: -4.3}, count: 1
, team: 1},
{time: "2014-06-24 18:17:00", location: {latitude: 41.0,longitude: 29.0}, count: 1
, team: 1},
{time: "2014-06-24 18:17:00", location: {latitude: 9.1,longitude: -79.5}, count: 1
, team: 1},
{time: "2014-06-24 18:17:00", location: {latitude: 9.2,longitude: -83.3}, count: 1
, team: 1},
{time: "2014-06-24 18:17:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 18:17:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:18:00", location: {latitude: 14.7,longitude: -90.5}, count: 1
, team: 1},
{time: "2014-06-24 18:18:00", location: {latitude: 15.0,longitude: 100.3}, count: 1
, team: 1},
{time: "2014-06-24 18:18:00", location: {latitude: 19.1,longitude: -98.2}, count: 1
, team: 1},
{time: "2014-06-24 18:18:00", location: {latitude: 23.8,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 18:18:00", location: {latitude: 3.2,longitude: 101.7}, count: 1
, team: 1},
{time: "2014-06-24 18:18:00", location: {latitude: 40.5,longitude: -3.7}, count: 1
, team: 1},
{time: "2014-06-24 18:18:00", location: {latitude: 41.3,longitude: 14.9}, count: 1
, team: 1},
{time: "2014-06-24 18:18:00", location: {latitude: 41.4,longitude: 2.1}, count: 1
, team: 1},
{time: "2014-06-24 18:18:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 18:18:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 18:19:00", location: {latitude: -34.6,longitude: -58.5}, count: 1
, team: 1},
{time: "2014-06-24 18:19:00", location: {latitude: -38.0,longitude: -57.5}, count: 1
, team: 1},
{time: "2014-06-24 18:19:00", location: {latitude: 10.0,longitude: -84.1}, count: 3
, team: 1},
{time: "2014-06-24 18:19:00", location: {latitude: 22.3,longitude: -97.9}, count: 1
, team: 1},
{time: "2014-06-24 18:19:00", location: {latitude: 22.3,longitude: 73.2}, count: 1
, team: 1},
{time: "2014-06-24 18:19:00", location: {latitude: 39.9,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 18:19:00", location: {latitude: 41.0,longitude: 28.6}, count: 1
, team: 1},
{time: "2014-06-24 18:19:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:20:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:20:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 18:20:00", location: {latitude: 10.4,longitude: -84.5}, count: 1
, team: 1},
{time: "2014-06-24 18:20:00", location: {latitude: 14.1,longitude: -87.2}, count: 1
, team: 1},
{time: "2014-06-24 18:20:00", location: {latitude: 34.2,longitude: -118.4}, count: 1
, team: 1},
{time: "2014-06-24 18:20:00", location: {latitude: 36.7,longitude: -121.8}, count: 1
, team: 1},
{time: "2014-06-24 18:20:00", location: {latitude: 39.0,longitude: -77.4}, count: 1
, team: 1},
{time: "2014-06-24 18:20:00", location: {latitude: 40.4,longitude: -3.8}, count: 1
, team: 1},
{time: "2014-06-24 18:20:00", location: {latitude: 48.8,longitude: 2.4}, count: 1
, team: 1},
{time: "2014-06-24 18:20:00", location: {latitude: 51.7,longitude: -1.3}, count: 1
, team: 1},
{time: "2014-06-24 18:20:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:21:00", location: {latitude: -3.7,longitude: -38.5}, count: 1
, team: 1},
{time: "2014-06-24 18:21:00", location: {latitude: -34.9,longitude: -57.9}, count: 1
, team: 1},
{time: "2014-06-24 18:21:00", location: {latitude: -6.2,longitude: 106.7}, count: 1
, team: 1},
{time: "2014-06-24 18:21:00", location: {latitude: -6.4,longitude: 106.8}, count: 1
, team: 1},
{time: "2014-06-24 18:21:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 18:21:00", location: {latitude: 14.5,longitude: -91.5}, count: 1
, team: 1},
{time: "2014-06-24 18:21:00", location: {latitude: 29.4,longitude: -98.6}, count: 1
, team: 1},
{time: "2014-06-24 18:21:00", location: {latitude: 33.5,longitude: -111.9}, count: 1
, team: 1},
{time: "2014-06-24 18:21:00", location: {latitude: 35.9,longitude: 0.1}, count: 1
, team: 1},
{time: "2014-06-24 18:21:00", location: {latitude: 39.6,longitude: 2.7}, count: 1
, team: 1},
{time: "2014-06-24 18:21:00", location: {latitude: 39.9,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 18:21:00", location: {latitude: 43.3,longitude: -2.0}, count: 1
, team: 1},
{time: "2014-06-24 18:22:00", location: {latitude: -23.0,longitude: -43.2}, count: 1
, team: 1},
{time: "2014-06-24 18:22:00", location: {latitude: -25.3,longitude: -57.5}, count: 1
, team: 1},
{time: "2014-06-24 18:22:00", location: {latitude: -30.0,longitude: -51.2}, count: 1
, team: 1},
{time: "2014-06-24 18:22:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:22:00", location: {latitude: 14.7,longitude: -90.5}, count: 1
, team: 1},
{time: "2014-06-24 18:22:00", location: {latitude: 19.5,longitude: -99.0}, count: 1
, team: 1},
{time: "2014-06-24 18:22:00", location: {latitude: 40.8,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 18:22:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:22:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 18:23:00", location: {latitude: -12.0,longitude: -76.9}, count: 1
, team: 1},
{time: "2014-06-24 18:23:00", location: {latitude: -2.1,longitude: -80.0}, count: 1
, team: 1},
{time: "2014-06-24 18:23:00", location: {latitude: -2.2,longitude: -79.9}, count: 1
, team: 1},
{time: "2014-06-24 18:23:00", location: {latitude: -33.6,longitude: -70.8}, count: 1
, team: 1},
{time: "2014-06-24 18:23:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:23:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 18:23:00", location: {latitude: 10.5,longitude: -84.6}, count: 1
, team: 1},
{time: "2014-06-24 18:23:00", location: {latitude: 10.9,longitude: -74.8}, count: 1
, team: 1},
{time: "2014-06-24 18:23:00", location: {latitude: 33.8,longitude: -84.7}, count: 1
, team: 1},
{time: "2014-06-24 18:23:00", location: {latitude: 39.9,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 18:23:00", location: {latitude: 49.0,longitude: 2.0}, count: 1
, team: 1},
{time: "2014-06-24 18:23:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:24:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 1},
{time: "2014-06-24 18:24:00", location: {latitude: 10.0,longitude: -83.0}, count: 1
, team: 1},
{time: "2014-06-24 18:24:00", location: {latitude: 10.2,longitude: -68.0}, count: 1
, team: 1},
{time: "2014-06-24 18:24:00", location: {latitude: 10.3,longitude: -84.5}, count: 1
, team: 1},
{time: "2014-06-24 18:24:00", location: {latitude: 10.5,longitude: -66.8}, count: 1
, team: 1},
{time: "2014-06-24 18:24:00", location: {latitude: 10.5,longitude: -67.0}, count: 1
, team: 1},
{time: "2014-06-24 18:24:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 18:24:00", location: {latitude: 29.4,longitude: -98.6}, count: 1
, team: 1},
{time: "2014-06-24 18:24:00", location: {latitude: 30.3,longitude: -9.5}, count: 1
, team: 1},
{time: "2014-06-24 18:24:00", location: {latitude: 39.9,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 18:24:00", location: {latitude: 40.6,longitude: -73.8}, count: 1
, team: 1},
{time: "2014-06-24 18:24:00", location: {latitude: 40.7,longitude: -4.7}, count: 1
, team: 1},
{time: "2014-06-24 18:24:00", location: {latitude: 41.1,longitude: 29.0}, count: 1
, team: 1},
{time: "2014-06-24 18:24:00", location: {latitude: 9.0,longitude: -79.5}, count: 1
, team: 1},
{time: "2014-06-24 18:24:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:25:00", location: {latitude: -34.9,longitude: -71.2}, count: 1
, team: 1},
{time: "2014-06-24 18:25:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 18:25:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 18:25:00", location: {latitude: 15.4,longitude: -87.8}, count: 1
, team: 1},
{time: "2014-06-24 18:25:00", location: {latitude: 30.3,longitude: -9.5}, count: 1
, team: 1},
{time: "2014-06-24 18:25:00", location: {latitude: 50.9,longitude: 4.3}, count: 1
, team: 1},
{time: "2014-06-24 18:25:00", location: {latitude: 51.2,longitude: -1.1}, count: 1
, team: 1},
{time: "2014-06-24 18:25:00", location: {latitude: 62.9,longitude: 27.7}, count: 1
, team: 1},
{time: "2014-06-24 18:26:00", location: {latitude: -27.4,longitude: -55.9}, count: 1
, team: 1},
{time: "2014-06-24 18:26:00", location: {latitude: -31.4,longitude: -64.2}, count: 1
, team: 1},
{time: "2014-06-24 18:26:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 1},
{time: "2014-06-24 18:26:00", location: {latitude: 19.5,longitude: -99.0}, count: 1
, team: 1},
{time: "2014-06-24 18:26:00", location: {latitude: 9.4,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 18:26:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:27:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 18:27:00", location: {latitude: -28.3,longitude: -59.3}, count: 1
, team: 1},
{time: "2014-06-24 18:27:00", location: {latitude: -34.6,longitude: -58.6}, count: 1
, team: 1},
{time: "2014-06-24 18:27:00", location: {latitude: 0.6,longitude: -80.0}, count: 1
, team: 1},
{time: "2014-06-24 18:27:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 18:27:00", location: {latitude: 10.1,longitude: -85.5}, count: 1
, team: 1},
{time: "2014-06-24 18:27:00", location: {latitude: 6.1,longitude: 100.3}, count: 1
, team: 1},
{time: "2014-06-24 18:27:00", location: {latitude: 9.4,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 18:28:00", location: {latitude: -34.8,longitude: -56.3}, count: 1
, team: 1},
{time: "2014-06-24 18:28:00", location: {latitude: -7.1,longitude: -34.8}, count: 1
, team: 1},
{time: "2014-06-24 18:28:00", location: {latitude: -7.8,longitude: 110.9}, count: 1
, team: 1},
{time: "2014-06-24 18:28:00", location: {latitude: 25.2,longitude: 55.4}, count: 1
, team: 1},
{time: "2014-06-24 18:28:00", location: {latitude: 9.3,longitude: -83.5}, count: 1
, team: 1},
{time: "2014-06-24 18:28:00", location: {latitude: 9.9,longitude: -83.7}, count: 1
, team: 1},
{time: "2014-06-24 18:29:00", location: {latitude: -7.1,longitude: -34.8}, count: 1
, team: 1},
{time: "2014-06-24 18:29:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 18:29:00", location: {latitude: 19.5,longitude: -99.0}, count: 1
, team: 1},
{time: "2014-06-24 18:29:00", location: {latitude: 20.7,longitude: -103.3}, count: 1
, team: 1},
{time: "2014-06-24 18:29:00", location: {latitude: 39.1,longitude: -94.6}, count: 1
, team: 1},
{time: "2014-06-24 18:29:00", location: {latitude: 45.3,longitude: 7.5}, count: 1
, team: 1},
{time: "2014-06-24 18:29:00", location: {latitude: 52.3,longitude: 5.5}, count: 1
, team: 1},
{time: "2014-06-24 18:29:00", location: {latitude: 53.3,longitude: -3.1}, count: 1
, team: 1},
{time: "2014-06-24 18:29:00", location: {latitude: 60.5,longitude: 16.3}, count: 1
, team: 1},
{time: "2014-06-24 18:30:00", location: {latitude: -34.9,longitude: -56.1}, count: 1
, team: 1},
{time: "2014-06-24 18:30:00", location: {latitude: -7.1,longitude: -34.8}, count: 1
, team: 1},
{time: "2014-06-24 18:30:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:30:00", location: {latitude: 10.5,longitude: -68.1}, count: 1
, team: 1},
{time: "2014-06-24 18:30:00", location: {latitude: 10.6,longitude: -71.6}, count: 1
, team: 1},
{time: "2014-06-24 18:30:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:31:00", location: {latitude: -2.9,longitude: -79.0}, count: 1
, team: 1},
{time: "2014-06-24 18:31:00", location: {latitude: -33.4,longitude: -70.6}, count: 1
, team: 1},
{time: "2014-06-24 18:31:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 18:31:00", location: {latitude: 52.3,longitude: -2.1}, count: 1
, team: 1},
{time: "2014-06-24 18:32:00", location: {latitude: -34.7,longitude: -71.0}, count: 1
, team: 1},
{time: "2014-06-24 18:32:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 18:32:00", location: {latitude: 33.8,longitude: -84.6}, count: 1
, team: 1},
{time: "2014-06-24 18:32:00", location: {latitude: 40.0,longitude: -75.1}, count: 1
, team: 1},
{time: "2014-06-24 18:32:00", location: {latitude: 9.8,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 18:33:00", location: {latitude: -6.8,longitude: 39.2}, count: 1
, team: 1},
{time: "2014-06-24 18:33:00", location: {latitude: 10.3,longitude: -84.4}, count: 1
, team: 1},
{time: "2014-06-24 18:33:00", location: {latitude: 61.5,longitude: 23.8}, count: 1
, team: 1},
{time: "2014-06-24 18:34:00", location: {latitude: -2.2,longitude: -79.9}, count: 1
, team: 1},
{time: "2014-06-24 18:34:00", location: {latitude: -34.9,longitude: -56.2}, count: 1
, team: 1},
{time: "2014-06-24 18:34:00", location: {latitude: 10.4,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 18:34:00", location: {latitude: 10.4,longitude: -84.6}, count: 1
, team: 1},
{time: "2014-06-24 18:34:00", location: {latitude: 10.6,longitude: -71.6}, count: 1
, team: 1},
{time: "2014-06-24 18:34:00", location: {latitude: 40.1,longitude: -88.2}, count: 1
, team: 1},
{time: "2014-06-24 18:35:00", location: {latitude: 32.5,longitude: -117.1}, count: 1
, team: 1},
{time: "2014-06-24 18:35:00", location: {latitude: 34.1,longitude: -118.3}, count: 1
, team: 1},
{time: "2014-06-24 18:36:00", location: {latitude: -2.0,longitude: 112.8}, count: 1
, team: 1},
{time: "2014-06-24 18:36:00", location: {latitude: 25.7,longitude: -100.4}, count: 1
, team: 1},
{time: "2014-06-24 18:36:00", location: {latitude: 32.5,longitude: -117.1}, count: 1
, team: 1},
{time: "2014-06-24 18:36:00", location: {latitude: 4.6,longitude: -74.2}, count: 1
, team: 1},
{time: "2014-06-24 18:36:00", location: {latitude: 43.0,longitude: 44.6}, count: 1
, team: 1},
{time: "2014-06-24 18:36:00", location: {latitude: 55.8,longitude: 49.1}, count: 1
, team: 1},
{time: "2014-06-24 18:36:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 18:36:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 18:37:00", location: {latitude: -29.4,longitude: -66.8}, count: 1
, team: 1},
{time: "2014-06-24 18:37:00", location: {latitude: -29.7,longitude: -53.7}, count: 1
, team: 1},
{time: "2014-06-24 18:37:00", location: {latitude: 10.2,longitude: -68.0}, count: 1
, team: 1},
{time: "2014-06-24 18:37:00", location: {latitude: 27.6,longitude: 38.5}, count: 1
, team: 1},
{time: "2014-06-24 18:37:00", location: {latitude: 32.5,longitude: -117.1}, count: 1
, team: 1},
{time: "2014-06-24 18:37:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 18:38:00", location: {latitude: -19.9,longitude: -44.0}, count: 2
, team: 1},
{time: "2014-06-24 18:38:00", location: {latitude: -34.9,longitude: -56.2}, count: 1
, team: 1},
{time: "2014-06-24 18:38:00", location: {latitude: 21.7,longitude: -101.0}, count: 1
, team: 1},
{time: "2014-06-24 18:38:00", location: {latitude: 8.6,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 18:38:00", location: {latitude: 9.8,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 18:39:00", location: {latitude: -19.9,longitude: -43.9}, count: 1
, team: 1},
{time: "2014-06-24 18:39:00", location: {latitude: -2.1,longitude: -79.9}, count: 1
, team: 1},
{time: "2014-06-24 18:39:00", location: {latitude: 27.6,longitude: 38.5}, count: 1
, team: 1},
{time: "2014-06-24 18:39:00", location: {latitude: 8.9,longitude: -67.4}, count: 1
, team: 1},
{time: "2014-06-24 18:40:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:40:00", location: {latitude: 40.8,longitude: 29.8}, count: 1
, team: 1},
{time: "2014-06-24 18:40:00", location: {latitude: 9.9,longitude: -83.9}, count: 1
, team: 1},
{time: "2014-06-24 18:40:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 18:41:00", location: {latitude: 10.0,longitude: -84.1}, count: 2
, team: 1},
{time: "2014-06-24 18:41:00", location: {latitude: 31.1,longitude: 31.3}, count: 1
, team: 1},
{time: "2014-06-24 18:41:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 18:41:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:42:00", location: {latitude: -27.6,longitude: -48.5}, count: 1
, team: 1},
{time: "2014-06-24 18:42:00", location: {latitude: 13.7,longitude: -89.2}, count: 1
, team: 1},
{time: "2014-06-24 18:42:00", location: {latitude: 42.7,longitude: -83.2}, count: 1
, team: 1},
{time: "2014-06-24 18:42:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:43:00", location: {latitude: -31.5,longitude: -64.1}, count: 1
, team: 1},
{time: "2014-06-24 18:43:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 1},
{time: "2014-06-24 18:43:00", location: {latitude: 45.4,longitude: -75.7}, count: 1
, team: 1},
{time: "2014-06-24 18:43:00", location: {latitude: 48.9,longitude: 2.4}, count: 1
, team: 1},
{time: "2014-06-24 18:43:00", location: {latitude: 53.4,longitude: -2.4}, count: 1
, team: 1},
{time: "2014-06-24 18:44:00", location: {latitude: 12.9,longitude: 77.6}, count: 1
, team: 1},
{time: "2014-06-24 18:44:00", location: {latitude: 27.8,longitude: -82.7}, count: 1
, team: 1},
{time: "2014-06-24 18:44:00", location: {latitude: 8.6,longitude: -82.9}, count: 1
, team: 1},
{time: "2014-06-24 18:44:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:45:00", location: {latitude: 42.6,longitude: -6.7}, count: 1
, team: 1},
{time: "2014-06-24 18:45:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:45:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 18:46:00", location: {latitude: 10.2,longitude: -83.8}, count: 1
, team: 1},
{time: "2014-06-24 18:46:00", location: {latitude: 21.4,longitude: 39.8}, count: 1
, team: 1},
{time: "2014-06-24 18:46:00", location: {latitude: 51.4,longitude: 0.0}, count: 1
, team: 1},
{time: "2014-06-24 18:47:00", location: {latitude: 10.0,longitude: -84.0}, count: 2
, team: 1},
{time: "2014-06-24 18:47:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:47:00", location: {latitude: 13.7,longitude: -89.2}, count: 1
, team: 1},
{time: "2014-06-24 18:47:00", location: {latitude: 5.8,longitude: 102.1}, count: 1
, team: 1},
{time: "2014-06-24 18:48:00", location: {latitude: 8.6,longitude: -83.0}, count: 1
, team: 1},
{time: "2014-06-24 18:48:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 18:49:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:50:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 18:50:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:50:00", location: {latitude: 10.0,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 18:50:00", location: {latitude: 13.7,longitude: -89.3}, count: 1
, team: 1},
{time: "2014-06-24 18:51:00", location: {latitude: -6.8,longitude: -79.9}, count: 1
, team: 1},
{time: "2014-06-24 18:51:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:51:00", location: {latitude: 16.7,longitude: -93.1}, count: 1
, team: 1},
{time: "2014-06-24 18:51:00", location: {latitude: 19.3,longitude: -99.6}, count: 1
, team: 1},
{time: "2014-06-24 18:51:00", location: {latitude: 34.0,longitude: -83.4}, count: 1
, team: 1},
{time: "2014-06-24 18:51:00", location: {latitude: 41.9,longitude: 12.5}, count: 1
, team: 1},
{time: "2014-06-24 18:51:00", location: {latitude: 46.5,longitude: 6.6}, count: 1
, team: 1},
{time: "2014-06-24 18:51:00", location: {latitude: 50.8,longitude: -0.1}, count: 1
, team: 1},
{time: "2014-06-24 18:51:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 18:52:00", location: {latitude: 19.7,longitude: -101.2}, count: 1
, team: 1},
{time: "2014-06-24 18:52:00", location: {latitude: 33.5,longitude: -117.2}, count: 1
, team: 1},
{time: "2014-06-24 18:52:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 1},
{time: "2014-06-24 18:53:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 18:53:00", location: {latitude: 10.2,longitude: -83.6}, count: 1
, team: 1},
{time: "2014-06-24 18:53:00", location: {latitude: 10.4,longitude: -84.3}, count: 1
, team: 1},
{time: "2014-06-24 18:53:00", location: {latitude: 17.1,longitude: -96.7}, count: 1
, team: 1},
{time: "2014-06-24 18:53:00", location: {latitude: 19.3,longitude: -99.6}, count: 1
, team: 1},
{time: "2014-06-24 18:54:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 1},
{time: "2014-06-24 18:54:00", location: {latitude: 10.0,longitude: -83.0}, count: 1
, team: 1},
{time: "2014-06-24 18:55:00", location: {latitude: -23.0,longitude: -43.2}, count: 1
, team: 1},
{time: "2014-06-24 18:55:00", location: {latitude: 52.7,longitude: -1.0}, count: 1
, team: 1},
{time: "2014-06-24 18:55:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 18:56:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:56:00", location: {latitude: 37.4,longitude: -6.0}, count: 1
, team: 1},
{time: "2014-06-24 18:56:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 18:57:00", location: {latitude: -25.3,longitude: -57.7}, count: 1
, team: 1},
{time: "2014-06-24 18:57:00", location: {latitude: 33.9,longitude: -84.2}, count: 1
, team: 1},
{time: "2014-06-24 18:57:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 1},
{time: "2014-06-24 18:58:00", location: {latitude: 40.4,longitude: -74.3}, count: 1
, team: 1},
{time: "2014-06-24 18:58:00", location: {latitude: 50.4,longitude: 2.8}, count: 1
, team: 1},
{time: "2014-06-24 18:59:00", location: {latitude: 9.5,longitude: -82.6}, count: 1
, team: 1},
{time: "2014-06-24 16:00:00", location: {latitude: -30.1,longitude: -51.1}, count: 1
, team: 2},
{time: "2014-06-24 16:00:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:01:00", location: {latitude: 18.1,longitude: -66.1}, count: 1
, team: 2},
{time: "2014-06-24 16:01:00", location: {latitude: 29.8,longitude: -95.2}, count: 1
, team: 2},
{time: "2014-06-24 16:01:00", location: {latitude: 3.2,longitude: 101.6}, count: 1
, team: 2},
{time: "2014-06-24 16:01:00", location: {latitude: 3.2,longitude: 101.7}, count: 1
, team: 2},
{time: "2014-06-24 16:01:00", location: {latitude: 35.2,longitude: -89.9}, count: 1
, team: 2},
{time: "2014-06-24 16:01:00", location: {latitude: 40.7,longitude: 30.0}, count: 1
, team: 2},
{time: "2014-06-24 16:01:00", location: {latitude: 40.8,longitude: -73.3}, count: 1
, team: 2},
{time: "2014-06-24 16:01:00", location: {latitude: 5.1,longitude: -75.5}, count: 1
, team: 2},
{time: "2014-06-24 16:01:00", location: {latitude: 51.2,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:01:00", location: {latitude: 51.4,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:01:00", location: {latitude: 51.4,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 16:01:00", location: {latitude: 52.7,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 16:01:00", location: {latitude: 53.0,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:01:00", location: {latitude: 53.1,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:01:00", location: {latitude: 53.5,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 16:02:00", location: {latitude: -19.9,longitude: -43.9}, count: 1
, team: 2},
{time: "2014-06-24 16:02:00", location: {latitude: -34.6,longitude: -58.6}, count: 1
, team: 2},
{time: "2014-06-24 16:02:00", location: {latitude: -37.8,longitude: 145.0}, count: 1
, team: 2},
{time: "2014-06-24 16:02:00", location: {latitude: 33.8,longitude: -118.2}, count: 1
, team: 2},
{time: "2014-06-24 16:02:00", location: {latitude: 5.2,longitude: 96.8}, count: 1
, team: 2},
{time: "2014-06-24 16:02:00", location: {latitude: 50.9,longitude: 7.1}, count: 1
, team: 2},
{time: "2014-06-24 16:02:00", location: {latitude: 51.4,longitude: 0.4}, count: 1
, team: 2},
{time: "2014-06-24 16:02:00", location: {latitude: 51.5,longitude: -0.9}, count: 1
, team: 2},
{time: "2014-06-24 16:02:00", location: {latitude: 51.6,longitude: -0.8}, count: 1
, team: 2},
{time: "2014-06-24 16:02:00", location: {latitude: 52.3,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 16:02:00", location: {latitude: 53.5,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:02:00", location: {latitude: 53.5,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:02:00", location: {latitude: 53.6,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 16:02:00", location: {latitude: 53.8,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 16:02:00", location: {latitude: 54.9,longitude: 23.9}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: -27.5,longitude: -59.0}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: -5.1,longitude: 119.5}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: -6.2,longitude: 106.9}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: -7.1,longitude: 107.6}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: 10.2,longitude: -83.6}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: 10.6,longitude: 76.1}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: 14.1,longitude: -87.2}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: 25.2,longitude: 51.6}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: 29.3,longitude: 48.0}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: 40.7,longitude: -74.3}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: 50.7,longitude: 1.6}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: 51.3,longitude: 0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: 51.8,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: 52.1,longitude: 1.2}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: 53.5,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: 53.8,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 16:03:00", location: {latitude: 53.8,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: -31.4,longitude: -64.1}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: -31.6,longitude: -60.7}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: -37.0,longitude: -60.3}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 19.1,longitude: 72.8}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 32.0,longitude: 35.9}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 4.7,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 40.9,longitude: -74.0}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 41.6,longitude: -4.7}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 42.3,longitude: -71.1}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 44.5,longitude: -73.2}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 48.6,longitude: 7.8}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 51.8,longitude: 0.9}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 53.3,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 53.5,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 54.2,longitude: -4.4}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 54.6,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 59.3,longitude: 18.0}, count: 1
, team: 2},
{time: "2014-06-24 16:04:00", location: {latitude: 6.1,longitude: 102.3}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: -36.8,longitude: -73.0}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: -6.2,longitude: 106.9}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: -8.0,longitude: -34.9}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: -8.1,longitude: -34.9}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: -8.6,longitude: 115.2}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 14.0,longitude: 100.4}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 14.0,longitude: 100.8}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 14.4,longitude: 121.0}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 15.5,longitude: -88.0}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 18.0,longitude: -92.9}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 23.7,longitude: 58.2}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 25.7,longitude: -100.4}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 25.7,longitude: -80.4}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 37.4,longitude: -79.2}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 42.5,longitude: -90.7}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 43.8,longitude: -79.1}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 48.1,longitude: 8.5}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 51.2,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 51.5,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 51.5,longitude: -3.1}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 51.5,longitude: 0.0}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 52.8,longitude: -0.9}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 53.0,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 53.5,longitude: -2.0}, count: 2
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 53.5,longitude: -2.9}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 53.5,longitude: 18.6}, count: 1
, team: 2},
{time: "2014-06-24 16:05:00", location: {latitude: 53.6,longitude: -2.4}, count: 2
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: -0.0,longitude: -51.2}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: -29.9,longitude: -51.2}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: -6.2,longitude: 106.7}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: -6.2,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: -7.6,longitude: 112.7}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 15.3,longitude: -91.5}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 18.0,longitude: -92.9}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 24.8,longitude: -107.4}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 26.6,longitude: -80.1}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 40.4,longitude: -3.7}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 40.8,longitude: -74.2}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 42.4,longitude: 19.3}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 43.6,longitude: -79.6}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 50.2,longitude: -5.5}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 50.8,longitude: 4.3}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 51.2,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 51.2,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 51.5,longitude: -2.5}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 51.9,longitude: 5.9}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 52.8,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 53.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 53.4,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 53.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 53.5,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 53.9,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 54.5,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 16:06:00", location: {latitude: 54.9,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: -26.1,longitude: 27.7}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: -34.9,longitude: -57.9}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: -6.3,longitude: 106.9}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: -6.5,longitude: 106.9}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: -7.0,longitude: 110.4}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: 1.3,longitude: 103.9}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: 18.5,longitude: -70.0}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: 43.8,longitude: -79.4}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: 48.7,longitude: 3.2}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: 51.5,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: 51.9,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: 52.5,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: 53.4,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: 53.5,longitude: -2.7}, count: 1
, team: 2},
{time: "2014-06-24 16:07:00", location: {latitude: 55.8,longitude: -4.2}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: -33.8,longitude: 151.3}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: -5.4,longitude: 105.2}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: -6.2,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: -6.3,longitude: 107.0}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: 19.1,longitude: -98.2}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: 30.2,longitude: -95.4}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: 43.6,longitude: -79.6}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: 50.8,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: 51.2,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: 51.7,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: 51.8,longitude: -3.8}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: 52.6,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: 53.6,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: 54.5,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 16:08:00", location: {latitude: 55.2,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: -35.7,longitude: -63.8}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: -6.2,longitude: 106.9}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 25.1,longitude: 55.1}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 27.9,longitude: -82.3}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 34.0,longitude: -118.4}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 43.7,longitude: 7.1}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 43.8,longitude: -79.6}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 50.8,longitude: 3.2}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 50.9,longitude: 0.6}, count: 2
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 51.0,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 51.4,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 51.5,longitude: -3.5}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 51.6,longitude: -3.4}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 51.8,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 53.5,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 53.5,longitude: -2.7}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 53.7,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 53.9,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 8.0,longitude: -80.4}, count: 1
, team: 2},
{time: "2014-06-24 16:09:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: -15.3,longitude: -40.3}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: -23.0,longitude: 14.5}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: 25.0,longitude: 55.1}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: 40.4,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: 43.7,longitude: 7.1}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: 50.8,longitude: 3.1}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: 51.3,longitude: -0.0}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: 51.6,longitude: 0.6}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: 51.8,longitude: 1.0}, count: 2
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: 52.5,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: 52.7,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: 53.6,longitude: -3.1}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: 54.1,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: 7.1,longitude: -73.9}, count: 1
, team: 2},
{time: "2014-06-24 16:10:00", location: {latitude: 8.0,longitude: -80.4}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: -33.0,longitude: -60.7}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 13.6,longitude: 100.3}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 18.2,longitude: -66.0}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 25.1,longitude: 55.1}, count: 2
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 26.7,longitude: -80.3}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 27.5,longitude: -81.8}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 29.7,longitude: -95.3}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 4.7,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 41.1,longitude: 29.0}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 49.5,longitude: 5.7}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 50.7,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 51.3,longitude: -0.7}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 51.5,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 51.5,longitude: -2.5}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 51.5,longitude: 0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 52.4,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 52.6,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 53.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 53.6,longitude: -2.7}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 53.8,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 54.0,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:11:00", location: {latitude: 55.4,longitude: -4.5}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: -22.9,longitude: -43.2}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 13.8,longitude: 100.5}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 18.9,longitude: -99.2}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 50.9,longitude: 1.8}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 51.2,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 51.6,longitude: 0.6}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 51.9,longitude: -0.2}, count: 2
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 52.1,longitude: -0.7}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 52.1,longitude: 1.2}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 52.4,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 53.0,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 53.3,longitude: -2.9}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 53.5,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 55.9,longitude: -4.3}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 6.0,longitude: -75.4}, count: 1
, team: 2},
{time: "2014-06-24 16:12:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: -23.6,longitude: -46.4}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: -23.6,longitude: -46.7}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: -34.7,longitude: -58.6}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 19.1,longitude: 72.8}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 24.8,longitude: 46.8}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 3.0,longitude: 101.8}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 3.7,longitude: 101.5}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 34.2,longitude: -118.6}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 38.1,longitude: -78.5}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 40.8,longitude: -73.5}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 51.2,longitude: 1.3}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 51.3,longitude: -0.0}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 51.4,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 51.6,longitude: -2.9}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 52.7,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 53.0,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 53.3,longitude: -9.0}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 53.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:13:00", location: {latitude: 53.5,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: -23.6,longitude: -46.4}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: -5.4,longitude: 119.4}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: 10.4,longitude: -75.5}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: 14.5,longitude: -90.6}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: 38.1,longitude: -78.5}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: 39.5,longitude: -77.9}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: 39.7,longitude: -94.8}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: 41.0,longitude: -74.0}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: 45.8,longitude: 1.3}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: 50.9,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: 53.3,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: 53.5,longitude: -2.7}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: 53.6,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: 53.7,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: 53.7,longitude: -1.5}, count: 2
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: 53.8,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:14:00", location: {latitude: 54.6,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: -1.2,longitude: -78.6}, count: 1
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: -19.9,longitude: -44.6}, count: 1
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: -34.6,longitude: -58.4}, count: 1
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: 3.2,longitude: 101.7}, count: 1
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: 30.4,longitude: -97.7}, count: 1
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: 4.7,longitude: -74.1}, count: 2
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: 41.7,longitude: -87.6}, count: 1
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: 45.5,longitude: -73.5}, count: 1
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: 51.5,longitude: 0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: 51.6,longitude: 0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: 51.9,longitude: 1.0}, count: 1
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: 52.8,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: 53.5,longitude: -2.8}, count: 1
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: 53.8,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: 54.1,longitude: -2.8}, count: 1
, team: 2},
{time: "2014-06-24 16:15:00", location: {latitude: 54.1,longitude: -2.9}, count: 1
, team: 2},
{time: "2014-06-24 16:16:00", location: {latitude: -19.9,longitude: -44.6}, count: 1
, team: 2},
{time: "2014-06-24 16:16:00", location: {latitude: 20.0,longitude: -97.2}, count: 1
, team: 2},
{time: "2014-06-24 16:16:00", location: {latitude: 43.8,longitude: 18.3}, count: 1
, team: 2},
{time: "2014-06-24 16:16:00", location: {latitude: 50.5,longitude: -3.6}, count: 1
, team: 2},
{time: "2014-06-24 16:16:00", location: {latitude: 50.8,longitude: 0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:16:00", location: {latitude: 51.9,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:16:00", location: {latitude: 52.7,longitude: 1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:16:00", location: {latitude: 53.8,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 16:16:00", location: {latitude: 53.8,longitude: -2.7}, count: 1
, team: 2},
{time: "2014-06-24 16:16:00", location: {latitude: 7.1,longitude: -73.9}, count: 1
, team: 2},
{time: "2014-06-24 16:16:00", location: {latitude: 8.5,longitude: -82.6}, count: 1
, team: 2},
{time: "2014-06-24 16:17:00", location: {latitude: -0.2,longitude: -78.5}, count: 1
, team: 2},
{time: "2014-06-24 16:17:00", location: {latitude: -19.8,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:17:00", location: {latitude: -23.5,longitude: -46.9}, count: 1
, team: 2},
{time: "2014-06-24 16:17:00", location: {latitude: 13.1,longitude: 80.2}, count: 1
, team: 2},
{time: "2014-06-24 16:17:00", location: {latitude: 14.7,longitude: 121.1}, count: 1
, team: 2},
{time: "2014-06-24 16:17:00", location: {latitude: 3.4,longitude: 103.0}, count: 1
, team: 2},
{time: "2014-06-24 16:17:00", location: {latitude: 43.7,longitude: -79.4}, count: 1
, team: 2},
{time: "2014-06-24 16:17:00", location: {latitude: 50.5,longitude: -4.1}, count: 1
, team: 2},
{time: "2014-06-24 16:17:00", location: {latitude: 51.4,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 16:17:00", location: {latitude: 51.4,longitude: 0.0}, count: 1
, team: 2},
{time: "2014-06-24 16:17:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: -19.9,longitude: -43.9}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: -26.3,longitude: 28.1}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: -34.5,longitude: -58.6}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 13.1,longitude: 80.2}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 18.5,longitude: -66.1}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 25.9,longitude: -80.3}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 33.8,longitude: -84.7}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 41.7,longitude: -0.8}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 49.2,longitude: -123.1}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 51.0,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 51.5,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 51.7,longitude: 0.5}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 51.9,longitude: 0.5}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 52.7,longitude: 0.4}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 53.5,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 53.6,longitude: -2.5}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 6.2,longitude: -75.6}, count: 1
, team: 2},
{time: "2014-06-24 16:18:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 10.2,longitude: -84.4}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 28.5,longitude: -81.5}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 4.9,longitude: -74.0}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 43.1,longitude: -77.6}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 43.6,longitude: 6.7}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 45.4,longitude: -72.7}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 47.9,longitude: 1.9}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 49.2,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 51.4,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 51.5,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 51.6,longitude: 0.6}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 52.5,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 52.5,longitude: -1.8}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 53.4,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 53.5,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 53.8,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 54.9,longitude: -2.8}, count: 1
, team: 2},
{time: "2014-06-24 16:19:00", location: {latitude: 58.4,longitude: 26.7}, count: 1
, team: 2},
{time: "2014-06-24 16:20:00", location: {latitude: -0.1,longitude: -78.5}, count: 1
, team: 2},
{time: "2014-06-24 16:20:00", location: {latitude: -1.5,longitude: -48.5}, count: 1
, team: 2},
{time: "2014-06-24 16:20:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:20:00", location: {latitude: -23.0,longitude: 14.5}, count: 1
, team: 2},
{time: "2014-06-24 16:20:00", location: {latitude: -23.5,longitude: -46.5}, count: 1
, team: 2},
{time: "2014-06-24 16:20:00", location: {latitude: 10.6,longitude: -61.3}, count: 1
, team: 2},
{time: "2014-06-24 16:20:00", location: {latitude: 51.3,longitude: -2.9}, count: 1
, team: 2},
{time: "2014-06-24 16:20:00", location: {latitude: 51.4,longitude: 0.5}, count: 1
, team: 2},
{time: "2014-06-24 16:20:00", location: {latitude: 51.7,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 16:20:00", location: {latitude: 51.7,longitude: 7.7}, count: 1
, team: 2},
{time: "2014-06-24 16:20:00", location: {latitude: 52.1,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:20:00", location: {latitude: 52.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:20:00", location: {latitude: 52.4,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 16:20:00", location: {latitude: 53.8,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: -0.0,longitude: 109.4}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: -1.3,longitude: 36.8}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: -22.9,longitude: -47.0}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 36.8,longitude: 29.0}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 4.2,longitude: 102.1}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 4.6,longitude: -74.1}, count: 3
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 46.1,longitude: 4.1}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 50.4,longitude: -4.1}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 51.1,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 51.4,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 51.5,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 51.5,longitude: 0.7}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 51.7,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 52.1,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 52.1,longitude: 1.2}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 53.5,longitude: -6.2}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 54.8,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 9.7,longitude: 6.5}, count: 1
, team: 2},
{time: "2014-06-24 16:21:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: -23.5,longitude: -46.5}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: 32.8,longitude: -96.8}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: 39.6,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: 48.6,longitude: -3.5}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: 49.3,longitude: -123.0}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: 5.4,longitude: 73.3}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: 50.8,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: 51.4,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: 51.4,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: 53.8,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: 9.4,longitude: -83.7}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 16:22:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: -23.0,longitude: 29.9}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: -23.4,longitude: -48.2}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 18.5,longitude: -70.0}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 25.4,longitude: 55.5}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 34.4,longitude: -86.4}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 35.5,longitude: -80.6}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 35.9,longitude: -78.5}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 50.9,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 51.2,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 51.2,longitude: 1.3}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 51.6,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 51.6,longitude: 0.6}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 53.4,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 53.8,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 53.8,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 53.9,longitude: -1.8}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 7.1,longitude: -73.9}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 8.0,longitude: -80.4}, count: 1
, team: 2},
{time: "2014-06-24 16:23:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:24:00", location: {latitude: -1.3,longitude: 36.8}, count: 1
, team: 2},
{time: "2014-06-24 16:24:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:24:00", location: {latitude: 10.4,longitude: -71.5}, count: 1
, team: 2},
{time: "2014-06-24 16:24:00", location: {latitude: 27.7,longitude: 85.4}, count: 1
, team: 2},
{time: "2014-06-24 16:24:00", location: {latitude: 3.2,longitude: 101.6}, count: 1
, team: 2},
{time: "2014-06-24 16:24:00", location: {latitude: 30.3,longitude: -97.7}, count: 1
, team: 2},
{time: "2014-06-24 16:24:00", location: {latitude: 34.3,longitude: -6.6}, count: 2
, team: 2},
{time: "2014-06-24 16:24:00", location: {latitude: 43.1,longitude: -73.8}, count: 1
, team: 2},
{time: "2014-06-24 16:24:00", location: {latitude: 51.5,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 16:24:00", location: {latitude: 51.5,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 16:24:00", location: {latitude: 51.5,longitude: -2.5}, count: 1
, team: 2},
{time: "2014-06-24 16:24:00", location: {latitude: 52.4,longitude: 0.7}, count: 1
, team: 2},
{time: "2014-06-24 16:24:00", location: {latitude: 52.9,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:24:00", location: {latitude: 54.9,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:25:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:25:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 16:25:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 2},
{time: "2014-06-24 16:25:00", location: {latitude: 19.5,longitude: -99.2}, count: 1
, team: 2},
{time: "2014-06-24 16:25:00", location: {latitude: 40.7,longitude: -74.0}, count: 1
, team: 2},
{time: "2014-06-24 16:25:00", location: {latitude: 41.1,longitude: 29.0}, count: 1
, team: 2},
{time: "2014-06-24 16:25:00", location: {latitude: 43.6,longitude: -79.5}, count: 2
, team: 2},
{time: "2014-06-24 16:25:00", location: {latitude: 50.4,longitude: -4.2}, count: 1
, team: 2},
{time: "2014-06-24 16:25:00", location: {latitude: 51.5,longitude: -3.1}, count: 2
, team: 2},
{time: "2014-06-24 16:25:00", location: {latitude: 51.6,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 16:25:00", location: {latitude: 52.4,longitude: 16.9}, count: 1
, team: 2},
{time: "2014-06-24 16:25:00", location: {latitude: 52.5,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:25:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:25:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: -34.8,longitude: -58.4}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: -6.2,longitude: 106.6}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 31.9,longitude: -85.1}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 48.9,longitude: 2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 50.5,longitude: -4.5}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 50.8,longitude: -0.8}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 50.8,longitude: 4.3}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 51.2,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 51.5,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 51.6,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 51.6,longitude: -1.8}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 52.1,longitude: 0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 53.0,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 53.4,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 54.9,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 8.3,longitude: -62.7}, count: 1
, team: 2},
{time: "2014-06-24 16:26:00", location: {latitude: 9.1,longitude: -79.5}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: -23.5,longitude: -46.5}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: -34.5,longitude: -58.6}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: -6.3,longitude: 106.8}, count: 2
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 25.2,longitude: 55.4}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 27.7,longitude: 85.4}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 37.8,longitude: -122.4}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 51.2,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 51.4,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 51.5,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 51.6,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 51.6,longitude: 0.6}, count: 2
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 51.9,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 51.9,longitude: 0.9}, count: 2
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 52.4,longitude: -6.9}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 52.8,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 53.1,longitude: -0.8}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 53.3,longitude: -3.5}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 53.3,longitude: -3.8}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 53.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 53.5,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 53.5,longitude: -2.7}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 54.0,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 54.9,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 55.9,longitude: -4.1}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 16:27:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: -24.2,longitude: -64.9}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: -34.9,longitude: -58.0}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 27.7,longitude: 85.3}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 29.3,longitude: 48.0}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 29.4,longitude: -98.5}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 36.2,longitude: -86.0}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 37.1,longitude: -1.8}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 40.9,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 50.4,longitude: -4.1}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 51.3,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 51.4,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 51.4,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 51.7,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 52.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 52.5,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 52.6,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 52.9,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 53.0,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 53.7,longitude: -0.9}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 54.3,longitude: -2.7}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 54.8,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 54.9,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 16:28:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: -33.2,longitude: -54.4}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: -6.2,longitude: 106.9}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 10.9,longitude: -74.8}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 12.9,longitude: 77.5}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 14.5,longitude: -90.7}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 19.5,longitude: -99.2}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 2.8,longitude: -60.7}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 27.7,longitude: 85.4}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 40.1,longitude: -74.9}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 42.7,longitude: -82.8}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 43.7,longitude: -79.4}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 5.2,longitude: 100.8}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 50.4,longitude: -4.1}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 51.7,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 52.6,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 52.8,longitude: 1.3}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 53.8,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 53.8,longitude: -1.8}, count: 2
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 54.0,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:29:00", location: {latitude: 55.9,longitude: -4.1}, count: 1
, team: 2},
{time: "2014-06-24 16:30:00", location: {latitude: 30.1,longitude: 31.2}, count: 1
, team: 2},
{time: "2014-06-24 16:30:00", location: {latitude: 38.9,longitude: -77.0}, count: 1
, team: 2},
{time: "2014-06-24 16:30:00", location: {latitude: 51.3,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:30:00", location: {latitude: 51.7,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 16:30:00", location: {latitude: 52.1,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:30:00", location: {latitude: 52.4,longitude: 4.8}, count: 1
, team: 2},
{time: "2014-06-24 16:30:00", location: {latitude: 53.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:30:00", location: {latitude: 53.5,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 1.4,longitude: 103.9}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 10.4,longitude: -75.5}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 20.6,longitude: -103.4}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 21.5,longitude: 39.2}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 37.4,longitude: -122.2}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 39.6,longitude: -119.8}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 45.5,longitude: -73.5}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 49.4,longitude: -123.3}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 5.4,longitude: 73.3}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 50.4,longitude: -4.2}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 50.7,longitude: -3.5}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 51.2,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 51.5,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 52.3,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 52.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 52.7,longitude: -2.7}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 52.8,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 59.3,longitude: 18.0}, count: 1
, team: 2},
{time: "2014-06-24 16:31:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 16:32:00", location: {latitude: -23.0,longitude: 29.9}, count: 1
, team: 2},
{time: "2014-06-24 16:32:00", location: {latitude: -6.3,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 16:32:00", location: {latitude: -6.4,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 16:32:00", location: {latitude: 0.3,longitude: 37.9}, count: 1
, team: 2},
{time: "2014-06-24 16:32:00", location: {latitude: 10.3,longitude: -84.4}, count: 1
, team: 2},
{time: "2014-06-24 16:32:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 2},
{time: "2014-06-24 16:32:00", location: {latitude: 20.0,longitude: -97.2}, count: 1
, team: 2},
{time: "2014-06-24 16:32:00", location: {latitude: 52.2,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:32:00", location: {latitude: 53.5,longitude: -2.9}, count: 1
, team: 2},
{time: "2014-06-24 16:32:00", location: {latitude: 53.6,longitude: -0.7}, count: 1
, team: 2},
{time: "2014-06-24 16:32:00", location: {latitude: 53.6,longitude: -2.3}, count: 2
, team: 2},
{time: "2014-06-24 16:32:00", location: {latitude: 53.7,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:33:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 16:33:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:33:00", location: {latitude: 3.2,longitude: 101.6}, count: 1
, team: 2},
{time: "2014-06-24 16:33:00", location: {latitude: 37.1,longitude: -1.8}, count: 1
, team: 2},
{time: "2014-06-24 16:33:00", location: {latitude: 50.9,longitude: 0.7}, count: 1
, team: 2},
{time: "2014-06-24 16:33:00", location: {latitude: 51.2,longitude: 16.9}, count: 1
, team: 2},
{time: "2014-06-24 16:33:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:33:00", location: {latitude: 52.5,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 16:33:00", location: {latitude: 53.4,longitude: -2.9}, count: 1
, team: 2},
{time: "2014-06-24 16:33:00", location: {latitude: 53.7,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 16:33:00", location: {latitude: 53.7,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:33:00", location: {latitude: 53.8,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 16:33:00", location: {latitude: 53.9,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 16:33:00", location: {latitude: 56.5,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 16:34:00", location: {latitude: 10.5,longitude: -73.3}, count: 1
, team: 2},
{time: "2014-06-24 16:34:00", location: {latitude: 30.3,longitude: -97.7}, count: 1
, team: 2},
{time: "2014-06-24 16:34:00", location: {latitude: 33.6,longitude: -7.6}, count: 1
, team: 2},
{time: "2014-06-24 16:34:00", location: {latitude: 39.6,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:34:00", location: {latitude: 41.1,longitude: 1.1}, count: 1
, team: 2},
{time: "2014-06-24 16:34:00", location: {latitude: 50.1,longitude: 8.6}, count: 1
, team: 2},
{time: "2014-06-24 16:34:00", location: {latitude: 51.6,longitude: 0.6}, count: 1
, team: 2},
{time: "2014-06-24 16:34:00", location: {latitude: 52.8,longitude: 1.3}, count: 1
, team: 2},
{time: "2014-06-24 16:34:00", location: {latitude: 53.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:34:00", location: {latitude: 53.4,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:34:00", location: {latitude: 53.5,longitude: -0.1}, count: 2
, team: 2},
{time: "2014-06-24 16:34:00", location: {latitude: 9.6,longitude: 78.0}, count: 1
, team: 2},
{time: "2014-06-24 16:34:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: -19.8,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: -3.1,longitude: -60.0}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: -33.4,longitude: -70.5}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: -6.3,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: 13.7,longitude: -89.2}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: 37.7,longitude: 20.9}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: 50.9,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: 51.6,longitude: -3.3}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: 51.7,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: 52.1,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: 52.7,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: 53.3,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: 53.5,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: 53.5,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:35:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 2},
{time: "2014-06-24 16:36:00", location: {latitude: 19.3,longitude: -99.2}, count: 1
, team: 2},
{time: "2014-06-24 16:36:00", location: {latitude: 27.7,longitude: 85.4}, count: 1
, team: 2},
{time: "2014-06-24 16:36:00", location: {latitude: 50.7,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 16:36:00", location: {latitude: 51.7,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:36:00", location: {latitude: 52.3,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 16:36:00", location: {latitude: 52.5,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:36:00", location: {latitude: 52.8,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 16:36:00", location: {latitude: 53.4,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 16:36:00", location: {latitude: 53.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:36:00", location: {latitude: 53.6,longitude: -2.8}, count: 1
, team: 2},
{time: "2014-06-24 16:36:00", location: {latitude: 53.8,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 16:36:00", location: {latitude: 54.7,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 16:36:00", location: {latitude: 57.2,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 16:36:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: -22.8,longitude: -43.2}, count: 1
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: 18.5,longitude: -69.9}, count: 1
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: 27.7,longitude: 85.4}, count: 1
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: 34.8,longitude: -84.4}, count: 1
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: 51.5,longitude: -0.1}, count: 2
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: 52.3,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: 52.5,longitude: 0.9}, count: 1
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: 52.7,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: 53.0,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: 53.0,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: 53.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: 57.2,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 16:37:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: -6.3,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: -6.8,longitude: 39.3}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 10.7,longitude: -71.7}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 18.5,longitude: -69.9}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 3.1,longitude: 101.8}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 4.2,longitude: 73.5}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 40.4,longitude: -3.7}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 40.8,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 41.1,longitude: 28.7}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 41.4,longitude: 2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 52.5,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 52.6,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 52.8,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 53.5,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 54.6,longitude: -5.9}, count: 1
, team: 2},
{time: "2014-06-24 16:38:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:39:00", location: {latitude: -5.8,longitude: -35.2}, count: 1
, team: 2},
{time: "2014-06-24 16:39:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 16:39:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:39:00", location: {latitude: 41.4,longitude: 2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:39:00", location: {latitude: 47.2,longitude: 2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:39:00", location: {latitude: 48.9,longitude: 2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:39:00", location: {latitude: 50.9,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 16:39:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:39:00", location: {latitude: 52.1,longitude: 1.1}, count: 1
, team: 2},
{time: "2014-06-24 16:39:00", location: {latitude: 52.4,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 16:39:00", location: {latitude: 53.1,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 16:39:00", location: {latitude: 53.6,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 16:39:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 2},
{time: "2014-06-24 16:40:00", location: {latitude: -6.3,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 16:40:00", location: {latitude: 19.1,longitude: 72.9}, count: 1
, team: 2},
{time: "2014-06-24 16:40:00", location: {latitude: 25.2,longitude: 55.4}, count: 1
, team: 2},
{time: "2014-06-24 16:40:00", location: {latitude: 26.4,longitude: 50.1}, count: 1
, team: 2},
{time: "2014-06-24 16:40:00", location: {latitude: 27.7,longitude: 85.4}, count: 1
, team: 2},
{time: "2014-06-24 16:40:00", location: {latitude: 49.2,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 16:40:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:40:00", location: {latitude: 51.8,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:40:00", location: {latitude: 52.1,longitude: 1.1}, count: 1
, team: 2},
{time: "2014-06-24 16:40:00", location: {latitude: 53.1,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:40:00", location: {latitude: 53.3,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 16:40:00", location: {latitude: 53.5,longitude: -2.5}, count: 1
, team: 2},
{time: "2014-06-24 16:40:00", location: {latitude: 53.5,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 16:40:00", location: {latitude: 8.2,longitude: -72.3}, count: 1
, team: 2},
{time: "2014-06-24 16:40:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:41:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 2},
{time: "2014-06-24 16:41:00", location: {latitude: -6.2,longitude: 106.9}, count: 1
, team: 2},
{time: "2014-06-24 16:41:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 2},
{time: "2014-06-24 16:41:00", location: {latitude: 26.4,longitude: 50.1}, count: 1
, team: 2},
{time: "2014-06-24 16:41:00", location: {latitude: 3.6,longitude: 98.7}, count: 1
, team: 2},
{time: "2014-06-24 16:41:00", location: {latitude: 38.5,longitude: -89.9}, count: 1
, team: 2},
{time: "2014-06-24 16:41:00", location: {latitude: 44.0,longitude: -78.3}, count: 1
, team: 2},
{time: "2014-06-24 16:41:00", location: {latitude: 45.6,longitude: -122.5}, count: 1
, team: 2},
{time: "2014-06-24 16:41:00", location: {latitude: 51.4,longitude: 1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:41:00", location: {latitude: 52.7,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:41:00", location: {latitude: 53.5,longitude: -2.5}, count: 1
, team: 2},
{time: "2014-06-24 16:41:00", location: {latitude: 8.9,longitude: -79.5}, count: 1
, team: 2},
{time: "2014-06-24 16:41:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 2},
{time: "2014-06-24 16:42:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 16:42:00", location: {latitude: 10.6,longitude: -85.4}, count: 1
, team: 2},
{time: "2014-06-24 16:42:00", location: {latitude: 23.9,longitude: 90.4}, count: 1
, team: 2},
{time: "2014-06-24 16:42:00", location: {latitude: 43.8,longitude: 11.3}, count: 1
, team: 2},
{time: "2014-06-24 16:42:00", location: {latitude: 51.9,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:42:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:42:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 2},
{time: "2014-06-24 16:43:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 16:43:00", location: {latitude: 23.9,longitude: 90.4}, count: 1
, team: 2},
{time: "2014-06-24 16:43:00", location: {latitude: 29.4,longitude: -81.1}, count: 1
, team: 2},
{time: "2014-06-24 16:43:00", location: {latitude: 33.9,longitude: -118.2}, count: 1
, team: 2},
{time: "2014-06-24 16:43:00", location: {latitude: 39.6,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:43:00", location: {latitude: 4.8,longitude: 7.0}, count: 1
, team: 2},
{time: "2014-06-24 16:43:00", location: {latitude: 40.7,longitude: -74.2}, count: 1
, team: 2},
{time: "2014-06-24 16:43:00", location: {latitude: 5.4,longitude: 73.3}, count: 1
, team: 2},
{time: "2014-06-24 16:43:00", location: {latitude: 50.0,longitude: 36.2}, count: 1
, team: 2},
{time: "2014-06-24 16:43:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 2},
{time: "2014-06-24 16:43:00", location: {latitude: 51.4,longitude: 1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:43:00", location: {latitude: 51.7,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 16:43:00", location: {latitude: 51.9,longitude: -8.4}, count: 1
, team: 2},
{time: "2014-06-24 16:43:00", location: {latitude: 51.9,longitude: 0.9}, count: 1
, team: 2},
{time: "2014-06-24 16:44:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 2},
{time: "2014-06-24 16:44:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:44:00", location: {latitude: 13.0,longitude: 77.8}, count: 1
, team: 2},
{time: "2014-06-24 16:44:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 2},
{time: "2014-06-24 16:44:00", location: {latitude: 17.6,longitude: 102.4}, count: 1
, team: 2},
{time: "2014-06-24 16:44:00", location: {latitude: 4.7,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 16:44:00", location: {latitude: 41.1,longitude: -73.5}, count: 1
, team: 2},
{time: "2014-06-24 16:44:00", location: {latitude: 43.7,longitude: -79.6}, count: 1
, team: 2},
{time: "2014-06-24 16:44:00", location: {latitude: 51.9,longitude: 0.9}, count: 1
, team: 2},
{time: "2014-06-24 16:44:00", location: {latitude: 52.1,longitude: -1.0}, count: 2
, team: 2},
{time: "2014-06-24 16:44:00", location: {latitude: 52.3,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 16:44:00", location: {latitude: 53.3,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 16:44:00", location: {latitude: 56.0,longitude: -3.2}, count: 1
, team: 2},
{time: "2014-06-24 16:44:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: -19.9,longitude: -44.0}, count: 2
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: -23.5,longitude: -46.5}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 0.5,longitude: 123.1}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 10.7,longitude: -61.5}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 18.9,longitude: -97.1}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 3.2,longitude: 101.7}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 41.9,longitude: 12.5}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 44.7,longitude: 8.9}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 51.4,longitude: -2.4}, count: 2
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 52.5,longitude: 0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 52.6,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 52.9,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 53.1,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 53.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 53.5,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 53.6,longitude: -0.7}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 53.8,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 54.0,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 54.1,longitude: -2.8}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 54.5,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 55.9,longitude: -3.3}, count: 1
, team: 2},
{time: "2014-06-24 16:45:00", location: {latitude: 56.5,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: -26.1,longitude: 28.3}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: -33.0,longitude: -60.6}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: -34.1,longitude: 151.1}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 0.3,longitude: 37.9}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 12.6,longitude: 102.1}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 19.3,longitude: -99.2}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 28.5,longitude: -81.4}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 35.0,longitude: 34.0}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 38.6,longitude: 20.6}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 5.1,longitude: -75.5}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 5.4,longitude: 73.3}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 50.8,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 50.8,longitude: 0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 51.3,longitude: -0.0}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 51.5,longitude: -3.2}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 51.6,longitude: 0.6}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 52.8,longitude: 1.3}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 53.2,longitude: -2.9}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 53.3,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 53.4,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 53.8,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 53.8,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 54.8,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 55.8,longitude: -4.2}, count: 1
, team: 2},
{time: "2014-06-24 16:46:00", location: {latitude: 9.0,longitude: -79.5}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: -1.1,longitude: -79.6}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: -13.0,longitude: -38.5}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: -19.9,longitude: -44.0}, count: 2
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: -23.6,longitude: -46.4}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: -24.2,longitude: -64.9}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: -34.6,longitude: -58.6}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: -35.0,longitude: -58.0}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 10.2,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 18.5,longitude: -70.0}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 20.0,longitude: -97.2}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 30.3,longitude: -9.5}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 33.6,longitude: -7.6}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 35.9,longitude: -78.6}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 38.0,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 4.7,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 48.6,longitude: 2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 48.6,longitude: 7.7}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 48.9,longitude: 2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 50.9,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 51.5,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 51.5,longitude: -2.8}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 51.7,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 51.8,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 52.3,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 52.6,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 52.8,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 54.9,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 6.1,longitude: 100.4}, count: 1
, team: 2},
{time: "2014-06-24 16:47:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: -13.0,longitude: -38.5}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: -21.0,longitude: -63.3}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: -25.2,longitude: -57.5}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: -6.2,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: -6.9,longitude: 107.5}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 10.0,longitude: -84.7}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 10.1,longitude: -84.4}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 10.9,longitude: -74.8}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 13.9,longitude: 100.6}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 14.0,longitude: -89.5}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 19.0,longitude: -98.2}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 29.3,longitude: 48.0}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 33.6,longitude: 73.2}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 35.3,longitude: -119.0}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 37.5,longitude: -77.5}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 4.7,longitude: -74.1}, count: 2
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 40.1,longitude: -3.9}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 41.6,longitude: -4.8}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 49.1,longitude: 2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 49.5,longitude: 0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 49.9,longitude: 4.8}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 5.2,longitude: 96.8}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 51.5,longitude: -0.0}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 52.1,longitude: -0.7}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 52.4,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 52.7,longitude: 6.9}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 52.9,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 53.0,longitude: -2.7}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 53.5,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 55.9,longitude: -3.3}, count: 1
, team: 2},
{time: "2014-06-24 16:48:00", location: {latitude: 8.3,longitude: -62.8}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: -0.2,longitude: -78.5}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: -25.3,longitude: -57.6}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: -34.6,longitude: -56.6}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 1.4,longitude: 104.0}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 19.5,longitude: -99.1}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 3.8,longitude: 103.3}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 31.5,longitude: 34.5}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 35.9,longitude: -78.6}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 36.0,longitude: -115.1}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 41.4,longitude: 2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 5.4,longitude: 100.4}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 52.5,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 52.6,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 53.5,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 54.7,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 6.3,longitude: -75.6}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 7.9,longitude: -72.5}, count: 1
, team: 2},
{time: "2014-06-24 16:49:00", location: {latitude: 8.9,longitude: -75.8}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: -2.9,longitude: -79.0}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: -25.3,longitude: -57.6}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: -5.2,longitude: 119.4}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: -6.2,longitude: 106.9}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 1.0,longitude: -79.7}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 1.5,longitude: 124.8}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 10.9,longitude: -74.8}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 19.1,longitude: 72.9}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 21.5,longitude: 39.3}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 23.9,longitude: 90.4}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 36.3,longitude: -119.6}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 38.6,longitude: -77.3}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 39.6,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 39.6,longitude: 2.7}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 41.3,longitude: 69.3}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 41.4,longitude: 2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 51.4,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 51.5,longitude: -3.2}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 51.7,longitude: -0.8}, count: 1
, team: 2},
{time: "2014-06-24 16:50:00", location: {latitude: 53.8,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:51:00", location: {latitude: -6.8,longitude: 39.3}, count: 1
, team: 2},
{time: "2014-06-24 16:51:00", location: {latitude: -7.9,longitude: 110.3}, count: 1
, team: 2},
{time: "2014-06-24 16:51:00", location: {latitude: 1.5,longitude: 103.8}, count: 1
, team: 2},
{time: "2014-06-24 16:51:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 16:51:00", location: {latitude: 13.0,longitude: 77.8}, count: 1
, team: 2},
{time: "2014-06-24 16:51:00", location: {latitude: 13.7,longitude: -89.1}, count: 1
, team: 2},
{time: "2014-06-24 16:51:00", location: {latitude: 3.8,longitude: 103.3}, count: 1
, team: 2},
{time: "2014-06-24 16:51:00", location: {latitude: 37.6,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 16:51:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:51:00", location: {latitude: 6.6,longitude: 3.4}, count: 1
, team: 2},
{time: "2014-06-24 16:52:00", location: {latitude: -23.4,longitude: -46.5}, count: 2
, team: 2},
{time: "2014-06-24 16:52:00", location: {latitude: -33.6,longitude: -70.6}, count: 1
, team: 2},
{time: "2014-06-24 16:52:00", location: {latitude: -34.0,longitude: 18.5}, count: 1
, team: 2},
{time: "2014-06-24 16:52:00", location: {latitude: -35.0,longitude: 138.5}, count: 1
, team: 2},
{time: "2014-06-24 16:52:00", location: {latitude: 40.4,longitude: -79.9}, count: 1
, team: 2},
{time: "2014-06-24 16:52:00", location: {latitude: 50.9,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 16:52:00", location: {latitude: 51.0,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 16:52:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 2},
{time: "2014-06-24 16:52:00", location: {latitude: 53.4,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:53:00", location: {latitude: -23.6,longitude: -46.6}, count: 1
, team: 2},
{time: "2014-06-24 16:53:00", location: {latitude: -6.2,longitude: 106.9}, count: 1
, team: 2},
{time: "2014-06-24 16:53:00", location: {latitude: 3.5,longitude: 102.5}, count: 1
, team: 2},
{time: "2014-06-24 16:53:00", location: {latitude: 41.3,longitude: 13.1}, count: 1
, team: 2},
{time: "2014-06-24 16:53:00", location: {latitude: 42.2,longitude: -8.7}, count: 1
, team: 2},
{time: "2014-06-24 16:53:00", location: {latitude: 51.7,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 16:53:00", location: {latitude: 51.7,longitude: 0.5}, count: 1
, team: 2},
{time: "2014-06-24 16:53:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: -26.9,longitude: -49.1}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: -27.5,longitude: -58.8}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: 0.0,longitude: 0.0}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: 10.3,longitude: -85.6}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: 10.7,longitude: -71.6}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: 18.5,longitude: -66.1}, count: 2
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: 21.5,longitude: 39.3}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: 35.9,longitude: -78.5}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: 36.6,longitude: 36.2}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: 4.5,longitude: 114.0}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: 4.7,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: 40.6,longitude: 14.2}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: 52.0,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: 52.4,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: 55.0,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 16:54:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 16:55:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 2},
{time: "2014-06-24 16:55:00", location: {latitude: -19.9,longitude: -44.0}, count: 2
, team: 2},
{time: "2014-06-24 16:55:00", location: {latitude: -22.8,longitude: -43.2}, count: 1
, team: 2},
{time: "2014-06-24 16:55:00", location: {latitude: -23.6,longitude: -46.7}, count: 1
, team: 2},
{time: "2014-06-24 16:55:00", location: {latitude: -5.4,longitude: 105.3}, count: 1
, team: 2},
{time: "2014-06-24 16:55:00", location: {latitude: -6.2,longitude: 107.0}, count: 1
, team: 2},
{time: "2014-06-24 16:55:00", location: {latitude: 32.8,longitude: -117.2}, count: 1
, team: 2},
{time: "2014-06-24 16:55:00", location: {latitude: 49.0,longitude: 2.1}, count: 1
, team: 2},
{time: "2014-06-24 16:55:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 16:55:00", location: {latitude: 51.5,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 16:55:00", location: {latitude: 53.5,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 16:55:00", location: {latitude: 53.8,longitude: -2.7}, count: 1
, team: 2},
{time: "2014-06-24 16:55:00", location: {latitude: 54.5,longitude: -3.6}, count: 1
, team: 2},
{time: "2014-06-24 16:55:00", location: {latitude: 58.6,longitude: -3.5}, count: 1
, team: 2},
{time: "2014-06-24 16:56:00", location: {latitude: -32.1,longitude: -71.5}, count: 1
, team: 2},
{time: "2014-06-24 16:56:00", location: {latitude: -6.2,longitude: 106.7}, count: 1
, team: 2},
{time: "2014-06-24 16:56:00", location: {latitude: 3.5,longitude: -73.7}, count: 1
, team: 2},
{time: "2014-06-24 16:56:00", location: {latitude: 41.0,longitude: 29.1}, count: 1
, team: 2},
{time: "2014-06-24 16:56:00", location: {latitude: 51.5,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 16:56:00", location: {latitude: 51.5,longitude: -2.8}, count: 1
, team: 2},
{time: "2014-06-24 16:56:00", location: {latitude: 51.5,longitude: -3.2}, count: 1
, team: 2},
{time: "2014-06-24 16:56:00", location: {latitude: 51.6,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:56:00", location: {latitude: 51.6,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 16:56:00", location: {latitude: 51.6,longitude: -3.4}, count: 1
, team: 2},
{time: "2014-06-24 16:56:00", location: {latitude: 52.0,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 16:56:00", location: {latitude: 52.2,longitude: 1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:56:00", location: {latitude: 53.5,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 16:56:00", location: {latitude: 6.6,longitude: 3.4}, count: 1
, team: 2},
{time: "2014-06-24 16:57:00", location: {latitude: -34.7,longitude: -58.4}, count: 1
, team: 2},
{time: "2014-06-24 16:57:00", location: {latitude: 3.4,longitude: 101.2}, count: 1
, team: 2},
{time: "2014-06-24 16:57:00", location: {latitude: 33.9,longitude: -118.2}, count: 1
, team: 2},
{time: "2014-06-24 16:57:00", location: {latitude: 50.8,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 16:57:00", location: {latitude: 52.6,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 16:57:00", location: {latitude: 53.0,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 16:57:00", location: {latitude: 53.4,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 16:57:00", location: {latitude: 53.9,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 16:58:00", location: {latitude: -5.4,longitude: 105.3}, count: 2
, team: 2},
{time: "2014-06-24 16:58:00", location: {latitude: 13.7,longitude: -89.2}, count: 1
, team: 2},
{time: "2014-06-24 16:58:00", location: {latitude: 28.5,longitude: -81.5}, count: 1
, team: 2},
{time: "2014-06-24 16:58:00", location: {latitude: 42.5,longitude: -90.7}, count: 1
, team: 2},
{time: "2014-06-24 16:58:00", location: {latitude: 51.1,longitude: 0.8}, count: 1
, team: 2},
{time: "2014-06-24 16:58:00", location: {latitude: 51.5,longitude: -0.0}, count: 1
, team: 2},
{time: "2014-06-24 16:58:00", location: {latitude: 52.1,longitude: -0.8}, count: 1
, team: 2},
{time: "2014-06-24 16:58:00", location: {latitude: 6.5,longitude: 3.8}, count: 1
, team: 2},
{time: "2014-06-24 16:59:00", location: {latitude: -2.2,longitude: -79.9}, count: 1
, team: 2},
{time: "2014-06-24 16:59:00", location: {latitude: 25.3,longitude: 55.4}, count: 1
, team: 2},
{time: "2014-06-24 16:59:00", location: {latitude: 43.3,longitude: -2.9}, count: 1
, team: 2},
{time: "2014-06-24 16:59:00", location: {latitude: 51.5,longitude: -0.0}, count: 1
, team: 2},
{time: "2014-06-24 16:59:00", location: {latitude: 52.6,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 16:59:00", location: {latitude: 53.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 16:59:00", location: {latitude: 53.9,longitude: -2.0}, count: 2
, team: 2},
{time: "2014-06-24 17:00:00", location: {latitude: -34.5,longitude: -58.5}, count: 1
, team: 2},
{time: "2014-06-24 17:00:00", location: {latitude: -6.4,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 17:00:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:00:00", location: {latitude: 3.0,longitude: -75.3}, count: 1
, team: 2},
{time: "2014-06-24 17:00:00", location: {latitude: 4.7,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 17:00:00", location: {latitude: 42.0,longitude: -71.3}, count: 1
, team: 2},
{time: "2014-06-24 17:00:00", location: {latitude: 47.9,longitude: 106.9}, count: 1
, team: 2},
{time: "2014-06-24 17:00:00", location: {latitude: 52.5,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 17:00:00", location: {latitude: 53.5,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:00:00", location: {latitude: 9.3,longitude: -70.6}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: -2.2,longitude: -79.9}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: -29.4,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: -6.2,longitude: 106.7}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: 10.2,longitude: -83.8}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: 19.2,longitude: -70.5}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: 24.8,longitude: -107.4}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: 27.7,longitude: 85.3}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: 38.6,longitude: -77.3}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: 43.0,longitude: 44.6}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: 43.3,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: 50.8,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: 51.1,longitude: 0.8}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: 53.1,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: 53.7,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: 53.7,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: 53.8,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: 53.9,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 17:01:00", location: {latitude: 55.8,longitude: -4.3}, count: 1
, team: 2},
{time: "2014-06-24 17:02:00", location: {latitude: -6.2,longitude: 106.8}, count: 2
, team: 2},
{time: "2014-06-24 17:02:00", location: {latitude: -7.3,longitude: 108.2}, count: 1
, team: 2},
{time: "2014-06-24 17:02:00", location: {latitude: 39.5,longitude: 3.3}, count: 1
, team: 2},
{time: "2014-06-24 17:02:00", location: {latitude: 41.6,longitude: -4.8}, count: 1
, team: 2},
{time: "2014-06-24 17:02:00", location: {latitude: 42.0,longitude: -71.3}, count: 1
, team: 2},
{time: "2014-06-24 17:02:00", location: {latitude: 5.6,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:02:00", location: {latitude: 50.8,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 17:02:00", location: {latitude: 50.8,longitude: 0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:02:00", location: {latitude: 51.8,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:02:00", location: {latitude: 53.3,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:02:00", location: {latitude: 53.6,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 17:02:00", location: {latitude: 53.8,longitude: -1.8}, count: 1
, team: 2},
{time: "2014-06-24 17:03:00", location: {latitude: -19.8,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 17:03:00", location: {latitude: -34.6,longitude: -58.6}, count: 1
, team: 2},
{time: "2014-06-24 17:03:00", location: {latitude: -6.1,longitude: 106.9}, count: 1
, team: 2},
{time: "2014-06-24 17:03:00", location: {latitude: 10.9,longitude: -74.8}, count: 1
, team: 2},
{time: "2014-06-24 17:03:00", location: {latitude: 3.1,longitude: 101.7}, count: 1
, team: 2},
{time: "2014-06-24 17:03:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 17:03:00", location: {latitude: 41.4,longitude: -81.7}, count: 1
, team: 2},
{time: "2014-06-24 17:03:00", location: {latitude: 51.0,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:03:00", location: {latitude: 53.5,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:03:00", location: {latitude: 54.7,longitude: -5.8}, count: 1
, team: 2},
{time: "2014-06-24 17:03:00", location: {latitude: 6.0,longitude: 116.1}, count: 1
, team: 2},
{time: "2014-06-24 17:03:00", location: {latitude: 9.8,longitude: 76.5}, count: 1
, team: 2},
{time: "2014-06-24 17:03:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:04:00", location: {latitude: -1.3,longitude: -78.6}, count: 1
, team: 2},
{time: "2014-06-24 17:04:00", location: {latitude: -36.4,longitude: 145.4}, count: 1
, team: 2},
{time: "2014-06-24 17:04:00", location: {latitude: 10.4,longitude: -84.5}, count: 1
, team: 2},
{time: "2014-06-24 17:04:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 17:04:00", location: {latitude: 3.6,longitude: 98.7}, count: 1
, team: 2},
{time: "2014-06-24 17:04:00", location: {latitude: 33.9,longitude: -118.0}, count: 1
, team: 2},
{time: "2014-06-24 17:04:00", location: {latitude: 50.8,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:04:00", location: {latitude: 50.8,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:04:00", location: {latitude: 51.8,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:04:00", location: {latitude: 53.0,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:04:00", location: {latitude: 54.9,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: -1.2,longitude: 116.9}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: -34.6,longitude: -56.6}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: -6.3,longitude: 107.0}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: 20.0,longitude: -97.2}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: 26.9,longitude: 75.8}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: 3.2,longitude: 101.6}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: 30.1,longitude: 31.2}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: 39.4,longitude: -76.6}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: 4.6,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: 41.0,longitude: 28.6}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: 47.2,longitude: 2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: 5.1,longitude: -75.5}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: 5.6,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: 51.4,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:05:00", location: {latitude: 8.9,longitude: -75.8}, count: 1
, team: 2},
{time: "2014-06-24 17:06:00", location: {latitude: -27.8,longitude: -64.3}, count: 1
, team: 2},
{time: "2014-06-24 17:06:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 17:06:00", location: {latitude: 10.5,longitude: -73.3}, count: 1
, team: 2},
{time: "2014-06-24 17:06:00", location: {latitude: 10.7,longitude: -71.6}, count: 1
, team: 2},
{time: "2014-06-24 17:06:00", location: {latitude: 13.7,longitude: -89.2}, count: 1
, team: 2},
{time: "2014-06-24 17:06:00", location: {latitude: 53.5,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 17:06:00", location: {latitude: 53.9,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:06:00", location: {latitude: 8.8,longitude: -75.9}, count: 1
, team: 2},
{time: "2014-06-24 17:06:00", location: {latitude: 9.0,longitude: -79.5}, count: 1
, team: 2},
{time: "2014-06-24 17:07:00", location: {latitude: -23.0,longitude: -43.3}, count: 1
, team: 2},
{time: "2014-06-24 17:07:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 2},
{time: "2014-06-24 17:07:00", location: {latitude: 10.2,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 17:07:00", location: {latitude: 51.6,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 17:07:00", location: {latitude: 51.8,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:07:00", location: {latitude: 52.0,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 17:07:00", location: {latitude: 52.7,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 17:07:00", location: {latitude: 53.5,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 17:07:00", location: {latitude: 53.9,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:07:00", location: {latitude: 8.3,longitude: -62.8}, count: 1
, team: 2},
{time: "2014-06-24 17:07:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:08:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 2},
{time: "2014-06-24 17:08:00", location: {latitude: 12.9,longitude: 77.5}, count: 1
, team: 2},
{time: "2014-06-24 17:08:00", location: {latitude: 27.7,longitude: 85.4}, count: 1
, team: 2},
{time: "2014-06-24 17:08:00", location: {latitude: 4.6,longitude: -75.7}, count: 1
, team: 2},
{time: "2014-06-24 17:08:00", location: {latitude: 42.4,longitude: -71.0}, count: 1
, team: 2},
{time: "2014-06-24 17:08:00", location: {latitude: 51.4,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:08:00", location: {latitude: 51.5,longitude: -0.7}, count: 1
, team: 2},
{time: "2014-06-24 17:08:00", location: {latitude: 51.5,longitude: 0.0}, count: 1
, team: 2},
{time: "2014-06-24 17:08:00", location: {latitude: 51.6,longitude: -0.0}, count: 1
, team: 2},
{time: "2014-06-24 17:08:00", location: {latitude: 51.6,longitude: -2.5}, count: 1
, team: 2},
{time: "2014-06-24 17:08:00", location: {latitude: 53.5,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 17:08:00", location: {latitude: 8.6,longitude: -83.0}, count: 1
, team: 2},
{time: "2014-06-24 17:08:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:09:00", location: {latitude: -1.2,longitude: 116.9}, count: 1
, team: 2},
{time: "2014-06-24 17:09:00", location: {latitude: -33.4,longitude: -70.6}, count: 1
, team: 2},
{time: "2014-06-24 17:09:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 2},
{time: "2014-06-24 17:09:00", location: {latitude: 10.7,longitude: -71.6}, count: 1
, team: 2},
{time: "2014-06-24 17:09:00", location: {latitude: 3.2,longitude: 101.7}, count: 1
, team: 2},
{time: "2014-06-24 17:09:00", location: {latitude: 39.5,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:09:00", location: {latitude: 42.4,longitude: -71.1}, count: 1
, team: 2},
{time: "2014-06-24 17:09:00", location: {latitude: 51.2,longitude: -4.1}, count: 1
, team: 2},
{time: "2014-06-24 17:09:00", location: {latitude: 52.7,longitude: 1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:10:00", location: {latitude: -34.8,longitude: -58.2}, count: 1
, team: 2},
{time: "2014-06-24 17:10:00", location: {latitude: 25.7,longitude: -100.3}, count: 1
, team: 2},
{time: "2014-06-24 17:10:00", location: {latitude: 38.9,longitude: -77.1}, count: 1
, team: 2},
{time: "2014-06-24 17:10:00", location: {latitude: 40.6,longitude: 14.2}, count: 1
, team: 2},
{time: "2014-06-24 17:10:00", location: {latitude: 44.7,longitude: 10.9}, count: 1
, team: 2},
{time: "2014-06-24 17:10:00", location: {latitude: 50.9,longitude: -0.9}, count: 1
, team: 2},
{time: "2014-06-24 17:10:00", location: {latitude: 50.9,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:10:00", location: {latitude: 51.5,longitude: -0.1}, count: 2
, team: 2},
{time: "2014-06-24 17:10:00", location: {latitude: 52.4,longitude: 4.9}, count: 1
, team: 2},
{time: "2014-06-24 17:10:00", location: {latitude: 52.7,longitude: 1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:10:00", location: {latitude: 53.5,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:10:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:11:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 2},
{time: "2014-06-24 17:11:00", location: {latitude: -7.3,longitude: 107.8}, count: 1
, team: 2},
{time: "2014-06-24 17:11:00", location: {latitude: 13.6,longitude: 100.3}, count: 1
, team: 2},
{time: "2014-06-24 17:11:00", location: {latitude: 41.1,longitude: 29.0}, count: 1
, team: 2},
{time: "2014-06-24 17:11:00", location: {latitude: 44.8,longitude: -85.6}, count: 1
, team: 2},
{time: "2014-06-24 17:11:00", location: {latitude: 5.6,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:11:00", location: {latitude: 51.5,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:11:00", location: {latitude: 51.7,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 17:11:00", location: {latitude: 53.0,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 17:11:00", location: {latitude: 53.4,longitude: -1.5}, count: 2
, team: 2},
{time: "2014-06-24 17:11:00", location: {latitude: 53.4,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 17:11:00", location: {latitude: 53.5,longitude: -2.9}, count: 1
, team: 2},
{time: "2014-06-24 17:11:00", location: {latitude: 53.9,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 17:11:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:12:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 2},
{time: "2014-06-24 17:12:00", location: {latitude: -7.0,longitude: 110.5}, count: 1
, team: 2},
{time: "2014-06-24 17:12:00", location: {latitude: 10.1,longitude: -69.4}, count: 1
, team: 2},
{time: "2014-06-24 17:12:00", location: {latitude: 46.4,longitude: 6.2}, count: 1
, team: 2},
{time: "2014-06-24 17:12:00", location: {latitude: 49.0,longitude: 2.1}, count: 1
, team: 2},
{time: "2014-06-24 17:12:00", location: {latitude: 50.8,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:12:00", location: {latitude: 51.1,longitude: 0.8}, count: 1
, team: 2},
{time: "2014-06-24 17:12:00", location: {latitude: 51.4,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:12:00", location: {latitude: 52.9,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 17:12:00", location: {latitude: 53.0,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 17:12:00", location: {latitude: 53.6,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 17:12:00", location: {latitude: 53.8,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:12:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 2},
{time: "2014-06-24 17:13:00", location: {latitude: 51.2,longitude: -4.1}, count: 1
, team: 2},
{time: "2014-06-24 17:13:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:13:00", location: {latitude: 51.6,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 17:13:00", location: {latitude: 51.6,longitude: -1.8}, count: 1
, team: 2},
{time: "2014-06-24 17:13:00", location: {latitude: 52.1,longitude: 1.2}, count: 1
, team: 2},
{time: "2014-06-24 17:13:00", location: {latitude: 52.8,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 17:13:00", location: {latitude: 53.3,longitude: -6.4}, count: 1
, team: 2},
{time: "2014-06-24 17:13:00", location: {latitude: 53.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:13:00", location: {latitude: 53.4,longitude: -2.9}, count: 1
, team: 2},
{time: "2014-06-24 17:13:00", location: {latitude: 53.5,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:13:00", location: {latitude: 54.2,longitude: -4.7}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: -6.2,longitude: 106.9}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: 0.0,longitude: -51.1}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: 10.1,longitude: -69.4}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: 12.9,longitude: 77.5}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: 2.7,longitude: 101.9}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: 26.4,longitude: 44.0}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: 37.1,longitude: -8.1}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: 50.0,longitude: 33.0}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: 50.9,longitude: 0.6}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: 51.5,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: 52.0,longitude: 1.1}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: 52.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: 52.7,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: 8.6,longitude: -83.0}, count: 1
, team: 2},
{time: "2014-06-24 17:14:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: -22.8,longitude: -43.3}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 14.1,longitude: -87.2}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 29.7,longitude: -95.5}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 39.5,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 45.5,longitude: 10.3}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 47.2,longitude: 2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 47.6,longitude: -122.2}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 51.5,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 51.6,longitude: -0.1}, count: 2
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 51.6,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 51.7,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 51.8,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 51.8,longitude: 1.1}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 52.0,longitude: -0.8}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 52.5,longitude: 1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 53.4,longitude: -2.9}, count: 2
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 54.8,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:15:00", location: {latitude: 9.9,longitude: -84.1}, count: 2
, team: 2},
{time: "2014-06-24 17:16:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 17:16:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 17:16:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:16:00", location: {latitude: 35.6,longitude: 139.7}, count: 1
, team: 2},
{time: "2014-06-24 17:16:00", location: {latitude: 5.6,longitude: 100.6}, count: 1
, team: 2},
{time: "2014-06-24 17:16:00", location: {latitude: 51.6,longitude: 0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:16:00", location: {latitude: 51.9,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 17:16:00", location: {latitude: 52.0,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 17:16:00", location: {latitude: 52.0,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 17:16:00", location: {latitude: 52.1,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:16:00", location: {latitude: 52.7,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 17:16:00", location: {latitude: 53.0,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 17:16:00", location: {latitude: 53.4,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 17:17:00", location: {latitude: 1.3,longitude: 103.9}, count: 1
, team: 2},
{time: "2014-06-24 17:17:00", location: {latitude: 18.7,longitude: -68.4}, count: 1
, team: 2},
{time: "2014-06-24 17:17:00", location: {latitude: 27.3,longitude: -82.4}, count: 1
, team: 2},
{time: "2014-06-24 17:17:00", location: {latitude: 3.2,longitude: 101.8}, count: 1
, team: 2},
{time: "2014-06-24 17:17:00", location: {latitude: 50.7,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 17:17:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:17:00", location: {latitude: 51.5,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 17:17:00", location: {latitude: 51.8,longitude: 0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:17:00", location: {latitude: 52.3,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 17:17:00", location: {latitude: 52.5,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 17:17:00", location: {latitude: 53.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:17:00", location: {latitude: 53.5,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:17:00", location: {latitude: 53.8,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:17:00", location: {latitude: 9.0,longitude: -79.5}, count: 1
, team: 2},
{time: "2014-06-24 17:17:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: -6.3,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 10.4,longitude: -75.5}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 14.0,longitude: 100.8}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 18.7,longitude: -68.4}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 40.6,longitude: 14.2}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 41.1,longitude: 29.0}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 41.6,longitude: 2.0}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 50.7,longitude: -1.8}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 51.2,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 51.6,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 51.9,longitude: 0.9}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 52.1,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 52.2,longitude: 0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 52.8,longitude: 1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 53.8,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:18:00", location: {latitude: 54.8,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:19:00", location: {latitude: 39.5,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:19:00", location: {latitude: 51.8,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:19:00", location: {latitude: 53.2,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 17:19:00", location: {latitude: 53.8,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:20:00", location: {latitude: 12.9,longitude: 77.5}, count: 1
, team: 2},
{time: "2014-06-24 17:20:00", location: {latitude: 14.0,longitude: 100.8}, count: 1
, team: 2},
{time: "2014-06-24 17:20:00", location: {latitude: 51.2,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:20:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:20:00", location: {latitude: 51.8,longitude: 1.1}, count: 1
, team: 2},
{time: "2014-06-24 17:20:00", location: {latitude: 53.0,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 17:20:00", location: {latitude: 53.1,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 17:20:00", location: {latitude: 53.4,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:21:00", location: {latitude: -1.2,longitude: 36.9}, count: 1
, team: 2},
{time: "2014-06-24 17:21:00", location: {latitude: -8.0,longitude: -34.9}, count: 1
, team: 2},
{time: "2014-06-24 17:21:00", location: {latitude: 50.9,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:21:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:21:00", location: {latitude: 51.6,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 17:21:00", location: {latitude: 52.0,longitude: -0.8}, count: 1
, team: 2},
{time: "2014-06-24 17:21:00", location: {latitude: 53.6,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 17:21:00", location: {latitude: 53.9,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:21:00", location: {latitude: 54.8,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:21:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:21:00", location: {latitude: 9.9,longitude: -84.2}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: -20.3,longitude: -50.5}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 2.8,longitude: 101.5}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 3.5,longitude: -73.7}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 3.5,longitude: 98.6}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 46.9,longitude: -122.9}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 50.7,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 50.9,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 51.2,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 51.3,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 51.4,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 51.4,longitude: -2.5}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 51.5,longitude: 0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 51.6,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 51.7,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 52.6,longitude: 1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 53.8,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 53.8,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 17:22:00", location: {latitude: 54.7,longitude: -3.5}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: -3.1,longitude: -60.0}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: -4.0,longitude: 122.6}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 20.6,longitude: -103.4}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 3.3,longitude: 101.7}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 39.6,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 40.8,longitude: -74.0}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 42.4,longitude: -71.1}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 43.6,longitude: 3.9}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 50.8,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 51.3,longitude: -0.0}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 51.3,longitude: -0.7}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 51.3,longitude: 1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 51.4,longitude: 0.8}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 51.6,longitude: -4.0}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 51.7,longitude: 0.5}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 51.8,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 51.8,longitude: 1.1}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 51.9,longitude: -8.6}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 52.1,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 52.5,longitude: 1.7}, count: 2
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 52.6,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 52.9,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 53.0,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 53.4,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 53.5,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 53.5,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 53.6,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 53.8,longitude: -1.6}, count: 2
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 53.8,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:23:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: -0.2,longitude: -78.5}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: -1.3,longitude: 36.9}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 30.5,longitude: -81.6}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 33.9,longitude: -118.2}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 41.0,longitude: 27.5}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 43.6,longitude: -79.5}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 45.2,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 50.9,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 51.0,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 51.5,longitude: -0.2}, count: 2
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 51.6,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 52.1,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 52.4,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 52.5,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 53.1,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 53.5,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 53.8,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 54.5,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 55.1,longitude: -6.7}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 55.8,longitude: -4.3}, count: 1
, team: 2},
{time: "2014-06-24 17:24:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: -15.6,longitude: -56.1}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: -6.2,longitude: 106.7}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 13.0,longitude: 77.8}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 25.7,longitude: -80.5}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 3.2,longitude: 101.8}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 50.8,longitude: -0.8}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 50.9,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 51.0,longitude: -3.1}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 51.7,longitude: 0.7}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 52.6,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 52.6,longitude: 1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 53.0,longitude: -1.1}, count: 2
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 53.0,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 53.1,longitude: -3.1}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 54.8,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 55.9,longitude: -3.6}, count: 1
, team: 2},
{time: "2014-06-24 17:25:00", location: {latitude: 6.3,longitude: 116.5}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: -19.8,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: -29.4,longitude: -66.8}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: -5.4,longitude: 105.2}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: -6.9,longitude: 107.7}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: 1.6,longitude: 103.8}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: 38.0,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: 51.0,longitude: -1.3}, count: 2
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: 51.3,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: 51.6,longitude: -3.8}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: 52.0,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: 52.5,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: 53.6,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: 53.9,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: 55.0,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:26:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:27:00", location: {latitude: -14.8,longitude: -39.0}, count: 1
, team: 2},
{time: "2014-06-24 17:27:00", location: {latitude: -37.7,longitude: 144.9}, count: 1
, team: 2},
{time: "2014-06-24 17:27:00", location: {latitude: -6.3,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 17:27:00", location: {latitude: 3.1,longitude: 101.6}, count: 1
, team: 2},
{time: "2014-06-24 17:27:00", location: {latitude: 51.4,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 17:27:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:27:00", location: {latitude: 51.9,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 17:27:00", location: {latitude: 52.1,longitude: -0.7}, count: 2
, team: 2},
{time: "2014-06-24 17:27:00", location: {latitude: 52.5,longitude: -0.7}, count: 1
, team: 2},
{time: "2014-06-24 17:27:00", location: {latitude: 52.7,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 17:27:00", location: {latitude: 53.5,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 17:27:00", location: {latitude: 53.8,longitude: -1.8}, count: 1
, team: 2},
{time: "2014-06-24 17:27:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: -26.1,longitude: 28.0}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: -37.9,longitude: 145.0}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 19.3,longitude: -99.1}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 30.5,longitude: -81.6}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 32.6,longitude: -97.4}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 39.6,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 47.2,longitude: 2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 51.3,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 51.6,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 52.5,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 52.6,longitude: 1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 52.7,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 52.9,longitude: -0.9}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 53.4,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 53.5,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 53.5,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 54.7,longitude: -6.2}, count: 1
, team: 2},
{time: "2014-06-24 17:28:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: -1.2,longitude: 36.8}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: -1.3,longitude: 36.9}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: -19.9,longitude: -44.2}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: -29.4,longitude: -66.8}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: -8.6,longitude: 115.2}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: 25.7,longitude: -80.5}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: 3.3,longitude: 101.7}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: 48.1,longitude: 11.6}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: 50.4,longitude: -3.6}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: 50.8,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: 50.9,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: 51.2,longitude: 0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: 51.4,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: 51.6,longitude: -1.8}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: 51.6,longitude: 0.7}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: 53.5,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: 53.6,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 17:29:00", location: {latitude: 54.5,longitude: -6.7}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: -34.7,longitude: -58.4}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: -6.8,longitude: 107.6}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: 18.5,longitude: 73.9}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: 19.5,longitude: -99.1}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: 22.8,longitude: 86.2}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: 38.9,longitude: -77.0}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: 42.7,longitude: 23.3}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: 51.5,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: 51.7,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: 52.0,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: 52.1,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: 52.2,longitude: 0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: 52.5,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: 53.6,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: 53.8,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 17:30:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: -37.9,longitude: 145.0}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: -6.2,longitude: 106.9}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: -7.9,longitude: -78.1}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 19.5,longitude: -99.1}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 30.5,longitude: -81.6}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 37.8,longitude: -122.4}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 39.5,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 39.8,longitude: -86.2}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 51.2,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 51.8,longitude: 0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 51.9,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 52.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 52.6,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 53.0,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 53.4,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 53.4,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 53.5,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 53.5,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 53.7,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 54.3,longitude: -2.7}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 54.5,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 54.9,longitude: -6.9}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 8.6,longitude: -71.6}, count: 1
, team: 2},
{time: "2014-06-24 17:31:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: -21.0,longitude: -63.3}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: -26.2,longitude: 28.3}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: -36.9,longitude: -73.0}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: -7.8,longitude: 110.4}, count: 2
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 13.1,longitude: 77.6}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 13.8,longitude: 100.6}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 22.3,longitude: 114.2}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 25.7,longitude: -80.5}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 43.0,longitude: -87.9}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 50.9,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 51.4,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 51.4,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 51.5,longitude: -0.0}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 51.5,longitude: -0.2}, count: 2
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 51.5,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 51.6,longitude: -1.8}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 51.6,longitude: 0.7}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 51.8,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 52.1,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 52.5,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 52.9,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 53.4,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 53.5,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 53.5,longitude: -2.7}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 53.8,longitude: -1.8}, count: 1
, team: 2},
{time: "2014-06-24 17:32:00", location: {latitude: 54.0,longitude: -2.8}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: -20.0,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: -31.4,longitude: -64.2}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: -5.4,longitude: 105.3}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: -6.4,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 27.7,longitude: 85.3}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 3.2,longitude: 101.6}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 34.1,longitude: -118.3}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 34.2,longitude: -118.4}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 41.5,longitude: -81.7}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 43.6,longitude: 7.1}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 51.3,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 51.4,longitude: 0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 51.5,longitude: -0.0}, count: 2
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 52.4,longitude: -0.8}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 52.5,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 52.8,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 53.0,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 53.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 53.7,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 54.7,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 8.2,longitude: -62.8}, count: 1
, team: 2},
{time: "2014-06-24 17:33:00", location: {latitude: 9.0,longitude: -79.5}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: -0.6,longitude: 30.7}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: -1.2,longitude: -78.6}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: -34.9,longitude: -58.0}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: -7.4,longitude: 109.4}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 33.6,longitude: -81.7}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 40.7,longitude: -74.0}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 43.7,longitude: -79.4}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 49.7,longitude: 36.1}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 51.0,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 51.1,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 51.5,longitude: -0.0}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 51.5,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 51.6,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 51.8,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 52.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 52.5,longitude: -0.7}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 52.5,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 52.6,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 53.0,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 53.3,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 53.4,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 53.4,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 53.5,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 53.6,longitude: -2.8}, count: 1
, team: 2},
{time: "2014-06-24 17:34:00", location: {latitude: 6.0,longitude: 0.6}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: -20.0,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: -5.4,longitude: 105.3}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: -6.2,longitude: 106.7}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 10.1,longitude: -69.4}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 10.2,longitude: -84.4}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 20.0,longitude: -97.2}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 25.7,longitude: -80.5}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 25.8,longitude: -100.3}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 28.5,longitude: -81.5}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 39.5,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 39.6,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 50.9,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 51.0,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 51.4,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 51.5,longitude: -0.6}, count: 2
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 51.9,longitude: 1.0}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 52.0,longitude: 1.2}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 52.1,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 52.3,longitude: 0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 52.5,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 52.6,longitude: -2.9}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 53.4,longitude: 0.0}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 53.7,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 53.8,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 54.0,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 54.9,longitude: -6.9}, count: 1
, team: 2},
{time: "2014-06-24 17:35:00", location: {latitude: 9.0,longitude: 7.5}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: -26.2,longitude: 28.0}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: 10.4,longitude: -67.0}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: 20.6,longitude: -103.4}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: 3.3,longitude: 101.7}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: 3.4,longitude: -76.3}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: 47.2,longitude: 2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: 50.9,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: 52.4,longitude: -0.7}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: 53.0,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: 53.2,longitude: -0.7}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: 53.3,longitude: -2.7}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: 53.4,longitude: -6.4}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: 53.5,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: 53.5,longitude: -2.5}, count: 1
, team: 2},
{time: "2014-06-24 17:36:00", location: {latitude: 53.6,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: -1.0,longitude: 100.4}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: -34.5,longitude: -58.5}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: -6.4,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 10.1,longitude: 76.2}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 10.8,longitude: 106.7}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 25.7,longitude: -100.4}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 29.7,longitude: -95.5}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 31.9,longitude: 35.8}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 38.2,longitude: 27.4}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 4.7,longitude: -74.2}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 4.8,longitude: 7.0}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 41.0,longitude: 29.0}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 50.4,longitude: -4.1}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 50.9,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 51.5,longitude: -0.1}, count: 2
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 51.5,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 52.3,longitude: -0.7}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 53.0,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 53.2,longitude: -3.1}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 53.5,longitude: -2.5}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 53.7,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 9.8,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:37:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: -29.9,longitude: -51.0}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: -5.4,longitude: 105.3}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: -7.9,longitude: 112.6}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 14.6,longitude: -90.6}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 24.2,longitude: 55.7}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 25.7,longitude: -80.5}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 31.1,longitude: 29.8}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 47.6,longitude: -122.2}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 48.0,longitude: 91.6}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 50.8,longitude: 0.5}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 51.1,longitude: 0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 51.1,longitude: 1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 51.4,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 51.5,longitude: -0.1}, count: 2
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 52.4,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 52.6,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 52.6,longitude: 1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 53.0,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 53.3,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 53.5,longitude: -2.2}, count: 2
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 53.8,longitude: -2.5}, count: 1
, team: 2},
{time: "2014-06-24 17:38:00", location: {latitude: 7.4,longitude: 3.9}, count: 1
, team: 2},
{time: "2014-06-24 17:39:00", location: {latitude: 46.6,longitude: -119.0}, count: 1
, team: 2},
{time: "2014-06-24 17:39:00", location: {latitude: 50.8,longitude: 0.5}, count: 1
, team: 2},
{time: "2014-06-24 17:39:00", location: {latitude: 52.1,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:41:00", location: {latitude: 53.8,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 17:41:00", location: {latitude: 54.9,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:45:00", location: {latitude: 53.9,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:46:00", location: {latitude: 35.6,longitude: 139.7}, count: 1
, team: 2},
{time: "2014-06-24 17:46:00", location: {latitude: 38.6,longitude: -9.1}, count: 1
, team: 2},
{time: "2014-06-24 17:46:00", location: {latitude: 41.4,longitude: -81.5}, count: 1
, team: 2},
{time: "2014-06-24 17:46:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:46:00", location: {latitude: 53.6,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:46:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 17:47:00", location: {latitude: -7.3,longitude: 107.8}, count: 1
, team: 2},
{time: "2014-06-24 17:47:00", location: {latitude: 13.7,longitude: 100.6}, count: 1
, team: 2},
{time: "2014-06-24 17:47:00", location: {latitude: 53.4,longitude: -6.2}, count: 1
, team: 2},
{time: "2014-06-24 17:48:00", location: {latitude: -19.8,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 17:48:00", location: {latitude: -31.4,longitude: -64.2}, count: 1
, team: 2},
{time: "2014-06-24 17:48:00", location: {latitude: -37.8,longitude: 145.0}, count: 1
, team: 2},
{time: "2014-06-24 17:48:00", location: {latitude: -5.9,longitude: -35.3}, count: 1
, team: 2},
{time: "2014-06-24 17:48:00", location: {latitude: -6.3,longitude: 108.3}, count: 1
, team: 2},
{time: "2014-06-24 17:48:00", location: {latitude: 43.7,longitude: -79.4}, count: 1
, team: 2},
{time: "2014-06-24 17:48:00", location: {latitude: 47.2,longitude: 2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:48:00", location: {latitude: 51.5,longitude: 0.2}, count: 1
, team: 2},
{time: "2014-06-24 17:48:00", location: {latitude: 52.0,longitude: 1.2}, count: 1
, team: 2},
{time: "2014-06-24 17:48:00", location: {latitude: 52.9,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:48:00", location: {latitude: 53.4,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:48:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 17:48:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:49:00", location: {latitude: 4.7,longitude: -74.0}, count: 1
, team: 2},
{time: "2014-06-24 17:50:00", location: {latitude: -20.7,longitude: 116.8}, count: 1
, team: 2},
{time: "2014-06-24 17:50:00", location: {latitude: 53.4,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: -19.9,longitude: -44.0}, count: 2
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: -20.0,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: -30.0,longitude: -51.1}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: -7.8,longitude: 110.4}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 12.5,longitude: 100.0}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 19.3,longitude: -99.1}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 19.5,longitude: -99.2}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 21.5,longitude: 39.8}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 29.7,longitude: -95.3}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 4.7,longitude: -74.1}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 40.0,longitude: -74.9}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 43.6,longitude: 7.0}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 50.4,longitude: -4.1}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 50.7,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 51.3,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 51.4,longitude: -0.0}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 51.5,longitude: -0.1}, count: 2
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 51.5,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 51.5,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 51.5,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 51.5,longitude: 0.6}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 51.5,longitude: 0.7}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 51.7,longitude: -3.9}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 51.9,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 51.9,longitude: 0.9}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 52.1,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 52.1,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 52.1,longitude: -4.1}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 52.3,longitude: -0.9}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 52.3,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 52.5,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 52.9,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 53.3,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 53.3,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 53.4,longitude: -2.1}, count: 2
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 53.8,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 53.8,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 53.9,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 54.3,longitude: -6.6}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 54.7,longitude: -3.5}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 54.9,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 54.9,longitude: -2.9}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 55.0,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 55.2,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 56.2,longitude: -3.4}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:51:00", location: {latitude: 9.9,longitude: -85.6}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: -1.4,longitude: -48.5}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: -12.0,longitude: -77.0}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: -20.8,longitude: -42.9}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: -22.8,longitude: -43.4}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 10.0,longitude: -84.2}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 20.6,longitude: -103.5}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 30.3,longitude: -97.7}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 40.4,longitude: 28.9}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 51.1,longitude: 1.3}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 51.4,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 51.6,longitude: -1.8}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 51.6,longitude: 0.6}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 51.9,longitude: 0.9}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 52.1,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 52.3,longitude: 0.5}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 52.4,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 52.4,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 53.0,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 53.0,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 53.4,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 53.5,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 53.7,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 54.3,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 55.0,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 17:53:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 17:54:00", location: {latitude: -25.3,longitude: -57.6}, count: 1
, team: 2},
{time: "2014-06-24 17:54:00", location: {latitude: -33.4,longitude: -70.6}, count: 1
, team: 2},
{time: "2014-06-24 17:54:00", location: {latitude: -6.3,longitude: 106.7}, count: 1
, team: 2},
{time: "2014-06-24 17:54:00", location: {latitude: 10.1,longitude: -84.4}, count: 1
, team: 2},
{time: "2014-06-24 17:54:00", location: {latitude: 10.4,longitude: -75.5}, count: 1
, team: 2},
{time: "2014-06-24 17:54:00", location: {latitude: 3.2,longitude: 101.7}, count: 1
, team: 2},
{time: "2014-06-24 17:54:00", location: {latitude: 36.2,longitude: -86.0}, count: 1
, team: 2},
{time: "2014-06-24 17:54:00", location: {latitude: 41.4,longitude: 2.2}, count: 1
, team: 2},
{time: "2014-06-24 17:54:00", location: {latitude: 41.8,longitude: -88.1}, count: 1
, team: 2},
{time: "2014-06-24 17:54:00", location: {latitude: 42.5,longitude: -90.7}, count: 1
, team: 2},
{time: "2014-06-24 17:54:00", location: {latitude: 51.5,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 17:54:00", location: {latitude: 51.5,longitude: 0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:54:00", location: {latitude: 54.6,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 17:54:00", location: {latitude: 54.6,longitude: -5.9}, count: 1
, team: 2},
{time: "2014-06-24 17:55:00", location: {latitude: 3.8,longitude: 11.5}, count: 1
, team: 2},
{time: "2014-06-24 17:55:00", location: {latitude: 48.9,longitude: 2.6}, count: 1
, team: 2},
{time: "2014-06-24 17:55:00", location: {latitude: 54.6,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 17:57:00", location: {latitude: -8.7,longitude: 115.2}, count: 1
, team: 2},
{time: "2014-06-24 17:57:00", location: {latitude: 49.0,longitude: 2.3}, count: 1
, team: 2},
{time: "2014-06-24 17:57:00", location: {latitude: 50.9,longitude: 0.3}, count: 1
, team: 2},
{time: "2014-06-24 17:57:00", location: {latitude: 51.4,longitude: -0.7}, count: 1
, team: 2},
{time: "2014-06-24 17:58:00", location: {latitude: -34.5,longitude: -58.7}, count: 1
, team: 2},
{time: "2014-06-24 17:58:00", location: {latitude: -6.3,longitude: 106.9}, count: 1
, team: 2},
{time: "2014-06-24 17:58:00", location: {latitude: 51.5,longitude: 0.6}, count: 1
, team: 2},
{time: "2014-06-24 17:59:00", location: {latitude: -34.7,longitude: -58.2}, count: 1
, team: 2},
{time: "2014-06-24 17:59:00", location: {latitude: 36.8,longitude: 28.3}, count: 1
, team: 2},
{time: "2014-06-24 17:59:00", location: {latitude: 51.5,longitude: -3.6}, count: 1
, team: 2},
{time: "2014-06-24 18:00:00", location: {latitude: 13.7,longitude: -89.1}, count: 1
, team: 2},
{time: "2014-06-24 18:00:00", location: {latitude: 37.4,longitude: -122.1}, count: 1
, team: 2},
{time: "2014-06-24 18:00:00", location: {latitude: 43.6,longitude: 1.4}, count: 1
, team: 2},
{time: "2014-06-24 18:00:00", location: {latitude: 53.3,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 18:00:00", location: {latitude: 54.8,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 18:00:00", location: {latitude: 55.9,longitude: -4.1}, count: 1
, team: 2},
{time: "2014-06-24 18:01:00", location: {latitude: -33.0,longitude: -68.8}, count: 1
, team: 2},
{time: "2014-06-24 18:03:00", location: {latitude: 11.0,longitude: -63.9}, count: 1
, team: 2},
{time: "2014-06-24 18:03:00", location: {latitude: 18.5,longitude: 73.9}, count: 1
, team: 2},
{time: "2014-06-24 18:03:00", location: {latitude: 42.4,longitude: -71.0}, count: 1
, team: 2},
{time: "2014-06-24 18:03:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 18:05:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 2},
{time: "2014-06-24 18:05:00", location: {latitude: 51.4,longitude: -0.9}, count: 1
, team: 2},
{time: "2014-06-24 18:05:00", location: {latitude: 6.9,longitude: 79.9}, count: 1
, team: 2},
{time: "2014-06-24 18:06:00", location: {latitude: 22.2,longitude: -101.0}, count: 1
, team: 2},
{time: "2014-06-24 18:08:00", location: {latitude: 10.4,longitude: -84.2}, count: 1
, team: 2},
{time: "2014-06-24 18:08:00", location: {latitude: 19.5,longitude: -99.3}, count: 1
, team: 2},
{time: "2014-06-24 18:08:00", location: {latitude: 51.7,longitude: 5.4}, count: 1
, team: 2},
{time: "2014-06-24 18:08:00", location: {latitude: 6.9,longitude: 79.9}, count: 1
, team: 2},
{time: "2014-06-24 18:09:00", location: {latitude: -33.6,longitude: -70.6}, count: 1
, team: 2},
{time: "2014-06-24 18:09:00", location: {latitude: -35.5,longitude: -71.5}, count: 1
, team: 2},
{time: "2014-06-24 18:09:00", location: {latitude: 10.4,longitude: -73.3}, count: 1
, team: 2},
{time: "2014-06-24 18:09:00", location: {latitude: 51.5,longitude: -2.5}, count: 1
, team: 2},
{time: "2014-06-24 18:09:00", location: {latitude: 51.9,longitude: -0.5}, count: 1
, team: 2},
{time: "2014-06-24 18:09:00", location: {latitude: 8.6,longitude: -71.6}, count: 1
, team: 2},
{time: "2014-06-24 18:09:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 18:10:00", location: {latitude: -34.6,longitude: -58.6}, count: 1
, team: 2},
{time: "2014-06-24 18:10:00", location: {latitude: 10.0,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 18:10:00", location: {latitude: 13.0,longitude: 77.6}, count: 1
, team: 2},
{time: "2014-06-24 18:10:00", location: {latitude: 14.6,longitude: -90.5}, count: 1
, team: 2},
{time: "2014-06-24 18:10:00", location: {latitude: 37.6,longitude: -77.6}, count: 1
, team: 2},
{time: "2014-06-24 18:10:00", location: {latitude: 38.7,longitude: -90.4}, count: 1
, team: 2},
{time: "2014-06-24 18:11:00", location: {latitude: 40.9,longitude: 14.2}, count: 1
, team: 2},
{time: "2014-06-24 18:12:00", location: {latitude: -12.9,longitude: -38.4}, count: 1
, team: 2},
{time: "2014-06-24 18:12:00", location: {latitude: -13.0,longitude: -38.5}, count: 1
, team: 2},
{time: "2014-06-24 18:12:00", location: {latitude: 10.1,longitude: -69.3}, count: 1
, team: 2},
{time: "2014-06-24 18:12:00", location: {latitude: 13.7,longitude: -89.3}, count: 1
, team: 2},
{time: "2014-06-24 18:12:00", location: {latitude: 29.8,longitude: -95.4}, count: 1
, team: 2},
{time: "2014-06-24 18:12:00", location: {latitude: 40.7,longitude: -74.0}, count: 1
, team: 2},
{time: "2014-06-24 18:12:00", location: {latitude: 41.4,longitude: 2.2}, count: 1
, team: 2},
{time: "2014-06-24 18:12:00", location: {latitude: 48.9,longitude: 2.4}, count: 1
, team: 2},
{time: "2014-06-24 18:12:00", location: {latitude: 51.2,longitude: -0.8}, count: 1
, team: 2},
{time: "2014-06-24 18:12:00", location: {latitude: 51.7,longitude: 0.5}, count: 1
, team: 2},
{time: "2014-06-24 18:12:00", location: {latitude: 9.9,longitude: 78.1}, count: 1
, team: 2},
{time: "2014-06-24 18:13:00", location: {latitude: -2.2,longitude: -79.9}, count: 1
, team: 2},
{time: "2014-06-24 18:14:00", location: {latitude: -1.3,longitude: 36.9}, count: 1
, team: 2},
{time: "2014-06-24 18:14:00", location: {latitude: -23.6,longitude: -46.6}, count: 1
, team: 2},
{time: "2014-06-24 18:14:00", location: {latitude: 10.7,longitude: -61.4}, count: 1
, team: 2},
{time: "2014-06-24 18:14:00", location: {latitude: 20.4,longitude: 72.9}, count: 1
, team: 2},
{time: "2014-06-24 18:14:00", location: {latitude: 24.9,longitude: 67.1}, count: 1
, team: 2},
{time: "2014-06-24 18:14:00", location: {latitude: 26.9,longitude: 75.8}, count: 1
, team: 2},
{time: "2014-06-24 18:14:00", location: {latitude: 40.3,longitude: -111.7}, count: 1
, team: 2},
{time: "2014-06-24 18:14:00", location: {latitude: 51.5,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 18:14:00", location: {latitude: 53.0,longitude: -2.2}, count: 1
, team: 2},
{time: "2014-06-24 18:14:00", location: {latitude: 55.8,longitude: -4.3}, count: 2
, team: 2},
{time: "2014-06-24 18:14:00", location: {latitude: 56.0,longitude: -3.2}, count: 1
, team: 2},
{time: "2014-06-24 18:14:00", location: {latitude: 7.0,longitude: 79.9}, count: 1
, team: 2},
{time: "2014-06-24 18:16:00", location: {latitude: -12.0,longitude: -77.1}, count: 1
, team: 2},
{time: "2014-06-24 18:16:00", location: {latitude: -22.9,longitude: -47.0}, count: 1
, team: 2},
{time: "2014-06-24 18:16:00", location: {latitude: 25.1,longitude: 55.1}, count: 1
, team: 2},
{time: "2014-06-24 18:16:00", location: {latitude: 25.6,longitude: 85.0}, count: 1
, team: 2},
{time: "2014-06-24 18:16:00", location: {latitude: 3.0,longitude: 101.8}, count: 1
, team: 2},
{time: "2014-06-24 18:16:00", location: {latitude: 36.7,longitude: -4.3}, count: 1
, team: 2},
{time: "2014-06-24 18:16:00", location: {latitude: 47.4,longitude: 9.7}, count: 1
, team: 2},
{time: "2014-06-24 18:16:00", location: {latitude: 51.5,longitude: -0.1}, count: 2
, team: 2},
{time: "2014-06-24 18:16:00", location: {latitude: 6.8,longitude: 79.9}, count: 1
, team: 2},
{time: "2014-06-24 18:16:00", location: {latitude: 8.5,longitude: 76.9}, count: 1
, team: 2},
{time: "2014-06-24 18:16:00", location: {latitude: 9.0,longitude: -79.5}, count: 1
, team: 2},
{time: "2014-06-24 18:17:00", location: {latitude: -34.6,longitude: -58.5}, count: 1
, team: 2},
{time: "2014-06-24 18:17:00", location: {latitude: 14.1,longitude: -87.2}, count: 1
, team: 2},
{time: "2014-06-24 18:17:00", location: {latitude: 15.7,longitude: 32.5}, count: 1
, team: 2},
{time: "2014-06-24 18:17:00", location: {latitude: 32.8,longitude: -117.2}, count: 1
, team: 2},
{time: "2014-06-24 18:17:00", location: {latitude: 36.7,longitude: -4.3}, count: 1
, team: 2},
{time: "2014-06-24 18:17:00", location: {latitude: 41.0,longitude: 29.0}, count: 1
, team: 2},
{time: "2014-06-24 18:17:00", location: {latitude: 48.1,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 18:17:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 18:17:00", location: {latitude: 54.9,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: -33.5,longitude: -70.5}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: -34.6,longitude: -58.5}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: -6.6,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: 1.7,longitude: 125.1}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: 10.1,longitude: -69.3}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: 14.1,longitude: -87.2}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: 15.0,longitude: 100.3}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: 19.1,longitude: -98.2}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: 23.8,longitude: -99.2}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: 3.2,longitude: 101.7}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: 41.3,longitude: 14.9}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: 41.4,longitude: 2.1}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: 51.5,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: 52.6,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: 53.5,longitude: -2.9}, count: 1
, team: 2},
{time: "2014-06-24 18:18:00", location: {latitude: 54.6,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 18:19:00", location: {latitude: -30.9,longitude: -55.5}, count: 1
, team: 2},
{time: "2014-06-24 18:19:00", location: {latitude: -34.7,longitude: -56.2}, count: 1
, team: 2},
{time: "2014-06-24 18:19:00", location: {latitude: 3.0,longitude: 101.8}, count: 1
, team: 2},
{time: "2014-06-24 18:19:00", location: {latitude: 37.8,longitude: -122.5}, count: 1
, team: 2},
{time: "2014-06-24 18:19:00", location: {latitude: 38.7,longitude: 16.1}, count: 1
, team: 2},
{time: "2014-06-24 18:19:00", location: {latitude: 41.0,longitude: 28.6}, count: 1
, team: 2},
{time: "2014-06-24 18:19:00", location: {latitude: 43.7,longitude: 3.2}, count: 1
, team: 2},
{time: "2014-06-24 18:19:00", location: {latitude: 45.2,longitude: 5.7}, count: 1
, team: 2},
{time: "2014-06-24 18:19:00", location: {latitude: 50.7,longitude: 1.7}, count: 1
, team: 2},
{time: "2014-06-24 18:19:00", location: {latitude: 51.2,longitude: 6.8}, count: 1
, team: 2},
{time: "2014-06-24 18:19:00", location: {latitude: 51.7,longitude: 0.5}, count: 1
, team: 2},
{time: "2014-06-24 18:20:00", location: {latitude: 14.1,longitude: -87.2}, count: 1
, team: 2},
{time: "2014-06-24 18:20:00", location: {latitude: 36.7,longitude: -121.8}, count: 1
, team: 2},
{time: "2014-06-24 18:20:00", location: {latitude: 39.0,longitude: -77.4}, count: 1
, team: 2},
{time: "2014-06-24 18:20:00", location: {latitude: 48.8,longitude: 2.4}, count: 1
, team: 2},
{time: "2014-06-24 18:20:00", location: {latitude: 50.4,longitude: -4.8}, count: 1
, team: 2},
{time: "2014-06-24 18:20:00", location: {latitude: 51.5,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 18:20:00", location: {latitude: 54.9,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 18:21:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 18:21:00", location: {latitude: -6.2,longitude: 106.7}, count: 1
, team: 2},
{time: "2014-06-24 18:21:00", location: {latitude: 14.5,longitude: -91.5}, count: 1
, team: 2},
{time: "2014-06-24 18:21:00", location: {latitude: 35.9,longitude: 0.1}, count: 1
, team: 2},
{time: "2014-06-24 18:21:00", location: {latitude: 37.5,longitude: 126.9}, count: 1
, team: 2},
{time: "2014-06-24 18:21:00", location: {latitude: 39.6,longitude: 2.7}, count: 1
, team: 2},
{time: "2014-06-24 18:21:00", location: {latitude: 43.3,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 18:21:00", location: {latitude: 51.5,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 18:21:00", location: {latitude: 52.3,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 18:21:00", location: {latitude: 54.9,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 18:22:00", location: {latitude: -25.7,longitude: 28.4}, count: 1
, team: 2},
{time: "2014-06-24 18:22:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 18:22:00", location: {latitude: 14.7,longitude: -90.5}, count: 1
, team: 2},
{time: "2014-06-24 18:22:00", location: {latitude: 19.5,longitude: -99.0}, count: 1
, team: 2},
{time: "2014-06-24 18:22:00", location: {latitude: 35.1,longitude: -79.8}, count: 1
, team: 2},
{time: "2014-06-24 18:22:00", location: {latitude: 50.9,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 18:22:00", location: {latitude: 51.2,longitude: -0.2}, count: 1
, team: 2},
{time: "2014-06-24 18:22:00", location: {latitude: 53.9,longitude: -2.0}, count: 1
, team: 2},
{time: "2014-06-24 18:23:00", location: {latitude: -33.6,longitude: -70.8}, count: 1
, team: 2},
{time: "2014-06-24 18:23:00", location: {latitude: -34.9,longitude: -56.2}, count: 1
, team: 2},
{time: "2014-06-24 18:23:00", location: {latitude: 49.0,longitude: 2.0}, count: 1
, team: 2},
{time: "2014-06-24 18:23:00", location: {latitude: 50.9,longitude: 0.6}, count: 1
, team: 2},
{time: "2014-06-24 18:23:00", location: {latitude: 52.6,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 18:23:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 18:24:00", location: {latitude: 10.5,longitude: -66.8}, count: 1
, team: 2},
{time: "2014-06-24 18:24:00", location: {latitude: 10.5,longitude: -67.0}, count: 1
, team: 2},
{time: "2014-06-24 18:24:00", location: {latitude: 40.7,longitude: -4.7}, count: 1
, team: 2},
{time: "2014-06-24 18:24:00", location: {latitude: 54.9,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 18:24:00", location: {latitude: 9.0,longitude: -79.5}, count: 1
, team: 2},
{time: "2014-06-24 18:25:00", location: {latitude: -34.8,longitude: -56.2}, count: 1
, team: 2},
{time: "2014-06-24 18:25:00", location: {latitude: -34.9,longitude: -71.2}, count: 1
, team: 2},
{time: "2014-06-24 18:25:00", location: {latitude: 18.5,longitude: 73.9}, count: 1
, team: 2},
{time: "2014-06-24 18:25:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 2},
{time: "2014-06-24 18:25:00", location: {latitude: 30.4,longitude: -97.7}, count: 1
, team: 2},
{time: "2014-06-24 18:25:00", location: {latitude: 52.1,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 18:25:00", location: {latitude: 53.8,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 18:26:00", location: {latitude: -0.0,longitude: -51.2}, count: 1
, team: 2},
{time: "2014-06-24 18:26:00", location: {latitude: -1.5,longitude: -48.5}, count: 1
, team: 2},
{time: "2014-06-24 18:26:00", location: {latitude: -19.9,longitude: -43.9}, count: 1
, team: 2},
{time: "2014-06-24 18:26:00", location: {latitude: -31.4,longitude: -64.2}, count: 1
, team: 2},
{time: "2014-06-24 18:26:00", location: {latitude: -34.6,longitude: -58.6}, count: 1
, team: 2},
{time: "2014-06-24 18:26:00", location: {latitude: 13.7,longitude: 100.5}, count: 1
, team: 2},
{time: "2014-06-24 18:26:00", location: {latitude: 19.5,longitude: -99.0}, count: 1
, team: 2},
{time: "2014-06-24 18:26:00", location: {latitude: 45.5,longitude: 9.2}, count: 1
, team: 2},
{time: "2014-06-24 18:26:00", location: {latitude: 56.0,longitude: -3.2}, count: 1
, team: 2},
{time: "2014-06-24 18:26:00", location: {latitude: 9.4,longitude: -83.7}, count: 1
, team: 2},
{time: "2014-06-24 18:27:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 18:27:00", location: {latitude: -20.3,longitude: -40.4}, count: 1
, team: 2},
{time: "2014-06-24 18:27:00", location: {latitude: -3.7,longitude: -79.7}, count: 1
, team: 2},
{time: "2014-06-24 18:27:00", location: {latitude: -34.6,longitude: -58.6}, count: 1
, team: 2},
{time: "2014-06-24 18:27:00", location: {latitude: 0.6,longitude: -80.0}, count: 1
, team: 2},
{time: "2014-06-24 18:27:00", location: {latitude: 32.3,longitude: -64.8}, count: 1
, team: 2},
{time: "2014-06-24 18:27:00", location: {latitude: 50.7,longitude: -2.1}, count: 1
, team: 2},
{time: "2014-06-24 18:27:00", location: {latitude: 52.1,longitude: 4.3}, count: 1
, team: 2},
{time: "2014-06-24 18:27:00", location: {latitude: 52.7,longitude: 0.9}, count: 1
, team: 2},
{time: "2014-06-24 18:27:00", location: {latitude: 6.1,longitude: 100.3}, count: 1
, team: 2},
{time: "2014-06-24 18:28:00", location: {latitude: -34.8,longitude: -56.3}, count: 1
, team: 2},
{time: "2014-06-24 18:28:00", location: {latitude: -7.8,longitude: 110.9}, count: 1
, team: 2},
{time: "2014-06-24 18:28:00", location: {latitude: 25.2,longitude: 55.4}, count: 1
, team: 2},
{time: "2014-06-24 18:28:00", location: {latitude: 51.3,longitude: 0.0}, count: 1
, team: 2},
{time: "2014-06-24 18:28:00", location: {latitude: 52.2,longitude: -0.9}, count: 1
, team: 2},
{time: "2014-06-24 18:28:00", location: {latitude: 52.4,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 18:28:00", location: {latitude: 8.9,longitude: -79.5}, count: 1
, team: 2},
{time: "2014-06-24 18:29:00", location: {latitude: -3.3,longitude: -80.0}, count: 1
, team: 2},
{time: "2014-06-24 18:29:00", location: {latitude: -34.9,longitude: -56.2}, count: 1
, team: 2},
{time: "2014-06-24 18:29:00", location: {latitude: 10.4,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 18:29:00", location: {latitude: 19.5,longitude: -99.0}, count: 1
, team: 2},
{time: "2014-06-24 18:29:00", location: {latitude: 20.7,longitude: -103.3}, count: 1
, team: 2},
{time: "2014-06-24 18:29:00", location: {latitude: 30.4,longitude: -97.8}, count: 1
, team: 2},
{time: "2014-06-24 18:29:00", location: {latitude: 52.3,longitude: 5.5}, count: 1
, team: 2},
{time: "2014-06-24 18:29:00", location: {latitude: 53.0,longitude: -1.5}, count: 1
, team: 2},
{time: "2014-06-24 18:29:00", location: {latitude: 53.3,longitude: -3.1}, count: 1
, team: 2},
{time: "2014-06-24 18:30:00", location: {latitude: -26.2,longitude: 28.0}, count: 1
, team: 2},
{time: "2014-06-24 18:30:00", location: {latitude: 10.5,longitude: -68.1}, count: 1
, team: 2},
{time: "2014-06-24 18:30:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 18:31:00", location: {latitude: 10.5,longitude: -66.9}, count: 1
, team: 2},
{time: "2014-06-24 18:31:00", location: {latitude: 38.4,longitude: 27.1}, count: 1
, team: 2},
{time: "2014-06-24 18:31:00", location: {latitude: 50.5,longitude: -3.5}, count: 1
, team: 2},
{time: "2014-06-24 18:31:00", location: {latitude: 54.5,longitude: -5.9}, count: 1
, team: 2},
{time: "2014-06-24 18:31:00", location: {latitude: 9.9,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 18:32:00", location: {latitude: 33.8,longitude: -84.6}, count: 1
, team: 2},
{time: "2014-06-24 18:32:00", location: {latitude: 37.3,longitude: -6.2}, count: 1
, team: 2},
{time: "2014-06-24 18:32:00", location: {latitude: 51.6,longitude: -0.0}, count: 1
, team: 2},
{time: "2014-06-24 18:32:00", location: {latitude: 52.5,longitude: -1.9}, count: 1
, team: 2},
{time: "2014-06-24 18:32:00", location: {latitude: 53.1,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 18:33:00", location: {latitude: -6.8,longitude: 39.2}, count: 1
, team: 2},
{time: "2014-06-24 18:33:00", location: {latitude: 10.6,longitude: -67.0}, count: 1
, team: 2},
{time: "2014-06-24 18:33:00", location: {latitude: 15.6,longitude: 32.6}, count: 1
, team: 2},
{time: "2014-06-24 18:33:00", location: {latitude: 54.2,longitude: -4.7}, count: 1
, team: 2},
{time: "2014-06-24 18:33:00", location: {latitude: 61.5,longitude: 23.8}, count: 1
, team: 2},
{time: "2014-06-24 18:34:00", location: {latitude: -2.2,longitude: -79.9}, count: 1
, team: 2},
{time: "2014-06-24 18:34:00", location: {latitude: -34.9,longitude: -56.2}, count: 1
, team: 2},
{time: "2014-06-24 18:34:00", location: {latitude: -38.9,longitude: -62.1}, count: 1
, team: 2},
{time: "2014-06-24 18:34:00", location: {latitude: -4.0,longitude: -79.2}, count: 1
, team: 2},
{time: "2014-06-24 18:34:00", location: {latitude: 20.6,longitude: -103.4}, count: 1
, team: 2},
{time: "2014-06-24 18:34:00", location: {latitude: 3.5,longitude: -76.3}, count: 1
, team: 2},
{time: "2014-06-24 18:34:00", location: {latitude: 51.5,longitude: -0.6}, count: 1
, team: 2},
{time: "2014-06-24 18:34:00", location: {latitude: 53.6,longitude: -2.6}, count: 1
, team: 2},
{time: "2014-06-24 18:35:00", location: {latitude: 21.6,longitude: 39.2}, count: 1
, team: 2},
{time: "2014-06-24 18:35:00", location: {latitude: 34.1,longitude: -118.3}, count: 1
, team: 2},
{time: "2014-06-24 18:35:00", location: {latitude: 5.6,longitude: -0.3}, count: 1
, team: 2},
{time: "2014-06-24 18:35:00", location: {latitude: 51.4,longitude: 0.1}, count: 1
, team: 2},
{time: "2014-06-24 18:35:00", location: {latitude: 53.8,longitude: -0.4}, count: 1
, team: 2},
{time: "2014-06-24 18:36:00", location: {latitude: -2.0,longitude: 112.8}, count: 1
, team: 2},
{time: "2014-06-24 18:36:00", location: {latitude: 25.7,longitude: -100.4}, count: 1
, team: 2},
{time: "2014-06-24 18:36:00", location: {latitude: 28.1,longitude: -16.7}, count: 1
, team: 2},
{time: "2014-06-24 18:36:00", location: {latitude: 4.0,longitude: 102.0}, count: 1
, team: 2},
{time: "2014-06-24 18:36:00", location: {latitude: 55.8,longitude: 49.1}, count: 1
, team: 2},
{time: "2014-06-24 18:37:00", location: {latitude: -29.4,longitude: -66.8}, count: 1
, team: 2},
{time: "2014-06-24 18:37:00", location: {latitude: 10.2,longitude: -68.0}, count: 1
, team: 2},
{time: "2014-06-24 18:37:00", location: {latitude: 12.9,longitude: 80.1}, count: 1
, team: 2},
{time: "2014-06-24 18:37:00", location: {latitude: 27.6,longitude: 38.5}, count: 1
, team: 2},
{time: "2014-06-24 18:38:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 18:38:00", location: {latitude: -2.6,longitude: 140.5}, count: 1
, team: 2},
{time: "2014-06-24 18:38:00", location: {latitude: 12.9,longitude: -85.9}, count: 1
, team: 2},
{time: "2014-06-24 18:38:00", location: {latitude: 21.7,longitude: -101.0}, count: 1
, team: 2},
{time: "2014-06-24 18:38:00", location: {latitude: 52.8,longitude: 1.3}, count: 1
, team: 2},
{time: "2014-06-24 18:38:00", location: {latitude: 53.2,longitude: -2.9}, count: 1
, team: 2},
{time: "2014-06-24 18:39:00", location: {latitude: -19.9,longitude: -43.9}, count: 1
, team: 2},
{time: "2014-06-24 18:39:00", location: {latitude: -2.1,longitude: -79.9}, count: 1
, team: 2},
{time: "2014-06-24 18:39:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 18:39:00", location: {latitude: 13.2,longitude: -88.0}, count: 1
, team: 2},
{time: "2014-06-24 18:39:00", location: {latitude: 40.8,longitude: -74.0}, count: 1
, team: 2},
{time: "2014-06-24 18:40:00", location: {latitude: -12.1,longitude: -77.0}, count: 1
, team: 2},
{time: "2014-06-24 18:40:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 18:40:00", location: {latitude: 36.3,longitude: -119.6}, count: 1
, team: 2},
{time: "2014-06-24 18:40:00", location: {latitude: 40.8,longitude: 29.8}, count: 1
, team: 2},
{time: "2014-06-24 18:40:00", location: {latitude: 54.8,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 18:41:00", location: {latitude: 10.0,longitude: -84.1}, count: 1
, team: 2},
{time: "2014-06-24 18:41:00", location: {latitude: 31.1,longitude: 31.3}, count: 1
, team: 2},
{time: "2014-06-24 18:41:00", location: {latitude: 55.0,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 18:42:00", location: {latitude: -6.2,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 18:42:00", location: {latitude: 36.3,longitude: -119.6}, count: 1
, team: 2},
{time: "2014-06-24 18:42:00", location: {latitude: 42.7,longitude: -83.2}, count: 1
, team: 2},
{time: "2014-06-24 18:42:00", location: {latitude: 50.9,longitude: -1.4}, count: 1
, team: 2},
{time: "2014-06-24 18:43:00", location: {latitude: -31.5,longitude: -64.1}, count: 1
, team: 2},
{time: "2014-06-24 18:43:00", location: {latitude: 53.4,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 18:43:00", location: {latitude: 6.2,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 18:44:00", location: {latitude: -26.3,longitude: 28.1}, count: 1
, team: 2},
{time: "2014-06-24 18:44:00", location: {latitude: 27.8,longitude: -82.7}, count: 1
, team: 2},
{time: "2014-06-24 18:44:00", location: {latitude: 52.6,longitude: -1.2}, count: 1
, team: 2},
{time: "2014-06-24 18:44:00", location: {latitude: 53.8,longitude: -2.7}, count: 1
, team: 2},
{time: "2014-06-24 18:45:00", location: {latitude: -26.3,longitude: 28.1}, count: 1
, team: 2},
{time: "2014-06-24 18:45:00", location: {latitude: 29.3,longitude: 48.0}, count: 1
, team: 2},
{time: "2014-06-24 18:45:00", location: {latitude: 55.0,longitude: -1.7}, count: 1
, team: 2},
{time: "2014-06-24 18:46:00", location: {latitude: 24.4,longitude: 54.4}, count: 1
, team: 2},
{time: "2014-06-24 18:46:00", location: {latitude: 50.0,longitude: 14.4}, count: 1
, team: 2},
{time: "2014-06-24 18:46:00", location: {latitude: 50.9,longitude: -1.3}, count: 1
, team: 2},
{time: "2014-06-24 18:46:00", location: {latitude: 51.4,longitude: 0.0}, count: 1
, team: 2},
{time: "2014-06-24 18:46:00", location: {latitude: 51.5,longitude: -2.4}, count: 1
, team: 2},
{time: "2014-06-24 18:47:00", location: {latitude: -6.3,longitude: 107.1}, count: 1
, team: 2},
{time: "2014-06-24 18:47:00", location: {latitude: -6.4,longitude: 106.8}, count: 1
, team: 2},
{time: "2014-06-24 18:47:00", location: {latitude: 43.7,longitude: 7.1}, count: 1
, team: 2},
{time: "2014-06-24 18:47:00", location: {latitude: 5.8,longitude: 102.1}, count: 1
, team: 2},
{time: "2014-06-24 18:47:00", location: {latitude: 53.7,longitude: 0.1}, count: 1
, team: 2},
{time: "2014-06-24 18:48:00", location: {latitude: 53.8,longitude: -3.0}, count: 1
, team: 2},
{time: "2014-06-24 18:49:00", location: {latitude: 19.3,longitude: -99.1}, count: 1
, team: 2},
{time: "2014-06-24 18:49:00", location: {latitude: 4.6,longitude: 101.2}, count: 1
, team: 2},
{time: "2014-06-24 18:50:00", location: {latitude: -0.1,longitude: 34.8}, count: 1
, team: 2},
{time: "2014-06-24 18:50:00", location: {latitude: 13.7,longitude: -89.3}, count: 1
, team: 2},
{time: "2014-06-24 18:50:00", location: {latitude: 19.4,longitude: -99.2}, count: 1
, team: 2},
{time: "2014-06-24 18:50:00", location: {latitude: 40.8,longitude: -111.8}, count: 1
, team: 2},
{time: "2014-06-24 18:50:00", location: {latitude: 43.9,longitude: -79.1}, count: 1
, team: 2},
{time: "2014-06-24 18:50:00", location: {latitude: 51.7,longitude: 0.5}, count: 1
, team: 2},
{time: "2014-06-24 18:51:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 18:51:00", location: {latitude: 34.0,longitude: -83.4}, count: 1
, team: 2},
{time: "2014-06-24 18:51:00", location: {latitude: 41.0,longitude: 29.1}, count: 1
, team: 2},
{time: "2014-06-24 18:51:00", location: {latitude: 50.8,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 18:51:00", location: {latitude: 51.6,longitude: -0.1}, count: 1
, team: 2},
{time: "2014-06-24 18:51:00", location: {latitude: 9.9,longitude: -84.0}, count: 1
, team: 2},
{time: "2014-06-24 18:52:00", location: {latitude: -34.8,longitude: -56.2}, count: 1
, team: 2},
{time: "2014-06-24 18:52:00", location: {latitude: 19.7,longitude: -101.2}, count: 1
, team: 2},
{time: "2014-06-24 18:52:00", location: {latitude: 33.5,longitude: -117.2}, count: 1
, team: 2},
{time: "2014-06-24 18:53:00", location: {latitude: -34.8,longitude: -56.2}, count: 1
, team: 2},
{time: "2014-06-24 18:53:00", location: {latitude: 17.1,longitude: -96.7}, count: 1
, team: 2},
{time: "2014-06-24 18:53:00", location: {latitude: 54.9,longitude: -1.6}, count: 1
, team: 2},
{time: "2014-06-24 18:54:00", location: {latitude: -19.9,longitude: -44.0}, count: 1
, team: 2},
{time: "2014-06-24 18:54:00", location: {latitude: 43.9,longitude: -79.1}, count: 1
, team: 2},
{time: "2014-06-24 18:54:00", location: {latitude: 49.3,longitude: -123.1}, count: 1
, team: 2},
{time: "2014-06-24 18:55:00", location: {latitude: 23.6,longitude: 58.4}, count: 1
, team: 2},
{time: "2014-06-24 18:55:00", location: {latitude: 51.5,longitude: 0.1}, count: 1
, team: 2},
{time: "2014-06-24 18:55:00", location: {latitude: 52.7,longitude: -1.0}, count: 1
, team: 2},
{time: "2014-06-24 18:56:00", location: {latitude: 37.4,longitude: -6.0}, count: 1
, team: 2},
{time: "2014-06-24 18:56:00", location: {latitude: 51.2,longitude: -1.1}, count: 1
, team: 2},
{time: "2014-06-24 18:57:00", location: {latitude: -25.3,longitude: -57.7}, count: 1
, team: 2},
{time: "2014-06-24 18:57:00", location: {latitude: 51.2,longitude: -3.5}, count: 1
, team: 2},
{time: "2014-06-24 18:57:00", location: {latitude: 53.8,longitude: -1.8}, count: 1
, team: 2},
{time: "2014-06-24 18:58:00", location: {latitude: 51.8,longitude: 1.0}, count: 1
, team: 2},
{time: "2014-06-24 18:58:00", location: {latitude: 53.5,longitude: -2.3}, count: 1
, team: 2},
{time: "2014-06-24 18:59:00", location: {latitude: -32.9,longitude: -71.2}, count: 1
, team: 2},
{time: "2014-06-24 18:59:00", location: {latitude: 30.3,longitude: -9.5}, count: 1
, team: 2},
{time: "2014-06-24 18:59:00", location: {latitude: 51.5,longitude: -0.2}, count: 1
, team: 2}]
