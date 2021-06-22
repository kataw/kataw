# Kataw parser test case

## Input

`````js
class Bar{
  @outer(
    @classDec class {
      @inner
      innerMethod() {}
    }
  )
  outerMethod() {}
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
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Bar",
                "rawText": "Bar",
                "flags": 96,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": {
                                "kind": 207,
                                "elements": [
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 65,
                                            "start": 10,
                                            "end": 14
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "outer",
                                                "rawText": "outer",
                                                "flags": 96,
                                                "start": 14,
                                                "end": 19
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 20,
                                                "end": 20
                                            },
                                            "flags": 268435488,
                                            "start": 14,
                                            "end": 20
                                        },
                                        "flags": 0,
                                        "start": 14,
                                        "end": 20
                                    },
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 65,
                                            "start": 20,
                                            "end": 26
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "classDec",
                                            "rawText": "classDec",
                                            "flags": 96,
                                            "start": 26,
                                            "end": 34
                                        },
                                        "flags": 0,
                                        "start": 26,
                                        "end": 34
                                    }
                                ],
                                "flags": 32,
                                "start": 10,
                                "end": 34
                            },
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "class",
                                "rawText": "class",
                                "flags": 96,
                                "start": 34,
                                "end": 40
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 10,
                            "end": 40
                        }
                    ],
                    "flags": 32,
                    "start": 10,
                    "end": 40
                },
                "flags": 9,
                "start": 32,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 40
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                                        "flags": 65,
                                        "start": 42,
                                        "end": 50
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "inner",
                                        "rawText": "inner",
                                        "flags": 96,
                                        "start": 50,
                                        "end": 55
                                    },
                                    "flags": 0,
                                    "start": 50,
                                    "end": 55
                                }
                            ],
                            "flags": 32,
                            "start": 42,
                            "end": 55
                        },
                        "classKeyword": null,
                        "name": {
                            "kind": 134299649,
                            "text": "innerMethod",
                            "rawText": "innerMethod",
                            "flags": 96,
                            "start": 55,
                            "end": 73
                        },
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": null,
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "start": 73,
                                "end": 73
                            },
                            "flags": 73,
                            "start": 32,
                            "end": 73
                        },
                        "flags": 17,
                        "start": 42,
                        "end": 73
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 74,
                                "end": 74
                            },
                            "returnType": null,
                            "arrowToken": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 77,
                                    "end": 77
                                },
                                "flags": 32,
                                "start": 75,
                                "end": 78
                            },
                            "flags": 32,
                            "start": 73,
                            "end": 78
                        },
                        "flags": 16,
                        "start": 73,
                        "end": 78
                    }
                ],
                "flags": 17,
                "start": 42,
                "end": 78
            },
            "flags": 16,
            "start": 40,
            "end": 84
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "outerMethod",
                    "rawText": "outerMethod",
                    "flags": 96,
                    "start": 88,
                    "end": 102
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 103,
                    "end": 103
                },
                "flags": 268435488,
                "start": 88,
                "end": 104
            },
            "flags": 16,
            "start": 88,
            "end": 104
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 106,
                "end": 106
            },
            "flags": 16,
            "start": 104,
            "end": 107
        }
    ],
    "isModule": false,
    "source": "class Bar{\n  @outer(\n    @classDec class {\n      @inner\n      innerMethod() {}\n    }\n  )\n  outerMethod() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 109
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 25, end: 26
✖ The parser expected to find a '}' to match the '{' token here - start: 41, end: 42
✖ Missing an opening brace - '{ - start: 73, end: 74
✖ Declaration or statement expected - start: 84, end: 88
✖ Expected a `;` - start: 104, end: 106
✖ Declaration or statement expected - start: 107, end: 109

```

