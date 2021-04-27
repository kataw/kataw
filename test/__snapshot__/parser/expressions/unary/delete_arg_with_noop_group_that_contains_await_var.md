# Kataw parser test case

## Input

`````js
delete (((((foo(await)))))).bar
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
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "expression": {
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
                                                "flags": 768,
                                                "start": 12,
                                                "end": 15
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 768,
                                                        "start": 16,
                                                        "end": 21
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 16,
                                                "end": 21
                                            },
                                            "flags": 256,
                                            "start": 11,
                                            "end": 22
                                        },
                                        "flags": 256,
                                        "start": 11,
                                        "end": 23
                                    },
                                    "flags": 256,
                                    "start": 10,
                                    "end": 24
                                },
                                "flags": 256,
                                "start": 9,
                                "end": 25
                            },
                            "flags": 256,
                            "start": 8,
                            "end": 26
                        },
                        "flags": 256,
                        "start": 6,
                        "end": 27
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 28,
                        "end": 31
                    },
                    "flags": 256,
                    "start": 6,
                    "end": 31
                },
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "delete (((((foo(await)))))).bar",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

