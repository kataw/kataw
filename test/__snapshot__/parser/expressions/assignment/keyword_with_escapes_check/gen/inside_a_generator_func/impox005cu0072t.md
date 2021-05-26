# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: c
> :: test: inside a generator func
> :: case: impo\u0072t
## Input

`````js
function *f(){
  impo\u0072t = x
}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
            },
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
                                "flags": 16385,
                                "start": 14,
                                "end": 28
                            },
                            "fromClause": null,
                            "moduleSpecifier": null,
                            "importClause": null,
                            "flags": 16,
                            "start": 28,
                            "end": 28
                        }
                    ],
                    "flags": 16417,
                    "start": 14,
                    "end": 28
                },
                "flags": 32,
                "start": 13,
                "end": 28
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 30,
                "end": 32
            },
            "flags": 16,
            "start": 30,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  impo\\u0072t = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 28, end: 30
✖ Unexpected token. - start: 28, end: 30
✖ The `import` keyword can only be used with the module goal - start: 28, end: 30
✖ Expected a `;` - start: 28, end: 30
✖ Declaration or statement expected - start: 32, end: 34

```

