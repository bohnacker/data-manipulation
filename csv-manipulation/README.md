# Manipulate CSVs with Python

These scripts might help you if you have a large CSV file that is to slow to work with in common applications. 

The scripts are designed to do just on simple task at once. So, you'll probably need to use more than one of them to prepare your CSV table.

See the comments in the scripts for detailed usage guides.

All scripts should work with Python 2 and 3.

### csv-delete-columns.py
This script deletes columns from the CSV.

### csv-add-columns.py
This script adds columns to the CSV and fills it with Zeroes. Use csv-calculate-values.py 
to fill it with more usefull values. 

### csv-calculate-values.py
Use this, if you want to modify the values of one ore more columns in your CSV. You can script any modification you want.

### csv-filter.py
This script filters rows from the CSV according to any condition you give. 

### csv-merge.py
With this, you can merge two CSVs giving the names of the columns. It will try to match the values and copies some or all columns from the second CSV to the first. As an example, this is useful if you want to copy longitude and latitude information to a CSV that has country names or codes but no geolocation attached.

### csv-cumulate.py
Cumulation means to find all rows that have the same values in one or more columns. All these rows will be cumulated into one line by using one of the following calculation methods: 'Sum', 'Average', 'Min', 'Max', 'Mode', 'Median', 'Percentile'.