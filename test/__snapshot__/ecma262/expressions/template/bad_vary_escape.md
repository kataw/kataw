# Kataw parser test case

## Input

`````js
tag`phew \u{110001}`
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
                    "text": "tag",
                    "rawText": "tag",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "phew \\u{110001}",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 20
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "tag`phew \\u{110001}`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
tag`phew \u{110001}`;
```

### Diagnostics

```javascript
✔ No errors
```

