# Kataw parser test case

## Input

`````js
type a = (((symbol[][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;
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
                    "end": 48
                },
                "flags": 32,
                "start": 11,
                "end": 48
            },
            "flags": 16,
            "start": 11,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 51,
                "end": 53
            },
            "flags": 16,
            "start": 51,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 57,
                "end": 59
            },
            "flags": 16,
            "start": 57,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 63,
                "end": 65
            },
            "flags": 16,
            "start": 63,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 69,
                "end": 71
            },
            "flags": 16,
            "start": 69,
            "end": 71
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 75,
                "end": 77
            },
            "flags": 16,
            "start": 75,
            "end": 78
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 78
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 11, end: 12
✖ An member access expression should take an argument. - start: 11, end: 20
✖ Identifier expected - start: 19, end: 20
✖ An member access expression should take an argument. - start: 11, end: 22
✖ Identifier expected - start: 21, end: 22
✖ An member access expression should take an argument. - start: 11, end: 24
✖ Identifier expected - start: 23, end: 24
✖ An member access expression should take an argument. - start: 11, end: 26
✖ Identifier expected - start: 25, end: 26
✖ Expected a ')' to match the '(' token here - start: 48, end: 51
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 28, end: 51
✖ Expected a `;` - start: 53, end: 54
✖ Declaration or statement expected - start: 54, end: 57
✖ Expected a `;` - start: 59, end: 60
✖ Declaration or statement expected - start: 60, end: 63
✖ Expected a `;` - start: 65, end: 66
✖ Declaration or statement expected - start: 66, end: 69
✖ Expected a `;` - start: 71, end: 72
✖ Declaration or statement expected - start: 72, end: 75

```

