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
                    "start": 1,
                    "end": 4
                },
                "flags": 0,
                "start": 32,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "(`\n`);",
    "fileName": "__root__",
    "flags": 0,
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

