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
                            "protoKeyword": {
                                "kind": 8388716,
                                "flags": 65,
                                "start": 17,
                                "end": 28
                            },
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 28,
                                "end": 30
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 31,
                                "end": 38
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 39
                        },
                        {
                            "kind": 193,
                            "protoKeyword": {
                                "kind": 8388716,
                                "flags": 65,
                                "start": 39,
                                "end": 50
                            },
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 50,
                                "end": 54
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 148,
                                "parameters": {
                                    "kind": 208,
                                    "parameters": [
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
                                            "types": {
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
                            "flags": 0,
                            "start": 39,
                            "end": 71
                        }
                    ],
                    "flags": 0,
                    "start": 15,
                    "end": 71
                },
                "flags": 4128,
                "start": 15,
                "end": 71
            },
            "flags": 16,
            "start": 0,
            "end": 71
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 71,
            "end": 72
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "constructor",
                    "rawText": "constructor",
                    "flags": 96,
                    "start": 72,
                    "end": 89
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 90,
                            "end": 91
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 90,
                    "end": 91
                },
                "flags": 268435488,
                "start": 72,
                "end": 91
            },
            "flags": 16,
            "start": 72,
            "end": 91
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 92,
                "end": 99
            },
            "flags": 16,
            "start": 92,
            "end": 99
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 101,
                    "end": 106
                },
                "operand": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 106,
                    "end": 106
                },
                "flags": 32,
                "start": 101,
                "end": 106
            },
            "flags": 16,
            "start": 101,
            "end": 107
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
✖ The parser expected to find a '}' to match the '{' token here - start: 71, end: 72
✖ ',' expected - start: 91, end: 92
✖ Expected a `;` - start: 99, end: 100
✖ Declaration or statement expected - start: 100, end: 101
✖ Identifier expected - start: 106, end: 107
✖ Declaration or statement expected - start: 107, end: 109

```

