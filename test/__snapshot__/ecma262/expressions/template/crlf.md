# Kataw parser test case

## Input

`````js
a
`foo\r\nbar`
b
`````

## Output

### CST

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
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "template": {
                    "kind": 458761,
                    "text": "foo\r\nbar",
                    "rawText": "foo\\r\\nbar",
                    "flags": 134217824,
                    "start": 1,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "start": 14,
                "end": 16
            },
            "flags": 16,
            "start": 14,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "a\n`foo\\r\\nbar`\nb",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

a`foo\r\nbar`;
b;
```

### Diagnostics

```javascript
✔ No errors
```

