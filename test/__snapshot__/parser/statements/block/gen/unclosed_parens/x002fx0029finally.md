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

### Hybrid CST

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
                                "flags": 768,
                                "start": 2,
                                "end": 12
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 12
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 12
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "{( /)finally",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 2, end: 4
@{x2716}@ Unexpected token. - start: 12, end: 12
@{x2716}@ Unexpected token. - start: 12, end: 12

```

