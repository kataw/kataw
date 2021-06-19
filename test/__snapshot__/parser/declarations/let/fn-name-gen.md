# Kataw parser test case

## Input

`````js
let xGen = function* x() {};
let gen = function*() {};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "xGen",
                            "rawText": "xGen",
                            "flags": 96,
                            "start": 3,
                            "end": 8
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 10,
                                "end": 19
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 19,
                                "end": 20
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 20,
                                "end": 22
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 22,
                                "end": 24
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 26,
                                    "end": 26
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 27
                            },
                            "returnType": null,
                            "flags": 288,
                            "start": 10,
                            "end": 27
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 27
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 27
            },
            "flags": 33554448,
            "start": 0,
            "end": 28
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 28,
                "end": 32
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "gen",
                            "rawText": "gen",
                            "flags": 96,
                            "start": 32,
                            "end": 36
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 38,
                                "end": 47
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 47,
                                "end": 48
                            },
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 48,
                                "end": 50
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 52,
                                    "end": 52
                                },
                                "flags": 32,
                                "start": 50,
                                "end": 53
                            },
                            "returnType": null,
                            "flags": 288,
                            "start": 38,
                            "end": 53
                        },
                        "flags": 16,
                        "start": 32,
                        "end": 53
                    }
                ],
                "flags": 17,
                "start": 32,
                "end": 53
            },
            "flags": 33554448,
            "start": 28,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "let xGen = function* x() {};\nlet gen = function*() {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

let xGen = function * x() {};
let gen = function * () {};
```

### Diagnostics

```javascript
✔ No errors
```

