# Kataw parser test case

## Input

`````js
[{} = 2/=2]
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
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 2,
                                    "end": 2
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 3
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 3,
                                "start": 512,
                                "end": 5
                            },
                            "right": {
                                "kind": 125,
                                "left": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 768,
                                    "start": 5,
                                    "end": 7
                                },
                                "operatorToken": {
                                    "kind": 4133,
                                    "flags": 7,
                                    "start": 512,
                                    "end": 9
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 768,
                                    "start": 9,
                                    "end": 10
                                },
                                "flags": 256,
                                "start": 5,
                                "end": 10
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 10
                },
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "[{} = 2/=2]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 7, end: 9

```

