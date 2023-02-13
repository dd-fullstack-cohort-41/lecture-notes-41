## Data-Design to SQL Vocab
* Entity -> Table
* Attributes -> Columns 

## Why value definitions
TLDR with SQL we can being millions to trillions of records
https://connor-mcdonald.com/2021/11/13/when-does-a-table-become-too-big/

## When to use ints/floats vs strings/chars
* Int/float should be used for mathematical operations. Strings should be used for everything else

## When to use Char vs Varchar
* USe char when the system is defining the value or it must be an exact length(very rare)
* Yse Varchar when the end user is the defining the value

# Integer data types 
https://www.postgresql.org/docs/current/datatype-numeric.html
