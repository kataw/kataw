# Kataw parser test case

## Input

`````js
!a;
+b;

typeof x;
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
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 64,
                    "start": 0,
                    "end": 1
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1,
                    "end": 2
                },
                "flags": 32,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 34098,
                    "flags": 65,
                    "start": 3,
                    "end": 5
                },
                "expression": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 5,
                    "end": 6
                },
                "flags": 32,
                "start": 3,
                "end": 6
            },
            "flags": 16,
            "start": 3,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477613,
                    "flags": 65,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "flags": 32,
                "start": 7,
                "end": 17
            },
            "flags": 16,
            "start": 7,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "!a;\n+b;\n\ntypeof x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
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

