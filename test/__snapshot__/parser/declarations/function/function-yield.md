# Kataw parser test case

## Input

`````js
function *foo() {
  const x = (yield 5: any);
  x ? yield 1 : x;
}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 10,
                "end": 13
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 13,
                "end": 15
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 37757004,
                                "flags": 768,
                                "start": 17,
                                "end": 25
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
                                            "start": 25,
                                            "end": 27
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 768,
                                                        "start": 31,
                                                        "end": 36
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 5,
                                                        "rawText": "5",
                                                        "flags": 768,
                                                        "start": 36,
                                                        "end": 38
                                                    },
                                                    "flags": 256,
                                                    "start": 31,
                                                    "end": 38
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "type": {
                                                        "kind": 134234252,
                                                        "flags": 768,
                                                        "start": 39,
                                                        "end": 43
                                                    },
                                                    "flags": 0,
                                                    "start": 38,
                                                    "end": 43
                                                },
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 29,
                                                "end": 43
                                            },
                                            "flags": 256,
                                            "start": 29,
                                            "end": 44
                                        },
                                        "flags": 128,
                                        "start": 25,
                                        "end": 44
                                    }
                                ],
                                "flags": 160,
                                "start": 25,
                                "end": 44
                            },
                            "flags": 128,
                            "start": 17,
                            "end": 45
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 45,
                                    "end": 49
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 768,
                                    "start": 49,
                                    "end": 51
                                },
                                "consequent": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 768,
                                        "start": 51,
                                        "end": 57
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 768,
                                        "start": 57,
                                        "end": 59
                                    },
                                    "flags": 256,
                                    "start": 51,
                                    "end": 59
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 768,
                                    "start": 59,
                                    "end": 61
                                },
                                "alternate": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 61,
                                    "end": 63
                                },
                                "flags": 256,
                                "start": 45,
                                "end": 63
                            },
                            "flags": 128,
                            "start": 45,
                            "end": 64
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 17,
                    "end": 64
                },
                "flags": 256,
                "start": 15,
                "end": 66
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "text": "function *foo() {\n  const x = (yield 5: any);\n  x ? yield 1 : x;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

