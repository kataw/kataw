# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: c
> :: test: inside a generator func
> :: case: \u0064ebugger
## Input

`````js
function *f(){
  \u0064ebugger = x
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
                "flags": 64,
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
                            "kind": 171,
                            "debuggerKeyword": {
                                "kind": 37757010,
                                "flags": 16465,
                                "start": 14,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 30
                        }
                    ],
                    "flags": 16417,
                    "start": 14,
                    "end": 30
                },
                "flags": 32,
                "start": 13,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 32,
                "end": 34
            },
            "flags": 16,
            "start": 32,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  \\u0064ebugger = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 14, end: 30
✖ Expected a `;` - start: 30, end: 32
✖ Declaration or statement expected - start: 34, end: 36

```

