# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
[...import.meta] = [];
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
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 1,
                                    "start": 0,
                                    "end": 4
                                },
                                "argument": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 207,
                                        "importKeyword": {
                                            "kind": 37814364,
                                            "flags": 4,
                                            "start": 0,
                                            "end": 10
                                        },
                                        "flags": 10,
                                        "start": 768,
                                        "end": 15
                                    },
                                    "flags": 128,
                                    "start": 10,
                                    "end": 15
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 15
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 16,
                    "start": 512,
                    "end": 18
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 20,
                        "end": 20
                    },
                    "flags": 256,
                    "start": 18,
                    "end": 21
                },
                "flags": 256,
                "start": 0,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": true,
    "text": "[...import.meta] = [];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 16, end: 18

```

