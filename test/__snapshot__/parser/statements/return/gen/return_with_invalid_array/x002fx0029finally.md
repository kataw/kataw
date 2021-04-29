# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: return with invalid array
> :: case: /)finally
## Input

`````js
return [catch] /)finally
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 8
                },
                "flags": 32,
                "start": 6,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 0
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 13,
                    "end": 13
                },
                "flags": 16,
                "start": 13,
                "end": 13
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 14,
                    "end": 14
                },
                "flags": 16,
                "start": 14,
                "end": 14
            },
            "flags": 16,
            "start": 8,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/)finally",
                "flags": 96,
                "start": 14,
                "end": 24
            },
            "flags": 16,
            "start": 14,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "return [catch] /)finally",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ 'try' expected - start: 8, end: 13
✖ Unterminated regular expression - start: 14, end: 16

```

