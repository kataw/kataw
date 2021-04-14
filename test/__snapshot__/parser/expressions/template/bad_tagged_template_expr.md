# Kataw parser test case

## Input

`````js
x`foo ${a b} bar`
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
                "kind": 226,
                "member": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
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
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 8,
                                "end": 9
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 9
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "} bar",
                        "rawText": "} bar",
                        "flags": 768,
                        "start": 9,
                        "end": 17
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 17
                },
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "x`foo ${a b} bar`",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

