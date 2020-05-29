from __future__ import print_function

# A script to help you with manipulating CSV-files. This is especially necessary when dealing with 
# CSVs that have more than 65536 lines because those can not (yet) be opened in Excel or Numbers.
# This script works with two files from ourworldindata.org:
# https://ourworldindata.org/age-structure and https://ourworldindata.org/gender-ratio

# This script MERGES two CSVs.

#
# Usage:
#     - Adjust filenames and delimiters.
#     - Variable matchColumns: names of the matching columns in the first CSV 
#     - Variable withColumns: names of the matching columns in the second CSV 
#     - Variable copyColumns: which columns from the second CSV should be copied
#           to the first. If copyColumns is [], it copies all cloumns except 
#           what's defined in the variable 'withColumn'
#       Examples:
#       copyColums = ['latitude', 'longitude']    Will copy those two columns
#       copyColums = []                           Will copy all columns


# ---------------------------------------------
# Change the parameters according to your task:

# Give the name of the CSV file where you want to add columns
readFileName1 = 'worlddata-median-age.csv'                          # <--- Adjust here
# What delimiter is used in this CSV? Usually ',' or ';'
readDelimiter1 = ','                                                # <--- Adjust here (have a look in your source CSV)

# Give the name of the CSV file that gives additional values
readFileName2 = 'worlddata-share-population-female.csv'             # <--- Adjust here
# What delimiter is used in this CSV? Usually ',' or ';'
readDelimiter2 = ','                                                # <--- Adjust here (have a look in your source CSV)

# The result will be a new CSV file:
writeFileName = 'worlddata_merged.csv'                              # <--- Adjust here (has to be different than readFileName1)
# You can give a different delimiter for the result.
writeDelimiter = ','                                                # <--- Adjust here (';' is usually good)

matchColumns = ['Code', 'Year']                                     # <--- Adjust here
withColumns = ['Code', 'Year']                                      # <--- Adjust here
copyColumns = ['PercentFemale']                                     # <--- Adjust here


# # Second example for merging longitude/latitude data to a file with countries
# readFileName1 = 'wintergames_winners.csv'
# readDelimiter1 = ';'
# readFileName2 = 'longitude-latitude.csv'
# readDelimiter2 = ','
# writeFileName = 'wintergame_winners_merged.csv'
# writeDelimiter = ';'
# matchColumns = ['NOC']
# withColumns = ['IOC']
# copyColumns = ['latitude', 'longitude']



# ----------------------------------------------
# No need to change anything from here on ...

import csv
from collections import OrderedDict


readFile1 = open(readFileName1)
reader1 = csv.DictReader(readFile1, delimiter=readDelimiter1)
rows1 = list(reader1)

readFile2 = open(readFileName2)
reader2 = csv.DictReader(readFile2, delimiter=readDelimiter2)
rows2 = list(reader2)

writeFile = open(writeFileName, 'w')
writer = csv.writer(writeFile, delimiter=writeDelimiter)


# This writes the field names to the result.csv
headings1 = list(reader1.fieldnames) 
if copyColumns == []:
  copyColumns = list(filter(lambda x: x != withColumn, reader.fieldnames))

writer.writerow(headings1 + copyColumns)

# create dict from second csv to speed up finding stuff
print('Preparing merge')
print('----------------------')
dic = {}
unique = True
for row in rows2:
  key = tuple(row[x] for x in withColumns)
  # for col in withColumns:
  #   key = key + row[col] + '__'

  if key != '':
    if key in dic:
      unique = False
    else:
      dic[key] = row

if (not unique):
  print('Warning: The columns "%s" in the second CSV has duplicate values which could result in incorrect matching.' % withColumns)
  print('----------------------')

print('Merging')
failed = []
numRows = 0
perc = 0
for i, row in enumerate(rows1):
  if float(i) / len(rows1) > perc:
    print('#', end='')
    perc = perc + 0.01

  values = []
  val = tuple(row[x] for x in matchColumns)
  # for col in matchColumns:
  #   val = val + row[col] + '__'


  for key in headings1:
    values.append(row[key])
  for key in copyColumns:
    try:
      values.append(dic[val][key])
    except:
      if (not val in failed):
        failed.append(val)

  writer.writerow(values)

print('\n----------------------')
print('%d value(s) could not be found in the second CSV, so matching was not possible for every row.' % len(failed))
print("These values couldn't be matched:")
print(failed[:100])
if (len(failed) > 100):
  print('... and %d more' % (len(failed) - 100))




