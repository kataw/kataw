# Kataw parser test case

## Input

`````js
var C = class { static async *gen() {
    var await;
}};
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
                "transformFlags": 0,
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
                            "text": "C",
                            "rawText": "C",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 13
                            },
                            "name": null,
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
                                            "staticKeyword": {
                                                "kind": 8388716,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 22
                                            },
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 22,
                                                "end": 28
                                            },
                                            "setKeyword": null,
                                            "getKeyword": null,
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "transformFlags": 32,
                                                "start": 28,
                                                "end": 30
                                            },
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "gen",
                                                    "rawText": "gen",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 30,
                                                    "end": 33
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 384,
                                                    "transformFlags": 0,
                                                    "start": 34,
                                                    "end": 35
                                                },
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [
                                                            {
                                                                "kind": 155,
                                                                "declareKeyword": null,
                                                                "varKeyword": {
                                                                    "kind": 37757002,
                                                                    "flags": 81,
                                                                    "transformFlags": 0,
                                                                    "start": 37,
                                                                    "end": 45
                                                                },
                                                                "declarationList": {
                                                                    "kind": 156,
                                                                    "declarations": [
                                                                        {
                                                                            "kind": 157,
                                                                            "binding": {
                                                                                "kind": 134299649,
                                                                                "text": "await",
                                                                                "rawText": "await",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 45,
                                                                                "end": 51
                                                                            },
                                                                            "type": null,
                                                                            "initializer": null,
                                                                            "flags": 16,
                                                                            "transformFlags": 128,
                                                                            "start": 45,
                                                                            "end": 51
                                                                        }
                                                                    ],
                                                                    "flags": 16,
                                                                    "transformFlags": 0,
                                                                    "start": 45,
                                                                    "end": 51
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 37,
                                                                "end": 52
                                                            }
                                                        ],
                                                        "flags": 33,
                                                        "transformFlags": 0,
                                                        "start": 37,
                                                        "end": 52
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 35,
                                                    "end": 54
                                                },
                                                "flags": 384,
                                                "transformFlags": 0,
                                                "start": 33,
                                                "end": 54
                                            },
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 54
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 54
                                },
                                "flags": 13,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 55
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 55
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 55
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 55
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "var C = class { static async *gen() {\n    var await;\n}};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 45, end: 51

```

