# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/simple
> :: test: simple
> :: case: function *gf(){ function yield(){}; }
## Options

`````js
{}
`````
## Input

`````js
function *gf(){ function yield(){}; }
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
                "text": "gf",
                "rawText": "gf",
                "flags": 96,
                "start": 10,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 14
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 15,
                                "end": 24
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 24,
                                "end": 30
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 30,
                                "end": 32
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 33,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 34
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 15,
                            "end": 34
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 34,
                            "end": 35
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 35
                },
                "flags": 32,
                "start": 14,
                "end": 37
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "function *gf(){ function yield(){}; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'yield' as a name on a async generator declaration - start: 24, end: 30

```

