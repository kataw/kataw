# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: {try
## Input

`````js
{( {try
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "flags": 32,
                                "start": 1,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 7
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 7
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "{( {try",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript

{
  ();
}
```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 7, end: 7
✖ ',' expected - start: 7, end: 7
✖ The parser expected to find a '}' to match the '{' token here - start: 7, end: 7

```

