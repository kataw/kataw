# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: c
> :: test: inside a generator func
> :: case: \u0069nstanceof
## Input

`````js
function *f(){
  \u0069nstanceof = x
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
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 14,
                                    "end": 14
                                },
                                "operatorToken": {
                                    "kind": 4229173,
                                    "flags": 16449,
                                    "start": 14,
                                    "end": 32
                                },
                                "right": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 32,
                                    "end": 32
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 32
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 32
                        }
                    ],
                    "flags": 16417,
                    "start": 14,
                    "end": 32
                },
                "flags": 32,
                "start": 13,
                "end": 32
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 34,
                "end": 36
            },
            "flags": 16,
            "start": 34,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  \\u0069nstanceof = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 14, end: 32
✖ Identifier expected - start: 32, end: 34
✖ Declaration or statement expected - start: 36, end: 38

```

