# Kataw parser test case

## Input

`````js
xxx\Axxx
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
                "kind": 134299649,
                "text": "xxx",
                "rawText": "xxx",
                "flags": 96,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Axxx",
                "rawText": "Axxx",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "flags": 16,
            "start": 4,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "xxx\\Axxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 0, end: 3
✖ Invalid hexadecimal escape sequence - start: 3, end: 3
✖ Expected a `;` - start: 3, end: 4
✖ Declaration or statement expected - start: 3, end: 4

```

