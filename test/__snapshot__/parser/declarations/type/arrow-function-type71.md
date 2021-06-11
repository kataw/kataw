# Kataw parser test case

## Input

`````js
type a = (((symbol[{a:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;

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
                    "end": 58
                },
                "flags": 32,
                "start": 11,
                "end": 58
            },
            "flags": 16,
            "start": 11,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 61,
                "end": 63
            },
            "flags": 16,
            "start": 61,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 67,
                "end": 69
            },
            "flags": 16,
            "start": 67,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 73,
                "end": 75
            },
            "flags": 16,
            "start": 73,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 79,
                "end": 81
            },
            "flags": 16,
            "start": 79,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 85,
                "end": 87
            },
            "flags": 16,
            "start": 85,
            "end": 88
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[{a:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;\n",
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
✖ An member access expression should take an argument. - start: 11, end: 32
✖ Identifier expected - start: 31, end: 32
✖ An member access expression should take an argument. - start: 11, end: 34
✖ Identifier expected - start: 33, end: 34
✖ An member access expression should take an argument. - start: 11, end: 36
✖ Identifier expected - start: 35, end: 36
✖ Expected a ')' to match the '(' token here - start: 58, end: 61
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 38, end: 61
✖ Expected a `;` - start: 63, end: 64
✖ Declaration or statement expected - start: 64, end: 67
✖ Expected a `;` - start: 69, end: 70
✖ Declaration or statement expected - start: 70, end: 73
✖ Expected a `;` - start: 75, end: 76
✖ Declaration or statement expected - start: 76, end: 79
✖ Expected a `;` - start: 81, end: 82
✖ Declaration or statement expected - start: 82, end: 85

```

