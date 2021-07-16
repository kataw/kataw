# Kataw parser test case

## Input

`````js
([delete /a/g.x]);

([delete /a/g.x], [delete /a/g.x]);
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
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "flags": 96,
                                    "transformFlags": 8192,
                                    "start": 2,
                                    "end": 8
                                },
                                "operand": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 371,
                                        "text": "/a/g",
                                        "rawText": "/a/g",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 13
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 15
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 8,
                                    "end": 15
                                },
                                "flags": 32,
                                "transformFlags": 16384,
                                "start": 2,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 15
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 16
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 126,
                                        "operandToken": {
                                            "kind": 4259886,
                                            "flags": 96,
                                            "transformFlags": 8192,
                                            "start": 22,
                                            "end": 28
                                        },
                                        "operand": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 371,
                                                "text": "/a/g",
                                                "rawText": "/a/g",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 33
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 35
                                            },
                                            "flags": 96,
                                            "transformFlags": 2,
                                            "start": 28,
                                            "end": 35
                                        },
                                        "flags": 32,
                                        "transformFlags": 16384,
                                        "start": 22,
                                        "end": 35
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 35
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 21,
                            "end": 36
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 126,
                                        "operandToken": {
                                            "kind": 4259886,
                                            "flags": 96,
                                            "transformFlags": 8192,
                                            "start": 39,
                                            "end": 45
                                        },
                                        "operand": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 371,
                                                "text": "/a/g",
                                                "rawText": "/a/g",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 45,
                                                "end": 50
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 51,
                                                "end": 52
                                            },
                                            "flags": 96,
                                            "transformFlags": 2,
                                            "start": 45,
                                            "end": 52
                                        },
                                        "flags": 32,
                                        "transformFlags": 16384,
                                        "start": 39,
                                        "end": 52
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 52
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 37,
                            "end": 53
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 18,
                    "end": 54
                },
                "flags": 18,
                "transformFlags": 0,
                "start": 35,
                "end": 54
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 18,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "([delete /a/g.x]);\n\n([delete /a/g.x], [delete /a/g.x]);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript
([delete /a/g.x]);
([delete /a/g.x], [delete /a/g.x]);

```

### Diagnostics

```javascript
✔ No errors
```

