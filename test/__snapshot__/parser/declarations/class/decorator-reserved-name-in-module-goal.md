# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
@package
class C2 {
        method() {}
}
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
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "start": 0,
                            "end": 1
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "package",
                            "rawText": "package",
                            "flags": 96,
                            "start": 1,
                            "end": 8
                        },
                        "flags": 0,
                        "start": 1,
                        "end": 8
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 8
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 0,
                "end": 14
            },
            "name": {
                "kind": 134299649,
                "text": "C2",
                "rawText": "C2",
                "flags": 96,
                "start": 14,
                "end": 17
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
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 34
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 35,
                                    "end": 36
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 38
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 39
                                },
                                "flags": 0,
                                "start": 34,
                                "end": 39
                            },
                            "flags": 0,
                            "start": 19,
                            "end": 39
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 39
                },
                "flags": 17,
                "start": 32,
                "end": 41
            },
            "flags": 17,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": true,
    "source": "@package\nclass C2 {\n        method() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

@package
class C2 {
  method() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

