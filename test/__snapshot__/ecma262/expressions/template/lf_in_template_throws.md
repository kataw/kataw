# Kataw parser test case

## Input

`````js
(`
`);
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
                "kind": 121,
                "expression": {
                    "kind": 458761,
                    "text": "\n",
                    "rawText": "\n",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 4
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "(`\n`);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
(`
`);
```

### Diagnostics

```javascript
✔ No errors
```

