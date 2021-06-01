# Kataw parser test case

## Input

`````js
declare var arrOfObjs: Array<{ foo: string }>;
declare var roArrOfObjs: $ReadOnlyArray<{foo: string}>;
declare var tup: [{foo: string}, {bar: number}];
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
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 7,
                "end": 11
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "arrOfObjs",
                            "rawText": "arrOfObjs",
                            "flags": 96,
                            "start": 11,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 28
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [],
                                    "flags": 0,
                                    "start": 28,
                                    "end": 29
                                },
                                "flags": 0,
                                "start": 22,
                                "end": 29
                            },
                            "flags": 0,
                            "start": 21,
                            "end": 29
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 11,
                        "end": 29
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 30,
                                            "end": 34
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "string",
                                            "rawText": "string",
                                            "flags": 96,
                                            "start": 35,
                                            "end": 42
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 30,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 30,
                                "end": 42
                            },
                            "flags": 32,
                            "start": 29,
                            "end": 44
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 29,
                        "end": 44
                    }
                ],
                "flags": 16,
                "start": 11,
                "end": 44
            },
            "flags": 4112,
            "start": 7,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 44,
                    "end": 44
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 44,
                    "end": 45
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 45,
                    "end": 45
                },
                "flags": 32,
                "start": 44,
                "end": 45
            },
            "flags": 16,
            "start": 44,
            "end": 46
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 46,
                "end": 54
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
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
                            "text": "roArrOfObjs",
                            "rawText": "roArrOfObjs",
                            "flags": 96,
                            "start": 58,
                            "end": 70
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "$ReadOnlyArray",
                                    "rawText": "$ReadOnlyArray",
                                    "flags": 96,
                                    "start": 71,
                                    "end": 86
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [],
                                    "flags": 0,
                                    "start": 86,
                                    "end": 87
                                },
                                "flags": 0,
                                "start": 71,
                                "end": 87
                            },
                            "flags": 0,
                            "start": 70,
                            "end": 87
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 58,
                        "end": 87
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 88,
                                            "end": 91
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "string",
                                            "rawText": "string",
                                            "flags": 96,
                                            "start": 92,
                                            "end": 99
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 88,
                                        "end": 99
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 88,
                                "end": 99
                            },
                            "flags": 32,
                            "start": 87,
                            "end": 100
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 87,
                        "end": 100
                    }
                ],
                "flags": 16,
                "start": 58,
                "end": 100
            },
            "flags": 4112,
            "start": 54,
            "end": 100
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 100,
                    "end": 100
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 100,
                    "end": 101
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 101,
                    "end": 101
                },
                "flags": 32,
                "start": 100,
                "end": 101
            },
            "flags": 16,
            "start": 100,
            "end": 102
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 102,
                "end": 110
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 110,
                "end": 114
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "tup",
                            "rawText": "tup",
                            "flags": 96,
                            "start": 114,
                            "end": 118
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 147,
                                "elementTypes": [
                                    {
                                        "kind": 134234353,
                                        "properties": [
                                            {
                                                "kind": 193,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 122,
                                                    "end": 125
                                                },
                                                "value": {
                                                    "kind": 134234347,
                                                    "flags": 64,
                                                    "start": 126,
                                                    "end": 133
                                                },
                                                "optionalToken": null,
                                                "staticToken": null,
                                                "flags": 0,
                                                "start": 122,
                                                "end": 133
                                            }
                                        ],
                                        "indexers": [],
                                        "callProperties": [],
                                        "internalSlots": [],
                                        "flags": 0,
                                        "start": 121,
                                        "end": 134
                                    },
                                    {
                                        "kind": 134234353,
                                        "properties": [
                                            {
                                                "kind": 193,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "start": 137,
                                                    "end": 140
                                                },
                                                "value": {
                                                    "kind": 134234345,
                                                    "flags": 64,
                                                    "start": 141,
                                                    "end": 148
                                                },
                                                "optionalToken": null,
                                                "staticToken": null,
                                                "flags": 0,
                                                "start": 137,
                                                "end": 148
                                            }
                                        ],
                                        "indexers": [],
                                        "callProperties": [],
                                        "internalSlots": [],
                                        "flags": 0,
                                        "start": 135,
                                        "end": 149
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 119,
                                "end": 150
                            },
                            "flags": 0,
                            "start": 118,
                            "end": 150
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 114,
                        "end": 150
                    }
                ],
                "flags": 16,
                "start": 114,
                "end": 150
            },
            "flags": 4112,
            "start": 110,
            "end": 151
        }
    ],
    "isModule": false,
    "source": "declare var arrOfObjs: Array<{ foo: string }>;\ndeclare var roArrOfObjs: $ReadOnlyArray<{foo: string}>;\ndeclare var tup: [{foo: string}, {bar: number}];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 151
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected to find a '>' to match the '<' token here. - start: 29, end: 30
✖ ',' expected - start: 29, end: 30
✖ Missing initializer in destructuring declaration - start: 44, end: 45
✖ ',' expected - start: 44, end: 45
✖ Expected a `;` - start: 44, end: 45
✖ Identifier expected - start: 45, end: 46
✖ Expected to find a '>' to match the '<' token here. - start: 87, end: 88
✖ ',' expected - start: 87, end: 88
✖ Missing initializer in destructuring declaration - start: 100, end: 101
✖ ',' expected - start: 100, end: 101
✖ Expected a `;` - start: 100, end: 101
✖ Identifier expected - start: 101, end: 102

```

