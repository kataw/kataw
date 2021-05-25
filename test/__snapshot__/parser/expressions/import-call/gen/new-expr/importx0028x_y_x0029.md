# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: r
> :: test: new-expr
> :: case: import(x,y,,)
## Input

`````js
import(x,y,,)
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 0,
                            "start": 0,
                            "end": 6
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 7,
                            "end": 8
                        },
                        "flags": 32,
                        "start": 6,
                        "end": 8
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 9,
                        "end": 10
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 11,
                        "end": 11
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 12,
                        "end": 12
                    }
                ],
                "flags": 32,
                "start": 6,
                "end": 12
            },
            "flags": 16,
            "start": 6,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "import(x,y,,)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Dynamic import must have one specifier as an argument. - start: 8, end: 9
✖ Expression expected - start: 11, end: 12
✖ Expression expected - start: 12, end: 13

```

