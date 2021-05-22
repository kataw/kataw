# Kataw parser test case

## Input

`````js
declare function foo<T>(): void;

declare function foo(x: number, y: string): void;

declare function foo(): void

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
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 7,
                "end": 16
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 23,
                "end": 25
            },
            "contents": null,
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 21,
                                "end": 22
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 21,
                            "end": 22
                        },
                        "initializer": null,
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
                    "kind": 138477615,
                    "flags": 64,
                    "start": 26,
                    "end": 31
                },
                "flags": 0,
                "start": 7,
                "end": 31
            },
            "flags": 16,
            "start": 7,
            "end": 31
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 31,
            "end": 32
        },
        {
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 32,
                "end": 41
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 41,
                "end": 50
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
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
                            "flags": 96,
                            "start": 55,
                            "end": 56
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 57,
                                "end": 64
                            },
                            "flags": 0,
                            "start": 56,
                            "end": 64
                        },
                        "initializer": null,
                        "flags": 32,
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
                            "flags": 96,
                            "start": 65,
                            "end": 67
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 68,
                                "end": 75
                            },
                            "flags": 0,
                            "start": 67,
                            "end": 75
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 65,
                        "end": 75
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 54,
                "end": 76
            },
            "contents": null,
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 77,
                    "end": 82
                },
                "flags": 0,
                "start": 41,
                "end": 82
            },
            "flags": 16,
            "start": 41,
            "end": 82
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 82,
            "end": 83
        },
        {
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 83,
                "end": 92
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 92,
                "end": 101
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 101,
                "end": 105
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 105,
                "end": 107
            },
            "contents": null,
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 108,
                    "end": 113
                },
                "flags": 0,
                "start": 92,
                "end": 113
            },
            "flags": 16,
            "start": 92,
            "end": 113
        }
    ],
    "isModule": false,
    "source": "declare function foo<T>(): void;\n\ndeclare function foo(x: number, y: string): void;\n\ndeclare function foo(): void\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 114
}
```

### Printed

```javascript

function foo();
function foo(x, y);
function foo();
```

### Diagnostics

```javascript
✔ No errors
```

