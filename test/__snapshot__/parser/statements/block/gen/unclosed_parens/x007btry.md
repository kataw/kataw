# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: s
> :: test: unclosed parens
> :: case: {try
## Options

`````js
{}
`````
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
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [],
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

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 7, end: 7
✖ ',' expected - start: 4, end: 7

```

