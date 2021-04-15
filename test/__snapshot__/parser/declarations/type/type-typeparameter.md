# Kataw parser test case

## Input

`````js
type A = Foo<
  | {type: "A"}
  | {type: "B"}
>;

type B = Foo<
  & {type: "A"}
  & {type: "B"}
>;
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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 4,
                "end": 6
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 768,
                    "start": 8,
                    "end": 12
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
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
                                                "start": 19,
                                                "end": 23
                                            },
                                            "value": {
                                                "kind": 134217967,
                                                "value": "A",
                                                "flags": 0,
                                                "start": 24,
                                                "end": 28
                                            },
                                            "optionalToken": null,
                                            "staticToken": false,
                                            "flags": 0,
                                            "start": 19,
                                            "end": 28
                                        }
                                    ],
                                    "indexers": [],
                                    "callProperties": [],
                                    "internalSlots": [],
                                    "flags": 0,
                                    "start": 17,
                                    "end": 29
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
                                                "start": 35,
                                                "end": 39
                                            },
                                            "value": {
                                                "kind": 134217967,
                                                "value": "B",
                                                "flags": 0,
                                                "start": 40,
                                                "end": 44
                                            },
                                            "optionalToken": null,
                                            "staticToken": false,
                                            "flags": 0,
                                            "start": 35,
                                            "end": 44
                                        }
                                    ],
                                    "indexers": [],
                                    "callProperties": [],
                                    "internalSlots": [],
                                    "flags": 0,
                                    "start": 33,
                                    "end": 45
                                }
                            ],
                            "flags": 0,
                            "start": 29,
                            "end": 45
                        }
                    ],
                    "flags": 0,
                    "start": 12,
                    "end": 47
                },
                "flags": 0,
                "start": 8,
                "end": 47
            },
            "flags": 128,
            "start": 0,
            "end": 48
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 768,
                "start": 48,
                "end": 56
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 768,
                "start": 54,
                "end": 56
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 138,
                "types": [
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "Foo",
                            "rawText": "Foo",
                            "flags": 768,
                            "start": 58,
                            "end": 62
                        },
                        "typeParameters": {
                            "kind": 146,
                            "types": [],
                            "flags": 0,
                            "start": 62,
                            "end": 63
                        },
                        "flags": 0,
                        "start": 58,
                        "end": 63
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
                                    "start": 69,
                                    "end": 73
                                },
                                "value": {
                                    "kind": 134217967,
                                    "value": "A",
                                    "flags": 0,
                                    "start": 74,
                                    "end": 78
                                },
                                "optionalToken": null,
                                "staticToken": false,
                                "flags": 0,
                                "start": 69,
                                "end": 78
                            }
                        ],
                        "indexers": [],
                        "callProperties": [],
                        "internalSlots": [],
                        "flags": 0,
                        "start": 67,
                        "end": 79
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
                                    "start": 85,
                                    "end": 89
                                },
                                "value": {
                                    "kind": 134217967,
                                    "value": "B",
                                    "flags": 0,
                                    "start": 90,
                                    "end": 94
                                },
                                "optionalToken": null,
                                "staticToken": false,
                                "flags": 0,
                                "start": 85,
                                "end": 94
                            }
                        ],
                        "indexers": [],
                        "callProperties": [],
                        "internalSlots": [],
                        "flags": 0,
                        "start": 83,
                        "end": 95
                    }
                ],
                "flags": 0,
                "start": 63,
                "end": 95
            },
            "flags": 128,
            "start": 48,
            "end": 95
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 95,
                    "end": 95
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 768,
                    "start": 95,
                    "end": 97
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 97,
                    "end": 97
                },
                "flags": 256,
                "start": 95,
                "end": 97
            },
            "flags": 128,
            "start": 95,
            "end": 98
        }
    ],
    "isModule": false,
    "text": "type A = Foo<\n  | {type: \"A\"}\n  | {type: \"B\"}\n>;\n\ntype B = Foo<\n  & {type: \"A\"}\n  & {type: \"B\"}\n>;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 63,
            "end": 67
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 95,
            "end": 97
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 97,
            "end": 98
        }
    ],
    "start": 0,
    "end": 98
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

