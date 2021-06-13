# Kataw parser test case

## Input

`````js
type a = (((x | ((y & [(x => T)]) => T) => T) => T) => T) => T;
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
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 260,
                "type": {
                    "kind": 260,
                    "type": {
                        "kind": 137,
                        "types": [
                            {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 13
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 11,
                                "end": 13
                            },
                            {
                                "kind": 260,
                                "type": {
                                    "kind": 138,
                                    "types": [
                                        {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 18,
                                                "end": 19
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 15,
                                            "end": 19
                                        },
                                        {
                                            "kind": 147,
                                            "elementTypes": [
                                                {
                                                    "kind": 261,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 25,
                                                        "end": 28
                                                    },
                                                    "parameters": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 24,
                                                            "end": 25
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 23,
                                                        "end": 25
                                                    },
                                                    "returnType": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 28,
                                                            "end": 30
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 28,
                                                        "end": 30
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 23,
                                                    "end": 30
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 21,
                                            "end": 30
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 19,
                                    "end": 30
                                },
                                "flags": 2097152,
                                "start": 15,
                                "end": 31
                            }
                        ],
                        "flags": 2097152,
                        "start": 13,
                        "end": 31
                    },
                    "flags": 2097152,
                    "start": 11,
                    "end": 31
                },
                "flags": 2097152,
                "start": 8,
                "end": 31
            },
            "flags": 2097152,
            "start": 0,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 36,
                "end": 38
            },
            "flags": 16,
            "start": 36,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 42,
                "end": 44
            },
            "flags": 16,
            "start": 42,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 48,
                "end": 50
            },
            "flags": 16,
            "start": 48,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 54,
                "end": 56
            },
            "flags": 16,
            "start": 54,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 60,
                "end": 62
            },
            "flags": 16,
            "start": 60,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "type a = (((x | ((y & [(x => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 26, end: 28
✖ ',' expected - start: 30, end: 31
✖ Expected a ')' to match the '(' token here - start: 31, end: 32
✖ Declaration or statement expected - start: 32, end: 33
✖ Declaration or statement expected - start: 33, end: 36
✖ Expected a `;` - start: 38, end: 39
✖ Declaration or statement expected - start: 39, end: 42
✖ Expected a `;` - start: 44, end: 45
✖ Declaration or statement expected - start: 45, end: 48
✖ Expected a `;` - start: 50, end: 51
✖ Declaration or statement expected - start: 51, end: 54
✖ Expected a `;` - start: 56, end: 57
✖ Declaration or statement expected - start: 57, end: 60

```

