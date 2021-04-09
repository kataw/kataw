# Kataw parser test case

## Input

`````js
class x { "construct\u{6f}r"(){} }
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
            "name": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
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
                                "kind": 67174403,
                                "value": "constructor",
                                "autofix": 0,
                                "flags": 768,
                                "start": 9,
                                "end": 28
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 29,
                                "end": 30
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 31,
                                    "end": 31
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 30,
                                "end": 32
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 28,
                            "end": 32
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 32
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 34
            },
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "class x { \"construct\\u{6f}r\"(){} }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

