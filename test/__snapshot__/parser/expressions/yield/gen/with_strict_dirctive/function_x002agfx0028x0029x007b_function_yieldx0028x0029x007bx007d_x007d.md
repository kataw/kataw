# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function *gf(){ function yield(){}; }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; function *gf(){ function yield(){}; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 13,
                "end": 22
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 22,
                "end": 24
            },
            "name": {
                "kind": 134299649,
                "text": "gf",
                "rawText": "gf",
                "flags": 96,
                "start": 24,
                "end": 26
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 26,
                "end": 28
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
                                "start": 29,
                                "end": 38
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 38,
                                "end": 44
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 44,
                                "end": 46
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 47,
                                    "end": 47
                                },
                                "flags": 32,
                                "start": 46,
                                "end": 48
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 29,
                            "end": 48
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 48,
                            "end": 49
                        }
                    ],
                    "flags": 32,
                    "start": 29,
                    "end": 49
                },
                "flags": 32,
                "start": 28,
                "end": 51
            },
            "returnType": null,
            "flags": 272,
            "start": 13,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "'use strict'; function *gf(){ function yield(){}; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'yield' as a name on a async generator declaration - start: 38, end: 44

```

