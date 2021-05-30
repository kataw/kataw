# Kataw parser test case

## Input

`````js
type union =
 | {type: "A"}
 | {type: "B"}
;

type overloads =
  & ((x: string) => number)
  & ((x: number) => string)
;

type union2 = {
  x:
    | {type: "A"}
    | {type: "B"}
};

type overloads2 = {
  x:
    & {type: "A"}
    & {type: "B"}
};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "union",
                "rawText": "union",
                "flags": 96,
                "start": 4,
                "end": 10
            },
            "typeParameters": null,
            "type": {
                "kind": 137,
                "types": [
                    {
                        "kind": 134234353,
                        "properties": [
                            {
                                "kind": 193,
                                "key": {
                                    "kind": 134299649,
                                    "text": "type",
                                    "rawText": "type",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 21
                                },
                                "value": {
                                    "kind": 134217967,
                                    "value": "A",
                                    "flags": 0,
                                    "start": 22,
                                    "end": 26
                                },
                                "optionalToken": null,
                                "staticToken": null,
                                "flags": 0,
                                "start": 17,
                                "end": 26
                            }
                        ],
                        "indexers": [],
                        "callProperties": [],
                        "internalSlots": [],
                        "flags": 0,
                        "start": 15,
                        "end": 27
                    },
                    {
                        "kind": 134234353,
                        "properties": [
                            {
                                "kind": 193,
                                "key": {
                                    "kind": 134299649,
                                    "text": "type",
                                    "rawText": "type",
                                    "flags": 96,
                                    "start": 32,
                                    "end": 36
                                },
                                "value": {
                                    "kind": 134217967,
                                    "value": "B",
                                    "flags": 0,
                                    "start": 37,
                                    "end": 41
                                },
                                "optionalToken": null,
                                "staticToken": null,
                                "flags": 0,
                                "start": 32,
                                "end": 41
                            }
                        ],
                        "indexers": [],
                        "callProperties": [],
                        "internalSlots": [],
                        "flags": 0,
                        "start": 30,
                        "end": 42
                    }
                ],
                "flags": 0,
                "start": 27,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 44
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 44,
                "end": 60
            },
            "name": {
                "kind": 134299649,
                "text": "overloads",
                "rawText": "overloads",
                "flags": 96,
                "start": 50,
                "end": 60
            },
            "typeParameters": null,
            "type": {
                "kind": 260,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 69,
                        "end": 70
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 69,
                    "end": 70
                },
                "flags": 0,
                "start": 66,
                "end": 70
            },
            "flags": 16,
            "start": 44,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 71,
                "end": 78
            },
            "flags": 16,
            "start": 71,
            "end": 78
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "number",
                "rawText": "number",
                "flags": 96,
                "start": 82,
                "end": 89
            },
            "flags": 16,
            "start": 82,
            "end": 89
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 90,
                    "end": 90
                },
                "operatorToken": {
                    "kind": 134252103,
                    "flags": 65,
                    "start": 90,
                    "end": 94
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 107,
                            "end": 110
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 203,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 97,
                                    "end": 98
                                },
                                "optionalToken": null,
                                "type": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 99,
                                        "end": 106
                                    },
                                    "flags": 0,
                                    "start": 98,
                                    "end": 106
                                },
                                "right": null,
                                "flags": 32,
                                "start": 96,
                                "end": 106
                            }
                        ],
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 134299649,
                            "text": "string",
                            "rawText": "string",
                            "flags": 96,
                            "start": 110,
                            "end": 117
                        },
                        "flags": 32,
                        "start": 96,
                        "end": 117
                    },
                    "flags": 32,
                    "start": 94,
                    "end": 118
                },
                "flags": 32,
                "start": 90,
                "end": 118
            },
            "flags": 16,
            "start": 90,
            "end": 120
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 120,
                "end": 133
            },
            "name": {
                "kind": 134299649,
                "text": "union2",
                "rawText": "union2",
                "flags": 96,
                "start": 126,
                "end": 133
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 137,
                            "end": 141
                        },
                        "value": {
                            "kind": 137,
                            "types": [
                                {
                                    "kind": 134234353,
                                    "properties": [
                                        {
                                            "kind": 193,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "type",
                                                "rawText": "type",
                                                "flags": 96,
                                                "start": 150,
                                                "end": 154
                                            },
                                            "value": {
                                                "kind": 134217967,
                                                "value": "A",
                                                "flags": 0,
                                                "start": 155,
                                                "end": 159
                                            },
                                            "optionalToken": null,
                                            "staticToken": null,
                                            "flags": 0,
                                            "start": 150,
                                            "end": 159
                                        }
                                    ],
                                    "indexers": [],
                                    "callProperties": [],
                                    "internalSlots": [],
                                    "flags": 0,
                                    "start": 148,
                                    "end": 160
                                },
                                {
                                    "kind": 134234353,
                                    "properties": [
                                        {
                                            "kind": 193,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "type",
                                                "rawText": "type",
                                                "flags": 96,
                                                "start": 168,
                                                "end": 172
                                            },
                                            "value": {
                                                "kind": 134217967,
                                                "value": "B",
                                                "flags": 0,
                                                "start": 173,
                                                "end": 177
                                            },
                                            "optionalToken": null,
                                            "staticToken": null,
                                            "flags": 0,
                                            "start": 168,
                                            "end": 177
                                        }
                                    ],
                                    "indexers": [],
                                    "callProperties": [],
                                    "internalSlots": [],
                                    "flags": 0,
                                    "start": 166,
                                    "end": 178
                                }
                            ],
                            "flags": 0,
                            "start": 160,
                            "end": 178
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 0,
                        "start": 137,
                        "end": 178
                    }
                ],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 135,
                "end": 180
            },
            "flags": 16,
            "start": 120,
            "end": 181
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 181,
                "end": 198
            },
            "name": {
                "kind": 134299649,
                "text": "overloads2",
                "rawText": "overloads2",
                "flags": 96,
                "start": 187,
                "end": 198
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 202,
                            "end": 206
                        },
                        "value": {
                            "kind": 138,
                            "types": [
                                {
                                    "kind": 134234353,
                                    "properties": [
                                        {
                                            "kind": 193,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "type",
                                                "rawText": "type",
                                                "flags": 96,
                                                "start": 215,
                                                "end": 219
                                            },
                                            "value": {
                                                "kind": 134217967,
                                                "value": "A",
                                                "flags": 0,
                                                "start": 220,
                                                "end": 224
                                            },
                                            "optionalToken": null,
                                            "staticToken": null,
                                            "flags": 0,
                                            "start": 215,
                                            "end": 224
                                        }
                                    ],
                                    "indexers": [],
                                    "callProperties": [],
                                    "internalSlots": [],
                                    "flags": 0,
                                    "start": 213,
                                    "end": 225
                                },
                                {
                                    "kind": 134234353,
                                    "properties": [
                                        {
                                            "kind": 193,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "type",
                                                "rawText": "type",
                                                "flags": 96,
                                                "start": 233,
                                                "end": 237
                                            },
                                            "value": {
                                                "kind": 134217967,
                                                "value": "B",
                                                "flags": 0,
                                                "start": 238,
                                                "end": 242
                                            },
                                            "optionalToken": null,
                                            "staticToken": null,
                                            "flags": 0,
                                            "start": 233,
                                            "end": 242
                                        }
                                    ],
                                    "indexers": [],
                                    "callProperties": [],
                                    "internalSlots": [],
                                    "flags": 0,
                                    "start": 231,
                                    "end": 243
                                }
                            ],
                            "flags": 0,
                            "start": 225,
                            "end": 243
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 0,
                        "start": 202,
                        "end": 243
                    }
                ],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 200,
                "end": 245
            },
            "flags": 16,
            "start": 181,
            "end": 246
        }
    ],
    "isModule": false,
    "source": "type union =\n | {type: \"A\"}\n | {type: \"B\"}\n;\n\ntype overloads =\n  & ((x: string) => number)\n  & ((x: number) => string)\n;\n\ntype union2 = {\n  x:\n    | {type: \"A\"}\n    | {type: \"B\"}\n};\n\ntype overloads2 = {\n  x:\n    & {type: \"A\"}\n    & {type: \"B\"}\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 246
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 70, end: 71
✖ Expected a `;` - start: 78, end: 79
✖ Declaration or statement expected - start: 79, end: 82
✖ Expected a `;` - start: 89, end: 90
✖ Identifier expected - start: 90, end: 94

```

