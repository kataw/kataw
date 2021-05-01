# Kataw parser test case

## Input

`````js
interface: x;
`````

## Output

### Hybrid CST

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
            "labels": [
                {
                    "kind": 256,
                    "label": "interface",
                    "loop": false,
                    "isDuplicate": false,
                    "flags": 32,
                    "start": 0,
                    "end": 9
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
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
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

