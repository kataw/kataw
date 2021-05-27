# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
await ``;
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
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 134217824,
                    "start": 5,
                    "end": 8
                },
                "flags": 32,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": true,
    "source": "await ``;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

await ``;
```

### Diagnostics

```javascript
✔ No errors
```

