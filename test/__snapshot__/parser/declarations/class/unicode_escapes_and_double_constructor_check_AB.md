# Kataw parser test case

## Input

`````js
class x { \u0063onstructor(){}; constructor(){} }
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
            "kind": 178,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 81921,
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
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "constructor",
                                "rawText": "x",
                                "flags": 768,
                                "start": 9,
                                "end": 26
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 27,
                                "end": 28
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
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 256,
                                "start": 28,
                                "end": 30
                            },
                            "flags": 0,
                            "start": 26,
                            "end": 30
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 30
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 30
            },
            "flags": 128,
            "start": 0,
            "end": 30
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 30,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "text": "constructor",
                    "rawText": "constructor",
                    "flags": 768,
                    "start": 31,
                    "end": 43
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 44,
                    "end": 44
                },
                "flags": 256,
                "start": 31,
                "end": 45
            },
            "flags": 128,
            "start": 31,
            "end": 45
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 46,
                "end": 46
            },
            "flags": 128,
            "start": 45,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "class x { \\u0063onstructor(){}; constructor(){} }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 45,
            "end": 46
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 47,
            "end": 49
        }
    ],
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

