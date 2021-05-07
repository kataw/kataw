# Kataw parser test case

## Input

`````js
class A { static static constructor() {} }
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
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 5,
                "end": 7
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
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 9,
                            "end": 16
                        },
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "static",
                            "rawText": "static",
                            "flags": 96,
                            "start": 16,
                            "end": 23
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 16,
                        "end": 23
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": null,
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
                                "start": 23,
                                "end": 35
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 2048,
                                "start": 36,
                                "end": 37
                            },
                            "type": null,
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
                            "flags": 2048,
                            "start": 35,
                            "end": 40
                        },
                        "flags": 2048,
                        "start": 23,
                        "end": 40
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "class A { static static constructor() {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'static' modifier already seen - start: 16, end: 35

```

