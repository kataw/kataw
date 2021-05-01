# Kataw parser test case

## Input

`````js
function* f() { class C { aaa = yield } }

`````

## Options

### Parser Options

`````js
{}
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "original": "f",
                "text": "f",
                "rawText": " f",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
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
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 0,
                                "start": 15,
                                "end": 21
                            },
                            "name": {
                                "kind": 134299649,
                                "original": "C",
                                "text": "C",
                                "rawText": " C",
                                "flags": 96,
                                "start": 21,
                                "end": 23
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
                                        "asyncKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "original": "aaa",
                                            "text": "aaa",
                                            "rawText": " aaa",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 29
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 0,
                                                "start": 31,
                                                "end": 37
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": null,
                                            "flags": 32,
                                            "start": 31,
                                            "end": 37
                                        },
                                        "flags": 32,
                                        "start": 25,
                                        "end": 37
                                    }
                                ],
                                "flags": 32,
                                "start": 25,
                                "end": 39
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 39
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 39
                },
                "flags": 32,
                "start": 13,
                "end": 41
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "function* f() { class C { aaa = yield } }\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

