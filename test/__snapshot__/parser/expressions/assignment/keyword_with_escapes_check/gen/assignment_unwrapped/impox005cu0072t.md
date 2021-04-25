# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: impo\u0072t
## Input

`````js
impo\u0072t = x;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 0,
                "end": 11
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 11,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 13,
                "end": 15
            },
            "flags": 128,
            "start": 13,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "impo\\u0072t = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 11, end: 13
@{x2716}@ The `import` keyword can only be used with the module goal - start: 11, end: 13
@{x2716}@ Unexpected token. - start: 11, end: 13
@{x2716}@ Statement expected - start: 11, end: 13

```

