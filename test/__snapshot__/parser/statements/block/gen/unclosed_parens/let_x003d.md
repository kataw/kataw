# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: s
> :: test: unclosed parens
> :: case: let  =
## Options

`````js
{}
`````
## Input

`````js
{( let  =
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
                                "end": 9
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 9
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "{( let  =",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 9, end: 9

```

