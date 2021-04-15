# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: crazy input 1
## Input

`````js
{[ crazy input 1
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "crazy",
                                        "rawText": "crazy",
                                        "flags": 768,
                                        "start": 2,
                                        "end": 8
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "input",
                                        "rawText": "input",
                                        "flags": 768,
                                        "start": 8,
                                        "end": 14
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 768,
                                        "start": 14,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 2,
                                "end": 16
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 16
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 16
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "{[ crazy input 1",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 8,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 14,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 16,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16,
            "end": 16
        }
    ],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

