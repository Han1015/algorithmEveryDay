#!/bin/sh
# echo $1

name=''
for i in "$@"; do
    string=$i
    string=`echo $string | tr '.' '-'`
    first=`echo $string|cut -c1|tr [a-z] [A-Z]`
    second=`echo $string|cut -c2-`
    name="$name$first$second"  
done
mkdir $name
touch $name/code.py
touch $name/idea.md
echo $name

# string="abcd"
# first=`echo $string|cut -c1|tr [a-z] [A-Z]`
# second=`echo $string|cut -c2-`
# echo $first$second