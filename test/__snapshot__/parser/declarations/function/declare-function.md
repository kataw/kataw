# Kataw parser test case

## Input

`````js
declare function foo<T>(): void;

declare function foo(x: number, y: string): void;

declare function foo(): void

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
            "declareKeyword": {
                "kind": 82165,
                "flags": 768,
                "start": 0,
                "end": 7
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 7,
                "end": 16
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 16,
                "end": 20
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 23,
                "end": 25
            },
            "contents": null,
            "typeParameters": {
                "kind": 146,
                "types": [
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 768,
                            "start": 21,
                            "end": 22
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 21,
                        "end": 22
                    }
                ],
                "flags": 0,
                "start": 20,
                "end": 23
            },
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 4259887,
                    "flags": 768,
                    "start": 26,
                    "end": 31
                },
                "flags": 0,
                "start": 25,
                "end": 31
            },
            "flags": 128,
            "start": 7,
            "end": 32
        },
        {
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 768,
                "start": 32,
                "end": 41
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 41,
                "end": 50
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 50,
                "end": 54
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 55,
                            "end": 56
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 768,
                                "start": 57,
                                "end": 64
                            },
                            "flags": 0,
                            "start": 56,
                            "end": 64
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 55,
                        "end": 64
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 65,
                            "end": 67
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 768,
                                "start": 68,
                                "end": 75
                            },
                            "flags": 0,
                            "start": 67,
                            "end": 75
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 65,
                        "end": 75
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 54,
                "end": 76
            },
            "contents": null,
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 4259887,
                    "flags": 768,
                    "start": 77,
                    "end": 82
                },
                "flags": 0,
                "start": 76,
                "end": 82
            },
            "flags": 128,
            "start": 41,
            "end": 83
        },
        {
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 768,
                "start": 83,
                "end": 92
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 92,
                "end": 101
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 101,
                "end": 105
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 105,
                "end": 107
            },
            "contents": null,
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 4259887,
                    "flags": 768,
                    "start": 108,
                    "end": 113
                },
                "flags": 0,
                "start": 107,
                "end": 113
            },
            "flags": 128,
            "start": 92,
            "end": 113
        }
    ],
    "isModule": false,
    "text": "declare function foo<T>(): void;\n\ndeclare function foo(x: number, y: string): void;\n\ndeclare function foo(): void\n",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 114
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

