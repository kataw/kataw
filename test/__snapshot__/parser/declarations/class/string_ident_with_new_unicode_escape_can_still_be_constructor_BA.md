# Kataw parser test case

## Input

`````js
class x { constructor(){}; "constructor"(){}; }
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 9,
                                "end": 21
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 22,
                                "end": 23
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 24,
                                    "end": 24
                                },
                                "flags": 256,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 0,
                            "start": 21,
                            "end": 25
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 25
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 25,
                        "end": 26
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 201392131,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 26,
                                "end": 40
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 41,
                                "end": 42
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 43,
                                    "end": 43
                                },
                                "flags": 256,
                                "start": 42,
                                "end": 44
                            },
                            "flags": 0,
                            "start": 40,
                            "end": 44
                        },
                        "flags": 256,
                        "start": 26,
                        "end": 44
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 44,
                        "end": 45
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 47
            },
            "flags": 128,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "class x { constructor(){}; \"constructor\"(){}; }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

