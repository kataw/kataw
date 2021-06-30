# Kataw parser test case

## Input

`````js
const foo = {};

foo["bar"] = true;
foo["foo-bar"] = true;
foo.bar["bar"]["lorem_ispsum"].foo["lorem-ipsum"] = true;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 5,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 48,
                            "start": 11,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 14
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 14
            },
            "flags": 33554448,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 15,
                        "end": 20
                    },
                    "expression": {
                        "kind": 201392131,
                        "text": "bar",
                        "rawText": "\"bar\"",
                        "flags": 96,
                        "start": 21,
                        "end": 26
                    },
                    "flags": 536870944,
                    "start": 15,
                    "end": 27
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 27,
                    "end": 29
                },
                "right": {
                    "kind": 24752947,
                    "flags": 96,
                    "start": 29,
                    "end": 34
                },
                "flags": 32,
                "start": 15,
                "end": 34
            },
            "flags": 16,
            "start": 15,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 35,
                        "end": 39
                    },
                    "expression": {
                        "kind": 201392131,
                        "text": "foo-bar",
                        "rawText": "\"foo-bar\"",
                        "flags": 96,
                        "start": 40,
                        "end": 49
                    },
                    "flags": 536870944,
                    "start": 35,
                    "end": 50
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 50,
                    "end": 52
                },
                "right": {
                    "kind": 24752947,
                    "flags": 96,
                    "start": 52,
                    "end": 57
                },
                "flags": 32,
                "start": 35,
                "end": 57
            },
            "flags": 16,
            "start": 35,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 130,
                            "member": {
                                "kind": 130,
                                "member": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 58,
                                        "end": 62
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 63,
                                        "end": 66
                                    },
                                    "flags": 96,
                                    "start": 58,
                                    "end": 66
                                },
                                "expression": {
                                    "kind": 201392131,
                                    "text": "bar",
                                    "rawText": "\"bar\"",
                                    "flags": 96,
                                    "start": 67,
                                    "end": 72
                                },
                                "flags": 536870944,
                                "start": 58,
                                "end": 73
                            },
                            "expression": {
                                "kind": 201392131,
                                "text": "lorem_ispsum",
                                "rawText": "\"lorem_ispsum\"",
                                "flags": 96,
                                "start": 74,
                                "end": 88
                            },
                            "flags": 536870944,
                            "start": 58,
                            "end": 89
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 90,
                            "end": 93
                        },
                        "flags": 536870944,
                        "start": 58,
                        "end": 93
                    },
                    "expression": {
                        "kind": 201392131,
                        "text": "lorem-ipsum",
                        "rawText": "\"lorem-ipsum\"",
                        "flags": 96,
                        "start": 94,
                        "end": 107
                    },
                    "flags": 536870944,
                    "start": 58,
                    "end": 108
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 108,
                    "end": 110
                },
                "right": {
                    "kind": 24752947,
                    "flags": 96,
                    "start": 110,
                    "end": 115
                },
                "flags": 32,
                "start": 58,
                "end": 115
            },
            "flags": 16,
            "start": 58,
            "end": 116
        }
    ],
    "isModule": false,
    "source": "const foo = {};\n\nfoo[\"bar\"] = true;\nfoo[\"foo-bar\"] = true;\nfoo.bar[\"bar\"][\"lorem_ispsum\"].foo[\"lorem-ipsum\"] = true;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 116
}
```

### Printed

```javascript

const foo = {};
foo["\"bar\""] = true;
foo["\"foo-bar\""] = true;
foo.bar["\"bar\""]["\"lorem_ispsum\""].foo["\"lorem-ipsum\""] = true;

```

### Diagnostics

```javascript
✔ No errors
```

