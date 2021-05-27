# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
await null;
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
                "kind": 208,
                "awaitKeyword": {
                    "kind": 90224,
                    "flags": 0,
                    "start": 0,
                    "end": 5
                },
                "expression": {
                    "kind": 269,
                    "text": null,
                    "flags": 96,
                    "start": 5,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": true,
    "source": "await null;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

await null;
```

### Diagnostics

```javascript
✔ No errors
```

