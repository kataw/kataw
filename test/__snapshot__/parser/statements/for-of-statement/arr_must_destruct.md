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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
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
                                            "kind": 205,
                                            "left": {
                                                "kind": 81921,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 7,
                                                "end": 8
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 768,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "flags": 256,
                                            "start": 7,
                                            "end": 10
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 7,
                                    "end": 10
                                },
                                "flags": 256,
                                "start": 6,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 6,
                        "end": 11
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 12,
                    "end": 13
                },
                "right": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 13,
                    "end": 14
                },
                "flags": 256,
                "start": 5,
                "end": 14
            },
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 17,
                "end": 19
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 20,
                "end": 22
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "for ([{x=y}]=x of x) ;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

