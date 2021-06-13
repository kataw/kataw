# Kataw parser test case

## Input

`````js
if (0) let
[x] = 0
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 536871042,
                        "member": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 96,
                            "start": 6,
                            "end": 10
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 12,
                            "end": 13
                        },
                        "flags": 32,
                        "start": 6,
                        "end": 14
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 14,
                        "end": 16
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 16,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 18
                },
                "flags": 16,
                "start": 6,
                "end": 18
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "if (0) let\n[x] = 0",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `let 
 [` is a restricted production at the start of a statement - start: 6, end: 10

```

