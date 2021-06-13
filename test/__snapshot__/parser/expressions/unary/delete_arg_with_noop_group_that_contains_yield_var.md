# Kataw parser test case

## Input

`````js
delete (((((foo(yield)))))).bar
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
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 96,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 12,
                                                "end": 15
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "start": 16,
                                                        "end": 21
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 16,
                                                "end": 21
                                            },
                                            "flags": 268435488,
                                            "start": 11,
                                            "end": 22
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 23
                                    },
                                    "flags": 32,
                                    "start": 10,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 9,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 26
                        },
                        "flags": 32,
                        "start": 6,
                        "end": 27
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 28,
                        "end": 31
                    },
                    "flags": 536870944,
                    "start": 6,
                    "end": 31
                },
                "flags": 32,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "delete (((((foo(yield)))))).bar",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

delete (foo(yield)).bar;
```

### Diagnostics

```javascript
✔ No errors
```

