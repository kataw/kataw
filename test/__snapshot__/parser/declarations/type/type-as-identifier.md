# Kataw parser test case

## Input

`````js
type;

type = x;

(type);
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
                "kind": 134299649,
                "text": "type",
                "rawText": "type",
                "flags": 96,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "type",
                    "rawText": "type",
                    "flags": 96,
                    "start": 5,
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
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 13,
                    "end": 15
                },
                "flags": 32,
                "start": 5,
                "end": 15
            },
            "flags": 16,
            "start": 5,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": "type",
                    "rawText": "type",
                    "flags": 96,
                    "start": 19,
                    "end": 23
                },
                "flags": 32,
                "start": 16,
                "end": 24
            },
            "flags": 16,
            "start": 16,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "type;\n\ntype = x;\n\n(type);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

