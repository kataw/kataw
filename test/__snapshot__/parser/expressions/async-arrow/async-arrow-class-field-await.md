# Kataw parser test case

## Input

`````js
async () => class C { aaa = await };

async( x = class { x = await });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 768,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [],
            "asyncToken": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 189,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 768,
                    "start": 11,
                    "end": 17
                },
                "name": {
                    "kind": 134299649,
                    "text": "C",
                    "rawText": "C",
                    "flags": 768,
                    "start": 17,
                    "end": 19
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
                                "text": "aaa",
                                "rawText": "aaa",
                                "flags": 768,
                                "start": 21,
                                "end": 25
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 208,
                                "awaitToken": {
                                    "kind": 82032,
                                    "flags": 768,
                                    "start": 27,
                                    "end": 33
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 33,
                                    "end": 33
                                },
                                "flags": 256,
                                "start": 27,
                                "end": 33
                            },
                            "flags": 256,
                            "start": 21,
                            "end": 33
                        }
                    ],
                    "flags": 256,
                    "start": 21,
                    "end": 35
                },
                "flags": 256,
                "start": 11,
                "end": 35
            },
            "flags": 2304,
            "start": 0,
            "end": 35
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 35,
            "end": 36
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 768,
                "start": 36,
                "end": 43
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 44,
                            "end": 46
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 768,
                            "start": 46,
                            "end": 48
                        },
                        "right": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 768,
                                "start": 48,
                                "end": 54
                            },
                            "name": null,
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 56,
                                            "end": 58
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 768,
                                            "start": 60,
                                            "end": 66
                                        },
                                        "flags": 256,
                                        "start": 56,
                                        "end": 66
                                    }
                                ],
                                "flags": 256,
                                "start": 56,
                                "end": 68
                            },
                            "flags": 256,
                            "start": 48,
                            "end": 68
                        },
                        "flags": 256,
                        "start": 44,
                        "end": 68
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 36,
                "end": 36
            },
            "flags": 256,
            "start": 36,
            "end": 69
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 69,
            "end": 70
        }
    ],
    "isModule": false,
    "text": "async () => class C { aaa = await };\n\nasync( x = class { x = await });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 33,
            "end": 35
        }
    ],
    "start": 0,
    "end": 70
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

