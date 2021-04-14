# Kataw parser test case

## Input

`````js
class A {
  x () {super()}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
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
                "text": "A",
                "rawText": "A",
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
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 9,
                                "end": 13
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 15,
                                "end": 16
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 768,
                                                        "start": 18,
                                                        "end": 23
                                                    },
                                                    "flags": 768,
                                                    "start": 18,
                                                    "end": 23
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 24,
                                                    "end": 24
                                                },
                                                "flags": 256,
                                                "start": 18,
                                                "end": 25
                                            },
                                            "flags": 128,
                                            "start": 18,
                                            "end": 25
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 18,
                                    "end": 25
                                },
                                "flags": 256,
                                "start": 16,
                                "end": 26
                            },
                            "flags": 0,
                            "start": 13,
                            "end": 26
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 26
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 28
            },
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "class A {\n  x () {super()}\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 23,
            "end": 24
        }
    ],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

