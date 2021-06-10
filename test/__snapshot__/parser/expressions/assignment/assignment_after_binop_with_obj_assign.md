# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
for(x in(t&{}=y))x
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 4,
                "end": 5
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 5,
                "end": 8
            },
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "t",
                        "rawText": "t",
                        "flags": 96,
                        "start": 9,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 134252103,
                        "flags": 64,
                        "start": 10,
                        "end": 11
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 48,
                            "start": 11,
                            "end": 13
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 13,
                            "end": 14
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 15
                },
                "flags": 32,
                "start": 8,
                "end": 16
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 17,
                    "end": 18
                },
                "flags": 16,
                "start": 17,
                "end": 18
            },
            "flags": 80,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "for(x in(t&{}=y))x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

for (x in (t => {} = y))
  x;
```

### Diagnostics

```javascript
✔ No errors
```

