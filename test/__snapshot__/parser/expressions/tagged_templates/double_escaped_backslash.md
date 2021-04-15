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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "tag",
                    "rawText": "tag",
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "template": {
                    "kind": 458761,
                    "text": " \\",
                    "rawText": "\\ \\\\",
                    "flags": 768,
                    "start": 3,
                    "end": 9
                },
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "tag",
                    "rawText": "tag",
                    "flags": 768,
                    "start": 10,
                    "end": 14
                },
                "template": {
                    "kind": 458761,
                    "text": "\\ ",
                    "rawText": "\\\\\\ ",
                    "flags": 768,
                    "start": 14,
                    "end": 20
                },
                "flags": 256,
                "start": 10,
                "end": 20
            },
            "flags": 128,
            "start": 10,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "tag`\\ \\\\`;\ntag`\\\\\\ `;",
    "fileName": "__root__",
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

