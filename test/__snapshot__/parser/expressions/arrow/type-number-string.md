# Kataw parser test case

## Input

`````js
type number = string;
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
                "text": "type",
                "rawText": "type",
                "flags": 96,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "number",
                    "rawText": "number",
                    "flags": 96,
                    "start": 4,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 11,
                    "end": 13
                },
                "right": {
                    "kind": 134299649,
                    "text": "string",
                    "rawText": "string",
                    "flags": 96,
                    "start": 13,
                    "end": 20
                },
                "flags": 32,
                "start": 4,
                "end": 20
            },
            "flags": 16,
            "start": 4,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "type number = string;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 4, end: 11

```

