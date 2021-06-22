# Kataw parser test case

## Input

`````js
for ([{x=y}]=x of x) ;
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 301,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 7,
                                                "end": 8
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "flags": 32,
                                            "start": 7,
                                            "end": 10
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 7,
                                    "end": 10
                                },
                                "flags": 48,
                                "start": 6,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 6,
                        "end": 11
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 12,
                    "end": 13
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 13,
                    "end": 14
                },
                "flags": 32,
                "start": 5,
                "end": 14
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 14,
                "end": 17
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 17,
                "end": 19
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 20,
                "end": 22
            },
            "flags": 80,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "for ([{x=y}]=x of x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

for ([{ x = y }] = x of x);
```

### Diagnostics

```javascript
✔ No errors
```

