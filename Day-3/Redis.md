# PUB / SUBS & STREAMS IN REDIS

## SUBSCRIBE & PUBLISH

SUBSCRIBER : who accepts the message

> how to subscribe

```
SUBSCRIBE <channel>
SUBSCRIBE devsnest
```

PUBLISHER : who sends the message

> how to publish

```
PUBLISH <channel> <message>
PUBLISH devsnest hello
```

> unsubscribe channel

```
UNSUBSCRIBE <channel>
UNSUBSCRIBE devsnest
```

> subscribe channel with specific pattern

```
PSUBSCRIBE <pattern>
eg - PSUBSCRIBE d*       // it will subscribe all channels starting with 'd'
```

> unsubscribe channel with specific pattern

```
PUNSUBSCRIBE <pattern>
eg - PUNSUBSCRIBE d*
```

- <i> A publisher can have n number of subscribers </i>

### !! Above commands can be used between two channels and no history is saved !!

<hr>

## STREAMS

### !! To save history of messages, we use stream !!

> adding values in stream

```
- XADD <name/key> <id> <field> <value>
* XADD mystream 10000 name Dee
```

```
- XADD <name/key> < * -> id is default (timestamp)> <field> <value>
* XADD mystream * name Rock
```

```
- XADD <name/key> <max length> <max length count> <id> <field> <value>
* XADD mystream MAXLEN 10000 * name Rik
```

> reading values in stream

```
- XREAD COUNT <count number> STREAMS <name/key> index(0)
* XREAD COUNT 100 STREAMS mystream 0
```

```
- XREAD COUNT <count numbers> STREAMS <name/key> <id>
* XREAD COUNT 100 STREAMS mystream 10001
```

> creating publish subscribe like env in streams

### (SUBSCRIBE)

```
- XREAD BLOCK <milliseconds> STREAMS <name/key> $
* XREAD BLOCK 20000 STREAMS mystream $
```

- this will create the socket for 20s and wait for the publisher to send any message

### (PUBLISH)

```
- XADD <name/key> <id> <field> <value>
* XADD mystream * name Deepak
```

> displaying streams within a range

```
- XRANGE <name/key> <start id> <end id>
* XRANGE mystream 10001-0 1630776428611-0
```

> displaying streams within a range with limit

```
- XRANGE <name/key> <start id> <end id> COUNT <count>
* XRANGE mystream 10001-0 1630776428611-0 COUNT 5
```

- below is useful when you don't know the id

> displaying all values using XRANGE

```
* XRANGE mystream - +
```

> displaying values with limit using XRANGE

```
* XRANGE mystream - + COUNT 5
```

> display streams in reverse order

```
* XREVRANGE mystream + -
```

> display stream in reverse order with a limit

```
* XREVRANGE mystream + - COUNT 4
```