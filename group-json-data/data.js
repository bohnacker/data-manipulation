// This script works with a filtered cumulation of the following data:
// https://www.kaggle.com/heesoo37/120-years-of-olympic-history-athletes-and-results/#athlete_events.csv

var data = [
  {
    "Sex": "F",
    "NOC": "EST",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 32,
    "HeightMin": 168,
    "HeightMax": 168
  },
  {
    "Sex": "M",
    "NOC": "SUI",
    "Medal": "Gold",
    "count": 41,
    "AgeAverage": 28.098,
    "HeightMin": 163,
    "HeightMax": 201
  },
  {
    "Sex": "F",
    "NOC": "NZL",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 20,
    "HeightMin": 178,
    "HeightMax": 178
  },
  {
    "Sex": "F",
    "NOC": "FRA",
    "Medal": "Gold",
    "count": 11,
    "AgeAverage": 23.364,
    "HeightMin": 160,
    "HeightMax": 174
  },
  {
    "Sex": "M",
    "NOC": "LAT",
    "Medal": "Bronze",
    "count": 6,
    "AgeAverage": 29.667,
    "HeightMin": 174,
    "HeightMax": 184
  },
  {
    "Sex": "F",
    "NOC": "FIN",
    "Medal": "Silver",
    "count": 25,
    "AgeAverage": 27.44,
    "HeightMin": 157,
    "HeightMax": 173
  },
  {
    "Sex": "F",
    "NOC": "CRO",
    "Medal": "Gold",
    "count": 4,
    "AgeAverage": 21,
    "HeightMin": 175,
    "HeightMax": 175
  },
  {
    "Sex": "F",
    "NOC": "NED",
    "Medal": "Gold",
    "count": 19,
    "AgeAverage": 24.421,
    "HeightMin": 164,
    "HeightMax": 182
  },
  {
    "Sex": "F",
    "NOC": "DEN",
    "Medal": "Silver",
    "count": 5,
    "AgeAverage": 31.4,
    "HeightMin": 168,
    "HeightMax": 173
  },
  {
    "Sex": "F",
    "NOC": "GDR",
    "Medal": "Silver",
    "count": 18,
    "AgeAverage": 22.5,
    "HeightMin": 160,
    "HeightMax": 180
  },
  {
    "Sex": "F",
    "NOC": "FRA",
    "Medal": "Bronze",
    "count": 22,
    "AgeAverage": 23.727,
    "HeightMin": 156,
    "HeightMax": 176
  },
  {
    "Sex": "M",
    "NOC": "SVK",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 24,
    "HeightMin": 186,
    "HeightMax": 186
  },
  {
    "Sex": "M",
    "NOC": "EUN",
    "Medal": "Gold",
    "count": 26,
    "AgeAverage": 23.846,
    "HeightMin": 173,
    "HeightMax": 193
  },
  {
    "Sex": "M",
    "NOC": "BLR",
    "Medal": "Silver",
    "count": 3,
    "AgeAverage": 29.333,
    "HeightMin": 170,
    "HeightMax": 186
  },
  {
    "Sex": "F",
    "NOC": "KAZ",
    "Medal": "Bronze",
    "count": 1,
    "AgeAverage": 29,
    "HeightMin": 160,
    "HeightMax": 160
  },
  {
    "Sex": "M",
    "NOC": "SLO",
    "Medal": "Bronze",
    "count": 7,
    "AgeAverage": 23.429,
    "HeightMin": 169,
    "HeightMax": 186
  },
  {
    "Sex": "F",
    "NOC": "AUT",
    "Medal": "Silver",
    "count": 20,
    "AgeAverage": 24.6,
    "HeightMin": 164,
    "HeightMax": 174
  },
  {
    "Sex": "F",
    "NOC": "SVK",
    "Medal": "Gold",
    "count": 2,
    "AgeAverage": 27,
    "HeightMin": 180,
    "HeightMax": 180
  },
  {
    "Sex": "F",
    "NOC": "POL",
    "Medal": "Gold",
    "count": 2,
    "AgeAverage": 29,
    "HeightMin": 173,
    "HeightMax": 173
  },
  {
    "Sex": "M",
    "NOC": "CZE",
    "Medal": "Silver",
    "count": 4,
    "AgeAverage": 29.25,
    "HeightMin": 181,
    "HeightMax": 183
  },
  {
    "Sex": "M",
    "NOC": "USA",
    "Medal": "Silver",
    "count": 143,
    "AgeAverage": 26.098,
    "HeightMin": 162,
    "HeightMax": 193
  },
  {
    "Sex": "M",
    "NOC": "EUN",
    "Medal": "Bronze",
    "count": 1,
    "AgeAverage": 28,
    "HeightMin": 176,
    "HeightMax": 176
  },
  {
    "Sex": "M",
    "NOC": "CHN",
    "Medal": "Gold",
    "count": 2,
    "AgeAverage": 29,
    "HeightMin": 173,
    "HeightMax": 177
  },
  {
    "Sex": "M",
    "NOC": "LUX",
    "Medal": "Silver",
    "count": 2,
    "AgeAverage": 28,
    "HeightMin": 178,
    "HeightMax": 178
  },
  {
    "Sex": "M",
    "NOC": "CHN",
    "Medal": "Silver",
    "count": 7,
    "AgeAverage": 22,
    "HeightMin": 173,
    "HeightMax": 182
  },
  {
    "Sex": "M",
    "NOC": "ITA",
    "Medal": "Silver",
    "count": 47,
    "AgeAverage": 27.83,
    "HeightMin": 163,
    "HeightMax": 187
  },
  {
    "Sex": "M",
    "NOC": "LIE",
    "Medal": "Bronze",
    "count": 3,
    "AgeAverage": 26,
    "HeightMin": 175,
    "HeightMax": 180
  },
  {
    "Sex": "M",
    "NOC": "AUS",
    "Medal": "Silver",
    "count": 2,
    "AgeAverage": 27,
    "HeightMin": 171,
    "HeightMax": 186
  },
  {
    "Sex": "M",
    "NOC": "BUL",
    "Medal": "Bronze",
    "count": 1,
    "AgeAverage": 22,
    "HeightMin": 185,
    "HeightMax": 185
  },
  {
    "Sex": "M",
    "NOC": "BLR",
    "Medal": "Gold",
    "count": 2,
    "AgeAverage": 29.5,
    "HeightMin": 170,
    "HeightMax": 176
  },
  {
    "Sex": "M",
    "NOC": "URS",
    "Medal": "Gold",
    "count": 183,
    "AgeAverage": 25.874,
    "HeightMin": 162,
    "HeightMax": 192
  },
  {
    "Sex": "M",
    "NOC": "KAZ",
    "Medal": "Bronze",
    "count": 2,
    "AgeAverage": 26.5,
    "HeightMin": 164,
    "HeightMax": 185
  },
  {
    "Sex": "M",
    "NOC": "BEL",
    "Medal": "Bronze",
    "count": 1,
    "AgeAverage": 30,
    "HeightMin": 181,
    "HeightMax": 181
  },
  {
    "Sex": "M",
    "NOC": "NED",
    "Medal": "Silver",
    "count": 21,
    "AgeAverage": 24.238,
    "HeightMin": 171,
    "HeightMax": 190
  },
  {
    "Sex": "M",
    "NOC": "NOR",
    "Medal": "Bronze",
    "count": 56,
    "AgeAverage": 26.75,
    "HeightMin": 173,
    "HeightMax": 192
  },
  {
    "Sex": "F",
    "NOC": "LIE",
    "Medal": "Bronze",
    "count": 1,
    "AgeAverage": 19,
    "HeightMin": 165,
    "HeightMax": 165
  },
  {
    "Sex": "F",
    "NOC": "TCH",
    "Medal": "Silver",
    "count": 4,
    "AgeAverage": 27.75,
    "HeightMin": 162,
    "HeightMax": 167
  },
  {
    "Sex": "M",
    "NOC": "YUG",
    "Medal": "Silver",
    "count": 5,
    "AgeAverage": 22.6,
    "HeightMin": 176,
    "HeightMax": 184
  },
  {
    "Sex": "F",
    "NOC": "USA",
    "Medal": "Gold",
    "count": 57,
    "AgeAverage": 23.333,
    "HeightMin": 147,
    "HeightMax": 180
  },
  {
    "Sex": "M",
    "NOC": "NED",
    "Medal": "Gold",
    "count": 22,
    "AgeAverage": 26.136,
    "HeightMin": 171,
    "HeightMax": 192
  },
  {
    "Sex": "M",
    "NOC": "TCH",
    "Medal": "Gold",
    "count": 2,
    "AgeAverage": 24,
    "HeightMin": 165,
    "HeightMax": 175
  },
  {
    "Sex": "M",
    "NOC": "AUS",
    "Medal": "Gold",
    "count": 2,
    "AgeAverage": 24.5,
    "HeightMin": 178,
    "HeightMax": 186
  },
  {
    "Sex": "M",
    "NOC": "GER",
    "Medal": "Bronze",
    "count": 36,
    "AgeAverage": 27.056,
    "HeightMin": 163,
    "HeightMax": 191
  },
  {
    "Sex": "M",
    "NOC": "FIN",
    "Medal": "Gold",
    "count": 54,
    "AgeAverage": 25.5,
    "HeightMin": 157,
    "HeightMax": 197
  },
  {
    "Sex": "M",
    "NOC": "NOR",
    "Medal": "Gold",
    "count": 86,
    "AgeAverage": 28.279,
    "HeightMin": 174,
    "HeightMax": 192
  },
  {
    "Sex": "F",
    "NOC": "CAN",
    "Medal": "Silver",
    "count": 73,
    "AgeAverage": 26.548,
    "HeightMin": 148,
    "HeightMax": 178
  },
  {
    "Sex": "F",
    "NOC": "CHN",
    "Medal": "Bronze",
    "count": 16,
    "AgeAverage": 24.313,
    "HeightMin": 157,
    "HeightMax": 180
  },
  {
    "Sex": "F",
    "NOC": "CZE",
    "Medal": "Bronze",
    "count": 3,
    "AgeAverage": 23.667,
    "HeightMin": 171,
    "HeightMax": 175
  },
  {
    "Sex": "F",
    "NOC": "SWE",
    "Medal": "Gold",
    "count": 22,
    "AgeAverage": 30.045,
    "HeightMin": 158,
    "HeightMax": 174
  },
  {
    "Sex": "F",
    "NOC": "SWE",
    "Medal": "Silver",
    "count": 37,
    "AgeAverage": 25.189,
    "HeightMin": 159,
    "HeightMax": 179
  },
  {
    "Sex": "F",
    "NOC": "CAN",
    "Medal": "Gold",
    "count": 120,
    "AgeAverage": 26.517,
    "HeightMin": 155,
    "HeightMax": 184
  },
  {
    "Sex": "M",
    "NOC": "SUI",
    "Medal": "Bronze",
    "count": 55,
    "AgeAverage": 28.345,
    "HeightMin": 164,
    "HeightMax": 201
  },
  {
    "Sex": "F",
    "NOC": "FRG",
    "Medal": "Bronze",
    "count": 5,
    "AgeAverage": 22,
    "HeightMin": 166,
    "HeightMax": 178
  },
  {
    "Sex": "M",
    "NOC": "EST",
    "Medal": "Bronze",
    "count": 1,
    "AgeAverage": 29,
    "HeightMin": 182,
    "HeightMax": 182
  },
  {
    "Sex": "M",
    "NOC": "HUN",
    "Medal": "Bronze",
    "count": 2,
    "AgeAverage": 26,
    "HeightMin": 168,
    "HeightMax": 168
  },
  {
    "Sex": "M",
    "NOC": "FIN",
    "Medal": "Silver",
    "count": 112,
    "AgeAverage": 27.009,
    "HeightMin": 164,
    "HeightMax": 197
  },
  {
    "Sex": "F",
    "NOC": "AUS",
    "Medal": "Bronze",
    "count": 3,
    "AgeAverage": 28.667,
    "HeightMin": 157,
    "HeightMax": 175
  },
  {
    "Sex": "F",
    "NOC": "USA",
    "Medal": "Silver",
    "count": 103,
    "AgeAverage": 23.699,
    "HeightMin": 152,
    "HeightMax": 183
  },
  {
    "Sex": "M",
    "NOC": "LAT",
    "Medal": "Silver",
    "count": 8,
    "AgeAverage": 26.25,
    "HeightMin": 174,
    "HeightMax": 193
  },
  {
    "Sex": "F",
    "NOC": "BLR",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 28,
    "HeightMin": 164,
    "HeightMax": 164
  },
  {
    "Sex": "M",
    "NOC": "GDR",
    "Medal": "Bronze",
    "count": 31,
    "AgeAverage": 24.581,
    "HeightMin": 173,
    "HeightMax": 192
  },
  {
    "Sex": "F",
    "NOC": "YUG",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 19,
    "HeightMin": 158,
    "HeightMax": 158
  },
  {
    "Sex": "F",
    "NOC": "BLR",
    "Medal": "Gold",
    "count": 4,
    "AgeAverage": 28.75,
    "HeightMin": 153,
    "HeightMax": 168
  },
  {
    "Sex": "F",
    "NOC": "BUL",
    "Medal": "Silver",
    "count": 2,
    "AgeAverage": 26,
    "HeightMin": 166,
    "HeightMax": 166
  },
  {
    "Sex": "M",
    "NOC": "CZE",
    "Medal": "Bronze",
    "count": 31,
    "AgeAverage": 29.774,
    "HeightMin": 174,
    "HeightMax": 196
  },
  {
    "Sex": "F",
    "NOC": "POL",
    "Medal": "Silver",
    "count": 6,
    "AgeAverage": 27.5,
    "HeightMin": 160,
    "HeightMax": 177
  },
  {
    "Sex": "M",
    "NOC": "ITA",
    "Medal": "Gold",
    "count": 41,
    "AgeAverage": 27.341,
    "HeightMin": 163,
    "HeightMax": 189
  },
  {
    "Sex": "F",
    "NOC": "NED",
    "Medal": "Silver",
    "count": 13,
    "AgeAverage": 25.231,
    "HeightMin": 165,
    "HeightMax": 180
  },
  {
    "Sex": "F",
    "NOC": "CRO",
    "Medal": "Silver",
    "count": 2,
    "AgeAverage": 22,
    "HeightMin": 175,
    "HeightMax": 175
  },
  {
    "Sex": "F",
    "NOC": "AUT",
    "Medal": "Bronze",
    "count": 17,
    "AgeAverage": 26.176,
    "HeightMin": 165,
    "HeightMax": 182
  },
  {
    "Sex": "F",
    "NOC": "KAZ",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 29,
    "HeightMin": 162,
    "HeightMax": 162
  },
  {
    "Sex": "F",
    "NOC": "GBR",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 24,
    "HeightMin": 171,
    "HeightMax": 171
  },
  {
    "Sex": "F",
    "NOC": "SUI",
    "Medal": "Bronze",
    "count": 34,
    "AgeAverage": 23.412,
    "HeightMin": 157,
    "HeightMax": 178
  },
  {
    "Sex": "F",
    "NOC": "FRA",
    "Medal": "Silver",
    "count": 18,
    "AgeAverage": 24.556,
    "HeightMin": 156,
    "HeightMax": 174
  },
  {
    "Sex": "F",
    "NOC": "UKR",
    "Medal": "Bronze",
    "count": 4,
    "AgeAverage": 28,
    "HeightMin": 151,
    "HeightMax": 168
  },
  {
    "Sex": "M",
    "NOC": "USA",
    "Medal": "Gold",
    "count": 77,
    "AgeAverage": 24.104,
    "HeightMin": 160,
    "HeightMax": 193
  },
  {
    "Sex": "M",
    "NOC": "CZE",
    "Medal": "Gold",
    "count": 22,
    "AgeAverage": 26.682,
    "HeightMin": 178,
    "HeightMax": 192
  },
  {
    "Sex": "F",
    "NOC": "KOR",
    "Medal": "Bronze",
    "count": 6,
    "AgeAverage": 18.5,
    "HeightMin": 163,
    "HeightMax": 173
  },
  {
    "Sex": "M",
    "NOC": "NOR",
    "Medal": "Silver",
    "count": 85,
    "AgeAverage": 26.647,
    "HeightMin": 166,
    "HeightMax": 192
  },
  {
    "Sex": "M",
    "NOC": "POL",
    "Medal": "Bronze",
    "count": 5,
    "AgeAverage": 26,
    "HeightMin": 170,
    "HeightMax": 183
  },
  {
    "Sex": "F",
    "NOC": "SVK",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 25,
    "HeightMin": 180,
    "HeightMax": 180
  },
  {
    "Sex": "F",
    "NOC": "AUT",
    "Medal": "Gold",
    "count": 15,
    "AgeAverage": 23.933,
    "HeightMin": 164,
    "HeightMax": 177
  },
  {
    "Sex": "M",
    "NOC": "TCH",
    "Medal": "Silver",
    "count": 60,
    "AgeAverage": 25.65,
    "HeightMin": 165,
    "HeightMax": 188
  },
  {
    "Sex": "F",
    "NOC": "SLO",
    "Medal": "Gold",
    "count": 2,
    "AgeAverage": 30,
    "HeightMin": 172,
    "HeightMax": 172
  },
  {
    "Sex": "M",
    "NOC": "RUS",
    "Medal": "Silver",
    "count": 61,
    "AgeAverage": 27.754,
    "HeightMin": 170,
    "HeightMax": 195
  },
  {
    "Sex": "M",
    "NOC": "USA",
    "Medal": "Bronze",
    "count": 62,
    "AgeAverage": 25.855,
    "HeightMin": 159,
    "HeightMax": 193
  },
  {
    "Sex": "F",
    "NOC": "BUL",
    "Medal": "Bronze",
    "count": 2,
    "AgeAverage": 25.5,
    "HeightMin": 166,
    "HeightMax": 172
  },
  {
    "Sex": "F",
    "NOC": "BUL",
    "Medal": "Gold",
    "count": 1,
    "AgeAverage": 22,
    "HeightMin": 163,
    "HeightMax": 163
  },
  {
    "Sex": "F",
    "NOC": "KOR",
    "Medal": "Gold",
    "count": 29,
    "AgeAverage": 18.828,
    "HeightMin": 155,
    "HeightMax": 173
  },
  {
    "Sex": "M",
    "NOC": "SWE",
    "Medal": "Bronze",
    "count": 102,
    "AgeAverage": 25.392,
    "HeightMin": 163,
    "HeightMax": 194
  },
  {
    "Sex": "M",
    "NOC": "LIE",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 21,
    "HeightMin": 175,
    "HeightMax": 175
  },
  {
    "Sex": "M",
    "NOC": "CAN",
    "Medal": "Bronze",
    "count": 55,
    "AgeAverage": 24.891,
    "HeightMin": 165,
    "HeightMax": 190
  },
  {
    "Sex": "M",
    "NOC": "FRA",
    "Medal": "Gold",
    "count": 18,
    "AgeAverage": 25.222,
    "HeightMin": 167,
    "HeightMax": 189
  },
  {
    "Sex": "M",
    "NOC": "URS",
    "Medal": "Silver",
    "count": 57,
    "AgeAverage": 25.368,
    "HeightMin": 164,
    "HeightMax": 190
  },
  {
    "Sex": "M",
    "NOC": "GER",
    "Medal": "Silver",
    "count": 67,
    "AgeAverage": 26.866,
    "HeightMin": 170,
    "HeightMax": 196
  },
  {
    "Sex": "F",
    "NOC": "GDR",
    "Medal": "Gold",
    "count": 17,
    "AgeAverage": 22.412,
    "HeightMin": 157,
    "HeightMax": 180
  },
  {
    "Sex": "M",
    "NOC": "NED",
    "Medal": "Bronze",
    "count": 28,
    "AgeAverage": 26.821,
    "HeightMin": 172,
    "HeightMax": 190
  },
  {
    "Sex": "M",
    "NOC": "KAZ",
    "Medal": "Gold",
    "count": 1,
    "AgeAverage": 29,
    "HeightMin": 185,
    "HeightMax": 185
  },
  {
    "Sex": "F",
    "NOC": "ESP",
    "Medal": "Bronze",
    "count": 1,
    "AgeAverage": 28,
    "HeightMin": 168,
    "HeightMax": 168
  },
  {
    "Sex": "M",
    "NOC": "SUI",
    "Medal": "Silver",
    "count": 41,
    "AgeAverage": 27.195,
    "HeightMin": 166,
    "HeightMax": 200
  },
  {
    "Sex": "F",
    "NOC": "LAT",
    "Medal": "Bronze",
    "count": 1,
    "AgeAverage": 23,
    "HeightMin": 170,
    "HeightMax": 170
  },
  {
    "Sex": "F",
    "NOC": "HUN",
    "Medal": "Bronze",
    "count": 2,
    "AgeAverage": 25,
    "HeightMin": 158,
    "HeightMax": 158
  },
  {
    "Sex": "M",
    "NOC": "POL",
    "Medal": "Silver",
    "count": 4,
    "AgeAverage": 30,
    "HeightMin": 170,
    "HeightMax": 182
  },
  {
    "Sex": "F",
    "NOC": "KOR",
    "Medal": "Silver",
    "count": 6,
    "AgeAverage": 18.5,
    "HeightMin": 154,
    "HeightMax": 173
  },
  {
    "Sex": "F",
    "NOC": "USA",
    "Medal": "Bronze",
    "count": 66,
    "AgeAverage": 23.545,
    "HeightMin": 150,
    "HeightMax": 178
  },
  {
    "Sex": "M",
    "NOC": "GDR",
    "Medal": "Silver",
    "count": 29,
    "AgeAverage": 25.862,
    "HeightMin": 169,
    "HeightMax": 188
  },
  {
    "Sex": "F",
    "NOC": "ITA",
    "Medal": "Gold",
    "count": 12,
    "AgeAverage": 25.917,
    "HeightMin": 158,
    "HeightMax": 173
  },
  {
    "Sex": "F",
    "NOC": "SWE",
    "Medal": "Bronze",
    "count": 35,
    "AgeAverage": 24.686,
    "HeightMin": 153,
    "HeightMax": 183
  },
  {
    "Sex": "F",
    "NOC": "FRG",
    "Medal": "Silver",
    "count": 5,
    "AgeAverage": 23.4,
    "HeightMin": 159,
    "HeightMax": 172
  },
  {
    "Sex": "M",
    "NOC": "FIN",
    "Medal": "Bronze",
    "count": 142,
    "AgeAverage": 27.465,
    "HeightMin": 157,
    "HeightMax": 197
  },
  {
    "Sex": "M",
    "NOC": "EUN",
    "Medal": "Silver",
    "count": 5,
    "AgeAverage": 25.4,
    "HeightMin": 170,
    "HeightMax": 182
  },
  {
    "Sex": "F",
    "NOC": "UZB",
    "Medal": "Gold",
    "count": 1,
    "AgeAverage": 25,
    "HeightMin": 164,
    "HeightMax": 164
  },
  {
    "Sex": "M",
    "NOC": "GBR",
    "Medal": "Bronze",
    "count": 6,
    "AgeAverage": 29.333,
    "HeightMin": 173,
    "HeightMax": 185
  },
  {
    "Sex": "F",
    "NOC": "CZE",
    "Medal": "Gold",
    "count": 5,
    "AgeAverage": 24.4,
    "HeightMin": 171,
    "HeightMax": 175
  },
  {
    "Sex": "M",
    "NOC": "CRO",
    "Medal": "Bronze",
    "count": 1,
    "AgeAverage": 22,
    "HeightMin": 181,
    "HeightMax": 181
  },
  {
    "Sex": "F",
    "NOC": "PRK",
    "Medal": "Bronze",
    "count": 1,
    "AgeAverage": 19,
    "HeightMin": 157,
    "HeightMax": 157
  },
  {
    "Sex": "F",
    "NOC": "NED",
    "Medal": "Bronze",
    "count": 10,
    "AgeAverage": 27.8,
    "HeightMin": 167,
    "HeightMax": 182
  },
  {
    "Sex": "M",
    "NOC": "AUT",
    "Medal": "Bronze",
    "count": 63,
    "AgeAverage": 26.413,
    "HeightMin": 167,
    "HeightMax": 193
  },
  {
    "Sex": "F",
    "NOC": "AUS",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 27,
    "HeightMin": 161,
    "HeightMax": 161
  },
  {
    "Sex": "M",
    "NOC": "GBR",
    "Medal": "Gold",
    "count": 11,
    "AgeAverage": 24.364,
    "HeightMin": 165,
    "HeightMax": 183
  },
  {
    "Sex": "F",
    "NOC": "BLR",
    "Medal": "Bronze",
    "count": 2,
    "AgeAverage": 25.5,
    "HeightMin": 160,
    "HeightMax": 168
  },
  {
    "Sex": "F",
    "NOC": "RUS",
    "Medal": "Bronze",
    "count": 28,
    "AgeAverage": 27,
    "HeightMin": 158,
    "HeightMax": 178
  },
  {
    "Sex": "F",
    "NOC": "POL",
    "Medal": "Bronze",
    "count": 6,
    "AgeAverage": 25.167,
    "HeightMin": 159,
    "HeightMax": 173
  },
  {
    "Sex": "F",
    "NOC": "FIN",
    "Medal": "Bronze",
    "count": 68,
    "AgeAverage": 25.765,
    "HeightMin": 157,
    "HeightMax": 186
  },
  {
    "Sex": "F",
    "NOC": "GBR",
    "Medal": "Bronze",
    "count": 7,
    "AgeAverage": 27.429,
    "HeightMin": 160,
    "HeightMax": 173
  },
  {
    "Sex": "F",
    "NOC": "JPN",
    "Medal": "Silver",
    "count": 6,
    "AgeAverage": 25.333,
    "HeightMin": 145,
    "HeightMax": 165
  },
  {
    "Sex": "M",
    "NOC": "KOR",
    "Medal": "Silver",
    "count": 18,
    "AgeAverage": 20.556,
    "HeightMin": 164,
    "HeightMax": 181
  },
  {
    "Sex": "F",
    "NOC": "UKR",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 25,
    "HeightMin": 162,
    "HeightMax": 162
  },
  {
    "Sex": "F",
    "NOC": "EUN",
    "Medal": "Silver",
    "count": 5,
    "AgeAverage": 23.4,
    "HeightMin": 158,
    "HeightMax": 167
  },
  {
    "Sex": "F",
    "NOC": "CHN",
    "Medal": "Silver",
    "count": 22,
    "AgeAverage": 22.864,
    "HeightMin": 158,
    "HeightMax": 171
  },
  {
    "Sex": "F",
    "NOC": "RUS",
    "Medal": "Gold",
    "count": 43,
    "AgeAverage": 27.698,
    "HeightMin": 154,
    "HeightMax": 176
  },
  {
    "Sex": "F",
    "NOC": "NOR",
    "Medal": "Bronze",
    "count": 29,
    "AgeAverage": 26.483,
    "HeightMin": 160,
    "HeightMax": 177
  },
  {
    "Sex": "M",
    "NOC": "CHN",
    "Medal": "Bronze",
    "count": 18,
    "AgeAverage": 21.944,
    "HeightMin": 173,
    "HeightMax": 182
  },
  {
    "Sex": "F",
    "NOC": "GER",
    "Medal": "Silver",
    "count": 63,
    "AgeAverage": 26.222,
    "HeightMin": 158,
    "HeightMax": 187
  },
  {
    "Sex": "F",
    "NOC": "LIE",
    "Medal": "Gold",
    "count": 2,
    "AgeAverage": 23,
    "HeightMin": 165,
    "HeightMax": 165
  },
  {
    "Sex": "M",
    "NOC": "URS",
    "Medal": "Bronze",
    "count": 48,
    "AgeAverage": 25.479,
    "HeightMin": 162,
    "HeightMax": 189
  },
  {
    "Sex": "F",
    "NOC": "URS",
    "Medal": "Bronze",
    "count": 23,
    "AgeAverage": 27,
    "HeightMin": 159,
    "HeightMax": 176
  },
  {
    "Sex": "M",
    "NOC": "CAN",
    "Medal": "Silver",
    "count": 108,
    "AgeAverage": 25.667,
    "HeightMin": 165,
    "HeightMax": 196
  },
  {
    "Sex": "M",
    "NOC": "EST",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 31,
    "HeightMin": 182,
    "HeightMax": 182
  },
  {
    "Sex": "M",
    "NOC": "RUS",
    "Medal": "Bronze",
    "count": 47,
    "AgeAverage": 27.404,
    "HeightMin": 168,
    "HeightMax": 195
  },
  {
    "Sex": "M",
    "NOC": "FRG",
    "Medal": "Gold",
    "count": 11,
    "AgeAverage": 25.273,
    "HeightMin": 169,
    "HeightMax": 191
  },
  {
    "Sex": "F",
    "NOC": "HUN",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 24,
    "HeightMin": 162,
    "HeightMax": 162
  },
  {
    "Sex": "F",
    "NOC": "NOR",
    "Medal": "Gold",
    "count": 24,
    "AgeAverage": 26.292,
    "HeightMin": 155,
    "HeightMax": 176
  },
  {
    "Sex": "M",
    "NOC": "SWE",
    "Medal": "Silver",
    "count": 55,
    "AgeAverage": 27.291,
    "HeightMin": 172,
    "HeightMax": 195
  },
  {
    "Sex": "M",
    "NOC": "SWE",
    "Medal": "Gold",
    "count": 88,
    "AgeAverage": 27.216,
    "HeightMin": 163,
    "HeightMax": 194
  },
  {
    "Sex": "M",
    "NOC": "TCH",
    "Medal": "Bronze",
    "count": 66,
    "AgeAverage": 25.318,
    "HeightMin": 165,
    "HeightMax": 190
  },
  {
    "Sex": "F",
    "NOC": "CZE",
    "Medal": "Silver",
    "count": 8,
    "AgeAverage": 26.375,
    "HeightMin": 166,
    "HeightMax": 175
  },
  {
    "Sex": "M",
    "NOC": "JPN",
    "Medal": "Gold",
    "count": 14,
    "AgeAverage": 24.429,
    "HeightMin": 162,
    "HeightMax": 175
  },
  {
    "Sex": "M",
    "NOC": "FRG",
    "Medal": "Silver",
    "count": 17,
    "AgeAverage": 27.706,
    "HeightMin": 172,
    "HeightMax": 188
  },
  {
    "Sex": "F",
    "NOC": "CHN",
    "Medal": "Gold",
    "count": 14,
    "AgeAverage": 23.214,
    "HeightMin": 160,
    "HeightMax": 174
  },
  {
    "Sex": "F",
    "NOC": "SLO",
    "Medal": "Silver",
    "count": 2,
    "AgeAverage": 26,
    "HeightMin": 172,
    "HeightMax": 172
  },
  {
    "Sex": "M",
    "NOC": "FRA",
    "Medal": "Bronze",
    "count": 43,
    "AgeAverage": 26.023,
    "HeightMin": 167,
    "HeightMax": 198
  },
  {
    "Sex": "F",
    "NOC": "EST",
    "Medal": "Gold",
    "count": 2,
    "AgeAverage": 28,
    "HeightMin": 168,
    "HeightMax": 168
  },
  {
    "Sex": "F",
    "NOC": "GDR",
    "Medal": "Bronze",
    "count": 17,
    "AgeAverage": 21.765,
    "HeightMin": 157,
    "HeightMax": 180
  },
  {
    "Sex": "F",
    "NOC": "PRK",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 22,
    "HeightMin": 170,
    "HeightMax": 170
  },
  {
    "Sex": "F",
    "NOC": "ITA",
    "Medal": "Bronze",
    "count": 38,
    "AgeAverage": 26.211,
    "HeightMin": 154,
    "HeightMax": 173
  },
  {
    "Sex": "M",
    "NOC": "CRO",
    "Medal": "Silver",
    "count": 4,
    "AgeAverage": 30,
    "HeightMin": 182,
    "HeightMax": 182
  },
  {
    "Sex": "M",
    "NOC": "JPN",
    "Medal": "Silver",
    "count": 16,
    "AgeAverage": 24.313,
    "HeightMin": 160,
    "HeightMax": 180
  },
  {
    "Sex": "M",
    "NOC": "AUT",
    "Medal": "Silver",
    "count": 56,
    "AgeAverage": 26.018,
    "HeightMin": 167,
    "HeightMax": 193
  },
  {
    "Sex": "M",
    "NOC": "BLR",
    "Medal": "Bronze",
    "count": 3,
    "AgeAverage": 21.667,
    "HeightMin": 170,
    "HeightMax": 187
  },
  {
    "Sex": "M",
    "NOC": "GBR",
    "Medal": "Silver",
    "count": 4,
    "AgeAverage": 27.25,
    "HeightMin": 171,
    "HeightMax": 184
  },
  {
    "Sex": "F",
    "NOC": "GBR",
    "Medal": "Gold",
    "count": 8,
    "AgeAverage": 29.625,
    "HeightMin": 160,
    "HeightMax": 173
  },
  {
    "Sex": "F",
    "NOC": "AUS",
    "Medal": "Gold",
    "count": 3,
    "AgeAverage": 26,
    "HeightMin": 157,
    "HeightMax": 161
  },
  {
    "Sex": "M",
    "NOC": "AUT",
    "Medal": "Gold",
    "count": 47,
    "AgeAverage": 26.021,
    "HeightMin": 167,
    "HeightMax": 195
  },
  {
    "Sex": "M",
    "NOC": "ESP",
    "Medal": "Gold",
    "count": 1,
    "AgeAverage": 21,
    "HeightMin": 171,
    "HeightMax": 171
  },
  {
    "Sex": "M",
    "NOC": "KOR",
    "Medal": "Bronze",
    "count": 3,
    "AgeAverage": 22,
    "HeightMin": 170,
    "HeightMax": 176
  },
  {
    "Sex": "M",
    "NOC": "SVK",
    "Medal": "Bronze",
    "count": 1,
    "AgeAverage": 32,
    "HeightMin": 172,
    "HeightMax": 172
  },
  {
    "Sex": "F",
    "NOC": "GER",
    "Medal": "Gold",
    "count": 59,
    "AgeAverage": 26.305,
    "HeightMin": 159,
    "HeightMax": 183
  },
  {
    "Sex": "F",
    "NOC": "SUI",
    "Medal": "Gold",
    "count": 12,
    "AgeAverage": 24.667,
    "HeightMin": 163,
    "HeightMax": 183
  },
  {
    "Sex": "F",
    "NOC": "RUS",
    "Medal": "Silver",
    "count": 26,
    "AgeAverage": 25.923,
    "HeightMin": 154,
    "HeightMax": 180
  },
  {
    "Sex": "M",
    "NOC": "ITA",
    "Medal": "Bronze",
    "count": 35,
    "AgeAverage": 28.543,
    "HeightMin": 165,
    "HeightMax": 189
  },
  {
    "Sex": "F",
    "NOC": "JPN",
    "Medal": "Gold",
    "count": 2,
    "AgeAverage": 22.5,
    "HeightMin": 164,
    "HeightMax": 166
  },
  {
    "Sex": "F",
    "NOC": "EUN",
    "Medal": "Gold",
    "count": 9,
    "AgeAverage": 26.222,
    "HeightMin": 159,
    "HeightMax": 167
  },
  {
    "Sex": "F",
    "NOC": "UKR",
    "Medal": "Gold",
    "count": 5,
    "AgeAverage": 24.4,
    "HeightMin": 159,
    "HeightMax": 176
  },
  {
    "Sex": "M",
    "NOC": "KOR",
    "Medal": "Gold",
    "count": 16,
    "AgeAverage": 21.5,
    "HeightMin": 168,
    "HeightMax": 180
  },
  {
    "Sex": "F",
    "NOC": "SUI",
    "Medal": "Silver",
    "count": 16,
    "AgeAverage": 27.063,
    "HeightMin": 162,
    "HeightMax": 179
  },
  {
    "Sex": "M",
    "NOC": "ROU",
    "Medal": "Bronze",
    "count": 2,
    "AgeAverage": 29.5,
    "HeightMin": 172,
    "HeightMax": 177
  },
  {
    "Sex": "F",
    "NOC": "GER",
    "Medal": "Bronze",
    "count": 40,
    "AgeAverage": 26.475,
    "HeightMin": 150,
    "HeightMax": 187
  },
  {
    "Sex": "F",
    "NOC": "SLO",
    "Medal": "Bronze",
    "count": 5,
    "AgeAverage": 25.4,
    "HeightMin": 164,
    "HeightMax": 176
  },
  {
    "Sex": "F",
    "NOC": "FIN",
    "Medal": "Gold",
    "count": 11,
    "AgeAverage": 27.455,
    "HeightMin": 157,
    "HeightMax": 176
  },
  {
    "Sex": "F",
    "NOC": "TCH",
    "Medal": "Bronze",
    "count": 5,
    "AgeAverage": 22.2,
    "HeightMin": 153,
    "HeightMax": 172
  },
  {
    "Sex": "M",
    "NOC": "POL",
    "Medal": "Gold",
    "count": 4,
    "AgeAverage": 25,
    "HeightMin": 165,
    "HeightMax": 183
  },
  {
    "Sex": "M",
    "NOC": "KAZ",
    "Medal": "Silver",
    "count": 2,
    "AgeAverage": 29,
    "HeightMin": 185,
    "HeightMax": 185
  },
  {
    "Sex": "F",
    "NOC": "JPN",
    "Medal": "Bronze",
    "count": 5,
    "AgeAverage": 25.2,
    "HeightMin": 156,
    "HeightMax": 166
  },
  {
    "Sex": "F",
    "NOC": "URS",
    "Medal": "Silver",
    "count": 28,
    "AgeAverage": 26.536,
    "HeightMin": 154,
    "HeightMax": 176
  },
  {
    "Sex": "F",
    "NOC": "EUN",
    "Medal": "Bronze",
    "count": 13,
    "AgeAverage": 23.692,
    "HeightMin": 160,
    "HeightMax": 176
  },
  {
    "Sex": "M",
    "NOC": "GER",
    "Medal": "Gold",
    "count": 81,
    "AgeAverage": 26.679,
    "HeightMin": 167,
    "HeightMax": 200
  },
  {
    "Sex": "M",
    "NOC": "UKR",
    "Medal": "Bronze",
    "count": 1,
    "AgeAverage": 33,
    "HeightMin": 185,
    "HeightMax": 185
  },
  {
    "Sex": "F",
    "NOC": "NOR",
    "Medal": "Silver",
    "count": 34,
    "AgeAverage": 27.5,
    "HeightMin": 166,
    "HeightMax": 179
  },
  {
    "Sex": "M",
    "NOC": "HUN",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 26,
    "HeightMin": 188,
    "HeightMax": 188
  },
  {
    "Sex": "M",
    "NOC": "FRG",
    "Medal": "Bronze",
    "count": 40,
    "AgeAverage": 26.525,
    "HeightMin": 170,
    "HeightMax": 190
  },
  {
    "Sex": "M",
    "NOC": "FRA",
    "Medal": "Silver",
    "count": 16,
    "AgeAverage": 26.063,
    "HeightMin": 168,
    "HeightMax": 186
  },
  {
    "Sex": "M",
    "NOC": "CAN",
    "Medal": "Gold",
    "count": 127,
    "AgeAverage": 27.512,
    "HeightMin": 155,
    "HeightMax": 198
  },
  {
    "Sex": "M",
    "NOC": "SLO",
    "Medal": "Silver",
    "count": 2,
    "AgeAverage": 25,
    "HeightMin": 169,
    "HeightMax": 184
  },
  {
    "Sex": "M",
    "NOC": "AUS",
    "Medal": "Bronze",
    "count": 3,
    "AgeAverage": 22.333,
    "HeightMin": 174,
    "HeightMax": 178
  },
  {
    "Sex": "F",
    "NOC": "URS",
    "Medal": "Gold",
    "count": 41,
    "AgeAverage": 25.366,
    "HeightMin": 152,
    "HeightMax": 176
  },
  {
    "Sex": "F",
    "NOC": "LIE",
    "Medal": "Silver",
    "count": 1,
    "AgeAverage": 23,
    "HeightMin": 165,
    "HeightMax": 165
  },
  {
    "Sex": "M",
    "NOC": "RUS",
    "Medal": "Gold",
    "count": 42,
    "AgeAverage": 27.214,
    "HeightMin": 168,
    "HeightMax": 195
  },
  {
    "Sex": "F",
    "NOC": "CAN",
    "Medal": "Bronze",
    "count": 39,
    "AgeAverage": 27.795,
    "HeightMin": 150,
    "HeightMax": 180
  },
  {
    "Sex": "F",
    "NOC": "FRG",
    "Medal": "Gold",
    "count": 4,
    "AgeAverage": 22.5,
    "HeightMin": 159,
    "HeightMax": 173
  },
  {
    "Sex": "F",
    "NOC": "ITA",
    "Medal": "Silver",
    "count": 9,
    "AgeAverage": 27,
    "HeightMin": 158,
    "HeightMax": 171
  },
  {
    "Sex": "M",
    "NOC": "YUG",
    "Medal": "Bronze",
    "count": 1,
    "AgeAverage": 22,
    "HeightMin": 181,
    "HeightMax": 181
  },
  {
    "Sex": "M",
    "NOC": "EST",
    "Medal": "Gold",
    "count": 2,
    "AgeAverage": 33,
    "HeightMin": 182,
    "HeightMax": 182
  },
  {
    "Sex": "M",
    "NOC": "JPN",
    "Medal": "Bronze",
    "count": 19,
    "AgeAverage": 24.842,
    "HeightMin": 162,
    "HeightMax": 181
  },
  {
    "Sex": "M",
    "NOC": "GDR",
    "Medal": "Gold",
    "count": 40,
    "AgeAverage": 25.325,
    "HeightMin": 166,
    "HeightMax": 192
  }
];