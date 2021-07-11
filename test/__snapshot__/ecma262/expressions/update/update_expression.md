# Kataw parser test case

## Input

`````js
(this.x++).toString()
new (r++);
(x++)();
const uuid = String(this._uuidCounter++);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 127,
                            "operandToken": {
                                "kind": 196635,
                                "flags": 96,
                                "start": 7,
                                "end": 9
                            },
                            "operand": {
                                "kind": 129,
                                "member": {
                                    "kind": 4276321,
                                    "flags": 96,
                                    "start": 1,
                                    "end": 5
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 6,
                                    "end": 7
                                },
                                "flags": 96,
                                "start": 0,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 9
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 10
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "toString",
                        "rawText": "toString",
                        "flags": 96,
                        "start": 11,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 19
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 20,
                    "end": 20
                },
                "flags": 268435488,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "start": 21,
                    "end": 25
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 127,
                        "operandToken": {
                            "kind": 196635,
                            "flags": 96,
                            "start": 28,
                            "end": 30
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "r",
                            "rawText": "r",
                            "flags": 96,
                            "start": 27,
                            "end": 28
                        },
                        "flags": 32,
                        "start": 25,
                        "end": 30
                    },
                    "flags": 32,
                    "start": 25,
                    "end": 31
                },
                "argumentList": null,
                "flags": 97,
                "start": 21,
                "end": 31
            },
            "flags": 16,
            "start": 21,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 127,
                        "operandToken": {
                            "kind": 196635,
                            "flags": 96,
                            "start": 35,
                            "end": 37
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 34,
                            "end": 35
                        },
                        "flags": 32,
                        "start": 32,
                        "end": 37
                    },
                    "flags": 32,
                    "start": 32,
                    "end": 38
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 39,
                    "end": 39
                },
                "flags": 268435488,
                "start": 32,
                "end": 40
            },
            "flags": 16,
            "start": 32,
            "end": 41
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 41,
                "end": 47
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "uuid",
                            "rawText": "uuid",
                            "flags": 96,
                            "start": 47,
                            "end": 52
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "String",
                                "rawText": "String",
                                "flags": 96,
                                "start": 54,
                                "end": 61
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 127,
                                        "operandToken": {
                                            "kind": 196635,
                                            "flags": 96,
                                            "start": 79,
                                            "end": 81
                                        },
                                        "operand": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 4276321,
                                                "flags": 96,
                                                "start": 62,
                                                "end": 66
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "_uuidCounter",
                                                "rawText": "_uuidCounter",
                                                "flags": 96,
                                                "start": 67,
                                                "end": 79
                                            },
                                            "flags": 96,
                                            "start": 62,
                                            "end": 79
                                        },
                                        "flags": 32,
                                        "start": 62,
                                        "end": 81
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 62,
                                "end": 81
                            },
                            "flags": 268435488,
                            "start": 54,
                            "end": 82
                        },
                        "flags": 16,
                        "start": 47,
                        "end": 82
                    }
                ],
                "flags": 16777232,
                "start": 47,
                "end": 82
            },
            "flags": 33554448,
            "start": 41,
            "end": 83
        }
    ],
    "isModule": false,
    "source": "(this.x++).toString()\nnew (r++);\n(x++)();\nconst uuid = String(this._uuidCounter++);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript

(this.x++).toString();
new (r++);
(x++)();
const  uuid = String( this._uuidCounter++ ) ;

```

### Diagnostics

```javascript
✔ No errors
```

