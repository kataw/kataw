# Kataw parser test case

## Input

`````js
var a : { (): number; }
var a : { <T>(x: T): number; }
var a: { (): number };
var a: { (): number; };
var a: { (): number; y: string; (x: string): string };
var a: { <T>(x: T): number; };
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 208,
                                            "functionTypeParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 11,
                                            "end": 11
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 13,
                                            "end": 20
                                        },
                                        "flags": 0,
                                        "start": 9,
                                        "end": 21
                                    }
                                ],
                                "flags": 0,
                                "start": 7,
                                "end": 23
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 23
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 23,
                "end": 27
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 27,
                            "end": 29
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "typeParameter": {
                                            "kind": 265,
                                            "typeParameters": [
                                                {
                                                    "kind": 146,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "start": 35,
                                                        "end": 36
                                                    },
                                                    "type": null,
                                                    "defaultType": null,
                                                    "flags": 0,
                                                    "start": 35,
                                                    "end": 36
                                                }
                                            ],
                                            "flags": 0,
                                            "start": 33,
                                            "end": 37
                                        },
                                        "value": {
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
                                                        "start": 38,
                                                        "end": 39
                                                    },
                                                    "optionalToken": null,
                                                    "typeAnnotation": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 40,
                                                            "end": 42
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 40,
                                                        "end": 42
                                                    },
                                                    "flags": 0,
                                                    "start": 38,
                                                    "end": 42
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 38,
                                            "end": 42
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 44,
                                            "end": 51
                                        },
                                        "flags": 0,
                                        "start": 33,
                                        "end": 52
                                    }
                                ],
                                "flags": 0,
                                "start": 31,
                                "end": 54
                            },
                            "flags": 0,
                            "start": 29,
                            "end": 54
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 27,
                        "end": 54
                    }
                ],
                "flags": 16,
                "start": 27,
                "end": 54
            },
            "flags": 16,
            "start": 23,
            "end": 54
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 54,
                "end": 58
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 58,
                            "end": 60
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 208,
                                            "functionTypeParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 65,
                                            "end": 65
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 67,
                                            "end": 74
                                        },
                                        "flags": 0,
                                        "start": 63,
                                        "end": 74
                                    }
                                ],
                                "flags": 0,
                                "start": 61,
                                "end": 76
                            },
                            "flags": 0,
                            "start": 60,
                            "end": 76
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 58,
                        "end": 76
                    }
                ],
                "flags": 16,
                "start": 58,
                "end": 76
            },
            "flags": 16,
            "start": 54,
            "end": 77
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 77,
                "end": 81
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 81,
                            "end": 83
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 208,
                                            "functionTypeParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 88,
                                            "end": 88
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 90,
                                            "end": 97
                                        },
                                        "flags": 0,
                                        "start": 86,
                                        "end": 98
                                    }
                                ],
                                "flags": 0,
                                "start": 84,
                                "end": 100
                            },
                            "flags": 0,
                            "start": 83,
                            "end": 100
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 81,
                        "end": 100
                    }
                ],
                "flags": 16,
                "start": 81,
                "end": 100
            },
            "flags": 16,
            "start": 77,
            "end": 101
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 101,
                "end": 105
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 105,
                            "end": 107
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 208,
                                            "functionTypeParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 112,
                                            "end": 112
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 114,
                                            "end": 121
                                        },
                                        "flags": 0,
                                        "start": 110,
                                        "end": 122
                                    },
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 122,
                                            "end": 124
                                        },
                                        "value": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 125,
                                            "end": 132
                                        },
                                        "optionalToken": null,
                                        "staticToken": null,
                                        "flags": 0,
                                        "start": 122,
                                        "end": 132
                                    },
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 132,
                                            "end": 132
                                        },
                                        "value": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 64,
                                                "start": 132,
                                                "end": 132
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 132,
                                            "end": 132
                                        },
                                        "optionalToken": null,
                                        "staticToken": null,
                                        "flags": 0,
                                        "start": 132,
                                        "end": 133
                                    },
                                    {
                                        "kind": 196,
                                        "typeParameter": null,
                                        "value": {
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
                                                        "start": 135,
                                                        "end": 136
                                                    },
                                                    "optionalToken": null,
                                                    "typeAnnotation": {
                                                        "kind": 134234347,
                                                        "flags": 64,
                                                        "start": 137,
                                                        "end": 144
                                                    },
                                                    "flags": 0,
                                                    "start": 135,
                                                    "end": 144
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 135,
                                            "end": 144
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 146,
                                            "end": 153
                                        },
                                        "flags": 0,
                                        "start": 133,
                                        "end": 153
                                    }
                                ],
                                "flags": 0,
                                "start": 108,
                                "end": 155
                            },
                            "flags": 0,
                            "start": 107,
                            "end": 155
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 105,
                        "end": 155
                    }
                ],
                "flags": 16,
                "start": 105,
                "end": 155
            },
            "flags": 16,
            "start": 101,
            "end": 156
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 156,
                "end": 160
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 160,
                            "end": 162
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "typeParameter": {
                                            "kind": 265,
                                            "typeParameters": [
                                                {
                                                    "kind": 146,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "start": 167,
                                                        "end": 168
                                                    },
                                                    "type": null,
                                                    "defaultType": null,
                                                    "flags": 0,
                                                    "start": 167,
                                                    "end": 168
                                                }
                                            ],
                                            "flags": 0,
                                            "start": 165,
                                            "end": 169
                                        },
                                        "value": {
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
                                                        "start": 170,
                                                        "end": 171
                                                    },
                                                    "optionalToken": null,
                                                    "typeAnnotation": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 172,
                                                            "end": 174
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 172,
                                                        "end": 174
                                                    },
                                                    "flags": 0,
                                                    "start": 170,
                                                    "end": 174
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 170,
                                            "end": 174
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 176,
                                            "end": 183
                                        },
                                        "flags": 0,
                                        "start": 165,
                                        "end": 184
                                    }
                                ],
                                "flags": 0,
                                "start": 163,
                                "end": 186
                            },
                            "flags": 0,
                            "start": 162,
                            "end": 186
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 160,
                        "end": 186
                    }
                ],
                "flags": 16,
                "start": 160,
                "end": 186
            },
            "flags": 16,
            "start": 156,
            "end": 187
        }
    ],
    "isModule": false,
    "source": "var a : { (): number; }\nvar a : { <T>(x: T): number; }\nvar a: { (): number };\nvar a: { (): number; };\nvar a: { (): number; y: string; (x: string): string };\nvar a: { <T>(x: T): number; };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 187
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 132, end: 133

```

