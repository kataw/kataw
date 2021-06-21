# Kataw parser test case

## Input

`````js
let one = {
  m1(this: number) {},

  m2(this: number, a) {},

  m3(this: number, ...a) {},

  m4(this: number, a, b, ...c) {},

  m5<T>(this: T) {}

};
`````

## Options

`````js
{ allowTypes : false }
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
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "one",
                            "rawText": "one",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "m1",
                                                "rawText": "m1",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 16
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [
                                                    {
                                                        "kind": 281,
                                                        "ellipsisToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "this",
                                                            "rawText": "this",
                                                            "flags": 96,
                                                            "start": 17,
                                                            "end": 21
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "right": null,
                                                        "flags": 32,
                                                        "start": 17,
                                                        "end": 21
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "start": 17,
                                                "end": 22
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 21,
                                                    "end": 21
                                                },
                                                "flags": 32,
                                                "start": 21,
                                                "end": 21
                                            },
                                            "flags": 33,
                                            "start": 16,
                                            "end": 21
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 11,
                                "end": 21
                            },
                            "flags": 49,
                            "start": 9,
                            "end": 21
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 21
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 21
            },
            "flags": 33554448,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "number",
                "rawText": "number",
                "flags": 96,
                "start": 22,
                "end": 29
            },
            "flags": 16,
            "start": 22,
            "end": 29
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 32,
                "end": 32
            },
            "flags": 16,
            "start": 30,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "m2",
                    "rawText": "m2",
                    "flags": 96,
                    "start": 34,
                    "end": 40
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 4276321,
                            "flags": 96,
                            "start": 41,
                            "end": 45
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 41,
                    "end": 45
                },
                "flags": 268435488,
                "start": 34,
                "end": 45
            },
            "flags": 16,
            "start": 34,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 96,
                        "start": 46,
                        "end": 53
                    },
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 54,
                        "end": 56
                    }
                ],
                "flags": 32,
                "start": 46,
                "end": 56
            },
            "flags": 16,
            "start": 46,
            "end": 56
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 59,
                "end": 59
            },
            "flags": 16,
            "start": 57,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "m3",
                    "rawText": "m3",
                    "flags": 96,
                    "start": 61,
                    "end": 67
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 4276321,
                            "flags": 96,
                            "start": 68,
                            "end": 72
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 68,
                    "end": 72
                },
                "flags": 268435488,
                "start": 61,
                "end": 72
            },
            "flags": 16,
            "start": 61,
            "end": 72
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 96,
                        "start": 73,
                        "end": 80
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 81,
                        "end": 81
                    }
                ],
                "flags": 32,
                "start": 73,
                "end": 81
            },
            "flags": 16,
            "start": 73,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 85,
                "end": 86
            },
            "flags": 16,
            "start": 85,
            "end": 86
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 89,
                "end": 89
            },
            "flags": 16,
            "start": 87,
            "end": 90
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "m4",
                    "rawText": "m4",
                    "flags": 96,
                    "start": 91,
                    "end": 97
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 4276321,
                            "flags": 96,
                            "start": 98,
                            "end": 102
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 98,
                    "end": 102
                },
                "flags": 268435488,
                "start": 91,
                "end": 102
            },
            "flags": 16,
            "start": 91,
            "end": 102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 96,
                        "start": 103,
                        "end": 110
                    },
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 111,
                        "end": 113
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 114,
                        "end": 116
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 117,
                        "end": 117
                    }
                ],
                "flags": 32,
                "start": 103,
                "end": 117
            },
            "flags": 16,
            "start": 103,
            "end": 117
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 121,
                "end": 122
            },
            "flags": 16,
            "start": 121,
            "end": 122
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 125,
                "end": 125
            },
            "flags": 16,
            "start": 123,
            "end": 126
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "m5",
                        "rawText": "m5",
                        "flags": 96,
                        "start": 127,
                        "end": 133
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "start": 133,
                        "end": 134
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 134,
                        "end": 135
                    },
                    "flags": 32,
                    "start": 127,
                    "end": 135
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "start": 135,
                    "end": 136
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [],
                        "flags": 32,
                        "start": 136,
                        "end": 141
                    },
                    "flags": 32,
                    "start": 136,
                    "end": 141
                },
                "flags": 32,
                "start": 127,
                "end": 141
            },
            "flags": 16,
            "start": 127,
            "end": 141
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 142,
                "end": 144
            },
            "flags": 16,
            "start": 142,
            "end": 144
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 147,
                "end": 147
            },
            "flags": 16,
            "start": 145,
            "end": 148
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 151,
            "end": 152
        }
    ],
    "isModule": false,
    "source": "let one = {\n  m1(this: number) {},\n\n  m2(this: number, a) {},\n\n  m3(this: number, ...a) {},\n\n  m4(this: number, a, b, ...c) {},\n\n  m5<T>(this: T) {}\n\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 152
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The 'this' keyword cannot be a formal parameter - start: 17, end: 21
✖ ',' expected - start: 21, end: 22
✖ Expected a ')' to match the '(' token here - start: 21, end: 22
✖ ',' expected - start: 21, end: 22
✖ Expected a `;` - start: 29, end: 30
✖ Declaration or statement expected - start: 33, end: 34
✖ ',' expected - start: 45, end: 46
✖ Expected a `;` - start: 56, end: 57
✖ Declaration or statement expected - start: 60, end: 61
✖ ',' expected - start: 72, end: 73
✖ Identifier expected - start: 81, end: 85
✖ Expected a `;` - start: 86, end: 87
✖ Declaration or statement expected - start: 90, end: 91
✖ ',' expected - start: 102, end: 103
✖ Identifier expected - start: 117, end: 121
✖ Expected a `;` - start: 122, end: 123
✖ Declaration or statement expected - start: 126, end: 127
✖ Expected a ')' to match the '(' token here - start: 141, end: 142
✖ Expected a `;` - start: 144, end: 145
✖ Declaration or statement expected - start: 148, end: 151

```

