# Kataw parser test case

## Input

`````js
type a = (((symbol[{[x]:string}][(((symbol[{[x]:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 260,
                "type": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 11,
                    "end": 11
                },
                "flags": 0,
                "start": 8,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "start": 11,
                    "end": 84
                },
                "flags": 32,
                "start": 11,
                "end": 84
            },
            "flags": 16,
            "start": 11,
            "end": 84
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 87,
                "end": 89
            },
            "flags": 16,
            "start": 87,
            "end": 89
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 93,
                "end": 95
            },
            "flags": 16,
            "start": 93,
            "end": 95
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 99,
                "end": 101
            },
            "flags": 16,
            "start": 99,
            "end": 101
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 105,
                "end": 107
            },
            "flags": 16,
            "start": 105,
            "end": 107
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 111,
                "end": 113
            },
            "flags": 16,
            "start": 111,
            "end": 113
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 536871042,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 115,
                            "end": 115
                        },
                        "flags": 32,
                        "start": 114,
                        "end": 116
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 117,
                        "end": 117
                    },
                    "flags": 32,
                    "start": 114,
                    "end": 118
                },
                "operatorToken": {
                    "kind": 134251592,
                    "flags": 64,
                    "start": 118,
                    "end": 120
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 123,
                                "end": 124
                            },
                            "operatorToken": {
                                "kind": 134252103,
                                "flags": 64,
                                "start": 124,
                                "end": 126
                            },
                            "right": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 271,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "start": 132,
                                                    "end": 135
                                                },
                                                "typeParameters": null,
                                                "parameters": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 130,
                                                        "end": 131
                                                    }
                                                ],
                                                "asyncKeyword": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 135,
                                                    "end": 137
                                                },
                                                "flags": 32,
                                                "start": 129,
                                                "end": 137
                                            },
                                            "flags": 32,
                                            "start": 128,
                                            "end": 138
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 128,
                                    "end": 138
                                },
                                "flags": 32,
                                "start": 126,
                                "end": 139
                            },
                            "flags": 32,
                            "start": 122,
                            "end": 139
                        },
                        "flags": 32,
                        "start": 122,
                        "end": 140
                    },
                    "flags": 32,
                    "start": 120,
                    "end": 140
                },
                "flags": 32,
                "start": 114,
                "end": 140
            },
            "flags": 16,
            "start": 114,
            "end": 140
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 143,
                "end": 145
            },
            "flags": 16,
            "start": 143,
            "end": 145
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 149,
                "end": 151
            },
            "flags": 16,
            "start": 149,
            "end": 151
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 155,
                "end": 157
            },
            "flags": 16,
            "start": 155,
            "end": 157
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 161,
                "end": 163
            },
            "flags": 16,
            "start": 161,
            "end": 163
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 167,
                "end": 169
            },
            "flags": 16,
            "start": 167,
            "end": 170
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[{[x]:string}][(((symbol[{[x]:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 170
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 11, end: 12
✖ An member access expression should take an argument. - start: 35, end: 58
✖ Identifier expected - start: 57, end: 58
✖ An member access expression should take an argument. - start: 35, end: 60
✖ Identifier expected - start: 59, end: 60
✖ An member access expression should take an argument. - start: 35, end: 62
✖ Identifier expected - start: 61, end: 62
✖ Expected a ')' to match the '(' token here - start: 84, end: 87
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 64, end: 87
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 34, end: 87
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 33, end: 87
✖ Expected a `;` - start: 89, end: 90
✖ Declaration or statement expected - start: 90, end: 93
✖ Expected a `;` - start: 95, end: 96
✖ Declaration or statement expected - start: 96, end: 99
✖ Expected a `;` - start: 101, end: 102
✖ Declaration or statement expected - start: 102, end: 105
✖ Expected a `;` - start: 107, end: 108
✖ Declaration or statement expected - start: 108, end: 111
✖ Expected a `;` - start: 113, end: 114
✖ An member access expression should take an argument. - start: 114, end: 118
✖ Identifier expected - start: 117, end: 118
✖ Expected a ')' to match the '(' token here - start: 140, end: 143
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 120, end: 143
✖ Expected a `;` - start: 145, end: 146
✖ Declaration or statement expected - start: 146, end: 149
✖ Expected a `;` - start: 151, end: 152
✖ Declaration or statement expected - start: 152, end: 155
✖ Expected a `;` - start: 157, end: 158
✖ Declaration or statement expected - start: 158, end: 161
✖ Expected a `;` - start: 163, end: 164
✖ Declaration or statement expected - start: 164, end: 167

```

