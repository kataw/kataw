# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: \u0065xport
## Options

`````js
{}
`````
## Input

`````js
\u0065xport = x;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 16464,
                "start": 0,
                "end": 11
            },
            "declaration": null,
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "start": 0,
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
    "source": "\\u0065xport = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 0, end: 11
✖ Keywords cannot contain escape characters - start: 0, end: 11
✖ Declaration or statement expected - start: 11, end: 13

```

