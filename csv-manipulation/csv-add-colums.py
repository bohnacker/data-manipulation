# A script to help you with manipulating CSV-files. This is especially necessary when dealing with 
# CSVs that have more than 65536 lines because those can not (yet) be opened in Excel or Numbers.
# This script works with the example wintergames_winners.csv, which is an excerpt from 
# https://www.kaggle.com/heesoo37/120-years-of-olympic-history-athletes-and-results/#athlete_events.csv


# This script ADDS COLUMNS to the CSV and fills it with Zeroes. Use csv-calculate-values.py 
# to fill it with more usefull values. 
#
# Usage:
#     - Adjust filenames and delimiters.
#     - Variable addColumns: give the names of the columns you want to add 
#       Examples:
#       addColums = ['Bla', 'Blubb']         Will add those two columns



from __future__ import print_function


# ---------------------------------------------
# Change the parameters according to your task:

# Give the name of the CSV file you want to cumulate 
readFileName = 'wintergames_winners.csv'                      # <--- Adjust here
# The result will be a new CSV file:
writeFileName = 'wintergames_winners_additions.csv'           # <--- Adjust here (has to be different than readFileName)

# What delimiter is used in your CSV? Usually ',' or ';'
readDelimiter = ';'                                           # <--- Adjust here (have a look in your source CSV)
# You can give a different delimiter for the result.
writeDelimiter = ';'                                          # <--- Adjust here (';' is usually good)

# Adds one or more columns and fills them with 0
addColums = ['Bla', 'Blubb']                                  # <--- Adjust here 



# ----------------------------------------------
# No need to change anything from here on ...

import csv
from collections import OrderedDict


readFile = open(readFileName)
reader = csv.DictReader(readFile, delimiter=readDelimiter)

writeFile = open(writeFileName, 'w')
writer = csv.writer(writeFile, delimiter=writeDelimiter)



# This writes the field names to the result.csv
headings = list(reader.fieldnames)
for key in addColums:
  headings = headings + [key]

writer.writerow(headings)

rows = list(reader)
perc = 0
for i, row in enumerate(rows):
  if float(i) / len(rows) > perc:
    print('#', end='')
    perc = perc + 0.01

  for key in addColums:
    row[key] = 0

  values = []
  for key in headings:
    values.append(row[key])

  writer.writerow(values)

print('')