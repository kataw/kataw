# Kataw parser test case

## Input

`````js
([x].foo, [x].foo) = x;
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
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 2,
                                                "end": 3
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "flags": 256,
                                    "start": 1,
                                    "end": 4
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 5,
                                    "end": 8
                                },
                                "flags": 256,
                                "start": 0,
                                "end": 8
                            },
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 11,
                                                "end": 12
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "flags": 256,
                                    "start": 9,
                                    "end": 13
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 14,
                                    "end": 17
                                },
                                "flags": 256,
                                "start": 0,
                                "end": 17
                            }
                        ],
                        "flags": 256,
                        "start": 0,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 20,
                    "end": 22
                },
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "([x].foo, [x].foo) = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 18, end: 20

```

