# Kataw parser test case

## Input

`````js

/**
 * Leading trivia
 */
@decorator("hello")
class Remote { }

/**
 * Floating Comment
 */

@decorator("hi")
class AnotherRomote {
    constructor() {}
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
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 65,
                            "start": 0,
                            "end": 28
                        },
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "decorator",
                                "rawText": "decorator",
                                "flags": 96,
                                "start": 28,
                                "end": 37
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "hello",
                                        "rawText": "\"hello\"",
                                        "flags": 96,
                                        "start": 38,
                                        "end": 45
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 38,
                                "end": 45
                            },
                            "flags": 268435488,
                            "start": 28,
                            "end": 46
                        },
                        "flags": 0,
                        "start": 28,
                        "end": 46
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 46
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 0,
                "end": 52
            },
            "name": {
                "kind": 134299649,
                "text": "Remote",
                "rawText": "Remote",
                "flags": 96,
                "start": 52,
                "end": 59
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 61,
                    "end": 61
                },
                "flags": 59,
                "start": 32,
                "end": 63
            },
            "flags": 17,
            "start": 0,
            "end": 63
        },
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
                            "start": 63,
                            "end": 95
                        },
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "decorator",
                                "rawText": "decorator",
                                "flags": 96,
                                "start": 95,
                                "end": 104
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "hi",
                                        "rawText": "\"hi\"",
                                        "flags": 96,
                                        "start": 105,
                                        "end": 109
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 105,
                                "end": 109
                            },
                            "flags": 268435488,
                            "start": 95,
                            "end": 110
                        },
                        "flags": 0,
                        "start": 95,
                        "end": 110
                    }
                ],
                "flags": 32,
                "start": 63,
                "end": 110
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 63,
                "end": 116
            },
            "name": {
                "kind": 134299649,
                "text": "AnotherRomote",
                "rawText": "AnotherRomote",
                "flags": 96,
                "start": 116,
                "end": 130
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
                            "asteriskToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 132,
                                    "end": 148
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 149,
                                    "end": 150
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 152,
                                        "end": 152
                                    },
                                    "flags": 32,
                                    "start": 150,
                                    "end": 153
                                },
                                "flags": 2048,
                                "start": 148,
                                "end": 153
                            },
                            "flags": 2048,
                            "start": 132,
                            "end": 153
                        }
                    ],
                    "flags": 32,
                    "start": 132,
                    "end": 153
                },
                "flags": 130,
                "start": 32,
                "end": 155
            },
            "flags": 17,
            "start": 63,
            "end": 155
        }
    ],
    "isModule": false,
    "source": "\n/**\n * Leading trivia\n */\n@decorator(\"hello\")\nclass Remote { }\n\n/**\n * Floating Comment\n */\n\n@decorator(\"hi\")\nclass AnotherRomote {\n    constructor() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 155
}
```

### Printed

```javascript
/**
 * Leading trivia
 */

@decorator("\"hello\"")
class Remote {}
/**
 * Floating Comment
 */
@decorator("\"hi\"")
class AnotherRomote {
  constructor {}
}
```

### Diagnostics

```javascript
✔ No errors
```

