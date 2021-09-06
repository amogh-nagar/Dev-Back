## HOW TO START REDIS SERVER IN WSL :

Installing Redis :

```
> sudo apt-get update
> sudo apt-get upgrade
> sudo apt-get install redis-server
> redis-cli -v
```

Restart the Redis server to make sure it is running (!Important) :

```
> sudo service redis-server restart
```

Running Redis :

```
$ redis-cli
127.0.0.1:6379> set user:1 "Jane"
127.0.0.1:6379> get user:1
"Jane
```

<br>

## WHY WE USE REDIS :

To save key-val pair (JSON like object) in our local storage

<br>

## REDIS data storage structure Example :

```json
{
  "str": "xyz",
  "num": "34",
  "arr": ["val1", "val2", "val3", "valn"],
  "set": ["distinct1", "distinct2", "distinctn"],
  "obj": {
    "field1": "val1",
    "fieldn": "valn"
  }
}
```

## REDIS COMMANDS :

### `< GENERAL >`

```
PING "string" ==> to display msg

SET --key-- --value-- ==> sets value of json key
GET --key-- ==> displays value of particular key

EXISTS --key-- ==> displays 1 if it exists otherwise 0

DEL --key-- ==> deletes the key

KEYS * ==> displays all keys

FLUSHALL ==> delets all keys

EXPIRE --key-- --time(sec)-- ==> deletes particular existing key after t seconds

TTL --key-- ==> shows remaining time of key before expiration

// TTL : Time to live

SETEX --key-- --time-- --value-- ==> creates the key with value and expiration time t.
```

### `< ARRAYS >`

```
LPUSH --key-- --value(s)-- ==> adds element(s) in the arr key from left.

RPUSH --key-- --value(s)-- ==> adds element(s) in the arr key from right.

LPOP --key-- ==> deletes element from left.

RPOP --key-- ==> deletes element from right.

LRANGE --key-- --start index [0]-- --end index [-1]--  ==> displays every element in the key

// GET key can't be used in case of array because it operates on strings. So we use LRANGE //
```

### `< SETS >`

```
SADD --key-- --value(s)-- ==> adds elements in the set, can't push duplicate values.

SMEMBERS --key-- ==> displays all values
```

### `< OBJECTS >`

```
HSET --key-- --field-- --value-- ==> creates object key having field f with value v.

HGET --key-- --field-- ==> displays value of the field inside key

HDEL --key-- --field-- ==> delets the field

HGETALL --key-- ==> displays each field value pairs of the object key.

HEXISTS --key-- --field-- ==> to check the field exists or not

```