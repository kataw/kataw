# Kataw parser test case

## Input

`````js
[a, {b:d}, c] = obj
`````

## Output

### Hybrid CST

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
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 768,
                                                "start": 7,
                                                "end": 8
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 5,
                                                "end": 6
                                            },
                                            "flags": 256,
                                            "start": 5,
                                            "end": 8
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 5,
                                    "end": 8
                                },
                                "flags": 256,
                                "start": 3,
                                "end": 9
                            },
                            {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 768,
                                "start": 10,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 13,
                    "start": 512,
                    "end": 15
                },
                "right": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 768,
                    "start": 15,
                    "end": 19
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "[a, {b:d}, c] = obj",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

