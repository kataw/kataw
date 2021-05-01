# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: \u0069mport
## Input

`````js
async () => {  \u0069mport = x  }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 263,
                            "importKeyword": {
                                "kind": 37814364,
                                "flags": 16384,
                                "start": 13,
                                "end": 26
                            },
                            "fromClause": null,
                            "moduleSpecifier": null,
                            "importClause": null,
                            "flags": 16,
                            "start": 26,
                            "end": 26
                        }
                    ],
                    "flags": 16416,
                    "start": 13,
                    "end": 26
                },
                "flags": 32,
                "start": 11,
                "end": 26
            },
            "flags": 288,
            "start": 0,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "x",
                "text": "x",
                "rawText": " x",
                "flags": 96,
                "start": 28,
                "end": 30
            },
            "flags": 16,
            "start": 28,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "async () => {  \\u0069mport = x  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Unexpected token. - start: 26, end: 28
✖ The `import` keyword can only be used with the module goal - start: 26, end: 28
✖ Expected a `;` - start: 26, end: 28
✖ Statement expected - start: 26, end: 28
✖ Statement expected - start: 30, end: 33

```

