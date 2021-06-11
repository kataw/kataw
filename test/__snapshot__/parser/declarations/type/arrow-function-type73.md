# Kataw parser test case

## Input

`````js
type a = (((symbol[{():string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;
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
                    "end": 22
                },
                "flags": 32,
                "start": 11,
                "end": 22
            },
            "flags": 16,
            "start": 11,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 23,
                "end": 29
            },
            "flags": 16,
            "start": 23,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 536871042,
                    "member": {
                        "kind": 536871042,
                        "member": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 32,
                                "end": 32
                            },
                            "flags": 32,
                            "start": 31,
                            "end": 33
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 34,
                            "end": 34
                        },
                        "flags": 32,
                        "start": 31,
                        "end": 35
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 36,
                        "end": 36
                    },
                    "flags": 32,
                    "start": 31,
                    "end": 37
                },
                "operatorToken": {
                    "kind": 134251592,
                    "flags": 64,
                    "start": 37,
                    "end": 39
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
                                "start": 42,
                                "end": 43
                            },
                            "operatorToken": {
                                "kind": 134252103,
                                "flags": 64,
                                "start": 43,
                                "end": 45
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
                                                    "start": 51,
                                                    "end": 54
                                                },
                                                "typeParameters": null,
                                                "parameters": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 49,
                                                        "end": 50
                                                    }
                                                ],
                                                "asyncKeyword": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 54,
                                                    "end": 56
                                                },
                                                "flags": 32,
                                                "start": 48,
                                                "end": 56
                                            },
                                            "flags": 32,
                                            "start": 47,
                                            "end": 57
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 47,
                                    "end": 57
                                },
                                "flags": 32,
                                "start": 45,
                                "end": 58
                            },
                            "flags": 32,
                            "start": 41,
                            "end": 58
                        },
                        "flags": 32,
                        "start": 41,
                        "end": 59
                    },
                    "flags": 32,
                    "start": 39,
                    "end": 59
                },
                "flags": 32,
                "start": 31,
                "end": 59
            },
            "flags": 16,
            "start": 31,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 62,
                "end": 64
            },
            "flags": 16,
            "start": 62,
            "end": 64
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 68,
                "end": 70
            },
            "flags": 16,
            "start": 68,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 74,
                "end": 76
            },
            "flags": 16,
            "start": 74,
            "end": 76
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 80,
                "end": 82
            },
            "flags": 16,
            "start": 80,
            "end": 82
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 86,
                "end": 88
            },
            "flags": 16,
            "start": 86,
            "end": 89
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[{():string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 89
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 11, end: 12
✖ The parser expected to find a '}' to match the '{' token here - start: 20, end: 21
✖ Expected a ')' to match the '(' token here - start: 22, end: 23
✖ Declaration or statement expected - start: 29, end: 30
✖ Declaration or statement expected - start: 30, end: 31
✖ An member access expression should take an argument. - start: 31, end: 35
✖ Identifier expected - start: 34, end: 35
✖ An member access expression should take an argument. - start: 31, end: 37
✖ Identifier expected - start: 36, end: 37
✖ Expected a ')' to match the '(' token here - start: 59, end: 62
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 39, end: 62
✖ Expected a `;` - start: 64, end: 65
✖ Declaration or statement expected - start: 65, end: 68
✖ Expected a `;` - start: 70, end: 71
✖ Declaration or statement expected - start: 71, end: 74
✖ Expected a `;` - start: 76, end: 77
✖ Declaration or statement expected - start: 77, end: 80
✖ Expected a `;` - start: 82, end: 83
✖ Declaration or statement expected - start: 83, end: 86

```

