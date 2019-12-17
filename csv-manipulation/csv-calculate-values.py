# A script to help you with manipulating CSV-files. This is especially necessary when dealing with 
# CSVs that have more than 65536 lines because those can not (yet) be opened in Excel or Numbers.
# This script works with the example wintergames_winners.csv, which is an excerpt from 
# https://www.kaggle.com/heesoo37/120-years-of-olympic-history-athletes-and-results/#athlete_events.csv


# This script helps to CALCULATE with values in the CSV.
#
# Usage:
#     - Adjust filenames and delimiters.
#     - Write your calculation in the section below. You can do anything that python is able to do.



from __future__ import print_function
import math


# ---------------------------------------------
# Change the parameters according to your task:

# Give the name of the CSV file you want to cumulate 
readFileName = 'wintergames_winners.csv'                      # <--- Adjust here
# The result will be a new CSV file:
writeFileName = 'wintergames_winners_calculate.csv'           # <--- Adjust here (has to be different than readFileName)

# What delimiter is used in your CSV? Usually ',' or ';'
readDelimiter = ';'                                           # <--- Adjust here (have a look in your source CSV)
# You can give a different delimiter for the result.
writeDelimiter = ';'                                          # <--- Adjust here (';' is usually good)

# ----------------------------------------------


import csv
from collections import OrderedDict


readFile = open(readFileName)
reader = csv.DictReader(readFile, delimiter=readDelimiter)

writeFile = open(writeFileName, 'w')
writer = csv.writer(writeFile, delimiter=writeDelimiter)

# This writes the field names to the result.csv
writer.writerow(reader.fieldnames)

rows = list(reader)
perc = 0
for i, row in enumerate(rows):
  if float(i) / len(rows) > perc:
    print('#', end='')
    perc = perc + 0.01

  # ----------------------------------------------
  # Write your calculations from here on ...                  # <--- Adjust here

  # example: take Height and divide it by 100
  row['Height'] = float(row['Height']) / 100

  # ... to here
  # ----------------------------------------------

  sorted_row = OrderedDict(sorted(row.items(), key=lambda item: reader.fieldnames.index(item[0])))
  writer.writerow(sorted_row.values())

print('')