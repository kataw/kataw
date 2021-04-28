# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: if header
> :: case: a / b + c
## Input

`````js
if ( a / b + c ) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 4,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 6,
                        "start": 512,
                        "end": 8
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 8,
                        "end": 10
                    },
                    "flags": 256,
                    "start": 4,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 10,
                    "start": 512,
                    "end": 12
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 768,
                    "start": 12,
                    "end": 14
                },
                "flags": 256,
                "start": 4,
                "end": 14
            },
            "consequent": {
                "kind": 168,
                "flags": 128,
                "start": 16,
                "end": 18
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "if ( a / b + c ) ;",
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

