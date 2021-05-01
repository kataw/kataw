# Kataw parser test case

## Input

`````js
{`foo ${a} and ${b} and ${`w ${d} x ${e} y ${f} z`} baz`}
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
                            "kind": 226,
                            "member": {
                                "kind": 16637,
                                "text": "",
                                "flags": 68,
                                "start": 1,
                                "end": 1
                            },
                            "template": {
                                "kind": 227,
                                "spans": [
                                    {
                                        "kind": 228,
                                        "rawText": "foo ",
                                        "text": "foo ",
                                        "expression": {
                                            "kind": 134299649,
                                            "original": "a",
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "flags": 32,
                                        "start": 1,
                                        "end": 9
                                    },
                                    {
                                        "kind": 228,
                                        "rawText": " and ",
                                        "text": " and ",
                                        "expression": {
                                            "kind": 134299649,
                                            "original": "b",
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 18
                                    },
                                    {
                                        "kind": 228,
                                        "rawText": " and ",
                                        "text": " and ",
                                        "expression": {
                                            "kind": 226,
                                            "member": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 68,
                                                "start": 26,
                                                "end": 26
                                            },
                                            "template": {
                                                "kind": 227,
                                                "spans": [
                                                    {
                                                        "kind": 228,
                                                        "rawText": "w ",
                                                        "text": "w ",
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "original": "d",
                                                            "text": "d",
                                                            "rawText": "d",
                                                            "flags": 96,
                                                            "start": 31,
                                                            "end": 32
                                                        },
                                                        "flags": 32,
                                                        "start": 26,
                                                        "end": 32
                                                    },
                                                    {
                                                        "kind": 228,
                                                        "rawText": " x ",
                                                        "text": " x ",
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "original": "e",
                                                            "text": "e",
                                                            "rawText": "e",
                                                            "flags": 96,
                                                            "start": 38,
                                                            "end": 39
                                                        },
                                                        "flags": 32,
                                                        "start": 32,
                                                        "end": 39
                                                    },
                                                    {
                                                        "kind": 228,
                                                        "rawText": " y ",
                                                        "text": " y ",
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "original": "f",
                                                            "text": "f",
                                                            "rawText": "f",
                                                            "flags": 96,
                                                            "start": 45,
                                                            "end": 46
                                                        },
                                                        "flags": 32,
                                                        "start": 39,
                                                        "end": 46
                                                    }
                                                ],
                                                "tail": {
                                                    "kind": 458761,
                                                    "text": " z",
                                                    "rawText": " z",
                                                    "flags": 96,
                                                    "start": 46,
                                                    "end": 50
                                                },
                                                "flags": 32,
                                                "start": 26,
                                                "end": 50
                                            },
                                            "flags": 32,
                                            "start": 26,
                                            "end": 50
                                        },
                                        "flags": 32,
                                        "start": 18,
                                        "end": 50
                                    }
                                ],
                                "tail": {
                                    "kind": 458761,
                                    "text": " baz",
                                    "rawText": " baz",
                                    "flags": 96,
                                    "start": 50,
                                    "end": 56
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 56
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 56
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 56
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 56
            },
            "flags": 16,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "{`foo ${a} and ${b} and ${`w ${d} x ${e} y ${f} z`} baz`}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 1, end: 8
✖ Expression expected - start: 26, end: 31

```

