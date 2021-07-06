# Kataw parser test case

## Input

`````js
async({a=1}. {b=2}, {c=3} = {}))
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 129,
                        "member": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 301,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 10
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 6,
                            "end": 11
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 48,
                        "transformFlags": 2,
                        "start": 6,
                        "end": 12
                    },
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 15
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 17
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 17
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 12,
                        "end": 18
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 301,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 24
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 19,
                            "end": 25
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 27
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 29
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 27,
                            "end": 30
                        },
                        "flags": 32,
                        "transformFlags": 128,
                        "start": 19,
                        "end": 30
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 0
            },
            "flags": 268435490,
            "transformFlags": 1,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "async({a=1}. {b=2}, {c=3} = {}))",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 11, end: 12
✖ Dot property must be an identifier - start: 12, end: 14
✖ Declaration or statement expected - start: 31, end: 32

```

