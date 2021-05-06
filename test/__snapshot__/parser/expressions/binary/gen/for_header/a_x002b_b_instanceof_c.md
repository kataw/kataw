# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: for header
> :: case: a + b instanceof c
## Input

`````js
for ( a + b instanceof c ;;);
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 64,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 9,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4229173,
                        "flags": 64,
                        "start": 11,
                        "end": 22
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 22,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 11,
                    "end": 24
                },
                "flags": 32,
                "start": 0,
                "end": 24
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 28,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "for ( a + b instanceof c ;;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
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

