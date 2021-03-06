# A script to help you with manipulating CSV-files. This is especially necessary when dealing with 
# CSVs that have more than 65536 lines because those can not (yet) be opened in Excel or Numbers.
# This script works with the example wintergames_winners.csv, which is an excerpt from 
# https://www.kaggle.com/heesoo37/120-years-of-olympic-history-athletes-and-results/#athlete_events.csv


# This script CUMULATES rows from the CSV according to the operations you give below. 
#
# Usage:
#     - Adjust filenames, delimiters and decimal precision.
#     - Variable 'reduceTo': Names of the colums you want to reduce 
#     - Variable 'cumulate': Which calculation should be done with values 
#       Possible calculation methods:
#       'Sum', 'Average', 'Min', 'Max', 'Mode', 'Median'



from __future__ import print_function

# ---------------------------------------------
# Change the parameters according to your task:

# Give the name of the CSV file you want to cumulate 
readFileName = 'wintergames_winners.csv'                      # <--- Adjust here
# The result will be a new CSV file:
writeFileName = 'wintergames_winners_cumulated.csv'           # <--- Adjust here (has to be different than readFileName)

# What delimiter is used in your CSV? Usually ',' or ';'
readDelimiter = ';'                                           # <--- Adjust here (have a look in your source CSV)
# You can give a different delimiter for the result.
writeDelimiter = ';'                                          # <--- Adjust here (';' is usually good)

# Round numbers to how many decimals?
decimals = 3                                                  # <--- Adjust here

# Names of the colums you want to reduce (in the end there 
# will be only one line for each possible combination)
reduceTo = ['Sex', 'NOC', 'Medal']                            # <--- Adjust here

# Names of the colums you want to cumulate somehow 
# Possible calculations: Sum, Average, Min, Max, Mode, 
# Median, Percentile (needs 'p' as percentage)
# You can give custom titles for the resulting columns,
# otherwise value+method will be the title. 
cumulate = [
  {'value':'Age', 'method':'Average', 'title':'AgeAv'},       # <--- Adjust here
  {'value':'Sport', 'method':'Mode'},
  {'value':'Weight', 'method':'Percentile', 'p':0.25, 'title':'WeightQ1'},
  {'value':'Weight', 'method':'Median'},
  {'value':'Weight', 'method':'Percentile', 'p':0.75, 'title':'WeightQ3'},
  {'value':'Height', 'method':'Min'},
  {'value':'Height', 'method':'Max'},
]                                     


# ---------------------------------------------
# No need to change anything from here on ...

import sys
# print(sys.version)
import csv
from collections import OrderedDict
import math

def sortOnSecond(val): 
  return val[1]  

def mode(lst):
  lst_count = [(x, lst.count(x)) for x in set(lst)]
  lst_count.sort(key = sortOnSecond, reverse = True)
  # TODO: if there is more than one most common value, this returns just the first in the list
  return lst_count[0][0]  

def percentile(lst, p):
  try:
    lst_numeric = [float(x) for x in lst]
  except:
    print('Error: Median and Percentile can only be used on numeric values')
    exit()
  lst_numeric.sort()
  l = len(lst_numeric) - 1
  idx = l * p
  frac = math.modf(idx)[0]
  val0 = lst_numeric[int(math.floor(idx))]
  val1 = lst_numeric[int(math.ceil(idx))]
  res = val0 + (val1 - val0) * frac
  return res


readFile = open(readFileName)
reader = csv.DictReader(readFile, delimiter=readDelimiter)

writeFile = open(writeFileName, 'w')
writer = csv.writer(writeFile, delimiter=writeDelimiter)

# Prepare cumulate items 
for field in cumulate:
  if not 'title' in field:
    field['title'] = field['value'] + field['method']

# Collect all the rows in a dict
dic = {}
succ = 0;
err = 0
rows = list(reader)
perc = 0
for i, row in enumerate(rows):
  if float(i) / len(rows) > perc:
    print('#', end='')
    perc = perc + 0.01

  try:
    key = tuple(row[x] for x in reduceTo)

    if key in dic:
      c = dic[key]['count']

      for field in cumulate:
        name = field['title']
        if field['method'] == 'Sum':
          dic[key][name] += float(row[field['value']])
        elif field['method'] == 'Average':
          dic[key][name] = (dic[key][name] * c + float(row[field['value']])) / (c+1)
        elif field['method'] == 'Min':
          dic[key][name] = min(dic[key][name], float(row[field['value']]))
        elif field['method'] == 'Max':
          dic[key][name] = max(dic[key][name], float(row[field['value']]))
        elif field['method'] == 'Mode':
          dic[key][name].append(row[field['value']])
        elif field['method'] == 'Median':
          dic[key][name].append(row[field['value']])
        elif field['method'] == 'Percentile':
          dic[key][name].append(row[field['value']])

      dic[key]['count'] += 1

    else:
      newEntry = {'count':1}
      for field in cumulate:
        name = field['title']
        if field['method'] == 'Mode' or field['method'] == 'Median' or field['method'] == 'Percentile':
          newEntry[name] = [row[field['value']]]
        else:
          newEntry[name] = float(row[field['value']])

      dic[key] = newEntry

    succ += 1

  except:
    err += 1

print('\n%d entries cumulated' % (succ))
if err > 0:
  print(err, 'entries skipped, probably because of missing values')


# This writes the field names to the result.csv
headings = list(reduceTo)
headings.append('count')
for field in cumulate:
  name = field['title']
  headings.append(name)

writer.writerow(headings)

for key in dic:
  c = dic[key]['count']

  values = list(key)
  values.append(c)
  for field in cumulate:
    name = field['title']
    if field['method'] == 'Mode':
      val = mode(dic[key][name])
    elif field['method'] == 'Median':
      val = percentile(dic[key][name], 0.5)
    elif field['method'] == 'Percentile':
      val = percentile(dic[key][name], field['p'])
    else:      
      val = round(dic[key][name], decimals)

    values.append(val)

  writer.writerow(values)


# print(dic)