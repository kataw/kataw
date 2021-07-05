# Kataw parser test case

## Input

`````js
interface: x;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "interface",
                "rawText": "interface",
                "flags": 96,
                "start": 0,
                "end": 9
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 9,
                "end": 10
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 10,
                    "end": 12
                },
                "flags": 16,
                "start": 10,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "interface: x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

interface:  x;
```

### Diagnostics

```javascript
✔ No errors
```

