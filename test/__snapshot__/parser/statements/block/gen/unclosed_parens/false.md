# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: false
## Input

`````js
{( false
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
                                "kind": 134,
                                "text": false,
                                "flags": 96,
                                "start": 2,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 8
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 8
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "{( false",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

{
  (false);
}
```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 8, end: 8

```

