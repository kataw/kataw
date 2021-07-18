# Kataw parser test case

## Input

`````js
f`\xg ${x}`;
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
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "template": {
                    "kind": 458761,
                    "text": "{x}",
                    "rawText": "\\xg ${x}",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 11
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "f`\\xg ${x}`;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
f`\xg ${x}`;
```

### Diagnostics

```javascript
✔ No errors
```

