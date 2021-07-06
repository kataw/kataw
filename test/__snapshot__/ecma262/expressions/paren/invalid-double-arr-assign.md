# Kataw parser test case

## Input

`````js
([x].foo, [x].foo) = x;
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
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 2,
                                                "end": 3
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "flags": 32,
                                    "transformFlags": 8,
                                    "start": 1,
                                    "end": 4
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 8
                                },
                                "flags": 32,
                                "transformFlags": 2,
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
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 12
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "flags": 32,
                                    "transformFlags": 8,
                                    "start": 9,
                                    "end": 13
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 17
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 0,
                                "end": 17
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 0,
                        "end": 18
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 22
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "([x].foo, [x].foo) = x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 18, end: 20

```

