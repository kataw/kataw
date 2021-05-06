# Kataw parser test case

## Input

`````js
[{x = y}.z] = obj
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 205,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 2,
                                                    "end": 3
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 5,
                                                    "end": 7
                                                },
                                                "flags": 32,
                                                "start": 2,
                                                "end": 7
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 2,
                                        "end": 7
                                    },
                                    "flags": 32,
                                    "start": 1,
                                    "end": 8
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 10
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 10
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 11,
                    "end": 13
                },
                "right": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 96,
                    "start": 13,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "[{x = y}.z] = obj",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 8, end: 9

```

