# Kataw parser test case

## Input

`````js
type a = (?!x) => T;
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
                    "kind": 134217970,
                    "nullableToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 10,
                        "end": 11
                    },
                    "type": {
                        "kind": 144,
                        "id": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 11,
                            "end": 11
                        },
                        "typeParameters": null,
                        "flags": 2097152,
                        "start": 11,
                        "end": 11
                    },
                    "flags": 2097152,
                    "start": 10,
                    "end": 11
                },
                "flags": 2097152,
                "start": 8,
                "end": 11
            },
            "flags": 2097152,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 64,
                    "start": 11,
                    "end": 12
                },
                "operand": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 12,
                    "end": 13
                },
                "flags": 32,
                "start": 11,
                "end": 13
            },
            "flags": 16,
            "start": 11,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 17,
                "end": 19
            },
            "flags": 16,
            "start": 17,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "type a = (?!x) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 11, end: 12
✖ Expected a `;` - start: 13, end: 14
✖ Declaration or statement expected - start: 14, end: 17

```

