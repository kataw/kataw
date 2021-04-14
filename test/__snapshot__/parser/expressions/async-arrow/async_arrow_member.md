# Kataw parser test case

## Input

`````js
async("foo".bar) => x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 81921,
                "text": "async",
                "rawText": "async",
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 129,
                        "member": {
                            "kind": 67174403,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 6,
                            "end": 11
                        },
                        "expression": {
                            "kind": 81921,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 768,
                            "start": 12,
                            "end": 15
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 6,
                        "end": 15
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 256,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 19,
                "end": 21
            },
            "flags": 128,
            "start": 19,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "async(\"foo\".bar) => x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 16,
            "end": 19
        }
    ],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

