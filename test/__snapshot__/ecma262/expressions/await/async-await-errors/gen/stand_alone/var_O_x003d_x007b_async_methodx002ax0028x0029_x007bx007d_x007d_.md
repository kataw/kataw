# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/gen/stand_alone
> :: test: stand alone
> :: case: var O = { async method*() {} };
## Options

`````js
{}
`````
## Input

`````js
var O = { async method*() {} };
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "O",
                            "rawText": "O",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 352,
                                            "start": 9,
                                            "end": 15
                                        },
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "method",
                                                "rawText": "method",
                                                "flags": 96,
                                                "start": 15,
                                                "end": 22
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 288,
                                                "start": 22,
                                                "end": 22
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 22,
                                                    "end": 22
                                                },
                                                "flags": 32,
                                                "start": 22,
                                                "end": 22
                                            },
                                            "flags": 288,
                                            "start": 22,
                                            "end": 22
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 22
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 22,
                                            "end": 23
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "start": 23,
                                                "end": 23
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "start": 24,
                                                "end": 25
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 27,
                                                    "end": 27
                                                },
                                                "flags": 32,
                                                "start": 25,
                                                "end": 28
                                            },
                                            "flags": 160,
                                            "start": 23,
                                            "end": 28
                                        },
                                        "flags": 32,
                                        "start": 22,
                                        "end": 28
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 9,
                                "end": 28
                            },
                            "flags": 48,
                            "start": 7,
                            "end": 30
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 30
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "var O = { async method*() {} };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Method definition expected - start: 22, end: 23
✖ Identifier expected - start: 23, end: 24

```

