# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: /)finally
## Input

`````js
{( /)finally
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
                                "kind": 221,
                                "text": "/)finally",
                                "flags": 96,
                                "start": 2,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 12
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "{( /)finally",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

{
  (/)finally);
}
```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 2, end: 4
✖ Expected a ')' to match the '(' token here - start: 12, end: 12

```

