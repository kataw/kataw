# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: async wrapped
> :: case: yield
>          x
## Input

`````js
async function p(){
  class C extends yield
x {}
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "p",
                "rawText": "p",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
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
                                "flags": 1,
                                "start": 19,
                                "end": 27
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 27,
                                "end": 29
                            },
                            "typeParameters": null,
                            "members": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 0,
                                        "start": 29,
                                        "end": 37
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 37,
                                        "end": 43
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "start": 37,
                                    "end": 43
                                },
                                "elements": [],
                                "flags": 32,
                                "start": 29,
                                "end": 43
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 43
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 43,
                                "end": 45
                            },
                            "flags": 16,
                            "start": 43,
                            "end": 45
                        },
                        {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 47,
                                "end": 47
                            },
                            "flags": 16,
                            "start": 45,
                            "end": 48
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 48
                },
                "flags": 32,
                "start": 18,
                "end": 50
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "async function p(){\n  class C extends yield\nx {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 37, end: 43
✖ Expected a `;` - start: 45, end: 47

```

