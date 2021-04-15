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
{}
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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 0,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "union",
                "rawText": "union",
                "flags": 768,
                "start": 4,
                "end": 10
            },
            "typeParameters": null,
            "type": {
                "kind": 137,
                "types": [
                    {
                        "kind": 134217969,
                        "properties": [
                            {
                                "kind": 193,
                                "key": {
                                    "kind": 134299649,
                                    "text": "type",
                                    "rawText": "type",
                                    "flags": 768,
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
                                "staticToken": false,
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
                        "kind": 134217969,
                        "properties": [
                            {
                                "kind": 193,
                                "key": {
                                    "kind": 134299649,
                                    "text": "type",
                                    "rawText": "type",
                                    "flags": 768,
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
                                "staticToken": false,
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
            "flags": 0,
            "start": 0,
            "end": 44
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 44,
                "end": 60
            },
            "name": {
                "kind": 134299649,
                "text": "overloads",
                "rawText": "overloads",
                "flags": 768,
                "start": 50,
                "end": 60
            },
            "typeParameters": null,
            "type": {
                "kind": 138,
                "types": [
                    {
                        "kind": 148,
                        "parameters": [
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 69,
                                    "end": 70
                                },
                                "optionalToken": null,
                                "typeAnnotation": {
                                    "kind": 134234347,
                                    "flags": 768,
                                    "start": 71,
                                    "end": 78
                                },
                                "flags": 0,
                                "start": 69,
                                "end": 78
                            }
                        ],
                        "returnType": {
                            "kind": 134234345,
                            "flags": 768,
                            "start": 82,
                            "end": 89
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 69,
                        "end": 89
                    },
                    {
                        "kind": 148,
                        "parameters": [
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 97,
                                    "end": 98
                                },
                                "optionalToken": null,
                                "typeAnnotation": {
                                    "kind": 134234345,
                                    "flags": 768,
                                    "start": 99,
                                    "end": 106
                                },
                                "flags": 0,
                                "start": 97,
                                "end": 106
                            }
                        ],
                        "returnType": {
                            "kind": 134234347,
                            "flags": 768,
                            "start": 110,
                            "end": 117
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 97,
                        "end": 117
                    }
                ],
                "flags": 0,
                "start": 90,
                "end": 118
            },
            "flags": 0,
            "start": 44,
            "end": 120
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 120,
                "end": 133
            },
            "name": {
                "kind": 134299649,
                "text": "union2",
                "rawText": "union2",
                "flags": 768,
                "start": 126,
                "end": 133
            },
            "typeParameters": null,
            "type": {
                "kind": 134217969,
                "properties": [
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 137,
                            "end": 141
                        },
                        "value": {
                            "kind": 137,
                            "types": [
                                {
                                    "kind": 134217969,
                                    "properties": [
                                        {
                                            "kind": 193,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "type",
                                                "rawText": "type",
                                                "flags": 768,
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
                                            "staticToken": false,
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
                                    "kind": 134217969,
                                    "properties": [
                                        {
                                            "kind": 193,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "type",
                                                "rawText": "type",
                                                "flags": 768,
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
                                            "staticToken": false,
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
                        "staticToken": false,
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
            "flags": 0,
            "start": 120,
            "end": 181
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 181,
                "end": 198
            },
            "name": {
                "kind": 134299649,
                "text": "overloads2",
                "rawText": "overloads2",
                "flags": 768,
                "start": 187,
                "end": 198
            },
            "typeParameters": null,
            "type": {
                "kind": 134217969,
                "properties": [
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 202,
                            "end": 206
                        },
                        "value": {
                            "kind": 138,
                            "types": [
                                {
                                    "kind": 134217969,
                                    "properties": [
                                        {
                                            "kind": 193,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "type",
                                                "rawText": "type",
                                                "flags": 768,
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
                                            "staticToken": false,
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
                                    "kind": 134217969,
                                    "properties": [
                                        {
                                            "kind": 193,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "type",
                                                "rawText": "type",
                                                "flags": 768,
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
                                            "staticToken": false,
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
                        "staticToken": false,
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
            "flags": 0,
            "start": 181,
            "end": 246
        }
    ],
    "isModule": false,
    "text": "type union =\n | {type: \"A\"}\n | {type: \"B\"}\n;\n\ntype overloads =\n  & ((x: string) => number)\n  & ((x: number) => string)\n;\n\ntype union2 = {\n  x:\n    | {type: \"A\"}\n    | {type: \"B\"}\n};\n\ntype overloads2 = {\n  x:\n    & {type: \"A\"}\n    & {type: \"B\"}\n};",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 246
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

