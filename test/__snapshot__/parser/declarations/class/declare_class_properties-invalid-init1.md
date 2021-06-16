# Kataw parser test case

## Input

`````js
class C {
  declare async x(): string {};
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
                            "declareToken": {
                                "kind": 82165,
                                "flags": 64,
                                "start": 9,
                                "end": 19
                            },
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 19,
                                "end": 25
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 27
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 28,
                                    "end": 29
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "start": 30,
                                        "end": 37
                                    },
                                    "flags": 2097152,
                                    "start": 30,
                                    "end": 37
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 39,
                                        "end": 39
                                    },
                                    "flags": 32,
                                    "start": 37,
                                    "end": 40
                                },
                                "flags": 256,
                                "start": 27,
                                "end": 40
                            },
                            "flags": 256,
                            "start": 19,
                            "end": 40
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 40,
                            "end": 41
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 41
                },
                "flags": 7,
                "start": 32,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "class C {\n  declare async x(): string {};\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Class methods cannot have the 'declare' modifier - start: 27, end: 28

```

