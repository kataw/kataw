# Kataw parser test case

## Input

`````js
let x = async function f(foo = await){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 768,
                                "start": 7,
                                "end": 13
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 768,
                                "start": 13,
                                "end": 22
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 22,
                                "end": 24
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 25,
                                            "end": 28
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 208,
                                            "awaitToken": {
                                                "kind": 82032,
                                                "flags": 768,
                                                "start": 30,
                                                "end": 36
                                            },
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "autofix": 0,
                                                "flags": 12,
                                                "start": 36,
                                                "end": 36
                                            },
                                            "flags": 256,
                                            "start": 30,
                                            "end": 36
                                        },
                                        "flags": 258,
                                        "start": 25,
                                        "end": 36
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 258,
                                "start": 24,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 38,
                                    "end": 38
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 39
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 1280,
                            "start": 7,
                            "end": 39
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 39
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 39
            },
            "flags": 128,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "let x = async function f(foo = await){}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 36,
            "end": 37
        }
    ],
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

