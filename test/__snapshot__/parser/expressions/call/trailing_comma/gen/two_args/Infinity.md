# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: two args
> :: case: Infinity
## Input

`````js
foo(x,y,);
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "original": "foo",
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "original": "x",
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 4,
                            "end": 5
                        },
                        {
                            "kind": 134299649,
                            "original": "y",
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 6,
                            "end": 7
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 4,
                    "end": 8
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "foo(x,y,);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
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

