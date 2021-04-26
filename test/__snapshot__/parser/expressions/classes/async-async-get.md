# Kataw parser test case

## Input

`````js
class x {    async async get f(x){}    }

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
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 768,
                            "start": 9,
                            "end": 18
                        },
                        "key": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 768,
                            "start": 18,
                            "end": 24
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 9,
                        "end": 24
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": {
                            "kind": 82031,
                            "flags": 768,
                            "start": 24,
                            "end": 28
                        },
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 28,
                                "end": 30
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 31,
                                            "end": 32
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 31,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 8448,
                                "start": 31,
                                "end": 33
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
                                    "start": 34,
                                    "end": 34
                                },
                                "flags": 256,
                                "start": 33,
                                "end": 35
                            },
                            "flags": 8192,
                            "start": 30,
                            "end": 35
                        },
                        "flags": 8192,
                        "start": 24,
                        "end": 35
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 40
            },
            "flags": 128,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "class x {    async async get f(x){}    }\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ A 'get' accessor cannot have parameters. - start: 31, end: 32

```

