# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: class C extends yield { }
## Input

`````js
function * gen() { function not_gen() { class C extends yield { } }}
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
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 14,
                "end": 16
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
                                "flags": 0,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 35,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 178,
                                            "declareKeyword": null,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 0,
                                                "start": 39,
                                                "end": 45
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 96,
                                                "start": 45,
                                                "end": 47
                                            },
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 0,
                                                    "start": 47,
                                                    "end": 55
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "start": 55,
                                                    "end": 61
                                                },
                                                "typeParameter": null,
                                                "flags": 16,
                                                "start": 55,
                                                "end": 61
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 63,
                                                "end": 65
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 65
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 65
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 67
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 67
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 67
                },
                "flags": 32,
                "start": 16,
                "end": 68
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { class C extends yield { } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 55, end: 61

```

