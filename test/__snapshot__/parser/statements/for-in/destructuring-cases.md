# Kataw parser test case

## Input

`````js
for ({...a.b} in c) ;
for (let {...a.b} in c);
for (let {...a.b = c} in d);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 224,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 6,
                                "end": 9
                            },
                            "argument": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 10
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 12
                                },
                                "flags": 536870944,
                                "start": 9,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 6,
                    "end": 12
                },
                "flags": 48,
                "start": 5,
                "end": 13
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 13,
                "end": 16
            },
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 19,
                "end": 21
            },
            "flags": 80,
            "start": 0,
            "end": 21
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 21,
                "end": 25
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "start": 21,
                    "end": 30
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 32,
                                                "end": 35
                                            },
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 35,
                                                "end": 36
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": null,
                                            "flags": 0,
                                            "start": 32,
                                            "end": 36
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 32,
                                    "end": 36
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 36
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 30,
                            "end": 36
                        }
                    ],
                    "flags": 16,
                    "start": 30,
                    "end": 36
                },
                "flags": 33554448,
                "start": 21,
                "end": 36
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 38,
                "end": 38
            },
            "incrementor": {
                "kind": 129,
                "member": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 36,
                    "end": 36
                },
                "expression": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 37,
                    "end": 38
                },
                "flags": 536870944,
                "start": 36,
                "end": 38
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 38,
                    "end": 38
                },
                "flags": 16,
                "start": 38,
                "end": 38
            },
            "flags": 81,
            "start": 21,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 39,
                    "end": 39
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "start": 39,
                    "end": 42
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 42,
                    "end": 44
                },
                "flags": 32,
                "start": 39,
                "end": 44
            },
            "flags": 16,
            "start": 39,
            "end": 44
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 45,
            "end": 46
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 46,
                "end": 50
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "start": 46,
                    "end": 55
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 57,
                                                "end": 60
                                            },
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 60,
                                                "end": 61
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": null,
                                            "flags": 0,
                                            "start": 57,
                                            "end": 61
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 57,
                                    "end": 61
                                },
                                "flags": 32,
                                "start": 55,
                                "end": 61
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 55,
                            "end": 61
                        }
                    ],
                    "flags": 16,
                    "start": 55,
                    "end": 61
                },
                "flags": 33554448,
                "start": 46,
                "end": 61
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 67,
                "end": 67
            },
            "incrementor": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 61,
                        "end": 61
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 62,
                        "end": 63
                    },
                    "flags": 536870944,
                    "start": 61,
                    "end": 63
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 63,
                    "end": 65
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 65,
                    "end": 67
                },
                "flags": 32,
                "start": 61,
                "end": 67
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 67,
                    "end": 67
                },
                "flags": 16,
                "start": 67,
                "end": 67
            },
            "flags": 81,
            "start": 46,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 68,
                    "end": 68
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "start": 68,
                    "end": 71
                },
                "right": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 71,
                    "end": 73
                },
                "flags": 32,
                "start": 68,
                "end": 73
            },
            "flags": 16,
            "start": 68,
            "end": 73
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 74,
            "end": 75
        }
    ],
    "isModule": false,
    "source": "for ({...a.b} in c) ;\nfor (let {...a.b} in c);\nfor (let {...a.b = c} in d);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 36, end: 37
✖ The parser expected to find a '}' to match the '{' token here - start: 36, end: 37
✖ Missing initializer in destructuring declaration - start: 36, end: 37
✖ ',' expected - start: 36, end: 37
✖ Identifier expected - start: 38, end: 39
✖ Identifier expected - start: 39, end: 42
✖ Expected a `;` - start: 44, end: 45
✖ ',' expected - start: 61, end: 62
✖ The parser expected to find a '}' to match the '{' token here - start: 61, end: 62
✖ Missing initializer in destructuring declaration - start: 61, end: 62
✖ ',' expected - start: 61, end: 62
✖ Identifier expected - start: 67, end: 68
✖ Identifier expected - start: 68, end: 71
✖ Expected a `;` - start: 73, end: 74

```

