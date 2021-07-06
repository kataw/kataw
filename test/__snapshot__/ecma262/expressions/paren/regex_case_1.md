# Kataw parser test case

## Input

`````js
([delete /a/.x]);
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
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 8
                                },
                                "operand": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 371,
                                        "text": "/a/",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 12
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 14
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 8,
                                    "end": 14
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 2,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 14
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 15
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "([delete /a/.x]);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

([delete /a/.x]);
```

### Diagnostics

```javascript
✔ No errors
```

