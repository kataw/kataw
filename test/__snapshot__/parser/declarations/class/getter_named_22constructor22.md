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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": {
                            "kind": 16498,
                            "flags": 64,
                            "start": 9,
                            "end": 13
                        },
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 201392131,
                                "text": "constructor",
                                "rawText": "\"constructor\"",
                                "flags": 96,
                                "start": 13,
                                "end": 27
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 3072,
                                "start": 28,
                                "end": 29
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 29,
                                "end": 31
                            },
                            "flags": 3072,
                            "start": 27,
                            "end": 31
                        },
                        "flags": 3072,
                        "start": 9,
                        "end": 31
                    }
                ],
                "flags": 32,
                "start": 7,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "class x { get \"constructor\"(){} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Class constructor may not be a accessor - start: 27, end: 28

```

