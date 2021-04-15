# Kataw parser test case

## Input

`````js
a
`foo\r\nbar`
b
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
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "template": {
                    "kind": 458761,
                    "text": "foo\r\nbar",
                    "rawText": "foo\\r\\nbar",
                    "flags": 768,
                    "start": 1,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "flags": 128,
            "start": 14,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "a\n`foo\\r\\nbar`\nb",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
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

