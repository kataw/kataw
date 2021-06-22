# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
function fn() {
  return function() {};
}
// extends CallExpression with arguments
export class C extends fn(await []) {};
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "fn",
                "rawText": "fn",
                "flags": 96,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
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
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 15,
                                "end": 24
                            },
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 24,
                                    "end": 33
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 33,
                                    "end": 35
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 37,
                                        "end": 37
                                    },
                                    "flags": 32,
                                    "start": 35,
                                    "end": 38
                                },
                                "returnType": null,
                                "flags": 32,
                                "start": 24,
                                "end": 38
                            },
                            "flags": 81,
                            "start": 15,
                            "end": 39
                        }
                    ],
                    "flags": 33,
                    "start": 15,
                    "end": 39
                },
                "flags": 32,
                "start": 13,
                "end": 41
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 41
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 41,
                "end": 89
            },
            "declaration": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 80,
                    "start": 89,
                    "end": 95
                },
                "name": {
                    "kind": 134299649,
                    "text": "C",
                    "rawText": "C",
                    "flags": 96,
                    "start": 95,
                    "end": 97
                },
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 80,
                            "start": 97,
                            "end": 105
                        },
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "fn",
                                "rawText": "fn",
                                "flags": 96,
                                "start": 105,
                                "end": 108
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 64,
                                            "start": 109,
                                            "end": 114
                                        },
                                        "expression": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 116,
                                                "end": 116
                                            },
                                            "flags": 32,
                                            "start": 114,
                                            "end": 117
                                        },
                                        "flags": 32,
                                        "start": 109,
                                        "end": 117
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 109,
                                "end": 117
                            },
                            "flags": 268435488,
                            "start": 105,
                            "end": 118
                        },
                        "typeParameter": null,
                        "flags": 16,
                        "start": 105,
                        "end": 118
                    },
                    "body": {
                        "kind": 303,
                        "elements": [],
                        "flags": 32,
                        "start": 120,
                        "end": 120
                    },
                    "flags": 97,
                    "start": 32,
                    "end": 121
                },
                "flags": 16,
                "start": 89,
                "end": 121
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 41,
            "end": 121
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 121,
            "end": 122
        }
    ],
    "isModule": true,
    "source": "function fn() {\n  return function() {};\n}\n// extends CallExpression with arguments\nexport class C extends fn(await []) {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 122
}
```

### Printed

```javascript

function fn() {
  return  function () {};
}
// extends CallExpression with arguments
export class C  {}

```

### Diagnostics

```javascript
✔ No errors
```

