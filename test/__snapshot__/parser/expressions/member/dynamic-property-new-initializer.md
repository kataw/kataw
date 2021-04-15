# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
[new x()[y] = a + b] = z
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
                                "kind": 125,
                                "left": {
                                    "kind": 130,
                                    "member": {
                                        "kind": 210,
                                        "newKeyword": {
                                            "kind": 138477661,
                                            "flags": 768,
                                            "start": 1,
                                            "end": 4
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 4,
                                            "end": 6
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 7,
                                            "end": 7
                                        },
                                        "flags": 256,
                                        "start": 1,
                                        "end": 8
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "flags": 256,
                                    "start": 1,
                                    "end": 11
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 11,
                                    "end": 13
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 768,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "flags": 256,
                                    "start": 13,
                                    "end": 19
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 19
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 20
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 20,
                    "end": 22
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 768,
                    "start": 22,
                    "end": 24
                },
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "[new x()[y] = a + b] = z",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

