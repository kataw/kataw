# Kataw parser test case

## Input

`````js
tag`some \" quote`;
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
                    "kind": 81921,
                    "value": "tag",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "template": {
                    "kind": 458761,
                    "rawText": "some \\\" quote",
                    "text": "some \" quote",
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 18
                },
                "optional": false,
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "tag`some \\\" quote`;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

