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

### CST

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
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "asteriskToken": null,
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
                                    "flags": 96,
                                    "start": 9,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 22,
                                    "end": 23
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 24,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "start": 23,
                                    "end": 25
                                },
                                "flags": 2048,
                                "start": 21,
                                "end": 25
                            },
                            "flags": 2048,
                            "start": 9,
                            "end": 25
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 25,
                            "end": 26
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "asteriskToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 201392131,
                                    "text": "constructor",
                                    "rawText": "\"constructor\"",
                                    "flags": 96,
                                    "start": 26,
                                    "end": 40
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 41,
                                    "end": 42
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 43,
                                        "end": 43
                                    },
                                    "flags": 32,
                                    "start": 42,
                                    "end": 44
                                },
                                "flags": 2048,
                                "start": 40,
                                "end": 44
                            },
                            "flags": 2048,
                            "start": 26,
                            "end": 44
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 44,
                            "end": 45
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 45
                },
                "flags": 7,
                "start": 32,
                "end": 47
            },
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "class x { constructor(){}; \"constructor\"(){}; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Multiple constructor implementations are not allowed - start: 44, end: 45

```

