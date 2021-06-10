# Kataw parser test case

## Input

`````js
declare class C {
    static x: number;
    static foo(x: number): void;

    constructor(x: string): void;
}

declare class D extends C { }

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
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 13
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 13,
                "end": 15
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 28,
                                "end": 30
                            },
                            "value": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 31,
                                "end": 38
                            },
                            "optionalToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 65,
                                "start": 17,
                                "end": 28
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 38
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 38,
                                "end": 38
                            },
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 38,
                                    "end": 38
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 38,
                                "end": 38
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 38,
                            "end": 39
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 50,
                                "end": 54
                            },
                            "value": {
                                "kind": 148,
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 55,
                                                "end": 56
                                            },
                                            "optionalToken": null,
                                            "typeAnnotation": {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 57,
                                                "end": 64
                                            },
                                            "flags": 0,
                                            "start": 55,
                                            "end": 64
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 55,
                                    "end": 64
                                },
                                "returnType": {
                                    "kind": 138477615,
                                    "flags": 64,
                                    "start": 66,
                                    "end": 71
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 54,
                                "end": 71
                            },
                            "optionalToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 65,
                                "start": 39,
                                "end": 50
                            },
                            "flags": 0,
                            "start": 39,
                            "end": 71
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 71,
                                "end": 71
                            },
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 71,
                                    "end": 71
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 71,
                                "end": 71
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 71,
                            "end": 72
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 96,
                                "start": 72,
                                "end": 89
                            },
                            "value": {
                                "kind": 148,
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 90,
                                                "end": 91
                                            },
                                            "optionalToken": null,
                                            "typeAnnotation": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 92,
                                                "end": 99
                                            },
                                            "flags": 0,
                                            "start": 90,
                                            "end": 99
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 90,
                                    "end": 99
                                },
                                "returnType": {
                                    "kind": 138477615,
                                    "flags": 64,
                                    "start": 101,
                                    "end": 106
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 89,
                                "end": 106
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 72,
                            "end": 106
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 106,
                                "end": 106
                            },
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 106,
                                    "end": 106
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 106,
                                "end": 106
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 106,
                            "end": 107
                        }
                    ],
                    "flags": 0,
                    "start": 15,
                    "end": 109
                },
                "flags": 4128,
                "start": 15,
                "end": 109
            },
            "flags": 16,
            "start": 0,
            "end": 109
        },
        {
            "kind": 178,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 109,
                "end": 118
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 109,
                "end": 124
            },
            "name": {
                "kind": 134299649,
                "text": "D",
                "rawText": "D",
                "flags": 96,
                "start": 124,
                "end": 126
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 126,
                        "end": 134
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 134,
                        "end": 136
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 134,
                    "end": 136
                },
                "body": {
                    "kind": 134234353,
                    "properties": [],
                    "flags": 0,
                    "start": 136,
                    "end": 140
                },
                "flags": 4128,
                "start": 126,
                "end": 140
            },
            "flags": 16,
            "start": 109,
            "end": 140
        }
    ],
    "isModule": false,
    "source": "declare class C {\n    static x: number;\n    static foo(x: number): void;\n\n    constructor(x: string): void;\n}\n\ndeclare class D extends C { }\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 141
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 38, end: 39
✖ Identifier expected - start: 71, end: 72
✖ Identifier expected - start: 106, end: 107

```

