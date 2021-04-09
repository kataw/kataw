# Kataw parser test case

## Input

`````js
class x { get "constructor"(){} }
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
                                "start": 13,
                                "end": 27
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 28,
                                "end": 29
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
                                    "start": 30,
                                    "end": 30
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 29,
                                "end": 31
                            },
                            "autofix": 0,
                            "flags": 8192,
                            "start": 27,
                            "end": 31
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 31
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 33
            },
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "class x { get \"constructor\"(){} }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 67,
            "error": "Class constructor may not be a accessor",
            "start": 27,
            "end": 28
        }
    ],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

