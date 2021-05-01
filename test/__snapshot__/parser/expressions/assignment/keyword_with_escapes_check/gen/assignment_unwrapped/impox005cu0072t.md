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
                "flags": 16384,
                "start": 0,
                "end": 11
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 16,
            "start": 11,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 13,
                "end": 15
            },
            "flags": 16,
            "start": 13,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "impo\\u0072t = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Unexpected token. - start: 11, end: 13
✖ The `import` keyword can only be used with the module goal - start: 11, end: 13
✖ Expected a `;` - start: 11, end: 13
✖ Statement expected - start: 11, end: 13

```

