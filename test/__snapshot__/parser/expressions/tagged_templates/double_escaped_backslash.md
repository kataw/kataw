# Kataw parser test case

## Input

`````js
tag`\ \\`;
tag`\\\ `;
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
                    "rawText": "\\ \\\\",
                    "text": " \\",
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 9
                },
                "optional": false,
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 81921,
                    "value": "tag",
                    "autofix": 0,
                    "flags": 768,
                    "start": 10,
                    "end": 14
                },
                "template": {
                    "kind": 458761,
                    "rawText": "\\\\\\ ",
                    "text": "\\ ",
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 20
                },
                "optional": false,
                "autofix": 0,
                "flags": 256,
                "start": 10,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "tag`\\ \\\\`;\ntag`\\\\\\ `;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
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

