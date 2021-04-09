# Kataw parser test case

## Input

`````js
`foo${{}}baz`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 0,
                    "end": 0
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 228,
                            "rawText": "foo",
                            "text": "foo",
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 7,
                                    "end": 7
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 6,
                                "end": 8
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 0,
                            "end": 8
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "rawText": "baz",
                        "text": "baz",
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
                        "end": 13
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 13
                },
                "optional": false,
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "`foo${{}}baz`",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 0,
            "end": 6
        }
    ],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

