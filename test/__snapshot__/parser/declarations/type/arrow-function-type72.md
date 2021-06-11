# Kataw parser test case

## Input

`````js
type a = (((symbol[{a():string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;
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
                    "end": 60
                },
                "flags": 32,
                "start": 11,
                "end": 60
            },
            "flags": 16,
            "start": 11,
            "end": 60
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
            "end": 77
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 81,
                "end": 83
            },
            "flags": 16,
            "start": 81,
            "end": 83
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
            "end": 90
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[{a():string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 90
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 11, end: 12
✖ Missing an opening brace - '{ - start: 30, end: 31
✖ An member access expression should take an argument. - start: 11, end: 34
✖ Identifier expected - start: 33, end: 34
✖ An member access expression should take an argument. - start: 11, end: 36
✖ Identifier expected - start: 35, end: 36
✖ An member access expression should take an argument. - start: 11, end: 38
✖ Identifier expected - start: 37, end: 38
✖ Expected a ')' to match the '(' token here - start: 60, end: 63
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 40, end: 63
✖ Expected a `;` - start: 65, end: 66
✖ Declaration or statement expected - start: 66, end: 69
✖ Expected a `;` - start: 71, end: 72
✖ Declaration or statement expected - start: 72, end: 75
✖ Expected a `;` - start: 77, end: 78
✖ Declaration or statement expected - start: 78, end: 81
✖ Expected a `;` - start: 83, end: 84
✖ Declaration or statement expected - start: 84, end: 87

```

