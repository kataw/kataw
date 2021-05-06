# Kataw parser test case

## Input

`````js
{`foo ${a} and ${b} and ${c} baz`}
`````

## Output

### CST

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
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 26,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 18,
                                        "end": 27
                                    }
                                ],
                                "tail": {
                                    "kind": 458761,
                                    "text": " baz",
                                    "rawText": " baz",
                                    "flags": 96,
                                    "start": 27,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "{`foo ${a} and ${b} and ${c} baz`}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 1, end: 8

```

