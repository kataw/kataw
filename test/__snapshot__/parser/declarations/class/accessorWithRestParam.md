# Kataw parser test case

## Input

`````js
class C {
    set X(...v) { }
    static set X(...v2) { }
}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "text": "C",
                "rawText": "C",
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
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 65,
                                "start": 9,
                                "end": 17
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 19
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 20,
                                                "end": 23
                                            },
                                            "left": {
                                                "kind": 134299649,
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 23,
                                                "end": 24
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": null,
                                            "flags": 34,
                                            "start": 20,
                                            "end": 24
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 546,
                                    "start": 20,
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
                                    "end": 29
                                },
                                "flags": 512,
                                "start": 19,
                                "end": 29
                            },
                            "flags": 512,
                            "start": 9,
                            "end": 29
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 29,
                                "end": 40
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 40,
                                "end": 44
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "start": 44,
                                    "end": 46
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 47,
                                                "end": 50
                                            },
                                            "left": {
                                                "kind": 134299649,
                                                "text": "v2",
                                                "rawText": "v2",
                                                "flags": 96,
                                                "start": 50,
                                                "end": 52
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": null,
                                            "flags": 34,
                                            "start": 47,
                                            "end": 52
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 546,
                                    "start": 47,
                                    "end": 53
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 55,
                                        "end": 55
                                    },
                                    "flags": 32,
                                    "start": 53,
                                    "end": 57
                                },
                                "flags": 512,
                                "start": 46,
                                "end": 57
                            },
                            "flags": 512,
                            "start": 40,
                            "end": 57
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 57
                },
                "flags": 7,
                "start": 32,
                "end": 59
            },
            "flags": 16,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "class C {\n    set X(...v) { }\n    static set X(...v2) { }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'set' accessor cannot have rest parameter. - start: 20, end: 23
✖ A 'set' accessor cannot have rest parameter. - start: 47, end: 50

```

